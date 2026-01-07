import type { Metadata } from "next";
import Starfield from "@/components/starfield";
import PageIllustration from "@/components/page-illustration";

export const metadata: Metadata = {
  title: "NajmVoIP - Premium VoIP Solutions | NajmX",
  description: "Premium VoIP with StarRoute™ intelligent routing. HD call quality, advanced IVR, call center integration, and StarDash™ real-time analytics.",
};

export default function NajmVoIPPage() {
  return (
    <>
      <Starfield />
      <PageIllustration />
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-32 pb-20">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                NajmVoIP
              </span>
            </div>
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
              Premium VoIP Communication Platform
            </h1>
            <p className="text-lg text-indigo-200/65 max-w-3xl mx-auto">
              Enterprise-grade voice over IP solution with intelligent routing, HD quality, and comprehensive analytics.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 mb-12">
            <div className="rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-8 border border-gray-800 hover:border-indigo-500/30 transition-all hover:shadow-xl hover:shadow-indigo-500/10" data-aos="fade-up" data-aos-delay="100">
              <h2 className="font-nacelle text-2xl font-semibold text-gray-200 mb-4">StarRoute™ Intelligent Routing</h2>
              <p className="text-indigo-200/65 mb-4">
                Advanced least-cost routing (LCR) algorithm that automatically selects optimal carrier paths based on:
              </p>
              <ul className="space-y-2 text-indigo-200/65">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Real-time performance monitoring and quality assessment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Intelligent cost optimization across carrier networks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Automatic failover and high-availability management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Geographic optimization for maximum call success rates</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-8 border border-gray-800 hover:border-indigo-500/30 transition-all hover:shadow-xl hover:shadow-indigo-500/10" data-aos="fade-up" data-aos-delay="200">
              <h2 className="font-nacelle text-2xl font-semibold text-gray-200 mb-4">HD Voice Quality</h2>
              <p className="text-indigo-200/65 mb-4">
                Superior audio quality with industry-leading codecs and network optimization:
              </p>
              <ul className="space-y-2 text-indigo-200/65">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Advanced audio processing with industry-leading quality standards</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Intelligent adaptation to network conditions for optimal performance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Echo cancellation and noise reduction</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Wideband audio (16 kHz) for crystal-clear conversations</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-8 border border-gray-800 hover:border-indigo-500/30 transition-all hover:shadow-xl hover:shadow-indigo-500/10" data-aos="fade-up" data-aos-delay="300">
              <h2 className="font-nacelle text-2xl font-semibold text-gray-200 mb-4">Advanced IVR System</h2>
              <p className="text-indigo-200/65 mb-4">
                Intelligent Interactive Voice Response with multi-level menu structures:
              </p>
              <ul className="space-y-2 text-indigo-200/65">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Visual IVR builder with drag-and-drop interface</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Multi-language support with TTS integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Call queuing and priority routing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Integration with CRM and business systems</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-8 border border-gray-800 hover:border-indigo-500/30 transition-all hover:shadow-xl hover:shadow-indigo-500/10" data-aos="fade-up" data-aos-delay="400">
              <h2 className="font-nacelle text-2xl font-semibold text-gray-200 mb-4">StarDash™ Analytics</h2>
              <p className="text-indigo-200/65 mb-4">
                Real-time and historical analytics dashboard for comprehensive insights:
              </p>
              <ul className="space-y-2 text-indigo-200/65">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Live call monitoring and traffic visualization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Cost analysis and billing reports</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Comprehensive quality metrics and performance indicators</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Customizable dashboards and automated alerts</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-indigo-900/20 via-indigo-800/10 to-gray-900/50 p-8 border border-indigo-800/30 text-center" data-aos="fade-up" data-aos-delay="500">
            <h2 className="font-nacelle text-2xl font-semibold text-gray-200 mb-4">Enterprise Capabilities</h2>
            <div className="grid gap-6 md:grid-cols-3 text-left">
              <div className="group hover:scale-105 transition-transform">
                <h3 className="text-indigo-400 font-semibold mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
                  Standards Compliant
                </h3>
                <p className="text-indigo-200/65 text-sm">Industry-standard protocols and interoperability with leading platforms</p>
              </div>
              <div className="group hover:scale-105 transition-transform">
                <h3 className="text-indigo-400 font-semibold mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
                  Audio Excellence
                </h3>
                <p className="text-indigo-200/65 text-sm">Premium voice quality with adaptive optimization for crystal-clear conversations</p>
              </div>
              <div className="group hover:scale-105 transition-transform">
                <h3 className="text-indigo-400 font-semibold mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
                  Seamless Integration
                </h3>
                <p className="text-indigo-200/65 text-sm">Flexible APIs and connectors for easy integration with your existing infrastructure</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

