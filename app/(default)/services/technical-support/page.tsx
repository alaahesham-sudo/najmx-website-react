
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "VICIdial, VoIP & PBX Technical Support",

  description:
    "Technical support for VICIdial, PBX, SIP, Linux servers, routing, connectivity, firewalls, and call-quality issues for call centers and business systems.",

  alternates: {
    canonical: "https://najmx.net/services/technical-support",
  },

  openGraph: {
    title: "VICIdial, VoIP & PBX Technical Support",
    description:
      "Technical troubleshooting and support for VICIdial, PBX, SIP, Linux servers, routing, connectivity, firewalls, and call quality.",
    url: "https://najmx.net/services/technical-support",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://najmx.net/services/technical-support#service",
  name: "VICIdial, VoIP & PBX Technical Support",
  description:
    "Technical support for VICIdial, PBX, SIP, Linux servers, routing, connectivity, firewalls, and call-quality issues for call centers and business systems.",
  url: "https://najmx.net/services/technical-support",
  provider: {
    "@id": "https://najmx.net/#organization",
  },
  serviceType: "Technical Support",
};

const capabilities = [
  {
    title: "VICIdial Troubleshooting",
    description:
      "Investigating dialer, campaign, agent, configuration, and system issues affecting VICIdial environments.",
  },
  {
    title: "PBX & SIP Support",
    description:
      "Troubleshooting PBX services, SIP configuration, registration, routing, and calling issues.",
  },
  {
    title: "Server Troubleshooting",
    description:
      "Diagnosing Linux, service, resource, configuration, and infrastructure-related problems.",
  },
  {
    title: "Routing & Connectivity",
    description:
      "Investigating network paths, connectivity problems, firewall behavior, and communication between systems.",
  },
  {
    title: "Call-Quality Troubleshooting",
    description:
      "Working through audio, one-way audio, latency, packet loss, and other voice-quality issues.",
  },
  {
    title: "System Investigation",
    description:
      "Tracing problems across the application, server, network, and voice layers to identify where the issue starts.",
  },
];

const included = [
  "VICIdial troubleshooting",
  "PBX and SIP support",
  "Linux server troubleshooting",
  "Routing and connectivity investigation",
  "Firewall and network checks",
  "Call-quality troubleshooting",
  "Service and configuration analysis",
  "Ongoing technical assistance",
];

export default function TechnicalSupportPage() {
  return (
    <main className="bg-[#070B13] text-[#F3F5F7]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#202B3D]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(184,148,74,0.08),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-32 sm:px-8 lg:px-10 lg:pb-28 lg:pt-36">
          <Link
            href="/services"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[#929DAB] transition-colors hover:text-[#D0AE69]"
          >
            <span aria-hidden="true">←</span>
            All Services
          </Link>

          <div className="max-w-4xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#B8944A]">
              Technical Support
            </p>

            <h1 className="max-w-4xl text-4xl font-semibold tracking-[-0.03em] text-[#F3F5F7] sm:text-5xl lg:text-6xl">
              When Something Breaks, Find the Problem and Fix It
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#AEB6C2]">
              Technical support across VICIdial, PBX, SIP, Linux servers,
              networking, routing, and call quality — with the investigation
              focused on the actual source of the problem.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/get-started"
                className="inline-flex items-center justify-center rounded-md border border-[#67D391] bg-[#67D391] px-6 py-3 text-sm font-semibold text-[#06100B] shadow-[0_0_18px_rgba(103,211,145,0.20)] transition-all duration-300 hover:border-[#8AE0AA] hover:bg-[#8AE0AA] hover:shadow-[0_0_35px_rgba(103,211,145,0.45)]"
              >
                Get Technical Help
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-md border border-[#334155] bg-[#0C141F] px-6 py-3 text-sm font-semibold text-[#DDE2E8] transition-all duration-300 hover:border-[#B8944A] hover:text-[#D0AE69]"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="border-b border-[#202B3D]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#B8944A]">
                Troubleshooting
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-[#F3F5F7] sm:text-4xl">
                Start With the Problem. Follow It to the Source.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-[#AEB6C2]">
                Technical problems rarely belong to only one layer. A calling
                issue may involve VICIdial, SIP, the PBX, the server, routing,
                or the network between them.
              </p>

              <p className="mt-5 text-lg leading-8 text-[#AEB6C2]">
                We work through the system layer by layer to isolate the
                problem, understand what is actually happening, and apply the
                appropriate fix instead of treating only the visible symptom.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Included */}
      <section className="border-b border-[#202B3D]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#B8944A]">
              What We Handle
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-[#F3F5F7] sm:text-4xl">
              Support Across the Full Calling Stack
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#AEB6C2]">
              Whether the issue is inside the application or somewhere in the
              underlying infrastructure, we can work through the relevant
              layers with you.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {included.map((item) => (
              <div
                key={item}
                className="rounded-lg border border-[#253146] bg-[#0C141F] px-5 py-5 shadow-[0_10px_30px_rgba(0,0,0,0.12)]"
              >
                <div className="mb-3 h-1 w-7 rounded-full bg-[#B8944A]" />

                <p className="text-sm font-medium leading-6 text-[#DDE2E8]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="border-b border-[#202B3D]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#B8944A]">
              Capabilities
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-[#F3F5F7] sm:text-4xl">
              Technical Problems, Handled Systematically
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-[#253146] bg-[#0C141F] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#334155] hover:shadow-[0_14px_35px_rgba(0,0,0,0.16)]"
              >
                <h3 className="text-lg font-semibold text-[#F3F5F7]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#929DAB]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="relative overflow-hidden rounded-2xl border border-[#253146] bg-[#0C141F] px-7 py-12 sm:px-10 lg:px-14 lg:py-14">
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#B8944A]/[0.06] blur-3xl" />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#B8944A]">
                  Need Technical Support?
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-[#F3F5F7] sm:text-4xl">
                  Let&apos;s Find Out What&apos;s Actually Going Wrong
                </h2>

                <p className="mt-5 text-base leading-7 text-[#AEB6C2]">
                  Tell us what is happening, what changed, and what your system
                  is running. We&apos;ll start from the symptoms and work
                  toward the source.
                </p>
              </div>

              <Link
                href="/get-started"
                className="inline-flex shrink-0 items-center justify-center rounded-md border border-[#67D391] bg-[#67D391] px-6 py-3 text-sm font-semibold text-[#06100B] shadow-[0_0_18px_rgba(103,211,145,0.20)] transition-all duration-300 hover:border-[#8AE0AA] hover:bg-[#8AE0AA] hover:shadow-[0_0_35px_rgba(103,211,145,0.45)]"
              >
                Tell Us What&apos;s Wrong
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

