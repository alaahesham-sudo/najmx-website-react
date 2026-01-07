import type { Metadata } from "next";
import Starfield from "@/components/starfield";
import PageIllustration from "@/components/page-illustration";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Diversity & Inclusion - NajmX | Our Commitment",
  description: "Learn about NajmX's commitment to diversity, inclusion, and building a global team that reflects the world we serve.",
};

export default function DiversityPage() {
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
                Diversity & Inclusion
              </span>
            </div>
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
              Every Star Shines in Our Constellation
            </h1>
            <p className="text-lg text-indigo-200/65 max-w-3xl mx-auto">
              At NajmX, diversity isn't just a value—it's the foundation of our innovation and the strength of our global presence.
            </p>
          </div>

          {/* Global Presence */}
          <div className="grid gap-8 md:grid-cols-2 mb-16" data-aos="fade-up" data-aos-delay="100">
            <div className="rounded-2xl bg-gradient-to-br from-indigo-900/20 via-indigo-800/10 to-gray-900/50 p-8 border border-indigo-800/30 hover:border-indigo-500/50 transition-all hover:shadow-xl hover:shadow-indigo-500/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
                  <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="font-nacelle text-2xl font-semibold text-gray-200">Our Global Presence</h2>
              </div>
              <p className="text-indigo-200/65 mb-6">
                With offices spanning Cairo, London, and Texas, we bring together diverse perspectives from three continents. Our team represents multiple cultures, languages, and backgrounds, creating a rich tapestry of ideas and solutions.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-900/30">
                  <span className="text-indigo-400 mt-1">✓</span>
                  <div>
                    <p className="text-gray-200 font-medium">Multilingual Excellence</p>
                    <p className="text-sm text-indigo-200/65">Supporting clients in Arabic, English, and beyond with native-level proficiency</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-900/30">
                  <span className="text-indigo-400 mt-1">✓</span>
                  <div>
                    <p className="text-gray-200 font-medium">24/7 Global Coverage</p>
                    <p className="text-sm text-indigo-200/65">Support across multiple time zones ensuring someone is always available</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-900/30">
                  <span className="text-indigo-400 mt-1">✓</span>
                  <div>
                    <p className="text-gray-200 font-medium">Cultural Understanding</p>
                    <p className="text-sm text-indigo-200/65">Deep cultural insights that enhance client relationships and service delivery</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-indigo-900/20 via-indigo-800/10 to-gray-900/50 p-8 border border-indigo-800/30 hover:border-indigo-500/50 transition-all hover:shadow-xl hover:shadow-indigo-500/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
                  <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h2 className="font-nacelle text-2xl font-semibold text-gray-200">Inclusive Hiring</h2>
              </div>
              <p className="text-indigo-200/65 mb-6">
                We believe the best solutions come from diverse teams. Our hiring practices focus on talent, skills, and cultural fit—not background, nationality, or identity.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-900/30">
                  <span className="text-indigo-400 mt-1">✓</span>
                  <div>
                    <p className="text-gray-200 font-medium">Equal Opportunity</p>
                    <p className="text-sm text-indigo-200/65">Fair access for all qualified candidates regardless of background</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-900/30">
                  <span className="text-indigo-400 mt-1">✓</span>
                  <div>
                    <p className="text-gray-200 font-medium">Skills-Based Assessment</p>
                    <p className="text-sm text-indigo-200/65">Objective evaluation focused on capabilities and potential</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-900/30">
                  <span className="text-indigo-400 mt-1">✓</span>
                  <div>
                    <p className="text-gray-200 font-medium">Remote-Friendly Culture</p>
                    <p className="text-sm text-indigo-200/65">Positions enabling global talent to contribute from anywhere</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="mb-16" data-aos="fade-up" data-aos-delay="200">
            <h2 className="font-nacelle text-3xl font-semibold text-gray-200 mb-8 text-center">Our Values</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-6 border border-gray-800 hover:border-indigo-500/30 transition-all text-center">
                <div className="w-14 h-14 rounded-full bg-indigo-500/20 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-200 mb-2">Respect</h3>
                <p className="text-sm text-indigo-200/65">Every voice matters. We create an environment where all perspectives are valued and heard.</p>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-6 border border-gray-800 hover:border-indigo-500/30 transition-all text-center">
                <div className="w-14 h-14 rounded-full bg-indigo-500/20 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-200 mb-2">Innovation</h3>
                <p className="text-sm text-indigo-200/65">Diverse teams drive creative solutions. Different backgrounds bring unique insights to every challenge.</p>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-6 border border-gray-800 hover:border-indigo-500/30 transition-all text-center">
                <div className="w-14 h-14 rounded-full bg-indigo-500/20 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-200 mb-2">Belonging</h3>
                <p className="text-sm text-indigo-200/65">Everyone belongs. We foster a culture where team members feel included, supported, and empowered.</p>
              </div>
            </div>
          </div>

          {/* Commitment */}
          <div className="rounded-2xl bg-gradient-to-br from-indigo-900/20 via-indigo-800/10 to-gray-900/50 p-8 border border-indigo-800/30 mb-12" data-aos="fade-up" data-aos-delay="300">
            <h2 className="font-nacelle text-2xl font-semibold text-gray-200 mb-6 text-center">Our Commitment</h2>
            <div className="max-w-3xl mx-auto space-y-4 text-indigo-200/65">
              <p>
                As a telecommunications company serving businesses across Egypt, the UK, and the US, we understand that diversity drives innovation. Our team's varied experiences help us create solutions that work for clients worldwide.
              </p>
              <p>
                We're committed to building a workplace where every team member feels valued, respected, and empowered to contribute their unique perspective. Whether you're in Cairo, London, or Texas, you're part of a constellation where every star matters.
              </p>
              <div className="mt-8 p-6 rounded-xl bg-gray-900/30 border border-gray-800/50 text-center">
                <p className="text-gray-200 font-semibold mb-2">Every client is a star in our constellation.</p>
                <p className="text-indigo-200/65 italic">Every team member shines just as bright.</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center" data-aos="fade-up" data-aos-delay="400">
            <a
              href="/careers"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-t from-indigo-600 to-indigo-500 px-8 py-4 text-white font-medium shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Join Our Team
              <span className="text-white/50">→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
