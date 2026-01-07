"use client";

import { useState } from "react";
import useMasonry from "@/utils/useMasonry";

const StarIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 32 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-yellow-400"
  >
    {/* Three simple floating stars, no glow or shine */}
    <path
      d="M6 2L7.2 4.4L10 4.8L8 6.6L8.5 9.2L6 8L3.5 9.2L4 6.6L2 4.8L4.8 4.4L6 2Z"
      fill="#FACC15"
      stroke="#EAB308"
      strokeWidth="0.4"
      strokeLinejoin="round"
    />
    <path
      d="M16 4L17 5.8L19 6.1L17.6 7.3L18 9L16 8.1L14 9L14.4 7.3L13 6.1L15 5.8L16 4Z"
      fill="#FACC15"
      stroke="#EAB308"
      strokeWidth="0.4"
      strokeLinejoin="round"
    />
    <path
      d="M24.5 1.5L25.4 3.2L27.5 3.5L26 4.8L26.4 6.7L24.5 5.8L22.6 6.7L23 4.8L21.5 3.5L23.6 3.2L24.5 1.5Z"
      fill="#FACC15"
      stroke="#EAB308"
      strokeWidth="0.4"
      strokeLinejoin="round"
    />
  </svg>
);

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "Tech Solutions LLC",
    content: "Great VoIP service with excellent call quality. Our team uses it daily and we're very satisfied with the reliability and support.",
    categories: [1, 2],
  },
  {
    name: "Michael Chen",
    company: "Global Trade Inc",
    content: "The fax solution works perfectly for our international documents. Secure, reliable, and easy to use. Highly recommend for any business.",
    categories: [1, 3],
  },
  {
    name: "Fatima Ahmed",
    company: "Medical Center",
    content: "Secure fax service that meets all our compliance needs. Fast, reliable, and the support team is always helpful when we need assistance.",
    categories: [1, 3],
  },
  {
    name: "Jennifer Taylor",
    company: "Consulting Partners",
    content: "NajmX provided excellent network consultancy services. They helped us integrate everything smoothly and training was comprehensive.",
    categories: [1, 4],
  },
  {
    name: "Carlos Martinez",
    company: "International Corp",
    content: "VoIP service connects our multiple offices perfectly. Clear calls and affordable pricing. The support team is responsive and knowledgeable.",
    categories: [1, 2],
  },
  {
    name: "Sara Ibrahim",
    company: "Business Solutions",
    content: "NajmX team did a great job setting up our systems. Everything works smoothly and they were professional throughout the project.",
    categories: [1, 4],
  },
  {
    name: "David Kim",
    company: "Tech Innovations",
    content: "The AI agent integration transformed our customer service. It handles calls naturally, routes intelligently, and our team can focus on complex cases. Outstanding technology!",
    categories: [1, 5],
  },
  {
    name: "Emma Wilson",
    company: "Digital Solutions Co",
    content: "NajmAgent has been a game-changer for our business. The AI voice agent handles customer inquiries 24/7 with impressive accuracy. Our response time improved dramatically.",
    categories: [1, 5],
  },
];

export default function Testimonials() {
  const masonryContainer = useMasonry();
  const [category, setCategory] = useState<number>(1);

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6" id="about">
      <div className="border-t py-12 md:py-20">
        <div className="mx-auto max-w-3xl pb-12 text-center">
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            Stars in Our Constellation
          </h2>
          <p className="text-lg text-indigo-200/65">
            From Cairo to London to New York, businesses trust NajmX for mission-critical communications.
          </p>
        </div>

        <div>
          <div className="flex justify-center pb-12 max-md:hidden md:pb-16">
            <div className="relative inline-flex flex-wrap justify-center rounded-3xl bg-gray-800/40 p-1 gap-1">
              <button
                className={`flex h-8 flex-1 items-center gap-2 whitespace-nowrap rounded-full px-4 text-sm font-medium transition-colors ${category === 1 ? "bg-gradient-to-b from-gray-900 to-gray-800 text-indigo-400" : "opacity-65 hover:opacity-90"}`}
                onClick={() => setCategory(1)}
              >
                <span>All Stars</span>
              </button>
              <button
                className={`flex h-8 flex-1 items-center gap-2 whitespace-nowrap rounded-full px-4 text-sm font-medium transition-colors ${category === 2 ? "bg-gradient-to-b from-gray-900 to-gray-800 text-indigo-400" : "opacity-65 hover:opacity-90"}`}
                onClick={() => setCategory(2)}
              >
                <span>VoIP</span>
              </button>
              <button
                className={`flex h-8 flex-1 items-center gap-2 whitespace-nowrap rounded-full px-4 text-sm font-medium transition-colors ${category === 3 ? "bg-gradient-to-b from-gray-900 to-gray-800 text-indigo-400" : "opacity-65 hover:opacity-90"}`}
                onClick={() => setCategory(3)}
              >
                <span>FAX</span>
              </button>
              <button
                className={`flex h-8 flex-1 items-center gap-2 whitespace-nowrap rounded-full px-4 text-sm font-medium transition-colors ${category === 5 ? "bg-gradient-to-b from-gray-900 to-gray-800 text-indigo-400" : "opacity-65 hover:opacity-90"}`}
                onClick={() => setCategory(5)}
              >
                <span>AI</span>
              </button>
              <button
                className={`flex h-8 flex-1 items-center gap-2 whitespace-nowrap rounded-full px-4 text-sm font-medium transition-colors ${category === 4 ? "bg-gradient-to-b from-gray-900 to-gray-800 text-indigo-400" : "opacity-65 hover:opacity-90"}`}
                onClick={() => setCategory(4)}
              >
                <span>Network</span>
              </button>
            </div>
          </div>

          <div className="mx-auto grid max-w-sm items-start gap-6 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3" ref={masonryContainer}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`relative rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-5 backdrop-blur-sm transition-opacity border border-gray-800 ${!testimonial.categories.includes(category) ? "opacity-30" : ""}`}>
                <div className="flex flex-col gap-4">
                  <div>
                    <StarIcon />
                  </div>
                  <p className="text-indigo-200/65">
                    &quot;{testimonial.content}&quot;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="inline-flex shrink-0 rounded-full w-9 h-9 items-center justify-center bg-gradient-to-br from-indigo-500/30 via-purple-500/25 to-indigo-500/30 border border-indigo-500/40 shadow-sm">
                      <span className="text-xs font-bold text-indigo-200 tracking-tight">
                        {testimonial.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()}
                      </span>
                    </div>
                    <div className="text-sm font-medium text-gray-200">
                      <span>{testimonial.name}</span>
                      <span className="text-gray-700"> - </span>
                      <span className="text-indigo-200/65">{testimonial.company}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}