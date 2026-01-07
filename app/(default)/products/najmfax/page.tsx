import type { Metadata } from "next";
import Starfield from "@/components/starfield";
import PageIllustration from "@/components/page-illustration";

export const metadata: Metadata = {
  title: "NajmFAX - Secure Cloud Fax Solutions | NajmX",
  description: "Cloud fax with StarSecure™ enterprise encryption. HIPAA/GDPR compliant for healthcare, legal, and financial institutions.",
};

export default function NajmFAXPage() {
  return (
    <>
      <Starfield />
      <PageIllustration />
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-32 pb-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                NajmFAX
              </span>
            </div>
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
              Enterprise Cloud Fax Platform
            </h1>
            <p className="text-lg text-indigo-200/65 max-w-3xl mx-auto">
              Secure, compliant cloud fax solution with end-to-end encryption and regulatory adherence for sensitive industries.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 mb-12">
            <div className="rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-8 border border-gray-800">
              <h2 className="font-nacelle text-2xl font-semibold text-gray-200 mb-4">StarSecure™ Encryption</h2>
              <p className="text-indigo-200/65 mb-4">
                Military-grade encryption for fax transmission and storage:
              </p>
              <ul className="space-y-2 text-indigo-200/65">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>AES-256 encryption in transit and at rest</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>TLS 1.3 for secure transmission protocols</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>End-to-end encryption with key management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Digital signatures and tamper detection</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-8 border border-gray-800">
              <h2 className="font-nacelle text-2xl font-semibold text-gray-200 mb-4">HIPAA & GDPR Compliance</h2>
              <p className="text-indigo-200/65 mb-4">
                Built for healthcare, legal, and financial sectors requiring strict compliance:
              </p>
              <ul className="space-y-2 text-indigo-200/65">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>HIPAA-compliant infrastructure and BAA available</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>GDPR-compliant data processing and storage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Audit trails and access logging</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Data residency controls for international compliance</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-8 border border-gray-800">
              <h2 className="font-nacelle text-2xl font-semibold text-gray-200 mb-4">T.38 & Internet Fax</h2>
              <p className="text-indigo-200/65 mb-4">
                Dual-mode fax transmission supporting both traditional and modern protocols:
              </p>
              <ul className="space-y-2 text-indigo-200/65">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Traditional protocol support for legacy system integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Email-to-fax and fax-to-email conversion</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>API integration for automated workflows</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Multi-format document support</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-8 border border-gray-800">
              <h2 className="font-nacelle text-2xl font-semibold text-gray-200 mb-4">Enterprise Features</h2>
              <p className="text-indigo-200/65 mb-4">
                Advanced features for large-scale deployments:
              </p>
              <ul className="space-y-2 text-indigo-200/65">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Unlimited fax numbers and extensions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Automated routing and distribution rules</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Cloud storage with retention policies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Integration with document management systems</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-indigo-900/20 via-indigo-800/10 to-gray-900/50 p-8 border border-indigo-800/30 text-center">
            <h2 className="font-nacelle text-2xl font-semibold text-gray-200 mb-4">Enterprise Capabilities</h2>
            <div className="grid gap-6 md:grid-cols-3 text-left">
              <div className="group hover:scale-105 transition-transform">
                <h3 className="text-indigo-400 font-semibold mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
                  Universal Compatibility
                </h3>
                <p className="text-indigo-200/65 text-sm">Seamless integration with traditional and modern fax systems</p>
              </div>
              <div className="group hover:scale-105 transition-transform">
                <h3 className="text-indigo-400 font-semibold mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
                  Multi-Format Support
                </h3>
                <p className="text-indigo-200/65 text-sm">Support for all standard document formats and conversion capabilities</p>
              </div>
              <div className="group hover:scale-105 transition-transform">
                <h3 className="text-indigo-400 font-semibold mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
                  Flexible Integration
                </h3>
                <p className="text-indigo-200/65 text-sm">Multiple integration methods for seamless workflow automation</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

