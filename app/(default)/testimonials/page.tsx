import type { Metadata } from "next";
import Starfield from "@/components/starfield";
import PageIllustration from "@/components/page-illustration";
import Testimonials from "@/components/testimonials";

export const metadata: Metadata = {
  title: "Our Stars - NajmX | Client Reviews",
  description: "See what our clients say about NajmX. Stars in our constellation.",
};

export default function TestimonialsPage() {
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
                Our Stars
              </span>
            </div>
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
              Stars in Our Constellation
            </h1>
            <p className="text-lg text-indigo-200/65 max-w-3xl mx-auto">
              From Cairo to London to New York, businesses trust NajmX for mission-critical communications. 
              Every client is a star in our constellation.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16" data-aos="fade-up" data-aos-delay="100">
            <div className="rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-6 border border-gray-800 text-center hover:border-indigo-500/30 transition-all">
              <div className="text-3xl font-bold text-indigo-400 mb-2">100+</div>
              <div className="text-sm text-indigo-200/65">Happy Clients</div>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-6 border border-gray-800 text-center hover:border-indigo-500/30 transition-all">
              <div className="text-3xl font-bold text-indigo-400 mb-2">50+</div>
              <div className="text-sm text-indigo-200/65">Countries Served</div>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-6 border border-gray-800 text-center hover:border-indigo-500/30 transition-all">
              <div className="text-3xl font-bold text-indigo-400 mb-2">99.9%</div>
              <div className="text-sm text-indigo-200/65">Uptime</div>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-6 border border-gray-800 text-center hover:border-indigo-500/30 transition-all">
              <div className="text-3xl font-bold text-indigo-400 mb-2">24/7</div>
              <div className="text-sm text-indigo-200/65">Support</div>
            </div>
          </div>

          {/* Testimonials Component */}
          <Testimonials />
        </div>
      </section>
    </>
  );
}
