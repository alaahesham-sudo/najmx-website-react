"use client";

import { useState } from "react";
import Starfield from "@/components/starfield";
import PageIllustration from "@/components/page-illustration";
import { validatePhoneByCountry } from "@/utils/phoneValidation";

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    jobTitle: "",
    experience: "",
    country: "",
    hearAbout: "",
    resume: "",
    coverLetter: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone || !formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else {
      const phoneValidation = validatePhoneByCountry(formData.phone, formData.country || '');
      if (!phoneValidation.valid) {
        newErrors.phone = phoneValidation.error || "Invalid phone number";
      }
    }

    if (!formData.jobTitle.trim()) {
      newErrors.jobTitle = "Job title is required";
    }

    if (!formData.experience) {
      newErrors.experience = "Please select your experience level";
    }

    if (!formData.country) {
      newErrors.country = "Please select your country";
    }

    if (!formData.hearAbout) {
      newErrors.hearAbout = "Please let us know how you heard about us";
    }

    if (!formData.resume.trim()) {
      newErrors.resume = "Resume/CV link is required";
    } else {
      try {
        new URL(formData.resume);
      } catch {
        newErrors.resume = "Please enter a valid URL (e.g., https://drive.google.com/...)";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateField = (name: string, value: string) => {
    const newErrors: { [key: string]: string } = {};
    
    if (name === 'phone') {
      const phoneValidation = validatePhoneByCountry(value, formData.country || '');
      if (!phoneValidation.valid) {
        newErrors.phone = phoneValidation.error || "Invalid phone number";
      }
    }
    
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // If country changes, re-validate phone
    if (name === 'country' && formData.phone) {
      const phoneValidation = validatePhoneByCountry(formData.phone, value);
      if (!phoneValidation.valid) {
        setErrors(prev => ({ ...prev, phone: phoneValidation.error || "Invalid phone number" }));
      } else {
        setErrors(prev => {
          const newErrors = { ...prev };
          delete newErrors.phone;
          return newErrors;
        });
      }
    }
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
    // Clear success message when user makes changes
    if (submitStatus.type === 'success') {
      setSubmitStatus({ type: null, message: '' });
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const fieldErrors = validateField(name, value);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(prev => ({ ...prev, ...fieldErrors }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setSubmitStatus({ type: 'error', message: 'Please fix the errors below and try again.' });
      // Scroll to first error
      const firstErrorField = Object.keys(errors)[0];
      if (firstErrorField) {
        document.getElementById(firstErrorField)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/submit-careers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({ type: 'success', message: result.message || 'Application submitted successfully!' });
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          jobTitle: "",
          experience: "",
          country: "",
          hearAbout: "",
          resume: "",
          coverLetter: "",
        });
        setErrors({});
        // Scroll to top to show success message
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setSubmitStatus({ type: 'error', message: result.error || 'Failed to submit application. Please try again.' });
        if (result.field) {
          setErrors(prev => ({ ...prev, [result.field]: result.error }));
        }
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({ type: 'error', message: 'An error occurred. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

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
                Careers
              </span>
            </div>
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
              We're Hiring!
            </h1>
            <h2 className="text-2xl font-semibold text-gray-200 mb-4">
              Join Our Family
            </h2>
            <p className="text-lg text-indigo-200/65 max-w-3xl mx-auto">
              If you're interested in joining NajmX, start by applying here. We're looking for talented individuals who share our passion for innovation and excellence.
            </p>
          </div>

          {/* Why Join Us */}
          <div className="grid gap-6 md:grid-cols-3 mb-16" data-aos="fade-up" data-aos-delay="100">
            <div className="rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-6 border border-gray-800 hover:border-indigo-500/30 transition-all text-center">
              <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-200 mb-2">Global Opportunities</h3>
              <p className="text-sm text-indigo-200/65">Work with teams across Cairo, London, and Texas. Remote-friendly positions available.</p>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-6 border border-gray-800 hover:border-indigo-500/30 transition-all text-center">
              <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-200 mb-2">Growth & Learning</h3>
              <p className="text-sm text-indigo-200/65">Continuous professional development and opportunities to work with cutting-edge technology.</p>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-6 border border-gray-800 hover:border-indigo-500/30 transition-all text-center">
              <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-200 mb-2">Inclusive Culture</h3>
              <p className="text-sm text-indigo-200/65">Diverse team where every voice matters. Equal opportunity for all qualified candidates.</p>
            </div>
          </div>

          {/* Application Form */}
          <div className="max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            <div className="rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-8 border border-gray-800">
              <h2 className="font-nacelle text-2xl font-semibold text-indigo-200/65 mb-6 text-center">Application Form</h2>
              
              {/* Status Messages */}
              {submitStatus.type === 'success' && (
                <div className="mb-6 rounded-lg bg-green-500/20 border-2 border-green-500/50 p-4 flex items-center gap-3 animate-fadeIn">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-green-200 font-medium">{submitStatus.message}</p>
                </div>
              )}
              
              {submitStatus.type === 'error' && (
                <div className="mb-6 rounded-lg bg-red-500/20 border-2 border-red-500/50 p-4 flex items-center gap-3 animate-fadeIn">
                  <svg className="w-5 h-5 text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <p className="text-red-200 font-medium">{submitStatus.message}</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
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
                    className={`w-full rounded-lg bg-gray-900/50 border px-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 transition-all ${
                      errors.name ? "border-red-500 focus:ring-red-500/20 focus:border-red-500" : "border-gray-700 focus:border-indigo-500 focus:ring-indigo-500/20"
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.name}
                  </p>}
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
                    className={`w-full rounded-lg bg-gray-900/50 border px-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 transition-all ${
                      errors.email ? "border-red-500 focus:ring-red-500/20 focus:border-red-500" : "border-gray-700 focus:border-indigo-500 focus:ring-indigo-500/20"
                    }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.email}
                  </p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-200 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full rounded-lg bg-gray-900/50 border px-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 transition-all ${
                      errors.phone ? "border-red-500 focus:ring-red-500/20 focus:border-red-500" : "border-gray-700 focus:border-indigo-500 focus:ring-indigo-500/20"
                    }`}
                    placeholder="+1 234 567 8900"
                  />
                  {errors.phone && <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.phone}
                  </p>}
                </div>

                <div>
                  <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-200 mb-2">
                    Job Title / Role *
                  </label>
                  <input
                    type="text"
                    id="jobTitle"
                    name="jobTitle"
                    required
                    value={formData.jobTitle}
                    onChange={handleChange}
                    className={`w-full rounded-lg bg-gray-900/50 border px-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 transition-all ${
                      errors.jobTitle ? "border-red-500 focus:ring-red-500/20 focus:border-red-500" : "border-gray-700 focus:border-indigo-500 focus:ring-indigo-500/20"
                    }`}
                    placeholder="e.g., Software Engineer, Sales Manager"
                  />
                  {errors.jobTitle && <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.jobTitle}
                  </p>}
                </div>

                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-200 mb-2">
                    Years of Experience *
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    required
                    value={formData.experience}
                    onChange={handleChange}
                    className={`w-full rounded-lg bg-gray-900/50 border px-4 py-3 text-gray-200 focus:outline-none focus:ring-2 transition-all ${
                      errors.experience ? "border-red-500 focus:ring-red-500/20 focus:border-red-500" : "border-gray-700 focus:border-indigo-500 focus:ring-indigo-500/20"
                    }`}
                  >
                    <option value="">Select experience level</option>
                    <option value="0-1">0-1 years</option>
                    <option value="1-3">1-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5-10">5-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                  {errors.experience && <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.experience}
                  </p>}
                </div>

                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-200 mb-2">
                    Country *
                  </label>
                  <select
                    id="country"
                    name="country"
                    required
                    value={formData.country}
                    onChange={handleChange}
                    className={`w-full rounded-lg bg-gray-900/50 border px-4 py-3 text-gray-200 focus:outline-none focus:ring-2 transition-all ${
                      errors.country ? "border-red-500 focus:ring-red-500/20 focus:border-red-500" : "border-gray-700 focus:border-indigo-500 focus:ring-indigo-500/20"
                    }`}
                  >
                    <option value="">Select your country</option>
                    <option value="United States">United States</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Egypt">Egypt</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                    <option value="Germany">Germany</option>
                    <option value="France">France</option>
                    <option value="Spain">Spain</option>
                    <option value="Italy">Italy</option>
                    <option value="Netherlands">Netherlands</option>
                    <option value="Belgium">Belgium</option>
                    <option value="Switzerland">Switzerland</option>
                    <option value="Sweden">Sweden</option>
                    <option value="Norway">Norway</option>
                    <option value="Denmark">Denmark</option>
                    <option value="Poland">Poland</option>
                    <option value="United Arab Emirates">United Arab Emirates</option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="Kuwait">Kuwait</option>
                    <option value="Qatar">Qatar</option>
                    <option value="Bahrain">Bahrain</option>
                    <option value="Oman">Oman</option>
                    <option value="Jordan">Jordan</option>
                    <option value="Lebanon">Lebanon</option>
                    <option value="Morocco">Morocco</option>
                    <option value="Tunisia">Tunisia</option>
                    <option value="Algeria">Algeria</option>
                    <option value="South Africa">South Africa</option>
                    <option value="Nigeria">Nigeria</option>
                    <option value="Kenya">Kenya</option>
                    <option value="India">India</option>
                    <option value="China">China</option>
                    <option value="Japan">Japan</option>
                    <option value="South Korea">South Korea</option>
                    <option value="Singapore">Singapore</option>
                    <option value="Malaysia">Malaysia</option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="Thailand">Thailand</option>
                    <option value="Philippines">Philippines</option>
                    <option value="Vietnam">Vietnam</option>
                    <option value="Brazil">Brazil</option>
                    <option value="Mexico">Mexico</option>
                    <option value="Argentina">Argentina</option>
                    <option value="Chile">Chile</option>
                    <option value="Colombia">Colombia</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.country && <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.country}
                  </p>}
                </div>

                <div>
                  <label htmlFor="hearAbout" className="block text-sm font-medium text-gray-200 mb-2">
                    How did you hear about us? *
                  </label>
                  <select
                    id="hearAbout"
                    name="hearAbout"
                    required
                    value={formData.hearAbout}
                    onChange={handleChange}
                    className={`w-full rounded-lg bg-gray-900/50 border px-4 py-3 text-gray-200 focus:outline-none focus:ring-2 transition-all ${
                      errors.hearAbout ? "border-red-500 focus:ring-red-500/20 focus:border-red-500" : "border-gray-700 focus:border-indigo-500 focus:ring-indigo-500/20"
                    }`}
                  >
                    <option value="">Select an option</option>
                    <option value="Google Search">Google Search</option>
                    <option value="LinkedIn">LinkedIn</option>
                    <option value="Referral">Referral</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Industry Event">Industry Event</option>
                    <option value="Trade Publication">Trade Publication</option>
                    <option value="Partner/Reseller">Partner/Reseller</option>
                    <option value="Previous Client">Previous Client</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.hearAbout && <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.hearAbout}
                  </p>}
                </div>

                <div>
                  <label htmlFor="resume" className="block text-sm font-medium text-gray-200 mb-2">
                    Resume / CV Link *
                  </label>
                  <input
                    type="url"
                    id="resume"
                    name="resume"
                    required
                    value={formData.resume}
                    onChange={handleChange}
                    className={`w-full rounded-lg bg-gray-900/50 border px-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 transition-all ${
                      errors.resume ? "border-red-500 focus:ring-red-500/20 focus:border-red-500" : "border-gray-700 focus:border-indigo-500 focus:ring-indigo-500/20"
                    }`}
                    placeholder="https://drive.google.com/... or https://linkedin.com/in/..."
                  />
                  {errors.resume ? (
                    <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.resume}
                    </p>
                  ) : (
                    <p className="text-xs text-gray-500 mt-1">Provide a link to your resume (Google Drive, Dropbox, LinkedIn, etc.)</p>
                  )}
                </div>

                <div>
                  <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-200 mb-2">
                    Cover Letter (Optional)
                  </label>
                  <textarea
                    id="coverLetter"
                    name="coverLetter"
                    rows={4}
                    value={formData.coverLetter}
                    onChange={handleChange}
                    className="w-full rounded-lg bg-gray-900/50 border border-gray-700 px-4 py-3 text-gray-200 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all"
                    placeholder="Tell us why you'd like to join NajmX..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-t from-indigo-600 to-indigo-500 px-8 py-4 text-white font-medium shadow-lg hover:shadow-xl transition-all hover:scale-105 ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Application
                      <span className="text-white/50">→</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
