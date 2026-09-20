
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "VICIdial Hosting & Dialer Hosting for Call Centers",

  description:
    "Managed VICIdial hosting and dialer infrastructure for call centers, including installation, configuration, SIP integration, Linux servers, monitoring, maintenance, and technical support.",

  alternates: {
    canonical: "https://najmx.net/services/vicidial-dialer-hosting",
  },

  openGraph: {
    title: "VICIdial Hosting & Dialer Hosting for Call Centers",
    description:
      "Managed VICIdial hosting and dialer infrastructure with SIP integration, Linux server management, monitoring, maintenance, and technical support.",
    url: "https://najmx.net/services/vicidial-dialer-hosting",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://najmx.net/services/vicidial-dialer-hosting#service",
  name: "VICIdial Hosting & Dialer Hosting",
  description:
    "Managed VICIdial hosting and dialer infrastructure for call centers, including installation, configuration, SIP integration, Linux servers, monitoring, maintenance, and technical support.",
  url: "https://najmx.net/services/vicidial-dialer-hosting",
  provider: {
    "@id": "https://najmx.net/#organization",
  },
  serviceType: "VICIdial Hosting",
};

const capabilities = [
  {
    title: "VICIdial Installation",
    description:
      "Deploy and configure VICIdial on infrastructure prepared for your calling operation.",
  },
  {
    title: "Campaign & IVR Setup",
    description:
      "Configure campaigns, agents, IVR, call flows, and the operational settings your team needs.",
  },
  {
    title: "SIP Integration",
    description:
      "Connect your SIP provider and configure the voice side of the system for inbound and outbound calling.",
  },
  {
    title: "Server Management",
    description:
      "Manage the underlying Linux server and the services required to keep the dialer running properly.",
  },
  {
    title: "Monitoring & Maintenance",
    description:
      "Monitor the environment, handle system issues, and keep the infrastructure maintained.",
  },
  {
    title: "Technical Support",
    description:
      "Troubleshoot VICIdial, SIP, server, routing, and call-related issues when you need assistance.",
  },
];

const included = [
  "VICIdial installation and configuration",
  "Campaign and agent configuration",
  "IVR and call-flow setup",
  "SIP provider integration",
  "Linux server configuration",
  "System updates and maintenance",
  "Monitoring and troubleshooting",
  "Ongoing technical support",
];

export default function VicidialDialerHostingPage() {
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
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-28 sm:px-8 lg:px-10 lg:pb-24 lg:pt-36">
          <div className="max-w-4xl">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#929DAB] transition-colors hover:text-[#F3F5F7]"
            >
              <span aria-hidden="true">←</span>
              All Services
            </Link>

            <p className="mt-10 text-sm font-medium uppercase tracking-[0.18em] text-[#B8944A]">
              VICIdial & Dialer Hosting
            </p>

            <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-[1.08] tracking-[-0.015em] text-[#F3F5F7] sm:text-6xl lg:text-7xl">
              Your VICIdial Infrastructure, Ready to Run
            </h1>

            <p className="mt-6 max-w-3xl text-lg font-normal leading-8 text-[#C3CBD5] sm:text-xl sm:leading-9">
              We handle the infrastructure behind your VICIdial operation —
              from server deployment and dialer configuration to SIP
              integration, monitoring, and ongoing technical support.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/get-started"
                className="inline-flex items-center justify-center rounded-md border border-[#67D391] bg-[#67D391] px-6 py-3 text-sm font-semibold text-[#06100B] shadow-[0_0_18px_rgba(103,211,145,0.24)] transition-all duration-300 hover:border-[#8AE0AA] hover:bg-[#8AE0AA] hover:shadow-[0_0_40px_rgba(103,211,145,0.72),0_0_85px_rgba(103,211,145,0.26)]"
              >
                Plan Your VICIdial Setup
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-md border border-[#334155] bg-[#0D1521] px-6 py-3 text-sm font-medium text-[#E2E8F0] transition-all duration-300 hover:border-[#64748B] hover:bg-[#111C31]"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          OVERVIEW
      ========================================================= */}
      <section className="border-b border-[#202B3D] bg-[#090F18]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#B8944A]">
                The Service
              </p>

              <h2 className="mt-3 text-3xl font-medium leading-[1.2] text-[#F3F5F7] sm:text-4xl">
                One Environment. Everything Your Dialer Needs.
              </h2>
            </div>

            <div className="space-y-5">
              <p className="text-base font-normal leading-8 text-[#AEB6C2]">
                A VICIdial system is more than the dialer itself. The server,
                operating system, SIP connection, campaigns, routing, and
                supporting services all need to work together.
              </p>

              <p className="text-base font-normal leading-8 text-[#AEB6C2]">
                NajmX handles that infrastructure as one setup, so you can
                focus on your agents, campaigns, and day-to-day operation
                instead of managing the technical environment behind them.
              </p>

              <div className="pt-3">
                <div className="h-px w-12 bg-[#B8944A]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INCLUDED
      ========================================================= */}
      <section className="border-b border-[#202B3D] bg-[#070B13]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#B8944A]">
              What&apos;s Included
            </p>

            <h2 className="mt-3 text-3xl font-medium leading-[1.2] text-[#F3F5F7] sm:text-4xl">
              The Core Infrastructure
            </h2>

            <p className="mt-4 text-base font-normal leading-8 text-[#AEB6C2]">
              The setup can cover the technical components required to deploy
              and operate your VICIdial environment.
            </p>
          </div>

          <div className="mt-10 grid overflow-hidden rounded-xl border border-[#253146] bg-[#0C141F] md:grid-cols-2">
            {included.map((item, index) => (
              <div
                key={item}
                className={`flex items-center gap-4 px-5 py-5 sm:px-6 ${
                  index < included.length - 1
                    ? "border-b border-[#202B3D]"
                    : ""
                } ${
                  index % 2 === 0 ? "md:border-r md:border-[#202B3D]" : ""
                }`}
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#334155] bg-[#0D1521] text-xs text-[#B8944A]">
                  ✓
                </span>

                <span className="text-sm font-medium leading-6 text-[#DDE2E8]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CAPABILITIES
      ========================================================= */}
      <section className="border-b border-[#202B3D] bg-[#090F18]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#B8944A]">
              Capabilities
            </p>

            <h2 className="mt-3 text-3xl font-medium leading-[1.2] text-[#F3F5F7] sm:text-4xl">
              From Installation to Ongoing Support
            </h2>

            <p className="mt-4 text-base font-normal leading-8 text-[#AEB6C2]">
              We can handle the technical side of the environment before
              launch and continue supporting it after your system is live.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {capabilities.map((capability, index) => (
              <div
                key={capability.title}
                className="rounded-xl border border-[#202B3D] bg-[#0D1521] p-6 transition-all duration-300 hover:border-[#334155] hover:bg-[#101A29]"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="text-xs font-medium tracking-[0.12em] text-[#B8944A]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="h-px w-8 bg-[#334155]" />
                </div>

                <h3 className="mt-6 text-lg font-medium leading-7 text-[#F3F5F7]">
                  {capability.title}
                </h3>

                <p className="mt-3 text-sm font-normal leading-7 text-[#929DAB]">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="bg-[#070B13]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="rounded-xl border border-[#253146] bg-[#0C141F] p-8 shadow-[0_22px_60px_rgba(0,0,0,0.32)] sm:p-10 lg:p-12">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#B8944A]">
              Ready to Deploy
            </p>

            <h2 className="mt-3 max-w-3xl text-3xl font-medium leading-[1.2] text-[#F3F5F7] sm:text-4xl">
              Let&apos;s Build the Right VICIdial Environment
            </h2>

            <p className="mt-4 max-w-2xl text-base font-normal leading-8 text-[#AEB6C2]">
              Tell us about your agents, calling requirements, SIP provider,
              and infrastructure needs. We&apos;ll review the setup and help
              you plan the next step.
            </p>

            <div className="mt-7">
              <Link
                href="/get-started"
                className="inline-flex items-center justify-center rounded-md border border-[#67D391] bg-[#67D391] px-6 py-3 text-sm font-semibold text-[#06100B] shadow-[0_0_18px_rgba(103,211,145,0.24)] transition-all duration-300 hover:border-[#8AE0AA] hover:bg-[#8AE0AA] hover:shadow-[0_0_40px_rgba(103,211,145,0.72),0_0_85px_rgba(103,211,145,0.26)]"
              >
                Start Your Setup
                <span className="ml-2" aria-hidden="true">
                  →
                </span>
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

