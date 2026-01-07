import type { Metadata } from "next";
import Starfield from "@/components/starfield";
import PageIllustration from "@/components/page-illustration";

export const metadata: Metadata = {
  title: "NajmNetwork - Telecom Consultancy & Integration | NajmX",
  description: "Expert telecom consultancy, network architecture, StarSync™ CRM connectivity, and AI-powered solutions.",
};

export default function NajmNetworkPage() {
  return (
    <>
      <Starfield />
      <PageIllustration />
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-32 pb-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                NajmNetwork
              </span>
            </div>
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
              Enterprise Network Consultancy & Integration
            </h1>
            <p className="text-lg text-indigo-200/65 max-w-3xl mx-auto">
              Expert telecommunications consultancy, network architecture design, and seamless system integration services.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 mb-12">
            <div className="rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-8 border border-gray-800">
              <h2 className="font-nacelle text-2xl font-semibold text-gray-200 mb-4">Network Architecture Design</h2>
              <p className="text-indigo-200/65 mb-4">
                Comprehensive network planning and optimization:
              </p>
              <ul className="space-y-2 text-indigo-200/65">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>VoIP infrastructure design and deployment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Network topology optimization for performance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Redundancy and failover architecture planning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Security architecture and threat modeling</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-8 border border-gray-800">
              <h2 className="font-nacelle text-2xl font-semibold text-gray-200 mb-4">StarSync™ CRM Integration</h2>
              <p className="text-indigo-200/65 mb-4">
                Seamless connectivity between telecom and business systems:
              </p>
              <ul className="space-y-2 text-indigo-200/65">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Real-time data synchronization between platforms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Bidirectional API integration with major CRMs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Custom workflow automation and triggers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Unified contact and call history management</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-8 border border-gray-800">
              <h2 className="font-nacelle text-2xl font-semibold text-gray-200 mb-4">AI-Powered Solutions</h2>
              <p className="text-indigo-200/65 mb-4">
                Intelligent automation and analytics integration:
              </p>
              <ul className="space-y-2 text-indigo-200/65">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>AI agent deployment and configuration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Predictive analytics for network optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Automated monitoring and alerting systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Machine learning for traffic pattern analysis</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-8 border border-gray-800">
              <h2 className="font-nacelle text-2xl font-semibold text-gray-200 mb-4">Migration & Support</h2>
              <p className="text-indigo-200/65 mb-4">
                Complete migration services and ongoing support:
              </p>
              <ul className="space-y-2 text-indigo-200/65">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Legacy system migration planning and execution</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>24/7 technical support and monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Performance optimization and tuning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Training and documentation for your team</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-indigo-900/20 via-indigo-800/10 to-gray-900/50 p-8 border border-indigo-800/30 text-center">
            <h2 className="font-nacelle text-2xl font-semibold text-gray-200 mb-4">Service Offerings</h2>
            <div className="grid gap-6 md:grid-cols-3 text-left">
              <div className="group hover:scale-105 transition-transform">
                <h3 className="text-indigo-400 font-semibold mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
                  Strategic Consultancy
                </h3>
                <p className="text-indigo-200/65 text-sm">Comprehensive network design, architecture review, and optimization strategies</p>
              </div>
              <div className="group hover:scale-105 transition-transform">
                <h3 className="text-indigo-400 font-semibold mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
                  System Integration
                </h3>
                <p className="text-indigo-200/65 text-sm">Seamless connectivity with CRM, ERP, and custom business systems</p>
              </div>
              <div className="group hover:scale-105 transition-transform">
                <h3 className="text-indigo-400 font-semibold mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
                  Ongoing Support
                </h3>
                <p className="text-indigo-200/65 text-sm">24/7 monitoring, proactive maintenance, and comprehensive training</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

