
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | NajmX",

  description:
    "Read the NajmX Privacy Policy to learn how we collect, use, store, protect, and handle information submitted through our website and inquiries.",

  alternates: {
    canonical: "https://najmx.net/legal/privacy-policy",
  },

  openGraph: {
    title: "Privacy Policy | NajmX",
    description:
      "Review the NajmX Privacy Policy covering information collected through the website, inquiries, forms, attribution, storage, and data handling.",
    url: "https://najmx.net/legal/privacy-policy",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#070B13] text-[#F3F5F7]">
      <section className="mx-auto max-w-4xl px-6 pb-20 pt-28 sm:px-8 lg:pb-24 lg:pt-36">
        {/* Header */}
        <div className="mb-12 border-b border-[#202B3D] pb-10">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-[#B8944A]">
            Legal
          </p>

          <h1 className="text-4xl font-semibold leading-[1.08] tracking-[-0.015em] text-[#F3F5F7] sm:text-5xl">
            Privacy Policy
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#AEB6C2]">
            This policy explains how NajmX LLC handles information collected
            through this website and the inquiries you send us.
          </p>

          <p className="mt-5 text-sm text-[#6F7B8B]">
            Effective date: July 15, 2026
          </p>

          <p className="mt-2 text-sm text-[#6F7B8B]">
            NajmX LLC is registered in Wyoming, United States.
          </p>
        </div>

        {/* Policy */}
        <div className="space-y-10 text-[#AEB6C2]">
          <section>
            <h2 className="text-xl font-semibold leading-7 text-[#F3F5F7]">
              Information We Collect
            </h2>

            <p className="mt-3 leading-7">
              When you submit a contact, consultation, or service inquiry,
              NajmX may collect information such as your name, company, email
              address, phone number, service interest, number of users or
              agents, message details, consent confirmation, and related
              follow-up information.
            </p>

            <p className="mt-3 leading-7">
              The website may also collect basic technical information
              associated with a submission, such as IP address, browser
              information, landing page, referrer, and campaign parameters
              when those values are available.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold leading-7 text-[#F3F5F7]">
              Session Attribution
            </h2>

            <p className="mt-3 leading-7">
              The website may store basic attribution information in browser
              session storage to help us understand which pages or campaigns
              lead to inquiries.
            </p>

            <p className="mt-3 leading-7">
              This information may be used to populate related fields on
              inquiry forms and is submitted when you send a request.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold leading-7 text-[#F3F5F7]">
              How We Use Information
            </h2>

            <p className="mt-3 leading-7">
              We use submitted information to respond to inquiries, provide
              requested information, understand service requirements, handle
              sales or support follow-up, improve website content, and maintain
              appropriate business records.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold leading-7 text-[#F3F5F7]">
              How Information Is Stored
            </h2>

            <p className="mt-3 leading-7">
              Website inquiries may be stored in NajmX systems and may be sent
              to authorized team members by email or other business
              communication systems.
            </p>

            <p className="mt-3 leading-7">
              Access to inquiry information is limited to authorized people who
              need it to respond to requests, provide services, or perform
              related business activities.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold leading-7 text-[#F3F5F7]">
              How Long We Keep Information
            </h2>

            <p className="mt-3 leading-7">
              We generally retain website inquiry records for as long as
              reasonably necessary to manage follow-up and maintain business
              records.
            </p>

            <p className="mt-3 leading-7">
              You may contact us to request review, correction, or deletion of
              your information, subject to applicable legal, security, and
              business record requirements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold leading-7 text-[#F3F5F7]">
              Sharing
            </h2>

            <p className="mt-3 leading-7">
              NajmX does not sell website inquiry information.
            </p>

            <p className="mt-3 leading-7">
              Information may be shared with service providers that help
              operate our website, email delivery, hosting, security, analytics,
              or customer follow-up systems when reasonably necessary for those
              purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold leading-7 text-[#F3F5F7]">
              Your Choices
            </h2>

            <p className="mt-3 leading-7">
              You may choose not to submit information through our contact or
              inquiry forms.
            </p>

            <p className="mt-3 leading-7">
              You may also contact us to request review, correction, or deletion
              of information submitted through the website, subject to
              applicable legal, security, and business record requirements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold leading-7 text-[#F3F5F7]">
              Data Security
            </h2>

            <p className="mt-3 leading-7">
              NajmX applies reasonable administrative and technical safeguards
              designed to protect submitted information.
            </p>

            <p className="mt-3 leading-7">
              However, no website, email system, or method of electronic
              transmission can be guaranteed to be completely secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold leading-7 text-[#F3F5F7]">
              Policy Updates
            </h2>

            <p className="mt-3 leading-7">
              We may update this Privacy Policy when our website or
              information-handling practices change. The effective date above
              identifies when the current version took effect.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold leading-7 text-[#F3F5F7]">
              Contact
            </h2>

            <p className="mt-3 leading-7">
              For privacy questions or requests regarding your information,
              please contact us at{" "}
              <a
                href="mailto:info@najmx.net"
                className="text-[#D0AE69] transition-colors duration-200 hover:text-[#E5C989]"
              >
                info@najmx.net
              </a>{" "}
              or use our{" "}
              <a
                href="/contact"
                className="text-[#D0AE69] transition-colors duration-200 hover:text-[#E5C989]"
              >
                Contact page
              </a>
              .
            </p>
          </section>
        </div>

        {/* Footer note */}
        <div className="mt-14 border-t border-[#202B3D] pt-8">
          <p className="text-sm leading-6 text-[#6F7B8B]">
            This Privacy Policy applies to information collected through the
            NajmX website and related inquiries.
          </p>
        </div>
      </section>
    </main>
  );
}
