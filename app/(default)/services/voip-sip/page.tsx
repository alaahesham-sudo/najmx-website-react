
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "VoIP & SIP Services for Call Centers & Business Systems",

  description:
    "VoIP and SIP services for VICIdial, PBX, and business calling systems, including SIP trunk configuration, routing, carrier integration, voice connectivity, and call-quality support.",

  alternates: {
    canonical: "https://najmx.net/services/voip-sip",
  },

  openGraph: {
    title: "VoIP & SIP Services for Call Centers & Business Systems",
    description:
      "SIP connectivity, routing, carrier integration, and technical support for VICIdial, PBX, and business calling systems.",
    url: "https://najmx.net/services/voip-sip",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://najmx.net/services/voip-sip#service",
  name: "VoIP & SIP Services",
  description:
    "VoIP and SIP services for VICIdial, PBX, and business calling systems, including SIP trunk configuration, routing, carrier integration, voice connectivity, and call-quality support.",
  url: "https://najmx.net/services/voip-sip",
  provider: {
    "@id": "https://najmx.net/#organization",
  },
  serviceType: "VoIP & SIP Services",
};

const capabilities = [
  {
    title: "SIP Connectivity",
    description:
      "Connect your existing SIP provider to VICIdial, PBX, or other supported calling systems.",
  },
  {
    title: "Inbound & Outbound Calling",
    description:
      "Configure the voice paths required for inbound traffic, outbound campaigns, and business calling.",
  },
  {
    title: "Voice Routing",
    description:
      "Build practical routing between your systems and voice providers based on how your operation works.",
  },
  {
    title: "Carrier Integration",
    description:
      "Integrate supported voice carriers and configure the connection between the carrier and your infrastructure.",
  },
  {
    title: "SIP Configuration",
    description:
      "Handle SIP credentials, trunks, codecs, routing, and the system-side configuration needed for connectivity.",
  },
  {
    title: "Call-Quality Support",
    description:
      "Investigate SIP, routing, connectivity, and infrastructure issues that can affect call quality.",
  },
];

const included = [
  "SIP trunk configuration",
  "Inbound and outbound routing",
  "VICIdial SIP integration",
  "PBX SIP integration",
  "Carrier connectivity",
  "SIP credentials and configuration",
  "Voice routing setup",
  "Call-quality troubleshooting",
];

export default function VoipSipPage() {
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
              VoIP & SIP Services
            </p>

            <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-[1.08] tracking-[-0.015em] text-[#F3F5F7] sm:text-6xl lg:text-7xl">
              Reliable Voice Connectivity for Your Systems
            </h1>

            <p className="mt-6 max-w-3xl text-lg font-normal leading-8 text-[#C3CBD5] sm:text-xl sm:leading-9">
              We connect your VICIdial, PBX, or business calling environment
              to the voice services it needs, with SIP configuration, routing,
              carrier integration, and technical support.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/get-started"
                className="inline-flex items-center justify-center rounded-md border border-[#67D391] bg-[#67D391] px-6 py-3 text-sm font-semibold text-[#06100B] shadow-[0_0_18px_rgba(103,211,145,0.24)] transition-all duration-300 hover:border-[#8AE0AA] hover:bg-[#8AE0AA] hover:shadow-[0_0_40px_rgba(103,211,145,0.72),0_0_85px_rgba(103,211,145,0.26)]"
              >
                Configure Your Voice Setup
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
                Connect Your Systems to the Voice Network
              </h2>
            </div>

            <div className="space-y-5">
              <p className="text-base font-normal leading-8 text-[#AEB6C2]">
                Voice connectivity needs to work across more than one
                component. Your SIP provider, dialer, PBX, routing, and server
                configuration all have to communicate correctly.
              </p>

              <p className="text-base font-normal leading-8 text-[#AEB6C2]">
                NajmX handles the technical connection between these systems,
                whether you are integrating an existing provider or setting up
                a new voice environment.
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
              The Voice Layer Behind Your Operation
            </h2>

            <p className="mt-4 text-base font-normal leading-8 text-[#AEB6C2]">
              We can configure the core SIP and routing components required to
              connect your calling systems with your voice provider.
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
              From SIP Configuration to Call Quality
            </h2>

            <p className="mt-4 text-base font-normal leading-8 text-[#AEB6C2]">
              Whether you are connecting a dialer, PBX, or business phone
              system, we can handle the technical voice configuration around
              it.
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
              Get Connected
            </p>

            <h2 className="mt-3 max-w-3xl text-3xl font-medium leading-[1.2] text-[#F3F5F7] sm:text-4xl">
              Need Your Voice Services Configured?
            </h2>

            <p className="mt-4 max-w-2xl text-base font-normal leading-8 text-[#AEB6C2]">
              Tell us about your current provider, calling system, and
              requirements. We&apos;ll help map the right SIP and routing setup
              for your environment.
            </p>

            <div className="mt-7">
              <Link
                href="/get-started"
                className="inline-flex items-center justify-center rounded-md border border-[#67D391] bg-[#67D391] px-6 py-3 text-sm font-semibold text-[#06100B] shadow-[0_0_18px_rgba(103,211,145,0.24)] transition-all duration-300 hover:border-[#8AE0AA] hover:bg-[#8AE0AA] hover:shadow-[0_0_40px_rgba(103,211,145,0.72),0_0_85px_rgba(103,211,145,0.26)]"
              >
                Talk to Our Team
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

