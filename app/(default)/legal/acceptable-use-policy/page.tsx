
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acceptable Use Policy | NajmX",

  description:
    "NajmX Acceptable Use Policy covering responsible use of calling, VoIP, DID, dialer, and telecommunications services.",

  alternates: {
    canonical: "https://najmx.net/legal/acceptable-use-policy",
  },

  openGraph: {
    title: "Acceptable Use Policy | NajmX",
    description:
      "Review the NajmX Acceptable Use Policy for responsible use of calling, VoIP, DID, dialer, and telecommunications services.",
    url: "https://najmx.net/legal/acceptable-use-policy",
    type: "website",
  },
};

export default function AcceptableUsePolicyPage() {
  return (
    <main className="bg-[#070B13] text-[#F3F5F7]">
      <section className="mx-auto max-w-4xl px-6 pb-20 pt-28 sm:px-8 lg:pb-24 lg:pt-36">
        {/* Header */}
        <div className="mb-12 border-b border-[#202B3D] pb-10">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-[#B8944A]">
            Legal
          </p>

          <h1 className="text-4xl font-semibold leading-[1.08] tracking-[-0.015em] text-[#F3F5F7] sm:text-5xl">
            Acceptable Use Policy
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#AEB6C2]">
            This policy outlines acceptable use expectations for NajmX
            services and helps protect our customers, network, and
            communications infrastructure.
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
              Responsible Use
            </h2>

            <p className="mt-3 leading-7">
              NajmX services are provided for legitimate business
              communications and must be used lawfully, responsibly, and in
              accordance with applicable laws and regulations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold leading-7 text-[#F3F5F7]">
              Calling & Telemarketing
            </h2>

            <p className="mt-3 leading-7">
              Customers are responsible for ensuring that outbound calling,
              telemarketing, sales, and automated calling activities comply
              with applicable laws and regulations, including consent,
              Do-Not-Call, caller disclosure, and telemarketing requirements.
            </p>

            <p className="mt-3 leading-7">
              Customers are responsible for their calling lists, lead sources,
              campaign content, required consents, and legally required
              records.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold leading-7 text-[#F3F5F7]">
              Customer Data & Lead Lists
            </h2>

            <p className="mt-3 leading-7">
              Customers must use calling data and lead lists obtained from
              lawful and authorized sources.
            </p>

            <p className="mt-3 leading-7">
              Customers are responsible for screening their data against
              applicable Do-Not-Call, suppression, and other required lists
              before dialing.
            </p>

            <p className="mt-3 leading-7">
              Where consent is required, customers must obtain, maintain, and
              be able to provide proof of that consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold leading-7 text-[#F3F5F7]">
              Auto-Dialing & Automated Calling
            </h2>

            <p className="mt-3 leading-7">
              Customers using predictive dialers, automatic dialing systems,
              prerecorded messages, artificial or automated voice technologies,
              or similar features must comply with all applicable requirements,
              including consent, disclosure, and calling restrictions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold leading-7 text-[#F3F5F7]">
              Caller ID & Number Use
            </h2>

            <p className="mt-3 leading-7">
              Customers must not use misleading, fraudulent, manipulated, or
              unauthorized Caller ID information.
            </p>

            <p className="mt-3 leading-7">
              Customers may only use telephone numbers and DIDs provided or
              authorized by NajmX unless expressly approved otherwise.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold leading-7 text-[#F3F5F7]">
              Prohibited Activity
            </h2>

            <p className="mt-3 leading-7">
              NajmX services may not be used for unlawful, fraudulent, abusive,
              or deceptive activities, or for activity that may reasonably
              expose NajmX, its customers, carriers, or network to regulatory,
              legal, or security risk.
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6 leading-7">
              <li>Fraud, scams, or deceptive activities</li>
              <li>Illegal robocalling or unlawful telemarketing</li>
              <li>Caller ID spoofing or unauthorized number use</li>
              <li>Spam or abusive calling</li>
              <li>Threatening or harassing communications</li>
              <li>
                Traffic intended to bypass or circumvent carrier, regulatory,
                or network controls
              </li>
              <li>Any other unlawful activity</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold leading-7 text-[#F3F5F7]">
              Monitoring & Compliance
            </h2>

            <p className="mt-3 leading-7">
              NajmX may monitor traffic and service usage for security, fraud
              prevention, network protection, abuse detection, and regulatory
              compliance.
            </p>

            <p className="mt-3 leading-7">
              When reasonably necessary, NajmX may review call records, calling
              patterns, destinations, originating information, account
              activity, and other relevant service data.
            </p>

            <p className="mt-3 leading-7">
              Customers must provide reasonable information or documentation
              requested by NajmX for compliance reviews, suspected abuse,
              customer verification, or traceback investigations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold leading-7 text-[#F3F5F7]">
              Investigation & Enforcement
            </h2>

            <p className="mt-3 leading-7">
              NajmX may investigate suspected unlawful traffic, fraud, abuse,
              spoofing, or violations of this AUP or the Service Agreement and
              take appropriate action.
            </p>

            <p className="mt-3 leading-7">
              Depending on the circumstances, NajmX may:
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6 leading-7">
              <li>Request additional information</li>
              <li>Issue a warning</li>
              <li>Increase monitoring</li>
              <li>Restrict or block specific traffic</li>
              <li>Suspend affected services</li>
              <li>Disable numbers, campaigns, or accounts</li>
              <li>Terminate customer services</li>
            </ul>

            <p className="mt-3 leading-7">
              NajmX may take immediate action when reasonably necessary to
              protect its network, customers, carriers, or other parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold leading-7 text-[#F3F5F7]">
              Traceback & Regulatory Cooperation
            </h2>

            <p className="mt-3 leading-7">
              Customers must cooperate with reasonable requests from NajmX
              regarding suspected illegal or abusive traffic, compliance
              reviews, traceback requests, and investigations.
            </p>

            <p className="mt-3 leading-7">
              NajmX may provide relevant customer, traffic, and call
              information to carriers, regulators, law enforcement, the
              Industry Traceback Group (ITG), or other authorized parties when
              required or permitted by applicable law.
            </p>

            <p className="mt-3 leading-7">
              NajmX may cooperate with applicable traceback requests and
              investigations and take appropriate action to identify and stop
              unlawful traffic.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold leading-7 text-[#F3F5F7]">
              Customer Responsibility
            </h2>

            <p className="mt-3 leading-7">
              Customers are responsible for all activity conducted through
              their NajmX accounts, systems, campaigns, users, employees,
              agents, and other authorized users.
            </p>

            <p className="mt-3 leading-7">
              Customers must ensure that their use of NajmX services remains
              compliant throughout their service period.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold leading-7 text-[#F3F5F7]">
              Acceptance
            </h2>

            <p className="mt-3 leading-7">
              By ordering, accessing, or using NajmX services, customers
              acknowledge that they have read, understood, and agreed to this
              AUP and all applicable laws and regulations.
            </p>

            <p className="mt-3 leading-7">
              NajmX may update this AUP from time to time. Continued use of the
              services after an update constitutes acceptance of the revised
              AUP.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold leading-7 text-[#F3F5F7]">
              Contact
            </h2>

            <p className="mt-3 leading-7">
              To report abuse or acceptable use concerns, please contact us at{" "}
              <a
                href="mailto:compliance@najmx.net"
                className="text-[#D0AE69] transition-colors duration-200 hover:text-[#E5C989]"
              >
                compliance@najmx.net
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
            This page provides a summary of the NajmX Acceptable Use Policy.
            Customers may receive the complete AUP and applicable service terms
            separately.
          </p>
        </div>
      </section>
    </main>
  );
}

