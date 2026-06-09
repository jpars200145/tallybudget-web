import type { NextConfig } from "next";

const PLAY_STORE_PACKAGE = "com.tallybudget.app";

function playStoreUrl(referrer: string) {
  return `https://play.google.com/store/apps/details?id=${PLAY_STORE_PACKAGE}&referrer=${encodeURIComponent(
    encodeURIComponent(referrer),
  )}`;
}

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/go/tiktok",
        destination: playStoreUrl(
          "utm_source=tiktok&utm_medium=organic_social&utm_campaign=privacy_budgeting_launch&utm_content=bio",
        ),
        permanent: false,
      },
      {
        source: "/go/instagram",
        destination: playStoreUrl(
          "utm_source=instagram&utm_medium=organic_social&utm_campaign=privacy_budgeting_launch&utm_content=bio",
        ),
        permanent: false,
      },
      {
        source: "/go/youtube",
        destination: playStoreUrl(
          "utm_source=youtube&utm_medium=organic_social&utm_campaign=privacy_budgeting_launch&utm_content=description",
        ),
        permanent: false,
      },
      {
        source: "/go/reddit",
        destination:
          "https://www.tallybudget.com/?utm_source=reddit&utm_medium=community_post&utm_campaign=privacy_budgeting_launch&utm_content=feedback_post",
        permanent: false,
      },
      {
        source: "/go/linkedin",
        destination:
          "https://www.tallybudget.com/?utm_source=linkedin&utm_medium=organic_social&utm_campaign=privacy_budgeting_launch&utm_content=founder_story",
        permanent: false,
      },
      {
        source: "/go/play-store",
        destination: playStoreUrl(
          "utm_source=website&utm_medium=owned_site&utm_campaign=privacy_budgeting_launch&utm_content=primary_cta",
        ),
        permanent: false,
      },
      {
        source: "/go/google-ads-privacy",
        destination: playStoreUrl(
          "utm_source=google_ads&utm_medium=paid_app_campaign&utm_campaign=android_install_test_001&utm_content=privacy_no_bank",
        ),
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
