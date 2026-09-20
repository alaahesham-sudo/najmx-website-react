"use client";

import { useEffect, useRef, useState } from "react";
import { validatePhoneByCountry } from "@/utils/phoneValidation";

export default function GetStartedPage() {
  const successMessageRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    service: "",
    fullName: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    contactMethod: "",
    hearAbout: "",
    requirements: "",
    consent: false,
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

  useEffect(() => {
    if (submitStatus.type === "success") {
      successMessageRef.current?.focus();
    }
  }, [submitStatus.type]);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.service) {
      newErrors.service = "Please select a service.";
    }

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Please enter your company name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your business email address.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone or WhatsApp number.";
    } else if (!formData.country) {
      newErrors.country =
        "Please select your country before entering your phone number.";
    } else {
      const phoneValidation = validatePhoneByCountry(
        formData.phone,
        formData.country
      );

      if (!phoneValidation.valid) {
        newErrors.phone =
          phoneValidation.error || "Please enter a valid phone number.";
      }
    }

    if (!formData.country) {
      newErrors.country = "Please select your country.";
    }

    if (!formData.contactMethod) {
      newErrors.contactMethod =
        "Please select your preferred contact method.";
    }

    if (!formData.hearAbout) {
      newErrors.hearAbout = "Please tell us how you found NajmX.";
    }

    if (!formData.requirements.trim()) {
      newErrors.requirements =
        "Please briefly describe what you need help with.";
    } else if (formData.requirements.trim().length < 10) {
      newErrors.requirements =
        "Please provide a little more detail about your requirements.";
    }

    if (!formData.consent) {
      newErrors.consent =
        "Please agree that NajmX may contact you about this request.";
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

      setTimeout(() => {
        const firstError = document.querySelector(
          '[aria-invalid="true"]'
        ) as HTMLElement | null;

        firstError?.focus();
      }, 0);

      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({
      type: null,
      message: "",
    });

    try {
      const response = await fetch("/api/submit-quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          country: formData.country,
          service: formData.service,
          contactMethod: formData.contactMethod,
          hearAbout: formData.hearAbout,
          message: formData.requirements,
          consent: formData.consent,
	  pageUrl: window.location.href,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message:
            result.message ||
            "Your request has been submitted successfully. Thank you — the NajmX team will review your details and contact you shortly using your preferred contact method.",
        });

        setFormData({
          service: "",
          fullName: "",
          company: "",
          email: "",
          phone: "",
          country: "",
          contactMethod: "",
          hearAbout: "",
          requirements: "",
          consent: false,
        });

        setErrors({});
      } else {
        setSubmitStatus({
          type: "error",
          message:
            result.error ||
            "We could not submit your request. Please review the highlighted fields and try again.",
        });

        const fieldMap: { [key: string]: string } = {
          name: "fullName",
          message: "requirements",
          email: "email",
          company: "company",
          phone: "phone",
          country: "country",
          service: "service",
          contactMethod: "contactMethod",
          hearAbout: "hearAbout",
          consent: "consent",
        };

        if (result.field) {
          const frontendField =
            fieldMap[result.field] || result.field;

          setErrors((prev) => ({
            ...prev,
            [frontendField]:
              result.error || `${frontendField} is required`,
          }));
        }

        if (result.missingFields) {
          const missingErrors: { [key: string]: string } = {};

          result.missingFields.forEach((field: string) => {
            const frontendField = fieldMap[field] || field;

            let fieldLabel = frontendField;

            if (frontendField === "fullName") {
              fieldLabel = "Full Name";
            } else if (frontendField === "requirements") {
              fieldLabel = "Requirements";
            } else if (frontendField === "contactMethod") {
              fieldLabel = "Preferred Contact Method";
            } else if (frontendField === "hearAbout") {
              fieldLabel = "How did you hear about us";
            } else {
              fieldLabel =
                frontendField.charAt(0).toUpperCase() +
                frontendField.slice(1);
            }

            missingErrors[frontendField] =
              `${fieldLabel} is required`;
          });

          setErrors((prev) => ({
            ...prev,
            ...missingErrors,
          }));
        }
      }
    } catch (error) {
      console.error("Error submitting get started form:", error);

      setSubmitStatus({
        type: "error",
        message:
          "An error occurred while submitting your request. Please try again later.",
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
            phoneValidation.error ||
            "Please enter a valid phone number.",
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
      setSubmitStatus({
        type: null,
        message: "",
      });
    }
  };

  const handleBlur = (
    e: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    if (name === "phone" && value.trim()) {
      if (!formData.country) {
        setErrors((prev) => ({
          ...prev,
          country: "Please select your country.",
        }));

        return;
      }

      const phoneValidation = validatePhoneByCountry(
        value,
        formData.country
      );

      if (!phoneValidation.valid) {
        setErrors((prev) => ({
          ...prev,
          phone:
            phoneValidation.error ||
            "Please enter a valid phone number.",
        }));
      }
    }
  };

  const fieldClass = (field: string) =>
    `w-full rounded-lg border bg-[#101A28] px-4 py-3 text-sm text-[#DDE2E8] placeholder-[#647184] transition-all duration-200 focus:outline-none focus:ring-2 ${
      errors[field]
        ? "border-red-500 focus:ring-red-500/20"
        : "border-[#334155] focus:border-[#67D391] focus:ring-[#67D391]/15"
    }`;

  const countries = [
    "United States",
    "United Kingdom",
    "Egypt",
    "Canada",
    "Australia",
    "Germany",
    "France",
    "Spain",
    "Italy",
    "Netherlands",
    "Belgium",
    "Switzerland",
    "Sweden",
    "Norway",
    "Denmark",
    "Poland",
    "United Arab Emirates",
    "Saudi Arabia",
    "Kuwait",
    "Qatar",
    "Bahrain",
    "Oman",
    "Jordan",
    "Lebanon",
    "Morocco",
    "Tunisia",
    "Algeria",
    "South Africa",
    "Nigeria",
    "Kenya",
    "India",
    "China",
    "Japan",
    "South Korea",
    "Singapore",
    "Malaysia",
    "Indonesia",
    "Thailand",
    "Philippines",
    "Vietnam",
    "Brazil",
    "Mexico",
    "Argentina",
    "Chile",
    "Colombia",
    "Other",
  ];

  return (
    <main
      className="relative bg-[#070B13] font-sans text-[#F3F5F7]"
      style={{
        fontFamily:
          "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      {/* Hero */}
      <section className="border-b border-[#202B3D] bg-[#070B13]">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-28 sm:px-8 lg:px-10 lg:pb-20 lg:pt-36">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#B8944A] sm:text-base">
              Get Started
            </p>

            <h1 className="mt-4 text-5xl font-semibold leading-[1.08] tracking-[-0.015em] text-[#F3F5F7] sm:text-6xl lg:text-7xl">
              Find the Right Infrastructure for Your Business
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-base font-normal leading-8 tracking-normal text-[#AEB6C2] sm:text-lg">
              Tell us what you need to host, connect, or build — from
              VICIdial and PBX systems to VoIP, DIDs, managed servers, and
              custom business solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Qualification */}
      <section className="border-b border-[#202B3D] bg-[#090F18]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.7fr] lg:items-start lg:gap-14">
            <div className="lg:pt-2">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#B8944A]">
                Quick Qualification
              </p>

              <h2 className="mt-3 text-3xl font-medium leading-[1.2] text-[#F3F5F7] sm:text-4xl">
                Start With the Basics
              </h2>

              <p className="mt-3 max-w-xl text-base font-normal leading-8 text-[#929DAB]">
                You do not need to have every technical detail figured out.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  number: "01",
                  title: "Select a Service",
                  description: "Tell us which area you need help with.",
                },
                {
                  number: "02",
                  title: "Add Your Details",
                  description:
                    "Give us the basic contact and business information.",
                },
                {
                  number: "03",
                  title: "Share Your Requirements",
                  description:
                    "Tell us what you have and what you want to achieve.",
                },
                {
                  number: "04",
                  title: "Discuss the Setup",
                  description:
                    "We review the details and discuss the practical next steps.",
                },
              ].map((step) => (
                <div
                  key={step.number}
                  className="rounded-xl border border-[#202B3D] bg-[#0D1521] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.22)] transition-all duration-200 hover:-translate-y-1 hover:border-[#334155] hover:bg-[#101A29]"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#334155] bg-[#111C2B] text-sm font-semibold text-[#B8944A]">
                    {step.number}
                  </div>

                  <h3 className="mt-5 text-lg font-medium leading-7 tracking-normal text-[#F3F5F7]">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm font-normal leading-7 text-[#929DAB]">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-b border-[#202B3D] bg-[#070B13]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.7fr] lg:items-start lg:gap-14">
            <div className="lg:pt-2">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#B8944A]">
                Services
              </p>

              <h2 className="mt-3 text-3xl font-medium leading-[1.2] text-[#F3F5F7] sm:text-4xl">
                What Can We Help You With?
              </h2>

              <p className="mt-3 max-w-xl text-base font-normal leading-8 text-[#929DAB]">
                Choose the area closest to what you need. We can work through
                the technical details with you afterward.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "VICIdial & Dialer Hosting",
                  description:
                    "Hosting, server setup, scaling, optimization, and infrastructure for VICIdial calling operations.",
                },
                {
                  title: "VoIP, SIP & DID Services",
                  description:
                    "Voice connectivity, SIP infrastructure, inbound numbers, and calling requirements.",
                },
                {
                  title: "PBX & Call Center Systems",
                  description:
                    "Infrastructure for PBX platforms and business calling environments.",
                },
                {
                  title: "Managed Servers & Custom Solutions",
                  description:
                    "Managed infrastructure, technical support, integrations, dashboards, portals, and custom business tools.",
                },
              ].map((service) => (
                <div
                  key={service.title}
                  className="rounded-xl border border-[#202B3D] bg-[#0D1521] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.28)] transition-all duration-200 hover:-translate-y-1 hover:border-[#334155] hover:bg-[#101A29]"
                >
                  <h3 className="text-lg font-medium leading-7 tracking-normal text-[#F3F5F7]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm font-normal leading-7 text-[#929DAB]">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Built Around Your Business */}
      <section className="border-b border-[#202B3D] bg-[#090F18]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.7fr] lg:items-start lg:gap-14">
            <div className="lg:pt-2">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#B8944A]">
                Your Infrastructure
              </p>

              <h2 className="mt-3 text-3xl font-medium leading-[1.2] text-[#F3F5F7] sm:text-4xl">
                Built Around Your Business
              </h2>

              <p className="mt-3 max-w-xl text-base font-normal leading-8 text-[#929DAB]">
                We look beyond the service itself and consider how your
                infrastructure needs to operate.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Match the Infrastructure",
                  description:
                    "Your platform, users, agents, traffic, and workload help determine the right resources.",
                },
                {
                  title: "Managed From the Start",
                  description:
                    "Installation, configuration, maintenance, monitoring, and technical support when required.",
                },
                {
                  title: "Ready to Scale",
                  description:
                    "Plan your infrastructure around current requirements while keeping future growth in mind.",
                },
                {
                  title: "Support When You Need It",
                  description:
                    "Technical assistance around your working hours, with 24/7 support available for round-the-clock operations.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-[#202B3D] bg-[#0D1521] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.22)] transition-all duration-200 hover:-translate-y-1 hover:border-[#334155] hover:bg-[#101A29]"
                >
                  <h3 className="text-lg font-medium leading-7 tracking-normal text-[#F3F5F7]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm font-normal leading-7 text-[#929DAB]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Request a Quote */}
      <section className="border-b border-[#202B3D] bg-[#070B13]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.45fr] lg:items-start lg:gap-16">
            {/* Left Content */}
            <div className="lg:pt-3">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#B8944A]">
                Request a Quote
              </p>

              <h2 className="mt-3 text-3xl font-medium leading-[1.18] text-[#F3F5F7] sm:text-4xl">
                Tell Us About Your Setup
              </h2>

              <p className="mt-4 max-w-xl text-base font-normal leading-8 text-[#929DAB]">
                Give us an overview of your current setup and what you&apos;re
                looking to achieve. We can work through the technical details
                with you afterward.
              </p>

              <div className="mt-12 border-t border-[#202B3D] pt-7">
                <p className="text-sm font-medium uppercase tracking-[0.14em] text-[#B8944A]">
                  Helpful Details
                </p>

                <p className="mt-3 max-w-xl text-sm font-normal leading-7 text-[#929DAB]">
                  Your platform or operating system, number of users or agents,
                  current provider, relevant call destinations, and expected
                  timeline can help us understand your requirements faster.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="rounded-2xl border border-[#263247] bg-[#0C141F] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.26)] sm:p-8">
              {submitStatus.type && (
                <div
                  ref={
                    submitStatus.type === "success"
                      ? successMessageRef
                      : undefined
                  }
                  tabIndex={submitStatus.type === "success" ? -1 : undefined}
                  className={`mb-6 rounded-lg border p-4 text-sm leading-6 ${
                    submitStatus.type === "success"
                      ? "border-[#67D391]/40 bg-[#67D391]/10 text-[#8AE0AA]"
                      : "border-red-500/40 bg-red-500/10 text-red-200"
                  }`}
                  role="alert"
                  aria-live="polite"
                >
                  {submitStatus.message}
                </div>
              )}

              <div className="mb-8">
                <p className="text-sm font-medium uppercase tracking-[0.14em] text-[#B8944A]">
                  Your Request
                </p>

                <h3 className="mt-2 text-2xl font-medium leading-[1.2] text-[#F3F5F7] sm:text-3xl">
                  Contact Information
                </h3>
              </div>

              {/* Progress */}
              <div className="relative mb-9">
                <div className="absolute left-[12.5%] right-[12.5%] top-4 h-px bg-[#334155]" />

                <div className="relative grid grid-cols-4">
                  {[
                    ["1", "Service"],
                    ["2", "Contact"],
                    ["3", "Requirements"],
                    ["4", "Submit"],
                  ].map(([number, label]) => (
                    <div
                      key={number}
                      className="flex flex-col items-center text-center"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#B8944A] bg-[#0C141F] text-xs font-semibold text-[#B8944A] shadow-[0_0_12px_rgba(184,148,74,0.12)]">
                        {number}
                      </div>

                      <p className="mt-2 text-xs font-medium text-[#929DAB]">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                noValidate
                className="space-y-5"
              >
                <div>
                  <label
                    htmlFor="service"
                    className="mb-2 block text-sm font-medium text-[#DDE2E8]"
                  >
                    Service <span className="text-[#B8944A]">*</span>
                  </label>

                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    aria-invalid={!!errors.service}
                    className={fieldClass("service")}
                  >
                    <option value="">Select a service</option>
                    <option value="VICIdial & Dialer Hosting">
                      VICIdial & Dialer Hosting
                    </option>
                    <option value="VoIP & SIP Services">
                      VoIP & SIP Services
                    </option>
                    <option value="DID Numbers">DID Numbers</option>
                    <option value="PBX & Call Center Systems">
                      PBX & Call Center Systems
                    </option>
                    <option value="Managed Servers">
                      Managed Servers
                    </option>
                    <option value="Technical Support">
                      Technical Support
                    </option>
                    <option value="Custom Business Solutions">
                      Custom Business Solutions
                    </option>
                    <option value="Other">Other</option>
                  </select>

                  {errors.service && (
                    <p className="mt-1 text-xs text-red-400">
                      {errors.service}
                    </p>
                  )}
                </div>

                <div className="border-t border-[#202B3D] pt-6">
                  <p className="mb-5 text-sm font-medium uppercase tracking-[0.14em] text-[#B8944A]">
                    Contact
                  </p>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="mb-2 block text-sm font-medium text-[#DDE2E8]"
                      >
                        Full Name <span className="text-[#B8944A]">*</span>
                      </label>

                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={handleChange}
                        aria-invalid={!!errors.fullName}
                        className={fieldClass("fullName")}
                        placeholder="John Doe"
                      />

                      {errors.fullName && (
                        <p className="mt-1 text-xs text-red-400">
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="mb-2 block text-sm font-medium text-[#DDE2E8]"
                      >
                        Company Name{" "}
                        <span className="text-[#B8944A]">*</span>
                      </label>

                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        aria-invalid={!!errors.company}
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
                        Business Email{" "}
                        <span className="text-[#B8944A]">*</span>
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        aria-invalid={!!errors.email}
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
                        Phone / WhatsApp{" "}
                        <span className="text-[#B8944A]">*</span>
                      </label>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-invalid={!!errors.phone}
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
                        Country{" "}
                        <span className="text-[#B8944A]">*</span>
                      </label>

                      <select
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        aria-invalid={!!errors.country}
                        className={fieldClass("country")}
                      >
                        <option value="">Select your country</option>

                        {countries.map((country) => (
                          <option key={country} value={country}>
                            {country}
                          </option>
                        ))}
                      </select>

                      {errors.country && (
                        <p className="mt-1 text-xs text-red-400">
                          {errors.country}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contactMethod"
                        className="mb-2 block text-sm font-medium text-[#DDE2E8]"
                      >
                        Preferred Contact Method{" "}
                        <span className="text-[#B8944A]">*</span>
                      </label>

                      <select
                        id="contactMethod"
                        name="contactMethod"
                        value={formData.contactMethod}
                        onChange={handleChange}
                        aria-invalid={!!errors.contactMethod}
                        className={fieldClass("contactMethod")}
                      >
                        <option value="">Select one</option>
                        <option value="email">Email</option>
                        <option value="phone">Phone</option>
                        <option value="whatsapp">WhatsApp</option>
                      </select>

                      {errors.contactMethod && (
                        <p className="mt-1 text-xs text-red-400">
                          {errors.contactMethod}
                        </p>
                      )}
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="hearAbout"
                        className="mb-2 block text-sm font-medium text-[#DDE2E8]"
                      >
                        How did you hear about us?{" "}
                        <span className="text-[#B8944A]">*</span>
                      </label>

                      <select
                        id="hearAbout"
                        name="hearAbout"
                        value={formData.hearAbout}
                        onChange={handleChange}
                        aria-invalid={!!errors.hearAbout}
                        className={fieldClass("hearAbout")}
                      >
                        <option value="">Select one</option>
                        <option value="Google Search">Google Search</option>
                        <option value="LinkedIn">LinkedIn</option>
                        <option value="Referral">Referral</option>
                        <option value="Existing Client">
                          Existing Client
                        </option>
                        <option value="Social Media">Social Media</option>
                        <option value="Website / Online Search">
                          Website / Online Search
                        </option>
                        <option value="Other">Other</option>
                      </select>

                      {errors.hearAbout && (
                        <p className="mt-1 text-xs text-red-400">
                          {errors.hearAbout}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="border-t border-[#202B3D] pt-6">
                  <p className="mb-5 text-sm font-medium uppercase tracking-[0.14em] text-[#B8944A]">
                    Requirements
                  </p>

                  <label
                    htmlFor="requirements"
                    className="mb-2 block text-sm font-medium text-[#DDE2E8]"
                  >
                    Brief Requirements{" "}
                    <span className="text-[#B8944A]">*</span>
                  </label>

                  <textarea
                    id="requirements"
                    name="requirements"
                    rows={5}
                    value={formData.requirements}
                    onChange={handleChange}
                    aria-invalid={!!errors.requirements}
                    className={`${fieldClass("requirements")} resize-y`}
                    placeholder="Tell us about your platform or operating system, users or agents, provider, timeline, or current issue."
                  />

                  {errors.requirements ? (
                    <p className="mt-1 text-xs text-red-400">
                      {errors.requirements}
                    </p>
                  ) : (
                    <p className="mt-2 text-xs leading-6 text-[#647184]">
                      Include whatever details will help us understand your
                      current environment and requirements.
                    </p>
                  )}
                </div>

                <div className="border-t border-[#202B3D] pt-6">
                  <label className="flex cursor-pointer items-start gap-3">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      aria-invalid={!!errors.consent}
                      className="mt-1 h-4 w-4 shrink-0 rounded border-[#334155] bg-[#101A28] text-[#67D391] accent-[#67D391] focus:ring-[#67D391]/20"
                    />

                    <span className="text-sm leading-6 text-[#929DAB]">
                      I agree that NajmX may contact me about this request.{" "}
                      <a
                        href="/legal/privacy-policy"
                        className="font-medium text-[#B8944A] transition-colors hover:text-[#D0AE69]"
                      >
                        Privacy Policy
                      </a>
                    </span>
                  </label>

                  {errors.consent && (
                    <p className="mt-1 ml-7 text-xs text-red-400">
                      {errors.consent}
                    </p>
                  )}

                  <div className="pt-6">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`inline-flex items-center justify-center gap-2 rounded-lg border border-[#67D391] bg-[#67D391] px-8 py-4 font-semibold text-[#07100B] shadow-[0_0_24px_rgba(103,211,145,0.22)] transition-all duration-200 hover:-translate-y-1 hover:scale-[1.025] hover:border-[#8AE0AA] hover:bg-[#8AE0AA] hover:shadow-[0_0_34px_rgba(103,211,145,0.34)] ${
                        isSubmitting
                          ? "cursor-not-allowed opacity-70"
                          : "cursor-pointer"
                      }`}
                    >
                      {isSubmitting ? (
                        "Submitting..."
                      ) : (
                        <>
                          Request a Quote
                          <span>→</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

