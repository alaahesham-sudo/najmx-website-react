import type { Metadata } from "next";
import Starfield from "@/components/starfield";
import PageIllustration from "@/components/page-illustration";
import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";

export const metadata: Metadata = {
  title: "About Us - NajmX | Our Story",
  description: "Learn about NajmX Tech Solutions and our mission to deliver enterprise telecommunications solutions.",
};

export default function AboutPage() {
  return (
    <>
      <Starfield />
      <PageIllustration />
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-32 pb-20">
          {/* Hero Section */}
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                About Us
              </span>
            </div>
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
              NajmX Tech Solutions
            </h1>
            <p className="text-lg text-indigo-200/65 max-w-3xl mx-auto">
              Our star shines from Cairo, with offices in London and Texas. 
              NajmX delivers enterprise telecommunications and IT infrastructure 
              solutions to businesses worldwide.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid gap-8 md:grid-cols-2 mb-16" data-aos="fade-up" data-aos-delay="100">
            <div className="rounded-2xl bg-gradient-to-br from-indigo-900/20 via-indigo-800/10 to-gray-900/50 p-8 border border-indigo-800/30 hover:border-indigo-500/50 transition-all hover:shadow-xl hover:shadow-indigo-500/10">
              <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="font-nacelle text-2xl font-semibold text-gray-200 mb-4">Our Mission</h2>
              <p className="text-indigo-200/65">
                To empower businesses worldwide with cutting-edge telecommunications solutions that connect, secure, and transform how they communicate. We bridge continents, cultures, and technologies to deliver excellence.
              </p>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-indigo-900/20 via-indigo-800/10 to-gray-900/50 p-8 border border-indigo-800/30 hover:border-indigo-500/50 transition-all hover:shadow-xl hover:shadow-indigo-500/10">
              <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="font-nacelle text-2xl font-semibold text-gray-200 mb-4">Our Vision</h2>
              <p className="text-indigo-200/65">
                To become the leading global telecommunications partner, recognized for innovation, reliability, and the unwavering commitment to making every client a star in our constellation. We envision a world where communication knows no boundaries.
              </p>
            </div>
          </div>

          {/* What We Do */}
          <div className="mb-16" data-aos="fade-up" data-aos-delay="200">
            <h2 className="font-nacelle text-3xl font-semibold text-gray-200 mb-8 text-center">What We Do</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-6 border border-gray-800 hover:border-indigo-500/30 transition-all hover:shadow-xl hover:shadow-indigo-500/10 group">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center mb-4 group-hover:bg-indigo-500/30 transition-colors">
                  <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-200 mb-2">VoIP & Call Center</h3>
                <p className="text-sm text-indigo-200/65">Premium voice services, intelligent routing, advanced dialers, IVR systems, and real-time analytics</p>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-6 border border-gray-800 hover:border-indigo-500/30 transition-all hover:shadow-xl hover:shadow-indigo-500/10 group">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center mb-4 group-hover:bg-indigo-500/30 transition-colors">
                  <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-200 mb-2">Secure Cloud Fax</h3>
                <p className="text-sm text-indigo-200/65">StarSecure™ HIPAA/GDPR compliant solutions for healthcare, legal, and financial institutions</p>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-6 border border-gray-800 hover:border-indigo-500/30 transition-all hover:shadow-xl hover:shadow-indigo-500/10 group">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center mb-4 group-hover:bg-indigo-500/30 transition-colors">
                  <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-200 mb-2">AI-Agent Integration</h3>
                <p className="text-sm text-indigo-200/65">Deploy intelligent conversational voice assistants for automated customer interactions</p>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-6 border border-gray-800 hover:border-indigo-500/30 transition-all hover:shadow-xl hover:shadow-indigo-500/10 group">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center mb-4 group-hover:bg-indigo-500/30 transition-colors">
                  <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-200 mb-2">Network Consultancy</h3>
                <p className="text-sm text-indigo-200/65">Infrastructure design, optimization, and seamless system integration services</p>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-6 border border-gray-800 hover:border-indigo-500/30 transition-all hover:shadow-xl hover:shadow-indigo-500/10 group">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center mb-4 group-hover:bg-indigo-500/30 transition-colors">
                  <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-200 mb-2">CRM Integration</h3>
                <p className="text-sm text-indigo-200/65">StarSync™ seamless connectivity with your existing business systems and workflows</p>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-6 border border-gray-800 hover:border-indigo-500/30 transition-all hover:shadow-xl hover:shadow-indigo-500/10 group">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center mb-4 group-hover:bg-indigo-500/30 transition-colors">
                  <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-200 mb-2">Enterprise Security</h3>
                <p className="text-sm text-indigo-200/65">Bank-level encryption, compliance standards, and comprehensive security protocols</p>
              </div>
            </div>
          </div>

          {/* Our Approach */}
          <div className="mb-16" data-aos="fade-up" data-aos-delay="300">
            <h2 className="font-nacelle text-3xl font-semibold text-gray-200 mb-8 text-center">Our Approach</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-8 border border-gray-800 hover:border-indigo-500/30 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
                    <svg className="w-7 h-7 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-nacelle text-xl font-semibold text-gray-200">Reliability</h3>
                </div>
                <p className="text-indigo-200/65">
                  Enterprise-quality infrastructure you can trust. We maintain 99.9% uptime with redundant systems, automatic failover, and 24/7 monitoring to ensure your business never misses a beat.
                </p>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-8 border border-gray-800 hover:border-indigo-500/30 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
                    <svg className="w-7 h-7 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="font-nacelle text-xl font-semibold text-gray-200">Security</h3>
                </div>
                <p className="text-indigo-200/65">
                  Bank-level encryption and compliance standards. We protect your data with industry-leading security measures, regular audits, and adherence to HIPAA, GDPR, and other regulatory requirements.
                </p>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-8 border border-gray-800 hover:border-indigo-500/30 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
                    <svg className="w-7 h-7 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-nacelle text-xl font-semibold text-gray-200">Transparency</h3>
                </div>
                <p className="text-indigo-200/65">
                  No hidden fees, honest pricing always. We believe in clear communication, straightforward contracts, and pricing that makes sense. What you see is what you get—no surprises.
                </p>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-8 border border-gray-800 hover:border-indigo-500/30 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
                    <svg className="w-7 h-7 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5.636-3.536a9 9 0 11-12.728 0 9 9 0 0112.728 0z" />
                    </svg>
                  </div>
                  <h3 className="font-nacelle text-xl font-semibold text-gray-200">Support</h3>
                </div>
                <p className="text-indigo-200/65">
                  24/7 multilingual expert assistance across all time zones. Our support team spans three continents, ensuring someone is always available to help, no matter when or where you need us.
                </p>
              </div>
            </div>
          </div>

          {/* Global Offices */}
          <div className="rounded-2xl bg-gradient-to-br from-indigo-900/20 via-indigo-800/10 to-gray-900/50 p-8 border border-indigo-800/30 mb-16" data-aos="fade-up" data-aos-delay="400">
            <h2 className="font-nacelle text-2xl font-semibold text-gray-200 mb-6 text-center">Global Offices</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center p-6 rounded-xl bg-gray-900/30 border border-gray-800/50 hover:border-indigo-500/30 transition-all relative overflow-hidden group">
                <div className="absolute inset-0 opacity-[0.08] group-hover:opacity-[0.12] transition-opacity">
                  <img src="https://flagcdn.com/w320/us.png" alt="USA" className="w-full h-full object-cover scale-110" />
                </div>
                <div className="relative z-10">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500/20 to-red-500/20 flex items-center justify-center mx-auto mb-4 shadow-lg border-2 border-indigo-500/30 overflow-hidden">
                    <img src="https://flagcdn.com/w160/us.png" alt="USA" className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <h3 className="font-semibold text-gray-200 mb-2">Dallas, Texas</h3>
                  <p className="text-sm text-indigo-200/65 mb-2">Headquarters</p>
                  <p className="text-xs text-indigo-200/50">325 North St. Paul Street<br />Suite 3100<br />Dallas, TX 75201, USA</p>
                </div>
              </div>

              <div className="text-center p-6 rounded-xl bg-gray-900/30 border border-gray-800/50 hover:border-indigo-500/30 transition-all relative overflow-hidden group">
                <div className="absolute inset-0 opacity-[0.08] group-hover:opacity-[0.12] transition-opacity">
                  <img src="https://flagcdn.com/w320/eg.png" alt="Egypt" className="w-full h-full object-cover scale-110" />
                </div>
                <div className="relative z-10">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500/20 to-red-500/20 flex items-center justify-center mx-auto mb-4 shadow-lg border-2 border-green-500/30 overflow-hidden">
                    <img src="https://flagcdn.com/w160/eg.png" alt="Egypt" className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <h3 className="font-semibold text-gray-200 mb-2">Cairo, Egypt</h3>
                  <p className="text-sm text-indigo-200/65 mb-2">Operations Center</p>
                  <p className="text-xs text-indigo-200/50">Cairo, Egypt</p>
                </div>
              </div>

              <div className="text-center p-6 rounded-xl bg-gray-900/30 border border-gray-800/50 hover:border-indigo-500/30 transition-all relative overflow-hidden group">
                <div className="absolute inset-0 opacity-[0.08] group-hover:opacity-[0.12] transition-opacity">
                  <img src="https://flagcdn.com/w320/gb.png" alt="UK" className="w-full h-full object-cover scale-110" />
                </div>
                <div className="relative z-10">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500/20 to-red-500/20 flex items-center justify-center mx-auto mb-4 shadow-lg border-2 border-blue-500/30 overflow-hidden">
                    <img src="https://flagcdn.com/w160/gb.png" alt="UK" className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <h3 className="font-semibold text-gray-200 mb-2">London, UK</h3>
                  <p className="text-sm text-indigo-200/65 mb-2">European Hub</p>
                  <p className="text-xs text-indigo-200/50">71-75 Shelton Street<br />Covent Garden<br />London, WC2H 9JQ, UK</p>
                </div>
              </div>
            </div>
          </div>

          {/* Company Story */}
          <div className="rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-8 border border-gray-800 mb-12" data-aos="fade-up" data-aos-delay="500">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-nacelle text-2xl font-semibold text-gray-200 mb-4">Our Story</h2>
              <p className="text-indigo-200/65 mb-6">
                Founded in 2019, NajmX was born from a vision to bridge communication gaps across continents. Starting in Cairo, we quickly expanded to London and Texas, building a global team that understands both local needs and international standards.
              </p>
              <p className="text-indigo-200/65 mb-6">
                We combine telecommunications expertise with cutting-edge AI technology to help businesses communicate smarter, faster, and more securely. Every client relationship is built on trust, transparency, and the shared goal of success.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center" data-aos="fade-up" data-aos-delay="600">
            <p className="text-xl text-indigo-200/65 italic mb-6">
              Every client is a star in our constellation.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-t from-indigo-600 to-indigo-500 px-8 py-4 text-white font-medium shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Get in Touch
              <span className="text-white/50">→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
