import type { Metadata } from "next";
import Starfield from "@/components/starfield";
import PageIllustration from "@/components/page-illustration";
import Features from "@/components/features";

export const metadata: Metadata = {
  title: "Services - NajmX | Enterprise Telecommunications",
  description: "Comprehensive BPO solutions designed to accelerate your business growth and maximize operational efficiency.",
};

export default function ServicesPage() {
  return (
    <>
      <Starfield />
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-20">
        <div className="text-center pb-12">
          <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
            <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
              Our Solutions
            </span>
          </div>
          <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl mb-4">
            Enterprise Telecommunications Solutions
          </h1>
          <p className="text-lg text-indigo-200/65 mb-8 max-w-3xl mx-auto">
            Comprehensive solutions designed to accelerate your business growth and maximize operational efficiency across all communication channels.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="rounded-xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-6 border border-gray-800 hover:border-indigo-500/30 transition-all" data-aos="fade-up" data-aos-delay="100">
              <div className="w-12 h-12 rounded-lg bg-indigo-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-200 mb-2">Scalable Infrastructure</h3>
              <p className="text-sm text-indigo-200/65">Grow from startup to enterprise with infrastructure that scales with your business.</p>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-6 border border-gray-800 hover:border-indigo-500/30 transition-all" data-aos="fade-up" data-aos-delay="200">
              <div className="w-12 h-12 rounded-lg bg-indigo-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-200 mb-2">24/7 Global Support</h3>
              <p className="text-sm text-indigo-200/65">Round-the-clock assistance from our expert team across multiple time zones.</p>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-6 border border-gray-800 hover:border-indigo-500/30 transition-all" data-aos="fade-up" data-aos-delay="300">
              <div className="w-12 h-12 rounded-lg bg-indigo-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-200 mb-2">Custom Integration</h3>
              <p className="text-sm text-indigo-200/65">Seamless API integration with your existing systems and workflows.</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-indigo-200/50">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Scalable Infrastructure</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Custom Integration</span>
            </div>
          </div>
        </div>
      </div>
      <Features />
    </>
  );
}

