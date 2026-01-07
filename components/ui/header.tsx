"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Logo from "./logo";
import StarIcon from "./star-icon";

export default function Header() {
  const router = useRouter();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const handleClick = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      Object.values(dropdownRef.current).forEach((dropdown) => {
        if (dropdown && !dropdown.contains(target)) {
          setOpenDropdown(null);
        }
      });
    };

    if (openDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [openDropdown]);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (header) {
        if (window.scrollY > 10) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 w-full transition-all duration-300 bg-gray-950/98 border-b border-gray-800/70 shadow-lg shadow-black/20" style={{ zIndex: 99999, pointerEvents: 'auto', isolation: 'isolate' }}>
      <div className="relative w-full mx-auto px-4 sm:px-6 lg:px-8" style={{ position: 'relative', zIndex: 1, pointerEvents: 'auto' }}>
        <div className="relative flex h-20 items-center justify-between gap-6" style={{ position: 'relative', zIndex: 1, pointerEvents: 'auto' }}>
          
          {/* Logo Section with enhanced styling */}
          <div className="relative flex items-center shrink-0 z-50" style={{ pointerEvents: 'auto' }}>
            <Logo />
          </div>

          {/* Navigation */}
          <nav className="flex-1 flex items-center justify-center" style={{ zIndex: 1000, pointerEvents: 'auto' }}>
            <ul className="flex items-center gap-3 lg:gap-4 flex-nowrap" style={{ listStyle: 'none', margin: 0, padding: 0, pointerEvents: 'auto' }}>
            {/* Products Dropdown */}
            <li 
              className="relative"
              style={{ pointerEvents: 'auto', zIndex: 1001 }}
            >
              <div className="flex items-center">
                <a
                  href="/products"
                  onClick={(e) => { e.preventDefault(); router.push('/products'); }}
                  className="text-lg font-semibold text-gray-300 hover:text-white transition-all duration-200 px-3 py-1.5 rounded-lg hover:bg-indigo-500/10 hover:shadow-sm relative group cursor-pointer"
                  style={{ pointerEvents: 'auto', zIndex: 1001 }}
                >
                  Products
                </a>
                <button
                  onClick={(e) => { e.stopPropagation(); handleClick('products'); }}
                  className="text-lg font-semibold text-gray-300 hover:text-white transition-all duration-200 p-1 rounded-lg hover:bg-indigo-500/10 relative group cursor-pointer"
                  style={{ pointerEvents: 'auto', zIndex: 1001 }}
                >
                  <svg className="w-3.5 h-3.5 transition-transform duration-200" style={{ transform: openDropdown === 'products' ? 'rotate(180deg)' : 'rotate(0deg)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              {openDropdown === 'products' && (
                <div 
                  ref={(el) => dropdownRef.current['products'] = el}
                  className="absolute top-full left-0 mt-2 w-56 rounded-xl bg-gray-900/98 backdrop-blur-xl border border-gray-700/60 shadow-2xl py-2 overflow-hidden"
                  style={{ zIndex: 1002, animation: 'fadeInDown 0.2s ease-out', pointerEvents: 'auto' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/8 via-purple-500/5 to-indigo-500/8 pointer-events-none"></div>
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent"></div>
                  <Link href="/products/najmvoip" className="relative block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-indigo-500/10 hover:to-purple-500/10 transition-all group">
                    <span className="flex items-center gap-2">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity"><StarIcon className="w-3 h-3" glow /></span>
                      <span>NajmVoIP</span>
                    </span>
                  </Link>
                  <Link href="/products/najmfax" className="relative block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-indigo-500/10 hover:to-purple-500/10 transition-all group">
                    <span className="flex items-center gap-2">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity"><StarIcon className="w-3 h-3" glow /></span>
                      <span>NajmFAX</span>
                    </span>
                  </Link>
                  <Link href="/products/najmagent" className="relative block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-indigo-500/10 hover:to-purple-500/10 transition-all group">
                    <span className="flex items-center gap-2">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity"><StarIcon className="w-3 h-3" glow /></span>
                      <span>NajmAgent</span>
                    </span>
                  </Link>
                  <Link href="/products/najmnetwork" className="relative block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-indigo-500/10 hover:to-purple-500/10 transition-all group">
                    <span className="flex items-center gap-2">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity"><StarIcon className="w-3 h-3" glow /></span>
                      <span>NajmNetwork</span>
                    </span>
                  </Link>
                </div>
              )}
            </li>

            {/* Solutions Dropdown */}
            <li 
              className="relative"
              style={{ pointerEvents: 'auto', zIndex: 1001 }}
            >
              <div className="flex items-center">
                <a
                  href="/services"
                  onClick={(e) => { e.preventDefault(); router.push('/services'); }}
                  className="text-lg font-semibold text-gray-300 hover:text-white transition-all duration-200 px-3 py-1.5 rounded-lg hover:bg-indigo-500/10 hover:shadow-sm relative group cursor-pointer"
                  style={{ pointerEvents: 'auto', zIndex: 1001 }}
                >
                  Solutions
                </a>
                <button
                  onClick={(e) => { e.stopPropagation(); handleClick('solutions'); }}
                  className="text-lg font-semibold text-gray-300 hover:text-white transition-all duration-200 p-1 rounded-lg hover:bg-indigo-500/10 relative group cursor-pointer"
                  style={{ pointerEvents: 'auto', zIndex: 1001 }}
                >
                  <svg className="w-3.5 h-3.5 transition-transform duration-200" style={{ transform: openDropdown === 'solutions' ? 'rotate(180deg)' : 'rotate(0deg)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              {openDropdown === 'solutions' && (
                <div 
                  ref={(el) => dropdownRef.current['solutions'] = el}
                  className="absolute top-full left-0 mt-2 w-64 rounded-xl bg-gray-900/98 backdrop-blur-xl border border-gray-700/60 shadow-2xl py-2 overflow-hidden"
                  style={{ zIndex: 1002, animation: 'fadeInDown 0.2s ease-out', pointerEvents: 'auto' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/8 via-purple-500/5 to-indigo-500/8 pointer-events-none"></div>
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent"></div>
                  <Link href="/services/voip-solutions" className="relative block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-indigo-500/10 hover:to-purple-500/10 transition-all group">
                    <span className="flex items-center gap-2">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity"><StarIcon className="w-3 h-3" glow /></span>
                      <span>VoIP</span>
                    </span>
                  </Link>
                  <Link href="/services/call-center-services" className="relative block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-indigo-500/10 hover:to-purple-500/10 transition-all group">
                    <span className="flex items-center gap-2">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity"><StarIcon className="w-3 h-3" glow /></span>
                      <span>Contact Center Operations</span>
                    </span>
                  </Link>
                  <Link href="/services/fax-services" className="relative block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-indigo-500/10 hover:to-purple-500/10 transition-all group">
                    <span className="flex items-center gap-2">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity"><StarIcon className="w-3 h-3" glow /></span>
                      <span>Cloud Fax Services</span>
                    </span>
                  </Link>
                  <Link href="/services/ai-agent" className="relative block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-indigo-500/10 hover:to-purple-500/10 transition-all group">
                    <span className="flex items-center gap-2">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity"><StarIcon className="w-3 h-3" glow /></span>
                      <span>Conversational AI Automation</span>
                    </span>
                  </Link>
                  <Link href="/services/network-consultancy" className="relative block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-indigo-500/10 hover:to-purple-500/10 transition-all group">
                    <span className="flex items-center gap-2">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity"><StarIcon className="w-3 h-3" glow /></span>
                      <span>Network Architecture</span>
                    </span>
                  </Link>
                </div>
              )}
            </li>

            {/* Why NajmX Dropdown */}
            <li 
              className="relative"
              style={{ pointerEvents: 'auto', zIndex: 1001 }}
            >
              <div className="flex items-center">
                <a
                  href="/about"
                  onClick={(e) => { e.preventDefault(); router.push('/about'); }}
                  className="text-base font-semibold text-gray-300 hover:text-white transition-all duration-200 px-3 py-1.5 rounded-lg hover:bg-indigo-500/10 hover:shadow-sm relative group whitespace-nowrap cursor-pointer"
                  style={{ pointerEvents: 'auto', zIndex: 1001 }}
                >
                  Why NajmX
                </a>
                <button
                  onClick={(e) => { e.stopPropagation(); handleClick('why'); }}
                  className="text-lg font-semibold text-gray-300 hover:text-white transition-all duration-200 p-1 rounded-lg hover:bg-indigo-500/10 relative group cursor-pointer"
                  style={{ pointerEvents: 'auto', zIndex: 1001 }}
                >
                  <svg className="w-3.5 h-3.5 transition-transform duration-200" style={{ transform: openDropdown === 'why' ? 'rotate(180deg)' : 'rotate(0deg)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              {openDropdown === 'why' && (
                <div 
                  ref={(el) => dropdownRef.current['why'] = el}
                  className="absolute top-full left-0 mt-2 w-52 rounded-xl bg-gray-900/98 backdrop-blur-xl border border-gray-700/60 shadow-2xl py-2 overflow-hidden"
                  style={{ zIndex: 1002, animation: 'fadeInDown 0.2s ease-out', pointerEvents: 'auto' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/8 via-purple-500/5 to-indigo-500/8 pointer-events-none"></div>
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent"></div>
                  <Link href="/about" className="relative block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-indigo-500/10 hover:to-purple-500/10 transition-all group">
                    <span className="flex items-center gap-2">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity"><StarIcon className="w-3 h-3" glow /></span>
                      <span>About Us</span>
                    </span>
                  </Link>
                  <Link href="/diversity" className="relative block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-indigo-500/10 hover:to-purple-500/10 transition-all group">
                    <span className="flex items-center gap-2">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity"><StarIcon className="w-3 h-3" glow /></span>
                      <span>Diversity</span>
                    </span>
                  </Link>
                  <Link href="/careers" className="relative block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-indigo-500/10 hover:to-purple-500/10 transition-all group">
                    <span className="flex items-center gap-2">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity"><StarIcon className="w-3 h-3" glow /></span>
                      <span>Careers</span>
                    </span>
                  </Link>
                </div>
              )}
            </li>

            {/* Our Stars - No Dropdown */}
            <li className="relative" style={{ pointerEvents: 'auto', zIndex: 1001 }}>
              <a
                href="/testimonials"
                onClick={(e) => { e.preventDefault(); router.push('/testimonials'); }}
                className="text-base font-semibold text-gray-300 hover:text-white transition-all duration-200 px-3 py-1.5 rounded-lg hover:bg-indigo-500/10 hover:shadow-sm relative group whitespace-nowrap cursor-pointer"
                style={{ pointerEvents: 'auto', zIndex: 1001 }}
              >
                Our Stars
              </a>
            </li>

            {/* Contact - No Dropdown */}
            <li className="relative" style={{ pointerEvents: 'auto', zIndex: 1001 }}>
              <a
                href="/contact"
                onClick={(e) => { e.preventDefault(); router.push('/contact'); }}
                className="text-base font-semibold text-gray-300 hover:text-white transition-all duration-200 flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-indigo-500/10 hover:shadow-sm relative group whitespace-nowrap cursor-pointer"
                style={{ pointerEvents: 'auto', zIndex: 1001 }}
              >
                Contact
              </a>
            </li>
            </ul>
          </nav>

          {/* Right Section: Status & CTA */}
          <div className="relative flex items-center justify-end gap-3 shrink-0 z-50 ml-8" style={{ pointerEvents: 'auto' }}>
            {/* Status Indicator */}
              <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-green-500/10 border border-green-500/20 h-10" style={{ pointerEvents: 'auto' }}>
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm text-green-300/80 font-medium whitespace-nowrap">All systems operational</span>
            </div>
            
            {/* CTA Button */}
            <a
              href="/contact"
              onClick={(e) => { e.preventDefault(); router.push('/contact'); }}
              className="group relative inline-flex items-center gap-2 bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] h-10 px-5 text-base font-medium text-white shadow-lg hover:shadow-indigo-500/50 hover:bg-[length:100%_150%] transition-all duration-300 rounded-lg overflow-hidden cursor-pointer whitespace-nowrap"
              style={{ pointerEvents: 'auto' }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              <span className="relative z-10 flex items-center gap-2">
                Request Demo
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
}
