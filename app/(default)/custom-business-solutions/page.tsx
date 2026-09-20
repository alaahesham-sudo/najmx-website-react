
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Custom Business Solutions for VICIdial, VoIP & PBX",

  description:
    "Custom web portals, dashboards, reporting tools, API integrations, workflow automation, and business solutions built around VICIdial, VoIP, PBX, and calling systems.",

  alternates: {
    canonical: "https://najmx.net/custom-business-solutions",
  },

  openGraph: {
    title: "Custom Business Solutions for VICIdial, VoIP & PBX",
    description:
      "Custom portals, dashboards, reporting tools, integrations, automation, and business applications for calling and telecommunications systems.",
    url: "https://najmx.net/custom-business-solutions",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://najmx.net/custom-business-solutions#service",
  name: "Custom Business Solutions",
  description:
    "Custom web portals, dashboards, reporting tools, API integrations, workflow automation, and business solutions built around VICIdial, VoIP, PBX, and calling systems.",
  url: "https://najmx.net/custom-business-solutions",
  provider: {
    "@id": "https://najmx.net/#organization",
  },
  serviceType: "Custom Business Solutions",
};

export default function CustomBusinessSolutionsPage() {
  return (
    <main
      className="bg-[#070B13] text-[#F3F5F7]"
      style={{
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="border-b border-[#202B3D] bg-[#070B13]">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-28 sm:px-8 lg:px-10 lg:pb-20 lg:pt-36">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#B8944A] sm:text-base">
              Custom Business Solutions
            </p>

            <h1 className="mt-4 text-5xl font-semibold leading-[1.08] tracking-[-0.015em] text-[#F3F5F7] sm:text-6xl lg:text-7xl">
              Custom Business Solutions for Your Calling Operations
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-base font-normal leading-8 tracking-normal text-[#AEB6C2] sm:text-lg">
              We build web-based tools, dashboards, integrations, and workflow
              solutions around VICIdial, PBX, VoIP, and other business systems.
            </p>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/get-started"
                className="inline-flex items-center justify-center rounded-md border border-[#67D391] bg-[#67D391] px-6 py-3 text-sm font-semibold text-[#06100B] shadow-[0_0_18px_rgba(103,211,145,0.24)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.025] hover:border-[#8AE0AA] hover:bg-[#8AE0AA] hover:shadow-[0_0_40px_rgba(103,211,145,0.72),0_0_85px_rgba(103,211,145,0.26)] motion-safe:animate-[pulse_3s_ease-in-out_infinite]"
              >
                Request a Quote
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-md border border-[#334155] bg-[#0D1521] px-6 py-3 text-sm font-medium text-[#E2E8F0] transition-all duration-300 hover:-translate-y-1 hover:border-[#64748B] hover:bg-[#111C31]"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ABOUT THE SERVICE
      ========================================================= */}
      <section className="border-b border-[#202B3D] bg-[#090F18]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#B8944A] sm:text-base">
              About the Service
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-[1.2] tracking-normal text-[#F3F5F7] sm:text-4xl">
              Tools Built Around Your Business
            </h2>

            <p className="mt-4 text-base font-normal leading-8 text-[#AEB6C2]">
              Every business has different systems and workflows. We build
              practical solutions that connect your systems, simplify daily
              operations, and give your team easier access to the information
              they need.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {[
              {
                title: "Web Portals",
                description:
                  "Build secure web portals for customers, employees, or internal teams to access the information and tools they need.",
              },
              {
                title: "CDR & Reporting Portals",
                description:
                  "Provide easy access to call records, reports, usage data, and other calling information through a dedicated web interface.",
              },
              {
                title: "Custom Dashboards",
                description:
                  "Bring important operational information from different systems into a single dashboard for easier monitoring and management.",
              },
              {
                title: "System Integrations",
                description:
                  "Connect VICIdial, PBX, VoIP systems, databases, APIs, CRM platforms, and other business applications.",
              },
              {
                title: "Workflow Automation",
                description:
                  "Automate repetitive tasks and simplify processes between your calling systems and other business tools.",
              },
              {
                title: "Custom Business Tools",
                description:
                  "Build practical tools around a specific business requirement instead of forcing your workflow to fit an existing product.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group rounded-xl border border-[#202B3D] bg-[#0D1521] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.28)] transition-all duration-300 hover:-translate-y-1 hover:border-[#334155] hover:bg-[#101A29]"
              >
                <h3 className="text-lg font-medium leading-7 tracking-normal text-[#F3F5F7]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm font-normal leading-7 text-[#929DAB]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          WHAT WE CAN BUILD
      ========================================================= */}
      <section className="border-b border-[#202B3D] bg-[#070B13]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#B8944A] sm:text-base">
              What We Can Build
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-[1.2] tracking-normal text-[#F3F5F7] sm:text-4xl">
              What We Can Build
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {[
              {
                title: "CDR & Call Reporting",
                description:
                  "Web-based access to call records, reporting, usage, and operational data.",
              },
              {
                title: "Customer Portals",
                description:
                  "Give customers controlled access to relevant account, call, service, or reporting information.",
              },
              {
                title: "Dashboards",
                description:
                  "Centralize important information from your calling and business systems into a simple interface.",
              },
              {
                title: "API Integrations",
                description:
                  "Connect your calling infrastructure with CRMs, databases, third-party platforms, and other business systems.",
              },
              {
                title: "Workflow Tools",
                description:
                  "Automate repetitive tasks and improve how your team handles daily operations.",
              },
              {
                title: "Custom Solutions",
                description:
                  "Build a solution around a specific requirement, workflow, or integration.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group rounded-xl border border-[#202B3D] bg-[#0D1521] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.28)] transition-all duration-300 hover:-translate-y-1 hover:border-[#334155] hover:bg-[#101A29]"
              >
                <h3 className="text-lg font-medium leading-7 tracking-normal text-[#F3F5F7]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm font-normal leading-7 text-[#929DAB]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="bg-[#090F18]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="rounded-xl border border-[#253146] bg-[#0C141F] p-8 text-center shadow-[0_22px_60px_rgba(0,0,0,0.32)] sm:p-10 lg:p-12">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#B8944A] sm:text-base">
              Custom Solutions
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-[1.2] tracking-normal text-[#F3F5F7] sm:text-4xl">
              Need a Custom Business Solution?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base font-normal leading-8 text-[#AEB6C2]">
              Tell us what systems you currently use, what you need to connect
              or access, and what you want the solution to do.
            </p>

            <p className="mx-auto mt-2 max-w-2xl text-base font-normal leading-8 text-[#AEB6C2]">
              We'll review your requirements and discuss the appropriate
              approach.
            </p>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/get-started"
                className="inline-flex items-center justify-center rounded-md border border-[#67D391] bg-[#67D391] px-6 py-3 text-sm font-semibold text-[#06100B] shadow-[0_0_18px_rgba(103,211,145,0.24)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.025] hover:border-[#8AE0AA] hover:bg-[#8AE0AA] hover:shadow-[0_0_40px_rgba(103,211,145,0.72),0_0_85px_rgba(103,211,145,0.26)] motion-safe:animate-[pulse_3s_ease-in-out_infinite]"
              >
                Discuss Your Project
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-md border border-[#334155] bg-[#0D1521] px-6 py-3 text-sm font-medium text-[#E2E8F0] transition-all duration-300 hover:-translate-y-1 hover:border-[#64748B] hover:bg-[#111C31]"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
    </main>
  );
}

