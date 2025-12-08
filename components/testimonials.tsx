"use client";

import { useState } from "react";
import useMasonry from "@/utils/useMasonry";
import Image, { StaticImageData } from "next/image";
import TestimonialImg01 from "@/public/images/testimonial-01.jpg";
import TestimonialImg02 from "@/public/images/testimonial-02.jpg";
import TestimonialImg05 from "@/public/images/testimonial-05.jpg";
import TestimonialImg06 from "@/public/images/testimonial-06.jpg";
import TestimonialImg07 from "@/public/images/testimonial-07.jpg";
import TestimonialImg09 from "@/public/images/testimonial-09.jpg";

const StarIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="url(#starGold)" stroke="url(#starStroke)" strokeWidth="0.5"/>
    <defs>
      <linearGradient id="starGold" x1="12" y1="2" x2="12" y2="21">
        <stop offset="0%" stopColor="#FFD700"/>
        <stop offset="50%" stopColor="#FFC850"/>
        <stop offset="100%" stopColor="#FFB020"/>
      </linearGradient>
      <linearGradient id="starStroke" x1="12" y1="2" x2="12" y2="21">
        <stop offset="0%" stopColor="#FFA500"/>
        <stop offset="100%" stopColor="#FF8C00"/>
      </linearGradient>
    </defs>
  </svg>
);

const testimonials = [
  {
    img: TestimonialImg01,
    name: "Sarah Johnson",
    company: "Tech Solutions LLC",
    content: "Great VoIP service with excellent call quality. Our team uses it daily and we're very satisfied with the reliability and support.",
    categories: [1, 2],
  },
  {
    img: TestimonialImg02,
    name: "Michael Chen",
    company: "Global Trade Inc",
    content: "The fax solution works perfectly for our international documents. Secure, reliable, and easy to use. Highly recommend for any business.",
    categories: [1, 3],
  },
  {
    img: TestimonialImg05,
    name: "Fatima Ahmed",
    company: "Medical Center",
    content: "Secure fax service that meets all our compliance needs. Fast, reliable, and the support team is always helpful when we need assistance.",
    categories: [1, 3],
  },
  {
    img: TestimonialImg06,
    name: "Jennifer Taylor",
    company: "Consulting Partners",
    content: "NajmX provided excellent network consultancy services. They helped us integrate everything smoothly and training was comprehensive.",
    categories: [1, 4],
  },
  {
    img: TestimonialImg07,
    name: "Carlos Martinez",
    company: "International Corp",
    content: "VoIP service connects our multiple offices perfectly. Clear calls and affordable pricing. The support team is responsive and knowledgeable.",
    categories: [1, 2],
  },
  {
    img: TestimonialImg09,
    name: "Sara Ibrahim",
    company: "Business Solutions",
    content: "NajmX team did a great job setting up our systems. Everything works smoothly and they were professional throughout the project.",
    categories: [1, 4],
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
                    <Image className="inline-flex shrink-0 rounded-full" src={testimonial.img} width={36} height={36} alt={testimonial.name} />
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