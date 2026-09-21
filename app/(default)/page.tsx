import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "VICIdial Hosting, VoIP & Call Center Infrastructure",

  description:
    "NajmX provides managed VICIdial hosting, VoIP and SIP connectivity, DID numbers, PBX systems, managed servers, and technical support for call centers worldwide.",

  alternates: {
    canonical: "https://najmx.net",
  },

  openGraph: {
    title: "VICIdial Hosting, VoIP & Call Center Infrastructure",
    description:
      "Managed VICIdial hosting, VoIP and SIP connectivity, DID numbers, PBX systems, managed servers, and technical support for call centers worldwide.",
    url: "https://najmx.net",
    type: "website",
  },
};


const services = [
  {
    title: "VICIdial & Dialer Hosting",
    description:
      "Managed VICIdial infrastructure with installation, configuration, campaign setup, SIP integration, monitoring, and technical support.",
    action: "Discuss VICIdial",
  },
  {
    title: "VoIP & SIP",
    description:
      "SIP connectivity for inbound and outbound calling, with routing, carrier integration, configuration, and call-quality support.",
    action: "Discuss Voice Services",
  },
  {
    title: "DID Numbers",
    description:
      "Business telephone numbers with provisioning, inbound routing, and integration with VICIdial, PBX, and supported calling systems.",
    action: "Get DID Numbers",
  },
  {
    title: "PBX & Call Center Systems",
    description:
      "PBX and call-center systems configured around your users, call flows, IVR, extensions, routing, and business requirements.",
    action: "Discuss Your PBX",
  },
  {
    title: "Managed Servers",
    description:
      "Dedicated server infrastructure for VICIdial, PBX, and other business applications, with deployment, monitoring, maintenance, and support.",
    action: "Discuss Server Hosting",
  },
  {
    title: "Technical Support",
    description:
      "Technical support for VICIdial, PBX systems, SIP, servers, routing, connectivity, configuration, and call-quality issues.",
    action: "Request Technical Support",
  },
];

const handledServices = [
  {
    title: "VICIdial",
    description:
      "Installation, configuration, campaigns, IVR, call flows, SIP integration, and ongoing support.",
  },
  {
    title: "VoIP & SIP",
    description:
      "SIP connectivity, routing, carrier integration, configuration, and call-quality support.",
  },
  {
    title: "PBX",
    description:
      "Extensions, users, IVR, inbound and outbound routing, and business calling systems.",
  },
  {
    title: "Servers",
    description:
      "Linux infrastructure, deployment, security configuration, monitoring, maintenance, and troubleshooting.",
  },
];

const processSteps = [
  "Understand your requirements",
  "Plan the appropriate infrastructure",
  "Deploy and configure the systems",
  "Connect SIP and DIDs",
  "Configure campaigns, IVR, and call flows",
  "Test everything before launch",
  "Provide ongoing support and maintenance",
];

const whyNajmXPoints = [
  "VICIdial installation and configuration",
  "SIP and DID integration",
  "Dedicated server infrastructure",
  "System monitoring and maintenance",
  "Technical support",
  "Scalable infrastructure for growing operations",
];

const infrastructureItems = [
  {
    title: "VICIdial / Dialer",
    description: "Managed dialer hosting and infrastructure",
  },
  {
    title: "SIP / Voice Connectivity",
    description: "Routing, carrier integration, and call quality",
  },
  {
    title: "DIDs & Routing",
    description: "Business numbers and inbound call routing",
  },
  {
    title: "PBX / Call Flows",
    description: "PBX systems, IVR, extensions, and routing",
  },
  {
    title: "Servers & Infrastructure",
    description: "Linux servers, deployment, and maintenance",
  },
  {
    title: "Monitoring & Support",
    description: "Ongoing monitoring, troubleshooting, and support",
  },
];

const faqItems = [
  {
    number: "01",
    question: "Who does NajmX work with?",
    answer:
      "We work directly with businesses, call centers, and teams that need reliable VoIP, VICIdial, PBX, server, and technical infrastructure. We do not provide wholesale voice termination or reseller services.",
  },
  {
    number: "02",
    question: "Can I use my own provider?",
    answer:
      "Yes. You can bring your existing VoIP, SIP, DID, or server provider. We can handle the installation, configuration, and connection so everything is ready to use.",
  },
  {
    number: "03",
    question: "Do you offer one-time installations?",
    answer:
      "Yes. We can handle one-time installations, migrations, configurations, and system setups when ongoing management is not required. Support after the installation can be arranged separately.",
  },
  {
    number: "04",
    question: "Can you help us plan our setup?",
    answer:
      "Yes. We provide technical consultation to help you choose the right infrastructure, architecture, capacity, and setup based on your actual requirements.",
  },
  {
    number: "05",
    question: "What does managed hosting include?",
    answer:
      "Our managed hosting includes installation, configuration, updates, backups, and ongoing technical support. Monitoring and support can be aligned with your business hours, including 24/7 coverage for businesses that operate around the clock.",
  },
];

export default function Home() {
  return (
    <main
      className="bg-[#070B13] text-[#F3F5F7]"
      style={{
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      {/* =========================================================
          MAIN SECTION
      ========================================================= */}
      <section
        className="border-b border-[#202B3D] bg-[#070B13] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/home_background.jpg')" }}
      >
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-28 sm:px-8 lg:px-10 lg:pb-24 lg:pt-36">
          <div className="relative flex min-h-[500px] items-center">
            <div className="relative z-10 max-w-4xl">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#B8944A] sm:text-base">
                Call Center Infrastructure
              </p>

              <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.08] tracking-[-0.015em] text-[#F3F5F7] sm:text-6xl lg:text-7xl">
                VICIdial, VoIP & Call Center Infrastructure Services
              </h1>

              <p className="mt-6 max-w-3xl text-lg font-normal leading-8 tracking-normal text-[#C3CBD5] sm:text-xl sm:leading-9">
                Get your VICIdial, FreePBX, 3CX, or VoIP system up and running with NajmX. We take care of server hosting, installation, configuration, updates, backups, and ongoing technical support. Linux-based servers are available as part of the setup.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/get-started"
                  className="inline-flex items-center justify-center rounded-md border border-[#67D391] bg-[#67D391] px-6 py-3 text-sm font-semibold tracking-normal text-[#06100B] shadow-[0_0_18px_rgba(103,211,145,0.24)] transition-all duration-300 hover:border-[#8AE0AA] hover:bg-[#8AE0AA] hover:shadow-[0_0_40px_rgba(103,211,145,0.72),0_0_85px_rgba(103,211,145,0.26)] motion-safe:animate-[pulse_3s_ease-in-out_infinite]"
                >
                  Request a Quote
                </Link>

                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-md border border-[#334155] bg-[#0D1521] px-6 py-3 text-sm font-medium tracking-normal text-[#E2E8F0] transition-all duration-300 hover:border-[#64748B] hover:bg-[#111C31]"
                >
                  View Services
                </a>
              </div>
            </div>
          </div>

          {/* NajmX Infrastructure */}
          <div className="mt-12 rounded-xl border border-[#253146] bg-[#090F18]/95 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.32)] sm:mt-16 sm:p-8 lg:p-10">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#B8944A]">
                NajmX Infrastructure
              </p>

              <h2 className="mt-3 text-2xl font-medium leading-[1.25] tracking-normal text-[#F3F5F7]">
                Call Center Environment
              </h2>
            </div>

            <div className="mt-7 grid overflow-hidden rounded-lg border border-[#202B3D] bg-[#0C141F] md:grid-cols-2 lg:grid-cols-3">
              {infrastructureItems.map((item, index) => (
                <div
                  key={item.title}
                  className={`px-5 py-4 ${
                    index < infrastructureItems.length - 1
                      ? "border-b border-[#202B3D]"
                      : ""
                  } md:nth-[odd]:border-r md:nth-[3n]:border-r-0 lg:border-b-0 lg:nth-[3n+1]:border-r lg:nth-[3n+2]:border-r`}
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#B8944A]" />

                    <div>
                      <h3 className="text-sm font-medium leading-5 text-[#F3F5F7]">
                        {item.title}
                      </h3>

                      <p className="mt-1.5 text-xs font-normal leading-5 text-[#929DAB]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICES
      ========================================================= */}
      <section
        id="services"
        className="border-b border-[#202B3D] bg-[#090F18]"
      >
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#B8944A]">
              Services
            </p>

            <h2 className="mt-3 text-3xl font-medium leading-[1.2] tracking-normal text-[#F3F5F7] sm:text-4xl">
              Call Center & Voice Services
            </h2>

            <p className="mt-4 text-base font-normal leading-8 text-[#AEB6C2]">
              Everything you need to deploy, run, and manage your calling
              infrastructure.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-xl border border-[#202B3D] bg-[#0D1521] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.28)] transition-all duration-300 hover:-translate-y-1 hover:border-[#334155] hover:bg-[#101A29]"
              >
                <h3 className="text-lg font-medium leading-7 tracking-normal text-[#F3F5F7]">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm font-normal leading-7 text-[#929DAB]">
                  {service.description}
                </p>

                <div className="mt-5">
                  <Link
                    href="/get-started"
                    className="text-sm font-medium text-[#B8944A] transition-colors hover:text-[#D0AE69]"
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
          WHY NAJMX + WHAT WE HANDLE
      ========================================================= */}
      <section className="border-b border-[#202B3D] bg-[#070B13]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#B8944A]">
                Why NajmX
              </p>

              <h2 className="mt-3 text-3xl font-medium leading-[1.2] tracking-normal text-[#F3F5F7] sm:text-4xl">
                Built Around Your Calling Infrastructure
              </h2>

              <p className="mt-4 max-w-xl text-base font-normal leading-8 text-[#AEB6C2]">
                Your dialer, agents, traffic, SIP connectivity, and business
                requirements determine the right setup.
              </p>

              <p className="mt-3 max-w-xl text-base font-normal leading-8 text-[#AEB6C2]">
                We help you deploy the infrastructure, connect the voice
                services, and keep everything running.
              </p>

              <div className="mt-7 max-w-xl space-y-2">
                {whyNajmXPoints.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-md px-1 py-1"
                  >
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#67D391]" />

                    <p className="text-sm font-normal leading-6 text-[#DDE2E8]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-[#253146] bg-[#0C141F] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.28)] sm:p-8">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#B8944A]">
                What We Handle
              </p>

              <h2 className="mt-3 text-3xl font-medium leading-[1.2] tracking-normal text-[#F3F5F7] sm:text-4xl">
                From Server to Calls
              </h2>

              <p className="mt-4 text-base font-normal leading-8 text-[#AEB6C2]">
                Tell us how your operation works and what you need to run.
              </p>

              <div className="mt-6 divide-y divide-[#202B3D] border-y border-[#202B3D]">
                {handledServices.map((service) => (
                  <div key={service.title} className="flex gap-4 py-3.5">
                    <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#B8944A]" />

                    <div className="min-w-0">
                      <h3 className="text-base font-medium leading-6 text-[#F3F5F7]">
                        {service.title}
                      </h3>

                      <p className="mt-1 text-sm font-normal leading-7 text-[#929DAB]">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROCESS
      ========================================================= */}
      <section className="border-b border-[#202B3D] bg-[#090F18]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#B8944A]">
              Process
            </p>

            <h2 className="mt-3 text-3xl font-medium leading-[1.2] tracking-normal text-[#F3F5F7] sm:text-4xl">
              From Requirements to Launch
            </h2>

            <p className="mt-4 text-base font-normal leading-8 text-[#AEB6C2]">
              A straightforward process to get your calling infrastructure
              running.
            </p>
          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-7 lg:gap-0">
            {processSteps.map((step, index) => (
              <div key={step} className="group relative lg:px-3">
                <div className="flex items-start gap-4 lg:flex-col lg:items-center">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#334155] bg-[#0D1521] text-xs font-medium text-[#929DAB] shadow-[0_0_0_rgba(103,211,145,0)] transition-all duration-300 group-hover:h-10 group-hover:w-10 group-hover:border-[#67D391] group-hover:text-[#67D391] group-hover:shadow-[0_0_20px_rgba(103,211,145,0.24)]">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <p className="flex-1 pt-1 text-sm font-normal leading-6 text-[#929DAB] transition-all duration-300 group-hover:text-[#F3F5F7] lg:hidden">
                    {step}
                  </p>

                  {index < processSteps.length - 1 && (
                    <div className="absolute left-[calc(50%+22px)] right-[-4px] top-[18px] hidden items-center lg:flex">
                      <div className="h-px flex-1 bg-[#334155] transition-colors duration-300 group-hover:bg-[#67D391]" />

                      <span className="ml-2 shrink-0 text-sm leading-none text-[#64748B] transition-colors duration-300 group-hover:text-[#67D391]">
                        →
                      </span>
                    </div>
                  )}

                  <p className="mt-3 hidden max-w-[150px] text-center text-xs font-normal leading-5 text-[#929DAB] transition-all duration-300 group-hover:text-[#F3F5F7] lg:block">
                    {step}
                  </p>
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
          <div className="rounded-xl border border-[#253146] bg-[#0C141F] p-8 shadow-[0_22px_60px_rgba(0,0,0,0.32)] sm:p-10 lg:p-12">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#B8944A]">
              Request guidance
            </p>

            <h2 className="mt-3 max-w-3xl text-3xl font-medium leading-[1.2] tracking-normal text-[#F3F5F7] sm:text-4xl">
              Planning a New Call Center Setup?
            </h2>

            <p className="mt-4 max-w-2xl text-base font-normal leading-8 text-[#AEB6C2]">
              Tell us about your business, agents, calling requirements, and
              timeline.
            </p>

            <p className="mt-2 max-w-2xl text-base font-normal leading-8 text-[#AEB6C2]">
              We&apos;ll review your requirements and discuss the appropriate
              setup.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/get-started"
                className="inline-flex items-center justify-center rounded-md border border-[#67D391] bg-[#67D391] px-6 py-3 text-sm font-semibold text-[#06100B] shadow-[0_0_18px_rgba(103,211,145,0.24)] transition-all duration-300 hover:border-[#8AE0AA] hover:bg-[#8AE0AA] hover:shadow-[0_0_40px_rgba(103,211,145,0.72),0_0_85px_rgba(103,211,145,0.26)] motion-safe:animate-[pulse_3s_ease-in-out_infinite]"
              >
                Request a Quote
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-[#334155] bg-[#0D1521] px-6 py-3 text-sm font-medium text-[#E2E8F0] transition-all duration-300 hover:border-[#64748B] hover:bg-[#111C31]"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FAQ — FINAL SECTION
      ========================================================= */}
      <section
        id="faq"
        className="border-t border-[#202B3D] bg-[#090F18]"
      >
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            {/* FAQ Intro */}
            <div className="lg:sticky lg:top-32 lg:self-start">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#B8944A]">
                FAQ
              </p>

              <h2 className="mt-3 text-3xl font-medium leading-[1.15] tracking-normal text-[#F3F5F7] sm:text-4xl lg:text-5xl">
                Questions,
                <br />
                answered.
              </h2>

              <p className="mt-5 max-w-md text-base font-normal leading-8 text-[#AEB6C2]">
                A few things businesses usually want to know before getting
                started with NajmX.
              </p>

              <div className="mt-8 flex items-center gap-3">
                <span className="h-px w-10 bg-[#B8944A]" />
                <span className="text-xs font-medium uppercase tracking-[0.16em] text-[#64748B]">
                  NajmX
                </span>
              </div>
            </div>

            {/* FAQ Items */}
            <div className="space-y-3">
              {faqItems.map((item) => (
                <details
                  key={item.question}
                  className="group overflow-hidden rounded-xl border border-[#253146] bg-[#0C141F] transition-all duration-300 hover:border-[#334155] open:border-[#B8944A]/50 open:bg-[#0D1521]"
                >
                  <summary
                    className="flex cursor-pointer list-none items-center gap-5 px-5 py-5 sm:px-6 sm:py-6"
                    style={{ listStyle: "none" }}
                  >
                    <span className="hidden shrink-0 text-xs font-medium tracking-[0.12em] text-[#B8944A] sm:block">
                      {item.number}
                    </span>

                    <span className="flex-1 text-base font-medium leading-6 text-[#F3F5F7] sm:text-lg">
                      {item.question}
                    </span>

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#334155] text-[#B8944A] transition-all duration-300 group-hover:border-[#B8944A]/60 group-open:rotate-45 group-open:border-[#B8944A] group-open:bg-[#B8944A]/10">
                      <span className="text-lg font-light leading-none">
                        +
                      </span>
                    </span>
                  </summary>

                  <div className="px-5 pb-6 sm:px-6 sm:pb-7">
                    <div className="ml-0 border-l border-[#334155] pl-5 sm:ml-[3.25rem]">
                      <p className="max-w-2xl text-sm font-normal leading-7 text-[#929DAB]">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

