import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About NajmX | Call Center & Telecommunications Infrastructure",

  description:
    "Learn about NajmX and our approach to VICIdial, VoIP/SIP, PBX, DID, server infrastructure, custom business solutions, and technical support for businesses worldwide.",

  alternates: {
    canonical: "https://najmx.net/about",
  },

  openGraph: {
    title: "About NajmX | Call Center & Telecommunications Infrastructure",
    description:
      "Learn about NajmX, the infrastructure services we provide, and how we support call centers and businesses worldwide.",
    url: "https://najmx.net/about",
    type: "website",
  },
};

export default function AboutPage() {
return (
<main
className="bg-[#070B13] text-[#F3F5F7]"
style={{
fontFamily:
'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
}}
>
{/* HERO */} <section className="border-b border-[#202B3D] bg-[#070B13]"> <div className="mx-auto max-w-7xl px-6 pb-16 pt-28 sm:px-8 lg:px-10 lg:pb-20 lg:pt-36"> <div className="mx-auto max-w-5xl text-center"> <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#B8944A] sm:text-base">
About NajmX </p>

        <h1 className="mt-4 text-5xl font-semibold leading-[1.08] tracking-[-0.015em] text-[#F3F5F7] sm:text-6xl lg:text-7xl">
          Call Center, Voice & Infrastructure Services
        </h1>

        <p className="mx-auto mt-5 max-w-3xl text-base font-normal leading-8 text-[#AEB6C2] sm:text-lg">
          NajmX provides VICIdial, VoIP/SIP, PBX, DID, server, and
          business infrastructure services for call centers and businesses
          worldwide.
        </p>

        <p className="mx-auto mt-2 max-w-3xl text-base font-normal leading-8 text-[#AEB6C2] sm:text-lg">
          We help businesses deploy, manage, and support the systems behind
          their calling operations.
        </p>
      </div>
    </div>
  </section>

  {/* WHAT WE DO */}
  <section className="border-b border-[#202B3D] bg-[#090F18]">
    <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="max-w-xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#B8944A] sm:text-base">
            What We Do
          </p>

          <h2 className="mt-4 text-3xl font-medium leading-[1.2] text-[#F3F5F7] sm:text-4xl">
            The Infrastructure Behind Your Calls
          </h2>

          <p className="mt-4 text-base font-normal leading-8 text-[#AEB6C2]">
            A reliable calling operation needs more than a dialer or phone
            system. It also needs the right server infrastructure, voice
            connectivity, configuration, and ongoing technical support.
          </p>

          <p className="mt-2 text-base font-normal leading-8 text-[#AEB6C2]">
            We provide the services needed to deploy and maintain that
            infrastructure.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              title: "VICIdial & Dialer Hosting",
              description:
                "Managed VICIdial hosting, installation, configuration, campaign setup, SIP integration, monitoring, and maintenance.",
            },
            {
              title: "VoIP & SIP",
              description:
                "SIP connectivity, inbound and outbound calling, voice routing, carrier integration, and technical support.",
            },
            {
              title: "PBX & Call Center Systems",
              description:
                "PBX deployment, extensions, IVR, call flows, routing, and call-center configuration.",
            },
            {
              title: "DID Numbers",
              description:
                "DID provisioning, inbound routing, and integration with VICIdial, PBX, and other supported systems.",
            },
            {
              title: "Managed Servers",
              description:
                "Dedicated server deployment, Linux configuration, monitoring, maintenance, and technical support.",
            },
            {
              title: "Custom Business Solutions",
              description:
                "Web portals, dashboards, reporting tools, API integrations, workflow automation, and custom tools built around your existing systems.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-[#202B3D] bg-[#0D1521] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.28)] transition-all duration-300 hover:-translate-y-1 hover:border-[#334155] hover:bg-[#101A29]"
            >
              <h3 className="text-lg font-medium leading-7 text-[#F3F5F7]">
                {item.title}
              </h3>

              <p className="mt-3 text-sm font-normal leading-7 text-[#929DAB]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>

  {/* WHO WE HELP + OUR STORY */}
  <section className="border-b border-[#202B3D] bg-[#070B13]">
    <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
      <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#B8944A] sm:text-base">
            Who We Help
          </p>

          <h2 className="mt-4 text-3xl font-medium leading-[1.2] text-[#F3F5F7] sm:text-4xl">
            Who We Help
          </h2>

          <p className="mt-4 max-w-xl text-base font-normal leading-8 text-[#AEB6C2]">
            We work with businesses that rely on calling and communication
            infrastructure, including:
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {[
              "Call center owners",
              "BPO teams",
              "Sales and support teams",
              "IT administrators",
              "Businesses running VICIdial or other dialers",
              "Businesses using PBX and VoIP systems",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center rounded-lg border border-[#202B3D] bg-[#0D1521] p-4 text-sm font-normal text-[#DDE2E8]"
              >
                <span className="mr-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#67D391]" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-[#202B3D] bg-[#0D1521] p-7 shadow-[0_18px_50px_rgba(0,0,0,0.28)] lg:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#B8944A] sm:text-base">
            Our Story
          </p>

          <h2 className="mt-4 text-3xl font-medium leading-[1.2] text-[#F3F5F7] sm:text-4xl">
            Built Around Calling Infrastructure
          </h2>

          <div className="mt-6 space-y-4 text-base font-normal leading-8 text-[#AEB6C2]">
            <p>
              NajmX was founded with a focus on providing reliable
              telecommunications and IT infrastructure to businesses that
              depend on their calling systems.
            </p>

            <p>
              Over time, our services have grown around the needs of call
              centers and businesses — from VICIdial and VoIP connectivity
              to PBX systems, servers, DIDs, and custom business tools.
            </p>

            <p>
              Today, we continue to focus on practical infrastructure,
              reliable service, and ongoing technical support.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* HOW WE WORK + OUR APPROACH */}
  <section className="border-b border-[#202B3D] bg-[#090F18]">
    <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#B8944A] sm:text-base">
            How We Work
          </p>

          <h2 className="mt-4 text-3xl font-medium leading-[1.2] text-[#F3F5F7] sm:text-4xl">
            From Requirements to Ongoing Support
          </h2>

          <div className="mt-8 space-y-6">
            {[
              {
                number: "01",
                title: "Start With Your Requirements",
                description:
                  "We first understand your current setup, number of users or agents, calling requirements, and what you need to achieve.",
              },
              {
                number: "02",
                title: "Plan the Infrastructure",
                description:
                  "We determine the appropriate server resources, voice connectivity, software, and services required for the setup.",
              },
              {
                number: "03",
                title: "Deploy & Configure",
                description:
                  "We install and configure the required systems, connect SIP and DIDs, and prepare the environment for operation.",
              },
              {
                number: "04",
                title: "Test Everything",
                description:
                  "We test calling, routing, system functionality, and the main requirements before handover.",
              },
              {
                number: "05",
                title: "Ongoing Support",
                description:
                  "We provide monitoring, maintenance, troubleshooting, and technical support to keep your systems running.",
              },
            ].map((item) => (
              <div key={item.number} className="flex gap-5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-[#334155] bg-[#111C2B]">
                  <span className="text-xs font-medium text-[#B8944A]">
                    {item.number}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-medium leading-7 text-[#F3F5F7]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm font-normal leading-7 text-[#929DAB]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#B8944A] sm:text-base">
            Our Approach
          </p>

          <h2 className="mt-4 text-3xl font-medium leading-[1.2] text-[#F3F5F7] sm:text-4xl">
            Practical, Clear & Focused
          </h2>

          <div className="mt-8 space-y-4">
            {[
              {
                title: "Clear Communication",
                description:
                  "We keep requirements, services, and responsibilities clear from the beginning.",
              },
              {
                title: "Practical Solutions",
                description:
                  "We focus on the infrastructure and tools your business actually needs instead of unnecessary complexity.",
              },
              {
                title: "Ongoing Maintenance",
                description:
                  "We handle system maintenance, updates, troubleshooting, and infrastructure support.",
              },
              {
                title: "Focused Troubleshooting",
                description:
                  "We investigate the affected system, server, connection, routing, or call path to identify and resolve issues.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-[#202B3D] bg-[#0D1521] p-6"
              >
                <h3 className="text-lg font-medium leading-7 text-[#F3F5F7]">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm font-normal leading-7 text-[#929DAB]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* GLOBAL SERVICE */}
  <section className="border-b border-[#202B3D] bg-[#070B13]">
    <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#B8944A] sm:text-base">
            Global Service
          </p>

          <h2 className="mt-4 text-3xl font-medium leading-[1.2] text-[#F3F5F7] sm:text-4xl">
            Global Service
          </h2>
        </div>

        <div className="text-base font-normal leading-8 text-[#AEB6C2]">
          <p>
            NajmX serves businesses and call centers worldwide.
          </p>

          <p className="mt-2">
            Our infrastructure and support are designed to serve businesses
            operating across different markets and time zones.
          </p>
        </div>
      </div>
    </div>
  </section>

  {/* CTA */}
  <section className="bg-[#090F18]">
    <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
      <div className="text-center">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#B8944A] sm:text-base">
          Get Started
        </p>

        <h2 className="mt-4 text-3xl font-medium leading-[1.2] text-[#F3F5F7] sm:text-4xl">
          Need Help With Your Calling Infrastructure?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-base font-normal leading-8 text-[#AEB6C2]">
          Tell us about your current setup, requirements, and what you need
          to build or improve.
        </p>

        <p className="mx-auto mt-2 max-w-2xl text-base font-normal leading-8 text-[#AEB6C2]">
          We'll review your requirements and discuss the appropriate
          services for your business.
        </p>

        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/get-started"
            className="inline-flex items-center justify-center rounded-md border border-[#67D391] bg-[#67D391] px-6 py-3 text-sm font-semibold text-[#06100B] shadow-[0_0_18px_rgba(103,211,145,0.24)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.025] hover:border-[#8AE0AA] hover:bg-[#8AE0AA] hover:shadow-[0_0_40px_rgba(103,211,145,0.72),0_0_85px_rgba(103,211,145,0.26)] motion-safe:animate-[pulse_3s_ease-in-out_infinite]"
          >
            Request a Quote
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md border border-[#334155] bg-[#0D1521] px-6 py-3 text-sm font-medium text-[#E2E8F0] transition-all duration-300 hover:-translate-y-1 hover:border-[#64748B] hover:bg-[#111C31]"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  </section>
</main>

);
}
