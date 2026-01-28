import { SiteHeader } from "@/components/marketing/site-header";
import { SiteFooter } from "@/components/marketing/site-footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Tally Budget protects your data, what information is stored locally, and when cloud sync is used.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <SiteHeader />

      <main className="flex-1 py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4">
          <article className="text-sm leading-relaxed text-gray-800">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-4">
              We have updated our Privacy Policy as of November 23, 2025.
            </p>

            {/* Header */}
            <section className="space-y-3">
              <h1 className="text-2xl font-bold text-gray-900">
                Tally Budget Privacy Policy
              </h1>
            </section>

            {/* Introduction */}
            <section className="mt-8 space-y-3">
              <h2 className="text-lg font-semibold text-gray-900">
                Introduction
              </h2>
              <p>
                Welcome to Tally Budget, a service provided by Tally Budget LLC{" "}
                (&quot;Tally Budget,&quot; &quot;we,&quot; &quot;our,&quot; or
                &quot;us&quot;), your premier budgeting tool.
              </p>
              <p>
                Your privacy is important to us. This Privacy Policy explains
                how we collect, store, use, and disclose your information when
                you use services provided by Tally Budget. For users in the
                European Economic Area (EEA), United Kingdom (UK), and
                Switzerland, this Privacy Policy also explains your rights
                under the General Data Protection Regulation (GDPR) and UK GDPR.
              </p>
              <p>This Privacy Policy explains the following:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Our principles with respect to your information and your
                  privacy
                </li>
                <li>
                  The information we collect about you &amp; how we use your
                  information
                </li>
                <li>Where your information is stored</li>
                <li>How we share your information</li>
                <li>How we use cookies and similar technology</li>
                <li>Your choices with respect to your information</li>
                <li>How to contact us regarding privacy issues</li>
              </ul>
              <p>
                By using any of our services, and in particular by registering a
                Tally Budget account, you acknowledge that you have read,
                understood, and agree to be bound by this Privacy Policy. For
                users outside the EEA, UK, and Switzerland, by using our
                services you consent to the collection, use, and disclosure of
                your information in the manner set out in this Privacy Policy.
                However, certain U.S. state laws may provide you with additional
                rights as described in the &quot;Choice and Control&quot;
                section below. For users in the EEA, UK, and Switzerland, we
                process your personal data based on the legal bases described in
                this Privacy Policy, including your consent where required,
                performance of our contract with you, compliance with legal
                obligations, and our legitimate interests. Please take some
                time to read this Privacy Policy and make sure you are happy
                with our use and disclosure of your information.
              </p>
              <p>
                If you do not agree to any of the provisions of this Privacy
                Policy, you should not use the Tally Budget services. If you
                have any questions or concerns, you can contact us at{" "}
                <a
                  className="underline"
                  href="mailto:privacy@tallybudget.com"
                >
                  privacy@tallybudget.com
                </a>
                .
              </p>
              <p>
                We may occasionally update this Privacy Policy. When we do so,
                we will also revise the effective date at the top of this page.
                Any changes to our Privacy Policy will be available here so
                that Tally Budget users are always aware of what information we
                gather, and how we might use and share that information. Please
                be sure to check back here from time to time to ensure that you
                are aware of any changes to this Privacy Policy. Any material
                changes to this Privacy Policy will be communicated to you by
                email to the address associated with your account and by a
                notification within your account dashboard and/or by posting a
                prominent notice on our website at least thirty (30) days prior
                to the effective date of such changes. For users in California,
                we will provide notice as required by California Civil Code
                Section 1798.185. Your continued use of the services after the
                effective date of the revised Privacy Policy constitutes your
                acceptance of the changes.
              </p>
            </section>

            {/* Our Principles */}
            <section className="mt-8 space-y-3">
              <h2 className="text-lg font-semibold text-gray-900">
                Our Principles
              </h2>
              <p>
                Our approach to data protection and privacy is built on two
                simple principles:
              </p>
              <ol className="list-decimal list-inside space-y-1">
                <li>
                  <strong>Transparency.</strong> You should know what
                  information we collect and what we do with that information.
                </li>
                <li>
                  <strong>Control.</strong> You should have control over your
                  information. This Privacy Policy explains how we use and
                  share your information.
                </li>
              </ol>
            </section>

            {/* Not For Use By Children */}
            <section className="mt-8 space-y-3">
              <h2 className="text-lg font-semibold text-gray-900">
                Not For Use By Children
              </h2>
              <p>
                Tally Budget is not intended for use by children. Anyone under
                the age of 13 (or 16 in the EEA, UK, and Switzerland where
                required by local law) is not permitted to use the services and
                must not attempt to register an account or submit any personal
                information to us. We do not knowingly collect any personal
                information from any person who is under the age of 13 or allow
                them to register an account. Our services are not directed to
                children under 13, and we do not knowingly collect personal
                information from children under 13 as required by the
                Children&apos;s Online Privacy Protection Act (COPPA). If it
                comes to our attention that we have collected personal data
                from a person under the age of 13, we will delete this
                information as quickly as possible. If you have reason to
                believe that we may have collected any such personal data,
                please notify us immediately.
              </p>
            </section>

            {/* Information We Collect About You; How That Information Is Used */}
            <section className="mt-8 space-y-3">
              <h2 className="text-lg font-semibold text-gray-900">
                Information We Collect About You; How That Information Is Used
              </h2>
              <p>
                If you register a Tally Budget account, you will provide us with
                certain information. Portions of this information will be kept
                private, while some information will be shared with third
                parties. Tally Budget works with several third party service
                providers and affiliates that will have access to some of your
                private information (collectively &quot;Service Providers&quot;).
                These Service Providers include financial institutions that are
                responsible for processing membership fees and other charges.
              </p>
              <p>
                We maintain written agreements with all Service Providers that
                require them to maintain the confidentiality and security of
                your information and to use your information only for the
                purposes for which it was disclosed to them.
              </p>
              <p>
                For users in the EEA, UK, and Switzerland, we ensure that all
                Service Providers either (i) are located in jurisdictions
                recognized as providing adequate data protection, (ii) have
                entered into Standard Contractual Clauses approved by the
                European Commission, or (iii) have implemented other
                appropriate safeguards recognized under GDPR and UK GDPR for
                international data transfers.
              </p>

              <h3 className="text-base font-semibold text-gray-900">
                Information Provided By You
              </h3>
              <p>
                Tally Budget collects certain information from you to enable
                Tally Budget to operate and maintain the service, communicate
                with you, and offer Tally Budget services. We collect only the
                personal information that is necessary for these purposes.
              </p>
              <p>
                For users in the EEA, UK, and Switzerland, the legal bases for
                processing this information are: (i) performance of our contract
                with you (for account creation and service provision); (ii)
                compliance with legal obligations (for age verification and
                financial record-keeping); and (iii) our legitimate interests in
                providing and improving our services, preventing fraud, and
                ensuring security. This information includes, but is not limited
                to:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>your name</li>
                <li>your user name</li>
                <li>your email address</li>
                <li>your birthdate</li>
                <li>a user-specified password</li>
              </ul>
              <p>
                Tally Budget will only use your email addresses to verify
                enrollment or for customer service. Tally Budget may also use
                your email address to send news regarding Tally Budget and our
                services; however, you may opt-out from receiving such
                information.
              </p>

              <h3 className="text-base font-semibold text-gray-900">
                Information We Collect Automatically
              </h3>
              <p>
                There is certain information that we collect automatically as
                the result of your use of the services or through the use of
                web analytics services. This information is used by Tally Budget
                to improve our services, by determining which aspects of and to
                what degree the Tally Budget service is used. This information
                includes:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  the Internet Protocol (IP) address of the device from which
                  you access the service (this can sometimes be used to derive
                  the country or city from which you are accessing the service);
                </li>
                <li>
                  the site that you visited immediately prior to visiting or
                  using the service;
                </li>
                <li>
                  the specific actions that you take on the service, including
                  the pages that you visit, links you click on, and searches you
                  perform;
                </li>
                <li>any search terms that you may enter on the service;</li>
                <li>the time, frequency and duration of your visits to the service;</li>
                <li>your browser type and operating system;</li>
                <li>
                  the nature of the device from which you are accessing the
                  service, for example, whether you are accessing the service
                  from a personal computer or from a mobile device;
                </li>
                <li>information collected through cookies and similar technology;</li>
                <li>
                  information regarding your interaction with email messages,
                  for example, whether you opened, clicked on, or forwarded the
                  email message.
                </li>
              </ul>
            </section>

            {/* Data Retention */}
            <section className="mt-8 space-y-3">
              <h2 className="text-lg font-semibold text-gray-900">
                Data Retention
              </h2>
              <p>
                Tally Budget LLC retains your personal information only for as
                long as it is necessary to fulfill the purposes outlined in this
                Privacy Policy or as required by applicable law. We will retain
                and use your personal information to the extent necessary to
                comply with our legal obligations (for example, if we are
                required to retain your data to comply with applicable tax/revenue
                laws), resolve disputes, and enforce our legal agreements and
                policies.
              </p>
              <p>
                For users in the EEA, UK, and Switzerland, we apply the
                following specific retention periods: account information is
                retained for the duration of your account plus seven (7) years
                to comply with financial record-keeping requirements;
                automatically collected information is retained for twenty-four
                (24) months unless a longer period is required by law; and
                marketing consent records are retained for three (3) years after
                withdrawal of consent.
              </p>
              <p>
                Information collected automatically, as outlined in the
                &quot;Information We Collect Automatically&quot; section, is
                retained for a period necessary to provide the services, improve
                our offerings, and maintain the security and operation of our
                platform. Aggregated and anonymized data, which does not
                identify any individual, may be retained indefinitely for
                analysis and research purposes.
              </p>
            </section>

            {/* Where Your Information is Stored */}
            <section className="mt-8 space-y-3">
              <h2 className="text-lg font-semibold text-gray-900">
                Where Your Information is Stored
              </h2>
              <p>
                When you register a Tally Budget account, your information will
                be stored on Google Firebase servers located in the United
                States. For users in the EEA, UK, and Switzerland, please note
                that the United States has not been recognized by the European
                Commission as providing an adequate level of data protection.
                However, we have implemented appropriate safeguards for the
                transfer of your personal data, including Standard Contractual
                Clauses approved by the European Commission and supplementary
                measures to ensure the security of your data. You have the
                right to request a copy of these safeguards by contacting us at{" "}
                <a
                  className="underline"
                  href="mailto:privacy@tallybudget.com"
                >
                  privacy@tallybudget.com
                </a>
                .
              </p>
              <p>
                Your information is encrypted both in transit and at rest using
                industry-standard encryption protocols. Access to your
                information is restricted to authorized personnel only and is
                protected by technical and organizational security measures
                designed to prevent unauthorized access, disclosure, alteration,
                or destruction of your information.
              </p>
            </section>

            {/* Sharing of Your Information */}
            <section className="mt-8 space-y-3">
              <h2 className="text-lg font-semibold text-gray-900">
                Sharing of Your Information
              </h2>
              <p>
                We will not sell your personal information to third parties. We
                will not share your information with any third party, except as
                described in this Privacy Policy. There are circumstances where
                we may need to share some of the information we collect about
                you or which you provide to us; these circumstances are as
                follows:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <strong>Service providers:</strong> We may use certain
                  reputable third parties to provide us with certain specialized
                  services related to the service. These third parties will have
                  access to certain information about you, but only where this
                  is necessary in order for those third parties to provide their
                  services to us. Where we transfer personal data to these third
                  parties, we ask and require these third parties to implement
                  appropriate organizational and technical security measures to
                  protect against unauthorized disclosure of personal data, and
                  only to process personal data in accordance with our
                  instructions and to the extent necessary to provide their
                  services to us.
                </li>
                <li>
                  <strong>As aggregated data:</strong> We may aggregate your
                  personal data with similar data relating to other users of the
                  service in order to create statistical information regarding
                  the service and its use, which we may then share with third
                  parties or make publicly available. However, none of this
                  information would include any email address or other contact
                  information, or anything that could be used to identify you
                  individually, either online or in real life without your
                  permission.
                </li>
                <li>
                  <strong>If required by law:</strong> We will disclose your
                  information if we believe in good faith that we are permitted
                  or required to do so by law, including in response to a court
                  order, subpoena or other legal demand or request.
                </li>
                <li>
                  <strong>To protect our interests:</strong> We may disclose
                  your information if we feel this is necessary in order to
                  protect or defend our legitimate rights and interests, or
                  those of our users, employees, directors or shareholders,
                  and/or to ensure the safety and security of the service and/or
                  the Tally Budget community.
                </li>
                <li>
                  <strong>In the context of a business transfer:</strong> We may
                  transfer your information to any person or company that
                  acquires all or substantially all of the assets or business of
                  Tally Budget, or on a merger of our business, or in the event
                  of our insolvency.
                </li>
              </ul>
            </section>

            {/* Cookies and Similar Technology */}
            <section className="mt-8 space-y-3">
              <h2 className="text-lg font-semibold text-gray-900">
                Cookies and Similar Technology
              </h2>
              <p>
                In common with most websites, we use cookies and other standard
                Internet technologies to help us improve the Website and the
                services we provide. Tally Budget may store data in the form of
                a &quot;cookie&quot; or similar file that is automatically
                downloaded to your computer to allow us to customize your
                website experience to match your interests, based at least in
                part on your past visits and facilitate login and security
                features. For more information about how we use cookies on the
                service, please see our Cookie Policy.
              </p>
              <p>
                If you do not want to accept cookies from this web site or allow
                Tally Budget to store information relating to such cookies,
                check your internet browser&apos;s instructions and adjust your
                browser settings accordingly. Most browsers can be configured to
                notify you when cookies arrive and ask your approval to accept
                them, or to refuse cookies outright. Most browsers can also
                delete cookies you may have accepted in the past.
              </p>
              <p>
                Please note, however, that if you delete cookies or refuse to
                accept them, you might not be able to use all of the features we
                offer, you may not be able to store your preferences, and some
                of our pages might not display properly.
              </p>
              <p>
                If you choose to use the service without blocking or disabling
                these cookies, you consent to our use of these technologies and
                to our use (in accordance with this Privacy Policy) of any
                personal data that we collect using these technologies.
              </p>
            </section>

            {/* Choice and Control */}
            <section className="mt-8 space-y-3">
              <h2 className="text-lg font-semibold text-gray-900">
                Choice and Control
              </h2>
              <p>
                It is not necessary for you to provide us with any personal
                information in order to visit and learn about the services,
                although certain information will be collected automatically by
                virtue of your visit (as described above). However, if you do
                decide to register a Tally Budget account, you can control your
                information in the following ways.
              </p>
              <p>
                Depending on your state of residence, you may have additional
                rights under applicable state privacy laws, including the right
                to access, correct, delete, or port your personal information,
                and the right to opt-out of certain data processing activities.
                To exercise these rights, please contact us at{" "}
                <a
                  className="underline"
                  href="mailto:privacy@tallybudget.com"
                >
                  privacy@tallybudget.com
                </a>
                .
              </p>

              <h3 className="text-base font-semibold text-gray-900">
                For users in the EEA, UK, and Switzerland
              </h3>
              <p>
                You have the following rights under GDPR and UK GDPR:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <strong>Right of access:</strong> You have the right to obtain
                  confirmation as to whether we process your personal data and,
                  if so, to request a copy of that personal data along with
                  certain information about the processing.
                </li>
                <li>
                  <strong>Right to rectification:</strong> You have the right to
                  request correction of inaccurate personal data and to have
                  incomplete personal data completed.
                </li>
                <li>
                  <strong>Right to erasure (right to be forgotten):</strong> You
                  have the right to request deletion of your personal data in
                  certain circumstances, including where the data is no longer
                  necessary for the purposes for which it was collected, where
                  you withdraw consent, or where you object to the processing.
                </li>
                <li>
                  <strong>Right to restriction of processing:</strong> You have
                  the right to request that we restrict processing of your
                  personal data in certain circumstances, including where you
                  contest the accuracy of the data or object to processing.
                </li>
                <li>
                  <strong>Right to data portability:</strong> You have the right
                  to receive your personal data in a structured, commonly used,
                  and machine-readable format and to transmit that data to
                  another controller.
                </li>
                <li>
                  <strong>Right to object:</strong> You have the right to object
                  to processing of your personal data based on legitimate
                  interests or for direct marketing purposes.
                </li>
                <li>
                  <strong>Right to withdraw consent:</strong> Where processing
                  is based on consent, you have the right to withdraw that
                  consent at any time, without affecting the lawfulness of
                  processing based on consent before its withdrawal.
                </li>
                <li>
                  <strong>Right to lodge a complaint:</strong> You have the
                  right to lodge a complaint with a supervisory authority, in
                  particular in the EU Member State or UK country of your
                  habitual residence, place of work, or place of the alleged
                  infringement.
                </li>
              </ul>
              <p>
                To exercise any of these rights, please contact us at{" "}
                <a
                  className="underline"
                  href="mailto:privacy@tallybudget.com"
                >
                  privacy@tallybudget.com
                </a>
                . We will respond to your request within one (1) month, although
                this period may be extended by two (2) additional months where
                necessary, taking into account the complexity and number of
                requests. We will inform you of any such extension within one
                (1) month of receipt of your request, together with the reasons
                for the delay.
              </p>
            </section>

            {/* Email Preferences */}
            <section className="mt-8 space-y-3">
              <h2 className="text-lg font-semibold text-gray-900">
                Email Preferences
              </h2>
              <p>
                Tally Budget will only use your email addresses to verify
                enrollment or for customer service. Tally Budget may also use
                your email address to send news regarding Tally Budget and our
                services; however, you may opt-out from receiving such
                information.
              </p>
            </section>

            {/* Deleting Your Account */}
            <section className="mt-8 space-y-3">
              <h2 className="text-lg font-semibold text-gray-900">
                Deleting Your Account
              </h2>
              <p>
                You can delete your account at any time according to the Tally
                Budget Terms and Conditions. Please bear in mind that, if you
                delete your account, all data associated with your account,
                including the data that you have uploaded, will be deleted and
                may not be recoverable. You are therefore advised to copy or
                back up all content uploaded to your account before you delete
                your account.
              </p>
              <p>
                If you ask us to delete your account, we will do so within
                forty-five (45) days of receiving your verifiable request, but
                we may need to retain some of your personal data in order to
                satisfy our legal obligations, resolve disputes, enforce our
                agreements, or where we have a legitimate reason for doing so.
                We will inform you of any such retention and the reasons for it.
              </p>
            </section>

            {/* How To Contact Us */}
            <section className="mt-8 space-y-3">
              <h2 className="text-lg font-semibold text-gray-900">
                How To Contact Us
              </h2>
              <p>
                If you have questions about this Privacy Policy, want to suggest
                changes to this Privacy Policy, want to know what information we
                store about you, or wish to exercise any of your privacy rights
                under applicable law, please contact us by email at{" "}
                <a
                  className="underline"
                  href="mailto:privacy@tallybudget.com"
                >
                  privacy@tallybudget.com
                </a>
                , or write to us at:
              </p>
              
                <p className="text-sm text-gray-800">
  <span className="block font-medium text-gray-900">
    Tally Budget LLC
  </span>
  <span className="block">
    801 W Verona Avenue, STE B #114
  </span>
  <span className="block">
    Verona, WI 53593
  </span>
</p>

              
            </section>
          </article>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
