"use client";

import { useState } from "react";
import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";

export default function Cta() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    department: "sales",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Determine recipient based on department
    const emailMap: Record<string, string> = {
      sales: "sales@najmx.net",
      support: "support@najmx.net",
      general: "info@najmx.net",
    };
    
    const recipient = emailMap[formData.department];
    const subject = `${formData.department.charAt(0).toUpperCase() + formData.department.slice(1)} Request from ${formData.name}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Phone: ${formData.phone}
Department: ${formData.department.charAt(0).toUpperCase() + formData.department.slice(1)}
Service Interest: ${formData.service}

Message:
${formData.message}
    `;
    
    // Open email client
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Show success message
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="relative overflow-hidden" id="contact">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-transparent via-gray-800/50 py-12 md:py-20">
          <div className="mx-auto max-w-3xl">
            <div className="text-center mb-12">
              <h2
                className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
                data-aos="fade-up"
              >
                Get in Touch
              </h2>
              <p className="text-lg text-indigo-200/65" data-aos="fade-up" data-aos-delay={200}>
                Fill out the form and we'll get back to you within 24 hours.
              </p>
            </div>

            {isSubmitted && (
              <div className="mb-6 rounded-lg bg-green-500/20 border border-green-500/50 p-4 text-center text-green-200">
                ✓ Thank you! Your request has been sent to {formData.department}@najmx.net
              </div>
            )}

            <form onSubmit={handleSubmit} className="rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-8 border border-gray-800">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-lg bg-gray-900/50 border border-gray-700 px-4 py-3 text-gray-200 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg bg-gray-900/50 border border-gray-700 px-4 py-3 text-gray-200 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-200 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full rounded-lg bg-gray-900/50 border border-gray-700 px-4 py-3 text-gray-200 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                    placeholder="Your Company Ltd"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-200 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-lg bg-gray-900/50 border border-gray-700 px-4 py-3 text-gray-200 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                    placeholder="+1 234 567 8900"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="department" className="block text-sm font-medium text-gray-200 mb-2">
                    Department *
                  </label>
                  <select
                    id="department"
                    name="department"
                    required
                    value={formData.department}
                    onChange={handleChange}
                    className="w-full rounded-lg bg-gray-900/50 border border-gray-700 px-4 py-3 text-gray-200 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                  >
                    <option value="sales">Sales - New clients, demos, pricing (sales@najmx.net)</option>
                    <option value="support">Support - Technical help, existing clients (support@najmx.net)</option>
                    <option value="general">General - Everything else (info@najmx.net)</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="service" className="block text-sm font-medium text-gray-200 mb-2">
                    Service Interest *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full rounded-lg bg-gray-900/50 border border-gray-700 px-4 py-3 text-gray-200 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                  >
                    <option value="">Select a service</option>
                    <option value="NajmVoIP">NajmVoIP - Voice Solutions</option>
                    <option value="NajmFAX">NajmFAX - Secure Fax</option>
                    <option value="NajmNetwork">NajmNetwork - Consultancy & Integration</option>
                    <option value="Multiple">Multiple Services</option>
                    <option value="Other">Other / Not Sure</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-lg bg-gray-900/50 border border-gray-700 px-4 py-3 text-gray-200 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                    placeholder="Tell us about your needs..."
                  />
                </div>
              </div>

              <div className="mt-8 text-center">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-t from-indigo-600 to-indigo-500 px-8 py-4 text-white font-medium shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer"
                >
                  Submit Request
                  <span className="text-white/50">→</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}