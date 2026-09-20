
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | NajmX",

  description:
    "Read the NajmX Terms of Service governing use of the NajmX website, service inquiries, and related business services and solutions.",

  alternates: {
    canonical: "https://najmx.net/legal/terms-of-service",
  },

  openGraph: {
    title: "Terms of Service | NajmX",
    description:
      "Review the NajmX Terms of Service covering website use, service inquiries, customer responsibilities, and applicable service agreements.",
    url: "https://najmx.net/legal/terms-of-service",
    type: "website",
  },
};

export default function TermsOfServicePage() {
  return (
    <main className="bg-[#070B13] text-[#F3F5F7]">
      <section className="mx-auto max-w-4xl px-6 pb-20 pt-28 sm:px-8 lg:pb-24 lg:pt-36">
        {/* Header */}
        <div className="mb-12 border-b border-[#202B3D] pb-10">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-[#B8944A]">
            Legal
          </p>

          <h1 className="text-4xl font-semibold leading-[1.08] tracking-[-0.015em] text-[#F3F5F7] sm:text-5xl">
            Terms of Service
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#AEB6C2]">
            These terms explain the use of the NajmX website and how service
            inquiries and discussions are handled.
          </p>

          <p className="mt-5 text-sm text-[#6F7B8B]">
            Effective date: July 15, 2026
          </p>

          <p className="mt-2 text-sm text-[#6F7B8B]">
            NajmX LLC is registered in Wyoming, United States.
          </p>
        </div>

        {/* Terms */}
        <div className="space-y-10 text-[#AEB6C2]">
          <section>
            <h2 className="text-xl font-semibold leading-7 text-[#F3F5F7]">
              Website Use
            </h2>

            <p className="mt-3 leading-7">
              The NajmX website provides information about VICIdial hosting,
              VoIP, SIP routing, voice services, hosting, call center systems,
              technical support, and custom business solutions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold leading-7 text-[#F3F5F7]">
              Service Discussions
            </h2>

            <p className="mt-3 leading-7">
              Submitting an inquiry, requesting a quote, or communicating with
              NajmX does not create a service agreement.
            </p>

            <p className="mt-3 leading-7">
              Service scope, pricing, support terms, responsibilities, and
              other obligations are established separately in a written
              agreement between NajmX and the customer.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold leading-7 text-[#F3F5F7]">
              Website Information
            </h2>

            <p className="mt-3 leading-7">
              NajmX aims to keep website information accurate and up to date.
              However, service availability, features, technical options, and
              pricing may change without notice.
            </p>

            <p className="mt-3 leading-7">
              Information published on the website is provided for general
              informational purposes and does not by itself constitute an offer
              or guarantee of service availability.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold leading-7 text-[#F3F5F7]">
              Customer Responsibility
            </h2>

            <p className="mt-3 leading-7">
              Customers are responsible for providing accurate information
              during service discussions and for reviewing the applicable
              written service agreement before using NajmX services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold leading-7 text-[#F3F5F7]">
              Service Terms
            </h2>

            <p className="mt-3 leading-7">
              Use of NajmX services is subject to the applicable service
              agreement, acceptable use requirements, and other terms provided
              to the customer.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold leading-7 text-[#F3F5F7]">
              Contact
            </h2>

            <p className="mt-3 leading-7">
              For questions about these terms, please contact us at{" "}
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
            These Terms of Service apply to the use of the NajmX website and
            service inquiries. Specific services are governed by the applicable
            written agreement and service terms.
          </p>
        </div>
      </section>
    </main>
  );
}

