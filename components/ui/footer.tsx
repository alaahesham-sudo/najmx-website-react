import Logo from "./logo";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative border-t border-gray-800/50">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900/95 to-gray-950"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.08),transparent_70%)]"></div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 md:py-20">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <Logo />
        </div>
              <p className="text-sm text-indigo-200/65 mb-6 max-w-xs">
                Connecting businesses across the globe with enterprise telecommunications, IT services, and network solutions.
              </p>
              <div className="flex items-center gap-3">
                <a 
                  href="mailto:info@najmx.net" 
                  className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center hover:bg-indigo-500/20 hover:border-indigo-500/40 transition-all group"
                  aria-label="Email us"
                  title="info@najmx.net"
                >
                  <svg className="w-5 h-5 text-indigo-400 group-hover:text-indigo-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
                <a 
                  href="tel:+19729478611" 
                  className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center hover:bg-indigo-500/20 hover:border-indigo-500/40 transition-all group"
                  aria-label="Call us"
                  title="+1 (972) 947-8611"
                >
                  <svg className="w-5 h-5 text-indigo-400 group-hover:text-indigo-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </a>
                <a 
                  href="https://linkedin.com/company/najmxllc" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center hover:bg-indigo-500/20 hover:border-indigo-500/40 transition-all group"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5 text-indigo-400 group-hover:text-indigo-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Products */}
            <div>
              <h3 className="text-sm font-semibold text-gray-200 mb-4 flex items-center gap-2">
                <span className="w-1 h-4 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></span>
                Products
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/products/najmvoip"
                    className="text-sm text-indigo-200/65 hover:text-indigo-300 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400/50 group-hover:bg-indigo-400 transition-colors"></span>
                    NajmVoIP
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/najmfax"
                    className="text-sm text-indigo-200/65 hover:text-indigo-300 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400/50 group-hover:bg-indigo-400 transition-colors"></span>
                    NajmFAX
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/najmagent"
                    className="text-sm text-indigo-200/65 hover:text-indigo-300 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400/50 group-hover:bg-indigo-400 transition-colors"></span>
                    NajmAgent
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/najmnetwork"
                    className="text-sm text-indigo-200/65 hover:text-indigo-300 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400/50 group-hover:bg-indigo-400 transition-colors"></span>
                    NajmNetwork
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="text-sm text-indigo-200/65 hover:text-indigo-300 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400/50 group-hover:bg-indigo-400 transition-colors"></span>
                    Pricing
                  </Link>
              </li>
            </ul>
          </div>

            {/* Company & Solutions */}
            <div>
              <h3 className="text-sm font-semibold text-gray-200 mb-4 flex items-center gap-2">
                <span className="w-1 h-4 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></span>
                Company
              </h3>
              <ul className="space-y-3 mb-8">
                <li>
                  <Link
                    href="/about"
                    className="text-sm text-indigo-200/65 hover:text-indigo-300 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400/50 group-hover:bg-indigo-400 transition-colors"></span>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/diversity"
                    className="text-sm text-indigo-200/65 hover:text-indigo-300 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400/50 group-hover:bg-indigo-400 transition-colors"></span>
                    Diversity
                  </Link>
              </li>
              <li>
                  <Link
                    href="/careers"
                    className="text-sm text-indigo-200/65 hover:text-indigo-300 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400/50 group-hover:bg-indigo-400 transition-colors"></span>
                  Careers
                  </Link>
              </li>
              <li>
                  <Link
                    href="/testimonials"
                    className="text-sm text-indigo-200/65 hover:text-indigo-300 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400/50 group-hover:bg-indigo-400 transition-colors"></span>
                    Our Stars
                  </Link>
              </li>
            </ul>
              <h3 className="text-sm font-semibold text-gray-200 mb-4 flex items-center gap-2">
                <span className="w-1 h-4 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></span>
                Solutions
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/services/voip-solutions"
                    className="text-sm text-indigo-200/65 hover:text-indigo-300 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400/50 group-hover:bg-indigo-400 transition-colors"></span>
                    VoIP
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/call-center-services"
                    className="text-sm text-indigo-200/65 hover:text-indigo-300 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400/50 group-hover:bg-indigo-400 transition-colors"></span>
                    Contact Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/fax-services"
                    className="text-sm text-indigo-200/65 hover:text-indigo-300 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400/50 group-hover:bg-indigo-400 transition-colors"></span>
                    Cloud Fax
                  </Link>
              </li>
                <li>
                  <Link
                    href="/services/ai-agent"
                    className="text-sm text-indigo-200/65 hover:text-indigo-300 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400/50 group-hover:bg-indigo-400 transition-colors"></span>
                    AI Automation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/network-consultancy"
                    className="text-sm text-indigo-200/65 hover:text-indigo-300 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400/50 group-hover:bg-indigo-400 transition-colors"></span>
                    Network Architecture
                  </Link>
                </li>
              </ul>
            </div>

            {/* Global Offices & Contact */}
            <div>
              <h3 className="text-sm font-semibold text-gray-200 mb-4 flex items-center gap-2">
                <span className="w-1 h-4 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></span>
              Global Offices
            </h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center flex-shrink-0 mt-0.5 overflow-hidden shadow-sm relative">
                    <Image src="https://flagcdn.com/w80/us.png" alt="USA" fill className="object-cover" loading="lazy" sizes="28px" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-200">Dallas, Texas</p>
                    <p className="text-xs text-indigo-200/50">Headquarters</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5 overflow-hidden shadow-sm relative">
                    <Image src="https://flagcdn.com/w80/eg.png" alt="Egypt" fill className="object-cover" loading="lazy" sizes="28px" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-200">Cairo, Egypt</p>
                    <p className="text-xs text-indigo-200/50">Operations Center</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5 overflow-hidden shadow-sm relative">
                    <Image src="https://flagcdn.com/w80/gb.png" alt="UK" fill className="object-cover" loading="lazy" sizes="28px" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-200">London, UK</p>
                    <p className="text-xs text-indigo-200/50">European Hub</p>
                  </div>
                </li>
              </ul>
              <h3 className="text-sm font-semibold text-gray-200 mb-4 flex items-center gap-2">
                <span className="w-1 h-4 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></span>
                Support
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/contact"
                    className="text-sm text-indigo-200/65 hover:text-indigo-300 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400/50 group-hover:bg-indigo-400 transition-colors"></span>
                    Contact Us
                  </Link>
              </li>
              <li>
                <a
                  href="mailto:info@najmx.net"
                    className="text-sm text-indigo-200/65 hover:text-indigo-300 transition-colors flex items-center gap-2 group"
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400/50 group-hover:bg-indigo-400 transition-colors"></span>
                  info@najmx.net
                </a>
              </li>
                <li>
                  <a
                    href="mailto:sales@najmx.net"
                    className="text-sm text-indigo-200/65 hover:text-indigo-300 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400/50 group-hover:bg-indigo-400 transition-colors"></span>
                    sales@najmx.net
                  </a>
                </li>
            </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-800/50">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex flex-wrap items-center gap-6 text-sm text-indigo-200/50">
                <p>© 2026 NajmX LLC. All Rights Reserved.</p>
              </div>
              <div className="flex items-center gap-4 text-sm text-indigo-200/50">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>24/7 Global Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span>Enterprise Security</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
