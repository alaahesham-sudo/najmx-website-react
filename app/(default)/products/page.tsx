import type { Metadata } from "next";
import PageIllustration from "@/components/page-illustration";

export const metadata: Metadata = {
  title: "NajmX - VICIdial, VoIP & Call Center Infrastructure",
  description:
    "Managed VICIdial hosting, VoIP/SIP connectivity, DIDs, PBX systems, and server infrastructure for call centers and businesses worldwide.",
};

const services = [
  {
    title: "VICIdial & Dialer Hosting",
    description:
      "Managed VICIdial hosting with installation, configuration, campaign setup, SIP integration, monitoring, and ongoing technical support.",
    action: "Discuss VICIdial",
  },
  {
    title: "VoIP & SIP",
    description:
      "SIP connectivity for inbound and outbound calling, with routing, carrier integration, and call-quality support.",
    action: "Discuss Voice Services",
  },
  {
    title: "DID Numbers",
    description:
      "Inbound and outbound telephone numbers with provisioning, routing, and integration with your calling platform.",
    action: "Get DID Numbers",
  },
  {
    title: "Managed Servers",
    description:
      "Dedicated server infrastructure for VICIdial, PBX, and other business applications, with setup, monitoring, maintenance, and support.",
    action: "Discuss Server Hosting",
  },
  {
    title: "PBX & Call Center Systems",
    description:
      "PBX and call-center systems configured around your business requirements, including IVR, call flows, extensions, and integrations.",
    action: "Discuss Your Setup",
  },
  {
    title: "Technical Support",
    description:
      "Help with VICIdial, PBX, SIP, servers, routing, and call-quality issues.",
    action: "Request Technical Help",
  },
];

const handledServices = [
  {
    title: "VICIdial",
    description: "Dialer installation, campaigns, IVR, call flows",
  },
  {
    title: "VoIP & SIP",
    description: "SIP connectivity, routing, carriers, call quality",
  },
  {
    title: "PBX",
    description: "Extensions, inbound routing, IVR and business calling",
  },
  {
    title: "Servers",
    description: "Linux infrastructure, deployment, monitoring and maintenance",
  },
];

const processSteps = [
  "Understand your requirements",
  "Plan the appropriate infrastructure",
  "Deploy and configure the server and systems",
  "Connect SIP and DIDs",
  "Configure campaigns, IVR and call flows",
  "Test everything before launch",
  "Provide ongoing support and maintenance",
];

export default function ProductsPage() {
  return (
    <>
      <PageIllustration />

      <main>
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 pt-20 pb-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div data-aos="fade-up">
              <div className="mb-5 inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
                <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                  NajmX
                </span>
              </div>

              <h1 className="mb-6 animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-2 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
                VICIdial, VoIP & Call Center Infrastructure
              </h1>

              <p className="mb-8 max-w-2xl text-lg text-indigo-200/65">
                Managed VICIdial hosting, VoIP/SIP connectivity, DIDs, PBX
                systems, and server infrastructure for call centers and
                businesses worldwide.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="btn-sm bg-indigo-500 text-white shadow-sm hover:bg-indigo-600"
                >
                  Request a Quote
                </a>

                <a
                  href="#services"
                  className="btn-sm bg-gray-800 text-gray-200 hover:bg-gray-700"
                >
                  View Services
                </a>
              </div>
            </div>

            <div
              className="relative"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <div className="rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900/80 via-gray-800/40 to-gray-900/80 p-6 shadow-2xl">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <div className="text-sm text-indigo-200/50">
                      NajmX Infrastructure
                    </div>
                    <div className="mt-1 text-xl font-semibold text-gray-200">
                      Call Center Environment
                    </div>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/20">
                    <svg
                      className="h-5 w-5 text-indigo-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 3v18m9-9H3"
                      />
                    </svg>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    "VICIdial / Dialer",
                    "SIP / Voice Connectivity",
                    "DIDs & Routing",
                    "PBX / Call Flows",
                    "Servers & Infrastructure",
                    "Monitoring & Support",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center gap-4 rounded-lg border border-gray-800 bg-gray-900/60 px-4 py-3"
                    >
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-500/15 text-xs text-indigo-300">
                        {index + 1}
                      </div>
                      <span className="text-sm text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section
          id="services"
          className="mx-auto max-w-6xl px-4 sm:px-6 py-20"
        >
          <div className="mb-14 text-center" data-aos="fade-up">
            <div className="mb-4 inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Services
              </span>
            </div>

            <h2 className="mb-4 font-nacelle text-3xl font-semibold text-gray-200 md:text-4xl">
              Call Center & Voice Services
            </h2>

            <p className="mx-auto max-w-2xl text-lg text-indigo-200/65">
              Everything you need to run and manage your calling
              infrastructure.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900/60 via-gray-800/25 to-gray-900/60 p-6 transition-all hover:border-indigo-500/30"
                data-aos="fade-up"
                data-aos-delay={index * 75}
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-indigo-500/15">
                  <span className="text-sm font-semibold text-indigo-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mb-3 text-lg font-semibold text-gray-200">
                  {service.title}
                </h3>

                <p className="mb-5 text-sm leading-6 text-indigo-200/60">
                  {service.description}
                </p>

                <a
                  href="/contact"
                  className="text-sm font-medium text-indigo-400 transition-colors hover:text-indigo-300"
                >
                  {service.action} →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Why NajmX */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
          <div
            className="grid gap-12 lg:grid-cols-2 lg:items-center"
            data-aos="fade-up"
          >
            <div>
              <div className="mb-4 inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
                <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                  Why NajmX
                </span>
              </div>

              <h2 className="mb-5 font-nacelle text-3xl font-semibold text-gray-200 md:text-4xl">
                Built Around Your Calling Infrastructure
              </h2>

              <p className="max-w-xl text-lg leading-8 text-indigo-200/65">
                Your dialer, agents, traffic, SIP connectivity, and business
                requirements determine the right setup.
              </p>

              <p className="mt-4 max-w-xl text-lg leading-8 text-indigo-200/65">
                We help you deploy the infrastructure, connect the voice
                services, and keep everything running.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "VICIdial installation and configuration",
                "SIP and DID integration",
                "Dedicated server infrastructure",
                "System monitoring and maintenance",
                "Technical support",
                "Scalable infrastructure for growing operations",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-lg border border-gray-800 bg-gray-900/40 px-5 py-4"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-500/15 text-indigo-300">
                    ✓
                  </span>
                  <span className="text-sm text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Handle */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
          <div className="mb-14 text-center" data-aos="fade-up">
            <div className="mb-4 inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                What We Handle
              </span>
            </div>

            <h2 className="mb-4 font-nacelle text-3xl font-semibold text-gray-200 md:text-4xl">
              From Server to Calls
            </h2>

            <p className="mx-auto max-w-2xl text-lg text-indigo-200/65">
              Tell us how your operation works and what you need to run.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {handledServices.map((service, index) => (
              <div
                key={service.title}
                className="rounded-xl border border-gray-800 bg-gray-900/40 p-6"
                data-aos="fade-up"
                data-aos-delay={index * 75}
              >
                <h3 className="mb-3 text-lg font-semibold text-gray-200">
                  {service.title}
                </h3>

                <p className="text-sm leading-6 text-indigo-200/60">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
          <div className="mb-14 text-center" data-aos="fade-up">
            <div className="mb-4 inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Process
              </span>
            </div>

            <h2 className="mb-4 font-nacelle text-3xl font-semibold text-gray-200 md:text-4xl">
              From Requirements to Launch
            </h2>

            <p className="mx-auto max-w-2xl text-lg text-indigo-200/65">
              A straightforward process to get your calling infrastructure
              running.
            </p>
          </div>

          <div className="mx-auto max-w-4xl space-y-4">
            {processSteps.map((step, index) => (
              <div
                key={step}
                className="flex items-center gap-4 rounded-lg border border-gray-800 bg-gray-900/40 px-5 py-4"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-500/15 text-sm font-semibold text-indigo-300">
                  {index + 1}
                </div>

                <span className="text-sm text-gray-300">{step}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
          <div
            className="rounded-2xl border border-gray-800 bg-gradient-to-br from-indigo-500/10 via-gray-900/60 to-gray-900/80 px-6 py-12 text-center md:px-12"
            data-aos="fade-up"
          >
            <h2 className="mb-4 font-nacelle text-3xl font-semibold text-gray-200 md:text-4xl">
              Planning a New Call Center Setup?
            </h2>

            <p className="mx-auto mb-8 max-w-2xl text-lg text-indigo-200/65">
              Tell us about your business, agents, calling requirements, and
              timeline.
            </p>

            <p className="mx-auto mb-8 max-w-2xl text-indigo-200/60">
              We&apos;ll review your requirements and discuss the appropriate
              setup.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="btn-sm bg-indigo-500 text-white shadow-sm hover:bg-indigo-600"
              >
                Request a Quote
              </a>

              <a
                href="/contact"
                className="btn-sm bg-gray-800 text-gray-200 hover:bg-gray-700"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}