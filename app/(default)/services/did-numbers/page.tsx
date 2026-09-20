
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DID Numbers for Call Centers & Business VoIP",

  description:
    "Business DID numbers for call centers and VoIP systems, with number provisioning, inbound routing, VICIdial and PBX integration, IVR destinations, and technical support.",

  alternates: {
    canonical: "https://najmx.net/services/did-numbers",
  },

  openGraph: {
    title: "DID Numbers for Call Centers & Business VoIP",
    description:
      "Business DID numbers with provisioning, inbound routing, VICIdial and PBX integration, IVR setup, and technical support.",
    url: "https://najmx.net/services/did-numbers",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://najmx.net/services/did-numbers#service",
  name: "DID Numbers",
  description:
    "Business DID numbers for call centers and VoIP systems, with number provisioning, inbound routing, VICIdial and PBX integration, IVR destinations, and technical support.",
  url: "https://najmx.net/services/did-numbers",
  provider: {
    "@id": "https://najmx.net/#organization",
  },
  serviceType: "DID Number Services",
};

const capabilities = [
  {
    title: "DID Provisioning",
    description:
      "Provision business telephone numbers based on the countries, locations, and calling requirements of your operation.",
  },
  {
    title: "Inbound Routing",
    description:
      "Route incoming calls to VICIdial, PBX, IVR, or other supported systems according to your call flow.",
  },
  {
    title: "Number Configuration",
    description:
      "Configure numbers and their destinations so inbound traffic reaches the right part of your infrastructure.",
  },
  {
    title: "VICIdial Integration",
    description:
      "Connect your DID numbers with VICIdial for inbound campaigns and call-center workflows.",
  },
  {
    title: "PBX Integration",
    description:
      "Connect business numbers to your PBX environment for extensions, IVR, and internal call routing.",
  },
  {
    title: "Number Management",
    description:
      "Keep your numbers organized and aligned with the systems, destinations, and requirements of your business.",
  },
];

const included = [
  "Business DID provisioning",
  "Inbound number routing",
  "Number configuration",
  "VICIdial integration",
  "PBX integration",
  "IVR destination setup",
  "Inbound call-flow configuration",
  "Number management",
];

export default function DidNumbersPage() {
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
              DID Numbers
            </p>

            <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-[1.08] tracking-[-0.015em] text-[#F3F5F7] sm:text-6xl lg:text-7xl">
              Business Numbers That Fit Your Calling Setup
            </h1>

            <p className="mt-6 max-w-3xl text-lg font-normal leading-8 text-[#C3CBD5] sm:text-xl sm:leading-9">
              Get business telephone numbers configured for your inbound
              calling environment, with routing and integration for VICIdial,
              PBX, and other supported systems.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/get-started"
                className="inline-flex items-center justify-center rounded-md border border-[#67D391] bg-[#67D391] px-6 py-3 text-sm font-semibold text-[#06100B] shadow-[0_0_18px_rgba(103,211,145,0.24)] transition-all duration-300 hover:border-[#8AE0AA] hover:bg-[#8AE0AA] hover:shadow-[0_0_40px_rgba(103,211,145,0.72),0_0_85px_rgba(103,211,145,0.26)]"
              >
                Set Up Your Numbers
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
                Put Every Number Where It Needs to Go
              </h2>
            </div>

            <div className="space-y-5">
              <p className="text-base font-normal leading-8 text-[#AEB6C2]">
                A DID is only useful when incoming calls reach the right
                destination. The number, routing, IVR, PBX, and dialer need to
                work together as part of the same call flow.
              </p>

              <p className="text-base font-normal leading-8 text-[#AEB6C2]">
                We can handle the number setup and connect it to your existing
                infrastructure, whether calls need to reach VICIdial, a PBX,
                an IVR, or another supported destination.
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
              The Number Setup
            </h2>

            <p className="mt-4 text-base font-normal leading-8 text-[#AEB6C2]">
              We can take care of the number-side configuration needed to
              connect your inbound calls with your existing systems.
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
              From Provisioning to Inbound Calls
            </h2>

            <p className="mt-4 text-base font-normal leading-8 text-[#AEB6C2]">
              Your numbers can be configured around the way your business
              actually receives and handles calls.
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
              Inbound Calling
            </p>

            <h2 className="mt-3 max-w-3xl text-3xl font-medium leading-[1.2] text-[#F3F5F7] sm:text-4xl">
              Need Numbers Connected to Your System?
            </h2>

            <p className="mt-4 max-w-2xl text-base font-normal leading-8 text-[#AEB6C2]">
              Tell us where you need your numbers, how calls should be routed,
              and which system you are using. We&apos;ll help you plan the
              appropriate setup.
            </p>

            <div className="mt-7">
              <Link
                href="/get-started"
                className="inline-flex items-center justify-center rounded-md border border-[#67D391] bg-[#67D391] px-6 py-3 text-sm font-semibold text-[#06100B] shadow-[0_0_18px_rgba(103,211,145,0.24)] transition-all duration-300 hover:border-[#8AE0AA] hover:bg-[#8AE0AA] hover:shadow-[0_0_40px_rgba(103,211,145,0.72),0_0_85px_rgba(103,211,145,0.26)]"
              >
                Discuss Your Number Setup
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

