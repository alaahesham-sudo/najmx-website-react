import type { Metadata } from "next";
import Starfield from "@/components/starfield";
import PageIllustration from "@/components/page-illustration";

export const metadata: Metadata = {
  title: "VoIP - Enterprise Voice Solutions | NajmX",
  description: "Comprehensive VoIP solutions for businesses of all sizes. HD voice quality, advanced features, and reliable infrastructure.",
};

export default function VoIPSolutionsPage() {
  return (
    <>
      <Starfield />
      <PageIllustration />
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-32 pb-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                VoIP
              </span>
            </div>
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
              Enterprise VoIP Solutions
            </h1>
            <p className="text-lg text-indigo-200/65 max-w-3xl mx-auto">
              Complete VoIP solutions with carrier-grade infrastructure, intelligent routing, and enterprise features.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 mb-12">
            <div className="rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-8 border border-gray-800">
              <h2 className="font-nacelle text-2xl font-semibold text-gray-200 mb-4">Hosted PBX</h2>
              <p className="text-indigo-200/65 mb-4">
                Cloud-based private branch exchange with enterprise features:
              </p>
              <ul className="space-y-2 text-indigo-200/65">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Unlimited extensions and virtual numbers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Auto-attendant and call routing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Conference calling and video meetings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Mobile app for iOS and Android</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-8 border border-gray-800">
              <h2 className="font-nacelle text-2xl font-semibold text-gray-200 mb-4">SIP Trunking</h2>
              <p className="text-indigo-200/65 mb-4">
                Direct SIP connectivity for existing PBX systems:
              </p>
              <ul className="space-y-2 text-indigo-200/65">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Scalable concurrent call capacity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>DID number porting and management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Failover and redundancy options</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Compatible with leading PBX platforms and systems</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-8 border border-gray-800">
              <h2 className="font-nacelle text-2xl font-semibold text-gray-200 mb-4">Call Features</h2>
              <p className="text-indigo-200/65 mb-4">
                Advanced calling features for productivity:
              </p>
              <ul className="space-y-2 text-indigo-200/65">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Call forwarding, transfer, and hold</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Voicemail with email notifications</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Call recording and monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Presence and availability management</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-8 border border-gray-800">
              <h2 className="font-nacelle text-2xl font-semibold text-gray-200 mb-4">Global Coverage</h2>
              <p className="text-indigo-200/65 mb-4">
                Worldwide connectivity and local presence:
              </p>
              <ul className="space-y-2 text-indigo-200/65">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>DID numbers in 100+ countries</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Local and toll-free number options</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>International calling at competitive rates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Compliance with local regulations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

