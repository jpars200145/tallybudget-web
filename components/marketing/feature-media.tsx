"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type Slide = { src: string; alt?: string };

type FeatureMediaProps = {
  title: string;
  fallbackAlt: string;
  media: {
    type: "image" | "video";
    src: string;
    poster?: string;
    alt?: string;

    // Optional slideshow (backwards compatible)
    slides?: Slide[];

    // Slideshow options
    intervalMs?: number; // default 5000
    pauseOnHover?: boolean; // default true
    showControls?: boolean; // default true

    // In-view behavior
    playOnlyWhenVisible?: boolean; // default true
    visibleThreshold?: number; // default 0.35
    rootMargin?: string; // default "0px"

    pauseOnScroll?: boolean; // default true
    scrollPauseMs?: number; // default 180
  };
};

export function FeatureMedia({ title, fallbackAlt, media }: FeatureMediaProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const [videoFailed, setVideoFailed] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  // Slideshow state
  const [index, setIndex] = useState(0);
  const [hoverPaused, setHoverPaused] = useState(false);

  // External flags stored in refs (no render on change)
  const inViewRef = useRef(true); // default true, no effect-body setState
  const scrollPausedRef = useRef(false);

  // Single “gate tick” state to recompute interval gating when external refs change
  const [gateTick, setGateTick] = useState(0);

  const intervalRef = useRef<number | null>(null);
  const scrollTimerRef = useRef<number | null>(null);

  // Reduced motion subscription (setState happens in callback)
  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (!mq) return;
    const apply = () => setReduceMotion(mq.matches);
    apply();
    mq.addEventListener?.("change", apply);
    return () => mq.removeEventListener?.("change", apply);
  }, []);

  const slides = useMemo(() => {
    const s = media.slides ?? [];
    return s.length >= 2 ? s : [];
  }, [media.slides]);

  const isSlideshow = media.type === "image" && slides.length >= 2;
  const count = slides.length;

  // Clamp for rendering (no derived-state effect)
  const safeIndex = isSlideshow ? ((index % count) + count) % count : 0;

  const intervalMs = media.intervalMs ?? 5000;
  const pauseOnHover = media.pauseOnHover ?? true;
  const showControls = media.showControls ?? true;

  const playOnlyWhenVisible = media.playOnlyWhenVisible ?? true;
  const visibleThreshold = media.visibleThreshold ?? 0.35;
  const rootMargin = media.rootMargin ?? "0px";

  const pauseOnScroll = media.pauseOnScroll ?? true;
  const scrollPauseMs = media.scrollPauseMs ?? 180;

  // IntersectionObserver (only updates refs + gateTick in callback)
  useEffect(() => {
    if (!playOnlyWhenVisible) {
      // Don’t set state in effect body; just set ref.
      inViewRef.current = true;
      // No need to tick; default already “true”
      return;
    }

    const el = cardRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        const next =
          !!entry?.isIntersecting &&
          (entry.intersectionRatio ?? 0) >= visibleThreshold;

        if (inViewRef.current !== next) {
          inViewRef.current = next;
          setGateTick((t) => t + 1); // callback setState is OK
        }
      },
      { threshold: [0, visibleThreshold, 1], rootMargin }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [playOnlyWhenVisible, visibleThreshold, rootMargin]);

  // Pause on scroll (updates refs + gateTick in event callback)
  useEffect(() => {
    if (!pauseOnScroll || !isSlideshow) return;

    const onScroll = () => {
      if (!scrollPausedRef.current) {
        scrollPausedRef.current = true;
        setGateTick((t) => t + 1);
      }
      if (scrollTimerRef.current) window.clearTimeout(scrollTimerRef.current);
      scrollTimerRef.current = window.setTimeout(() => {
        scrollPausedRef.current = false;
        scrollTimerRef.current = null;
        setGateTick((t) => t + 1);
      }, scrollPauseMs);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (scrollTimerRef.current) window.clearTimeout(scrollTimerRef.current);
      scrollTimerRef.current = null;
      scrollPausedRef.current = false;
    };
  }, [pauseOnScroll, isSlideshow, scrollPauseMs]);

  const shouldShowImage = media.type === "image" || reduceMotion || videoFailed;

  const frameSrc = useMemo(() => {
    if (media.type === "image") {
      return isSlideshow ? slides[safeIndex]?.src : media.src;
    }
    return media.poster; // video fallback
  }, [media.type, media.src, media.poster, isSlideshow, slides, safeIndex]);

  const alt = useMemo(() => {
    if (isSlideshow) {
      return slides[safeIndex]?.alt ?? media.alt ?? fallbackAlt ?? title;
    }
    return media.alt ?? fallbackAlt ?? title;
  }, [isSlideshow, slides, safeIndex, media.alt, fallbackAlt, title]);

  const go = (next: number) => {
    if (!isSlideshow) return;
    setIndex(next);
  };

  // Auto-advance interval (gated by refs + state; no effect-body setState)
  useEffect(() => {
    // Clear prior interval
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    const canPlay =
      isSlideshow &&
      !reduceMotion &&
      inViewRef.current &&
      !scrollPausedRef.current &&
      !(pauseOnHover && hoverPaused) &&
      intervalMs > 0;

    if (!canPlay) return;

    intervalRef.current = window.setInterval(() => {
      setIndex((prev) => prev + 1); // timer callback setState is OK
    }, intervalMs);

    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
    // gateTick ensures we reevaluate when refs change
  }, [isSlideshow, reduceMotion, hoverPaused, intervalMs, pauseOnHover, gateTick]);

  return (
    <div className="mt-6 md:mt-0 flex justify-center">
      <div
        ref={cardRef}
        className="w-full max-w-xs rounded-3xl border border-gray-200 bg-white shadow-md overflow-hidden"
        onMouseEnter={pauseOnHover && isSlideshow ? () => setHoverPaused(true) : undefined}
        onMouseLeave={pauseOnHover && isSlideshow ? () => setHoverPaused(false) : undefined}
        onFocusCapture={isSlideshow ? () => setHoverPaused(true) : undefined}
        onBlurCapture={isSlideshow ? () => setHoverPaused(false) : undefined}
      >
        <div className="relative aspect-9/16 w-full">
          {shouldShowImage ? (
            frameSrc ? (
              <Image
                src={frameSrc}
                alt={alt}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 320px, 90vw"
                priority={false}
              />
            ) : (
              <div className="absolute inset-0 bg-gray-50" />
            )
          ) : (
            <video
              className="absolute inset-0 h-full w-full object-cover"
              muted
              loop
              playsInline
              preload="metadata"
              poster={media.poster}
              onError={() => setVideoFailed(true)}
              autoPlay
            >
              <source src={media.src} type="video/mp4" />
            </video>
          )}

          {isSlideshow && showControls && (
            <>
              <button
                type="button"
                onClick={() => go(index - 1)}
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/45 px-2.5 py-1.5 text-sm font-semibold text-white hover:bg-black/55 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00C853]"
                aria-label="Previous screenshot"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={() => go(index + 1)}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/45 px-2.5 py-1.5 text-sm font-semibold text-white hover:bg-black/55 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00C853]"
                aria-label="Next screenshot"
              >
                ›
              </button>

              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setIndex(i)}
                    className={[
                      "h-2 w-2 rounded-full transition",
                      i === safeIndex ? "bg-[#00C853]" : "bg-white/70 hover:bg-white",
                    ].join(" ")}
                    aria-label={`Go to screenshot ${i + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
