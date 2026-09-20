
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "VICIdial, VoIP, DID, PBX & Call Center Services",

  description:
    "NajmX provides VICIdial hosting, VoIP and SIP services, DID numbers, PBX and call center systems, managed servers, and technical support for calling operations.",

  alternates: {
    canonical: "https://najmx.net/services",
  },

  openGraph: {
    title: "VICIdial, VoIP, DID, PBX & Call Center Services",
    description:
      "Call center infrastructure and telecommunications services including VICIdial hosting, SIP, DID numbers, PBX systems, managed servers, and technical support.",
    url: "https://najmx.net/services",
    type: "website",
  },
};


const services = [
  {
    number: "01",
    title: "VICIdial & Dialer Hosting",
    description:
      "Managed VICIdial infrastructure for call centers, from installation and configuration to SIP integration and ongoing support.",
    features: [
      "VICIdial installation & configuration",
      "Campaign & IVR setup",
      "SIP integration",
      "Server management",
      "Monitoring & maintenance",
      "Technical support",
    ],
    action: "Discuss VICIdial Hosting",
  },
  {
    number: "02",
    title: "VoIP & SIP Services",
    description:
      "Voice connectivity for VICIdial, PBX, and business calling systems with SIP routing and carrier integration.",
    features: [
      "SIP connectivity",
      "Inbound & outbound calling",
      "Voice routing",
      "Carrier integration",
      "SIP configuration",
      "Call-quality support",
    ],
    action: "Discuss Voice Services",
  },
  {
    number: "03",
    title: "DID Numbers",
    description:
      "Business telephone numbers for inbound calling, connected to VICIdial, PBX, or other supported systems.",
    features: [
      "DID provisioning",
      "Inbound routing",
      "Number configuration",
      "VICIdial & PBX integration",
      "Number management",
    ],
    action: "Get DID Numbers",
  },
  {
    number: "04",
    title: "PBX & Call Center Systems",
    description:
      "PBX and call-center systems configured around your users, call flows, and business requirements.",
    features: [
      "PBX installation & configuration",
      "Extensions & users",
      "IVR & call flows",
      "Inbound & outbound routing",
      "Call-center configuration",
      "System integration",
    ],
    action: "Discuss Your PBX",
  },
  {
    number: "05",
    title: "Managed Servers",
    description:
      "Dedicated server infrastructure for VICIdial, PBX, and other business applications, with ongoing management.",
    features: [
      "Server deployment",
      "Linux configuration",
      "Security configuration",
      "System updates",
      "Monitoring & maintenance",
      "Technical troubleshooting",
    ],
    action: "Discuss Server Hosting",
  },
  {
    number: "06",
    title: "Technical Support",
    description:
      "Technical support for VICIdial, PBX, SIP, servers, routing, connectivity, and call-quality issues.",
    features: [
      "VICIdial troubleshooting",
      "PBX & SIP support",
      "Server troubleshooting",
      "Routing & connectivity",
      "Call-quality troubleshooting",
    ],
    action: "Request Technical Support",
  },
];

export default function ServicesPage() {
  return (
    <main
      className="bg-[#070B13] text-[#F3F5F7]"
      style={{
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      {/* =========================================================
          HEADER
      ========================================================= */}
      <section className="border-b border-[#202B3D] bg-[#070B13]">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-28 sm:px-8 lg:px-10 lg:pb-20 lg:pt-36">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#B8944A] sm:text-base">
              Services
            </p>

            <h1 className="mt-4 text-5xl font-semibold leading-[1.08] tracking-[-0.015em] text-[#F3F5F7] sm:text-6xl lg:text-7xl">
              Call Center, Voice & Infrastructure Services
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-base font-normal leading-8 tracking-normal text-[#AEB6C2] sm:text-lg">
              The infrastructure and services you need to run your calling operations — from VICIdial and SIP to DIDs, PBX systems, servers, and technical support.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICES
      ========================================================= */}
      <section className="border-b border-[#202B3D] bg-[#090F18]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.number}
                className="group flex flex-col rounded-xl border border-[#202B3D] bg-[#0D1521] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.28)] transition-all duration-300 hover:-translate-y-1 hover:border-[#334155] hover:bg-[#101A29]"
              >
                <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-md border border-[#334155] bg-[#111C2B] transition-all duration-300 group-hover:border-[#67D391] group-hover:shadow-[0_0_20px_rgba(103,211,145,0.16)]">
                  <span className="text-xs font-medium text-[#B8944A] transition-colors duration-300 group-hover:text-[#D0AE69]">
                    {service.number}
                  </span>
                </div>

                <h2 className="text-lg font-medium leading-7 tracking-normal text-[#F3F5F7]">
                  {service.title}
                </h2>

                <p className="mt-3 text-sm font-normal leading-7 text-[#929DAB]">
                  {service.description}
                </p>

                <ul className="mt-5 space-y-2.5">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm font-normal leading-5 text-[#DDE2E8]"
                    >
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#67D391]" />

                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6">
                  <Link
                    href="/get-started"
                    className="text-sm font-medium text-[#B8944A] transition-colors duration-300 hover:text-[#D0AE69]"
                  >
                    {service.action} →
                  </Link>
                </div>
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
          <div className="rounded-xl border border-[#253146] bg-[#0C141F] p-8 text-center shadow-[0_22px_60px_rgba(0,0,0,0.32)] sm:p-10 lg:p-12">
            <h2 className="text-3xl font-medium leading-[1.2] tracking-normal text-[#F3F5F7] sm:text-4xl">
              Need Help Choosing a Service?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base font-normal leading-8 text-[#AEB6C2]">
              Tell us what you are running, how many agents you have, and what
              you need.
            </p>

            <p className="mx-auto mt-2 max-w-2xl text-base font-normal leading-8 text-[#AEB6C2]">
              We&apos;ll review your requirements and discuss the appropriate
              setup.
            </p>

            <div className="mt-7 flex justify-center">
              <Link
                href="/get-started"
                className="inline-flex items-center justify-center rounded-md border border-[#67D391] bg-[#67D391] px-6 py-3 text-sm font-semibold text-[#06100B] shadow-[0_0_18px_rgba(103,211,145,0.24)] transition-all duration-300 hover:border-[#8AE0AA] hover:bg-[#8AE0AA] hover:shadow-[0_0_40px_rgba(103,211,145,0.72),0_0_85px_rgba(103,211,145,0.26)] motion-safe:animate-[pulse_3s_ease-in-out_infinite]"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
