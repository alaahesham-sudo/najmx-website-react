
"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";
import { validatePhoneByCountry } from "@/utils/phoneValidation";

export default function ContactPage() {
  const successMessageRef = useRef<HTMLDivElement | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    country: "",
    service: "",
    usersAgents: "",
    hearAbout: "",
    message: "",
    consent: false,
    pageUrl: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else {
      const phoneValidation = validatePhoneByCountry(
        formData.phone,
        formData.country
      );

      if (!phoneValidation.valid) {
        newErrors.phone =
          phoneValidation.error || "Invalid phone number";
      }
    }

    if (!formData.country) {
      newErrors.country = "Please select your country";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service";
    }

    if (!formData.usersAgents.trim()) {
      newErrors.usersAgents = "Users or agents is required";
    }

    if (!formData.hearAbout) {
      newErrors.hearAbout =
        "Please tell us how you heard about NajmX";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    if (!formData.consent) {
      newErrors.consent =
        "Please agree to be contacted about your request";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      setSubmitStatus({
        type: "error",
        message: "Please fix the errors below and try again.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/submit-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          pageUrl: window.location.href,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message:
            result.message ||
            "Your request has been submitted successfully!",
        });

        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          country: "",
          service: "",
          usersAgents: "",
          hearAbout: "",
          message: "",
          consent: false,
          pageUrl: "",
        });

        setErrors({});

        setTimeout(() => {
          successMessageRef.current?.focus();
        }, 0);
      } else {
        setSubmitStatus({
          type: "error",
          message:
            result.error ||
            "Failed to submit your request. Please try again.",
        });

        if (result.field) {
          setErrors((prev) => ({
            ...prev,
            [result.field]: result.error,
          }));
        }

        if (result.missingFields) {
          const missingErrors: { [key: string]: string } = {};

          result.missingFields.forEach((field: string) => {
            missingErrors[field] =
              `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
          });

          setErrors((prev) => ({
            ...prev,
            ...missingErrors,
          }));
        }
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);

      setSubmitStatus({
        type: "error",
        message: "An error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;

    const newValue =
      type === "checkbox"
        ? (e.target as HTMLInputElement).checked
        : value;

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));

    if (name === "country" && formData.phone.trim()) {
      const phoneValidation = validatePhoneByCountry(
        formData.phone,
        value
      );

      if (!phoneValidation.valid) {
        setErrors((prev) => ({
          ...prev,
          phone:
            phoneValidation.error || "Invalid phone number",
        }));
      } else {
        setErrors((prev) => {
          const next = { ...prev };
          delete next.phone;
          return next;
        });
      }
    }

    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }

    if (submitStatus.type === "success") {
      setSubmitStatus({ type: null, message: "" });
    }
  };

  const handleBlur = (
    e: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    if (name === "phone" && value.trim()) {
      const phoneValidation = validatePhoneByCountry(
        value,
        formData.country
      );

      if (!phoneValidation.valid) {
        setErrors((prev) => ({
          ...prev,
          phone:
            phoneValidation.error || "Invalid phone number",
        }));
      }
    }
  };

  const fieldClass = (field: string) =>
    `w-full rounded-lg border bg-[#101A28] px-4 py-3 text-[#DDE2E8] placeholder-[#647184] transition-all duration-200 focus:outline-none focus:ring-2 ${
      errors[field]
        ? "border-red-500 focus:ring-red-500/20"
        : "border-[#334155] focus:border-[#67D391] focus:ring-[#67D391]/15"
    }`;

  const requiredMark = (
    <span className="text-[#B8944A]"> *</span>
  );

  return (
    <>
      {/* Contact Hero */}
      <section className="relative overflow-hidden border-b border-[#202B3D] bg-[#070B13]">
        <div
          className="pointer-events-none absolute left-1/2 top-[-240px] -z-0 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-[#B8944A]/[0.035] blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-28 sm:px-8 lg:px-10 lg:pb-20 lg:pt-36">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#B8944A] sm:text-base">
              Get in Touch
            </p>

            <h1 className="mt-4 text-6xl font-semibold leading-[0.98] tracking-[-0.035em] text-[#F3F5F7] sm:text-7xl lg:text-[88px]">
              Contact{" "}
              <span className="bg-[linear-gradient(110deg,#F3F5F7_0%,#F3F5F7_42%,#D0AE69_68%,#A27D38_100%)] bg-clip-text text-transparent">
                NajmX
              </span>
            </h1>

            <div className="mx-auto mt-7 h-px w-16 bg-[#B8944A]" />

            <h2 className="mt-7 text-3xl font-medium leading-[1.18] tracking-[-0.01em] text-[#F3F5F7] sm:text-4xl">
              Let&apos;s Talk About Your Setup
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base font-normal leading-8 tracking-normal text-[#AEB6C2] sm:text-lg">
              Whether you are setting up a new system, expanding an existing
              environment, or dealing with a technical issue, tell us what you
              are working with and what you need help with.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section
        id="contact"
        className="relative overflow-hidden border-t border-[#202B3D] bg-[#070B13]"
      >
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2 opacity-50"
          aria-hidden="true"
        >
          <Image
            className="max-w-none"
            src={BlurredShape}
            width={760}
            height={668}
            alt=""
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.45fr] lg:items-start lg:gap-16">
            {/* Left Information */}
            <div className="lg:pt-3">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#B8944A]">
                Request a Consultation
              </p>

              <h2 className="mt-3 max-w-lg text-3xl font-medium leading-[1.18] text-[#F3F5F7] sm:text-4xl">
                Request a Consultation
              </h2>

              <p className="mt-4 max-w-lg text-base font-normal leading-8 text-[#929DAB]">
                Share your current setup, what you need, and what you want to
                achieve. We&apos;ll review the details and discuss the right
                solution for your business.
              </p>

              <div className="mt-10 rounded-xl border border-[#202B3D] bg-[#0C141F] p-5">
                <p className="text-sm font-medium text-[#DDE2E8]">
                  What happens next?
                </p>

                <div className="mt-4 space-y-4">
                  <div className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-[#334155] bg-[#101A28] text-xs font-semibold text-[#B8944A]">
                      1
                    </span>
                    <p className="text-sm leading-6 text-[#929DAB]">
                      We review your setup and requirements.
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-[#334155] bg-[#101A28] text-xs font-semibold text-[#B8944A]">
                      2
                    </span>
                    <p className="text-sm leading-6 text-[#929DAB]">
                      We identify the technical details that matter.
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-[#334155] bg-[#101A28] text-xs font-semibold text-[#B8944A]">
                      3
                    </span>
                    <p className="text-sm leading-6 text-[#929DAB]">
                      We discuss the right solution for your business.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-[#202B3D] pt-7">
                <div>
                  <p className="text-sm font-medium text-[#B8944A]">
                    Prefer email?
                  </p>

                  <a
                    href="mailto:sales@najmx.net"
                    className="mt-2 inline-block text-sm font-semibold text-[#DDE2E8] transition-colors duration-200 hover:text-[#F3F5F7]"
                  >
                    sales@najmx.net
                  </a>
                </div>

                <div className="mt-7">
                  <p className="text-sm font-medium uppercase tracking-[0.14em] text-[#B8944A]">
                    Details to Share
                  </p>

                  <p className="mt-3 max-w-lg text-sm font-normal leading-7 text-[#929DAB]">
                    Let us know what platform or OS you are using, how many
                    users or agents you have, your current provider, and when
                    you need the setup. If you are having call issues, include
                    the destinations involved and what happens during the call
                    attempt.
                  </p>

                  <p className="mt-4 max-w-lg text-sm font-normal leading-7 text-[#929DAB]">
                    Support is available during U.S. business hours and around
                    your own schedule, with 24/7 monitoring and assistance for
                    operations that run continuously. Our remote services cover
                    dialer and PBX hosting, Linux servers, voice connectivity,
                    websites, and business applications.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="min-w-0">
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-[#263247] bg-[#0C141F] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.26)] sm:p-8"
              >
                {submitStatus.type && (
                  <div
                    ref={successMessageRef}
                    tabIndex={-1}
                    role="alert"
                    className={`mb-6 rounded-lg border p-4 text-sm leading-6 outline-none ${
                      submitStatus.type === "success"
                        ? "border-[#67D391]/40 bg-[#67D391]/10 text-[#8AE0AA]"
                        : "border-red-500/40 bg-red-500/10 text-red-200"
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}

                <div className="mb-7 flex items-center gap-3">
                  <div className="h-px flex-1 bg-[#202B3D]" />
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#B8944A]">
                    Your Details
                  </p>
                  <div className="h-px flex-1 bg-[#202B3D]" />
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-[#DDE2E8]"
                    >
                      Full Name{requiredMark}
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className={fieldClass("name")}
                      placeholder="John Doe"
                    />

                    {errors.name && (
                      <p className="mt-1 text-xs text-red-400">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="mb-2 block text-sm font-medium text-[#DDE2E8]"
                    >
                      Company Name{requiredMark}
                    </label>

                    <input
                      id="company"
                      name="company"
                      type="text"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className={fieldClass("company")}
                      placeholder="Your Company"
                    />

                    {errors.company && (
                      <p className="mt-1 text-xs text-red-400">
                        {errors.company}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-[#DDE2E8]"
                    >
                      Work Email{requiredMark}
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={fieldClass("email")}
                      placeholder="you@company.com"
                    />

                    {errors.email && (
                      <p className="mt-1 text-xs text-red-400">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-[#DDE2E8]"
                    >
                      Phone Number{requiredMark}
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={fieldClass("phone")}
                      placeholder="+1 234 567 8900"
                    />

                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-400">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="country"
                      className="mb-2 block text-sm font-medium text-[#DDE2E8]"
                    >
                      Country{requiredMark}
                    </label>

                    <select
                      id="country"
                      name="country"
                      required
                      value={formData.country}
                      onChange={handleChange}
                      className={fieldClass("country")}
                    >
                      <option value="">Select your country</option>
                      <option>United States</option>
                      <option>United Kingdom</option>
                      <option>Egypt</option>
                      <option>Canada</option>
                      <option>Australia</option>
                      <option>Germany</option>
                      <option>France</option>
                      <option>Spain</option>
                      <option>Italy</option>
                      <option>Netherlands</option>
                      <option>Belgium</option>
                      <option>Switzerland</option>
                      <option>Sweden</option>
                      <option>Norway</option>
                      <option>Denmark</option>
                      <option>Poland</option>
                      <option>United Arab Emirates</option>
                      <option>Saudi Arabia</option>
                      <option>Kuwait</option>
                      <option>Qatar</option>
                      <option>Bahrain</option>
                      <option>Oman</option>
                      <option>Jordan</option>
                      <option>Lebanon</option>
                      <option>Morocco</option>
                      <option>Tunisia</option>
                      <option>Algeria</option>
                      <option>South Africa</option>
                      <option>Nigeria</option>
                      <option>Kenya</option>
                      <option>India</option>
                      <option>China</option>
                      <option>Japan</option>
                      <option>South Korea</option>
                      <option>Singapore</option>
                      <option>Malaysia</option>
                      <option>Indonesia</option>
                      <option>Thailand</option>
                      <option>Philippines</option>
                      <option>Vietnam</option>
                      <option>Brazil</option>
                      <option>Mexico</option>
                      <option>Argentina</option>
                      <option>Chile</option>
                      <option>Colombia</option>
                      <option>Other</option>
                    </select>

                    {errors.country && (
                      <p className="mt-1 text-xs text-red-400">
                        {errors.country}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="mb-2 block text-sm font-medium text-[#DDE2E8]"
                    >
                      Service Needed{requiredMark}
                    </label>

                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className={fieldClass("service")}
                    >
                      <option value="">Select a service</option>
                      <option>VICIdial & Dialer Hosting</option>
                      <option>VoIP & SIP</option>
                      <option>DID Numbers</option>
                      <option>PBX & Call Center Systems</option>
                      <option>Managed Servers</option>
                      <option>Technical Support</option>
                      <option>Custom Business Solutions</option>
                      <option>Other</option>
                    </select>

                    {errors.service && (
                      <p className="mt-1 text-xs text-red-400">
                        {errors.service}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="usersAgents"
                      className="mb-2 block text-sm font-medium text-[#DDE2E8]"
                    >
                      Users or Agents{requiredMark}
                    </label>

                    <input
                      id="usersAgents"
                      name="usersAgents"
                      type="text"
                      required
                      value={formData.usersAgents}
                      onChange={handleChange}
                      className={fieldClass("usersAgents")}
                      placeholder="Example: 20 agents, 5 admins, etc."
                    />

                    {errors.usersAgents && (
                      <p className="mt-1 text-xs text-red-400">
                        {errors.usersAgents}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="hearAbout"
                      className="mb-2 block text-sm font-medium text-[#DDE2E8]"
                    >
                      How did you hear about us?{requiredMark}
                    </label>

                    <select
                      id="hearAbout"
                      name="hearAbout"
                      required
                      value={formData.hearAbout}
                      onChange={handleChange}
                      className={fieldClass("hearAbout")}
                    >
                      <option value="">Select one</option>
                      <option>Google Search</option>
                      <option>LinkedIn</option>
                      <option>Referral</option>
                      <option>Existing Client</option>
                      <option>Social Media</option>
                      <option>Other</option>
                    </select>

                    {errors.hearAbout && (
                      <p className="mt-1 text-xs text-red-400">
                        {errors.hearAbout}
                      </p>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-[#DDE2E8]"
                    >
                      Message{requiredMark}
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className={`${fieldClass("message")} resize-none`}
                      placeholder="Tell us about your current setup, requirements, and what you want to achieve..."
                    />

                    {errors.message ? (
                      <p className="mt-1 text-xs text-red-400">
                        {errors.message}
                      </p>
                    ) : (
                      <p className="mt-1 text-xs text-[#647184]">
                        Minimum 10 characters required.
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-6">
                  <label className="flex cursor-pointer items-start gap-3">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      required
                      className="mt-1 h-4 w-4 shrink-0 rounded border-[#334155] bg-[#0D1521] accent-[#67D391] focus:ring-2 focus:ring-[#67D391]/20"
                    />

                    <span className="text-sm leading-6 text-[#929DAB]">
                      I agree to be contacted about my request.
                      {requiredMark}
                    </span>
                  </label>

                  {errors.consent && (
                    <p className="mt-1 ml-7 text-xs text-red-400">
                      {errors.consent}
                    </p>
                  )}
                </div>

                <div className="mt-8 flex justify-start">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`inline-flex items-center justify-center gap-2 rounded-lg bg-[#67D391] px-8 py-4 font-semibold text-[#07100B] shadow-[0_0_24px_rgba(103,211,145,0.22)] transition-all duration-200 hover:-translate-y-1 hover:scale-[1.025] hover:bg-[#8AE0AA] hover:shadow-[0_0_34px_rgba(103,211,145,0.34)] ${
                      isSubmitting
                        ? "cursor-not-allowed opacity-70"
                        : "cursor-pointer"
                    }`}
                  >
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        Submit a Consultation
                        <span>→</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

