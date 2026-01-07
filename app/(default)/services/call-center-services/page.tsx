import type { Metadata } from "next";
import Starfield from "@/components/starfield";
import PageIllustration from "@/components/page-illustration";

export const metadata: Metadata = {
  title: "Contact Center Operations - Enterprise Solutions | NajmX",
  description: "Complete contact center solutions with advanced dialers, ACD, and comprehensive analytics for customer service excellence.",
};

export default function CallCenterServicesPage() {
  return (
    <>
      <Starfield />
      <PageIllustration />
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-32 pb-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Contact Center Operations
              </span>
            </div>
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
              Enterprise Contact Center Platform
            </h1>
            <p className="text-lg text-indigo-200/65 max-w-3xl mx-auto">
              Comprehensive call center solutions with predictive dialing, ACD, workforce management, and real-time analytics.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 mb-12">
            <div className="rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-8 border border-gray-800">
              <h2 className="font-nacelle text-2xl font-semibold text-gray-200 mb-4">Predictive & Power Dialer</h2>
              <p className="text-indigo-200/65 mb-4">
                Advanced dialing systems for outbound campaigns:
              </p>
              <ul className="space-y-2 text-indigo-200/65">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Predictive dialing with adaptive algorithms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Power dialer for manual control</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Call list management and import/export</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Compliance with TCPA and Do-Not-Call regulations</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-8 border border-gray-800">
              <h2 className="font-nacelle text-2xl font-semibold text-gray-200 mb-4">ACD & Queue Management</h2>
              <p className="text-indigo-200/65 mb-4">
                Automatic Call Distribution with intelligent routing:
              </p>
              <ul className="space-y-2 text-indigo-200/65">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Skill-based routing and agent matching</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Priority queues and VIP handling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Estimated wait time and callback options</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Multi-channel support (voice, chat, email)</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-8 border border-gray-800">
              <h2 className="font-nacelle text-2xl font-semibold text-gray-200 mb-4">Workforce Management</h2>
              <p className="text-indigo-200/65 mb-4">
                Tools for optimizing agent performance:
              </p>
              <ul className="space-y-2 text-indigo-200/65">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Real-time agent monitoring and coaching</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Schedule optimization and forecasting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Performance metrics and KPI tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Quality assurance and call scoring</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-8 border border-gray-800">
              <h2 className="font-nacelle text-2xl font-semibold text-gray-200 mb-4">Analytics & Reporting</h2>
              <p className="text-indigo-200/65 mb-4">
                Comprehensive insights and reporting:
              </p>
              <ul className="space-y-2 text-indigo-200/65">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Real-time dashboards and wallboards</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Historical reports and trend analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Custom report builder and scheduling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Integration with BI tools and data warehouses</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

