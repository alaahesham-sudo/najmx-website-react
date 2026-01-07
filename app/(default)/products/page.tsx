import type { Metadata } from "next";
import Starfield from "@/components/starfield";
import PageIllustration from "@/components/page-illustration";
import Workflows from "@/components/workflows";

export const metadata: Metadata = {
  title: "Products - NajmX | VoIP & FAX Solutions",
  description: "Explore NajmX products: NajmVoIP, NajmFAX, and NajmNetwork solutions.",
};

export default function ProductsPage() {
  return (
    <>
      <Starfield />
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-20 pb-12">
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
            <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
              Our Products
            </span>
          </div>
          <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl mb-4">
            Enterprise Communication Products
          </h1>
          <p className="text-lg text-indigo-200/65 max-w-3xl mx-auto mb-8">
            Carrier-grade solutions powered by StarRoute™ technology and enterprise-grade StarSecure™ encryption. Trusted by businesses worldwide.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="rounded-xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-6 border border-gray-800 hover:border-indigo-500/30 transition-all" data-aos="fade-up" data-aos-delay="100">
              <div className="w-12 h-12 rounded-lg bg-indigo-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-200 mb-2">High Performance</h3>
              <p className="text-sm text-indigo-200/65">Optimized for speed and reliability with 99.97% uptime guarantee.</p>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-6 border border-gray-800 hover:border-indigo-500/30 transition-all" data-aos="fade-up" data-aos-delay="200">
              <div className="w-12 h-12 rounded-lg bg-indigo-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-200 mb-2">Enterprise Security</h3>
              <p className="text-sm text-indigo-200/65">Bank-level encryption and compliance with HIPAA, GDPR, and more.</p>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-6 border border-gray-800 hover:border-indigo-500/30 transition-all" data-aos="fade-up" data-aos-delay="300">
              <div className="w-12 h-12 rounded-lg bg-indigo-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-200 mb-2">Global Reach</h3>
              <p className="text-sm text-indigo-200/65">Connect with customers in 45+ countries with seamless integration.</p>
            </div>
          </div>
        </div>
      </div>
      <Workflows />
    </>
  );
}

