
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Managed Servers for VICIdial, PBX & Business Systems",

  description:
    "Managed server infrastructure for VICIdial, PBX, and business applications, including dedicated server deployment, Linux configuration, security, monitoring, maintenance, and technical support.",

  alternates: {
    canonical: "https://najmx.net/services/managed-servers",
  },

  openGraph: {
    title: "Managed Servers for VICIdial, PBX & Business Systems",
    description:
      "Managed Linux server infrastructure with deployment, security configuration, monitoring, maintenance, and technical support.",
    url: "https://najmx.net/services/managed-servers",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://najmx.net/services/managed-servers#service",
  name: "Managed Servers",
  description:
    "Managed server infrastructure for VICIdial, PBX, and business applications, including dedicated server deployment, Linux configuration, security, monitoring, maintenance, and technical support.",
  url: "https://najmx.net/services/managed-servers",
  provider: {
    "@id": "https://najmx.net/#organization",
  },
  serviceType: "Managed Server Services",
};

const capabilities = [
  {
    title: "Dedicated Infrastructure",
    description:
      "Server environments sized and prepared around your applications, users, and expected workload.",
  },
  {
    title: "Server Deployment",
    description:
      "New servers deployed, configured, and prepared for production use with the required services.",
  },
  {
    title: "Linux Configuration",
    description:
      "Linux systems configured with the packages, services, networking, and system settings your environment needs.",
  },
  {
    title: "Security Configuration",
    description:
      "Practical server hardening and access configuration to reduce unnecessary exposure and keep systems controlled.",
  },
  {
    title: "Monitoring & Maintenance",
    description:
      "Ongoing attention to system health, updates, resources, and common infrastructure issues.",
  },
  {
    title: "Technical Troubleshooting",
    description:
      "Hands-on troubleshooting when services, connectivity, resources, or system components stop behaving as expected.",
  },
];

const included = [
  "Dedicated server deployment",
  "Linux installation and configuration",
  "Network and service configuration",
  "Security and access configuration",
  "System updates and maintenance",
  "Resource and service monitoring",
  "Infrastructure troubleshooting",
  "Ongoing technical support",
];

export default function ManagedServersPage() {
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
              Managed Servers
            </p>

            <h1 className="max-w-4xl text-4xl font-semibold tracking-[-0.03em] text-[#F3F5F7] sm:text-5xl lg:text-6xl">
              Server Infrastructure Built to Keep Your Systems Running
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#AEB6C2]">
              Reliable server environments for VICIdial, PBX, VoIP, and other
              business applications — deployed, configured, monitored, and
              supported by NajmX.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/get-started"
                className="inline-flex items-center justify-center rounded-md border border-[#67D391] bg-[#67D391] px-6 py-3 text-sm font-semibold text-[#06100B] shadow-[0_0_18px_rgba(103,211,145,0.20)] transition-all duration-300 hover:border-[#8AE0AA] hover:bg-[#8AE0AA] hover:shadow-[0_0_35px_rgba(103,211,145,0.45)]"
              >
                Build Your Server Environment
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
                Infrastructure
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-[#F3F5F7] sm:text-4xl">
                More Than Just a Server
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-[#AEB6C2]">
                Your server is the foundation for everything running on top of
                it. We handle the underlying infrastructure so your VICIdial,
                PBX, VoIP, and business applications have a properly prepared
                environment to operate in.
              </p>

              <p className="mt-5 text-lg leading-8 text-[#AEB6C2]">
                From initial deployment and Linux configuration to ongoing
                maintenance and troubleshooting, NajmX keeps the infrastructure
                side organized and under control.
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
              From Deployment to Ongoing Management
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#AEB6C2]">
              We take care of the infrastructure work behind your systems,
              whether you are deploying a new environment or need continued
              technical management.
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
              Infrastructure That Supports the Work
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
                  Need Server Infrastructure?
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-[#F3F5F7] sm:text-4xl">
                  Let&apos;s Prepare the Right Environment for Your Systems
                </h2>

                <p className="mt-5 text-base leading-7 text-[#AEB6C2]">
                  Tell us what you are running, what you need, and where you
                  want to take the infrastructure. We&apos;ll help define the
                  right server setup.
                </p>
              </div>

              <Link
                href="/get-started"
                className="inline-flex shrink-0 items-center justify-center rounded-md border border-[#67D391] bg-[#67D391] px-6 py-3 text-sm font-semibold text-[#06100B] shadow-[0_0_18px_rgba(103,211,145,0.20)] transition-all duration-300 hover:border-[#8AE0AA] hover:bg-[#8AE0AA] hover:shadow-[0_0_35px_rgba(103,211,145,0.45)]"
              >
                Discuss Your Infrastructure
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

