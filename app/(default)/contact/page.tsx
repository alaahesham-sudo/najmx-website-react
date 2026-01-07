import type { Metadata } from "next";
import Starfield from "@/components/starfield";
import PageIllustration from "@/components/page-illustration";
import Cta from "@/components/cta";

export const metadata: Metadata = {
  title: "Contact Us - NajmX | Get in Touch",
  description: "Contact NajmX for enterprise telecommunications solutions. We're here to help.",
};

export default function ContactPage() {
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
                Contact Us
              </span>
            </div>
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
              Get in Touch
            </h1>
            <p className="text-lg text-indigo-200/65 max-w-3xl mx-auto">
              Fill out the form below and we'll get back to you within 24 hours. Our team is ready to help you find the perfect solution.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid gap-6 md:grid-cols-3 mb-16" data-aos="fade-up" data-aos-delay="100">
            <div className="rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-6 border border-gray-800 hover:border-indigo-500/30 transition-all text-center">
              <div className="w-14 h-14 rounded-full bg-indigo-500/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-200 mb-2">Email Us</h3>
              <a href="mailto:info@najmx.net" className="text-indigo-400 hover:text-indigo-300 transition-colors text-sm block mb-1">
                info@najmx.net
              </a>
              <a href="mailto:sales@najmx.net" className="text-indigo-400 hover:text-indigo-300 transition-colors text-sm block mb-1">
                sales@najmx.net
              </a>
              <div className="mt-4 pt-4 border-t border-gray-800">
                <p className="text-gray-400 text-xs mb-1">
                  <span className="text-gray-300 font-medium">Founder & CEO:</span> Alaa Hesham
                </p>
                <a href="mailto:wendyrussalesi@gmail.com" className="text-indigo-400 hover:text-indigo-300 transition-colors text-xs">
                  wendyrussalesi@gmail.com
                </a>
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-6 border border-gray-800 hover:border-indigo-500/30 transition-all text-center">
              <div className="w-14 h-14 rounded-full bg-indigo-500/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-200 mb-2">Visit Us</h3>
              <p className="text-sm text-indigo-200/65 mb-2">Dallas, Texas</p>
              <p className="text-xs text-indigo-200/50">325 North St. Paul Street<br />Suite 3100<br />Dallas, TX 75201</p>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-6 border border-gray-800 hover:border-indigo-500/30 transition-all text-center">
              <div className="w-14 h-14 rounded-full bg-indigo-500/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-200 mb-2">Call Us</h3>
              <a href="tel:+19729478611" className="text-indigo-400 hover:text-indigo-300 transition-colors text-sm block mb-2">
                +1 (972) 947-8611
              </a>
              <p className="text-xs text-indigo-200/50">24/7 Support Available</p>
            </div>
          </div>

          {/* Contact Form */}
          <Cta />
        </div>
      </section>
    </>
  );
}
