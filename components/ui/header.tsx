"use client";

import Link from "next/link";
import Image from "next/image";
import TopBar from "./top-bar";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <TopBar />

      <header
        className={`fixed left-0 right-0 w-full border-b border-[#D8DEE7] bg-[#F3F5F7] shadow-[0_8px_30px_rgba(0,0,0,0.12)] backdrop-blur-sm transition-all duration-300 ${
          scrolled ? "top-0" : "top-10"
        }`}
        style={{
          zIndex: 99999,
          pointerEvents: "auto",
          isolation: "isolate",
        }}
      >
        <div
          className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10"
          style={{
            position: "relative",
            zIndex: 1,
            pointerEvents: "auto",
          }}
        >
          <div
            className="relative flex h-[76px] items-center gap-8"
            style={{
              position: "relative",
              zIndex: 1,
              pointerEvents: "auto",
            }}
          >
            {/* Logo */}
            <div
              className="relative z-50 flex shrink-0 items-center"
              style={{ pointerEvents: "auto" }}
            >
              <Link
                href="/"
                className="inline-flex shrink-0 items-center gap-3 hover:no-underline"
                aria-label="NajmX"
              >
                
                <div className="relative h-[44px] w-[44px] shrink-0 rounded-full border border-[#D0AE69]/80 bg-[#111827] p-2">
                  <Image
                    src="/images/najmx-logo.png"
                    alt="NajmX Logo"
                    fill
                    priority
                    className="object-contain p-2.5"
                    sizes="44px"
                  />
                </div>

                <span className="relative -mb-1 overflow-visible bg-[linear-gradient(110deg,#111827_0%,#111827_48%,#B8944A_68%,#8F6F32_100%)] bg-clip-text pb-1 text-[34px] font-extrabold leading-[1.2] tracking-tight text-transparent drop-shadow-[0_1px_1px_rgba(0,0,0,0.12)]">
                
                  NajmX
                </span>
              </Link>
            </div>

            {/* Navigation */}
            <nav
              className="flex flex-1 items-center justify-center"
              style={{
                zIndex: 1000,
                pointerEvents: "auto",
              }}
            >
              <ul
                className="flex flex-nowrap items-center gap-1 lg:gap-2"
                style={{
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                  pointerEvents: "auto",
                }}
              >
                <li
                  className="relative"
                  style={{ pointerEvents: "auto", zIndex: 1001 }}
                >
                  <Link
                    href="/"
                    className="whitespace-nowrap rounded-md px-3 py-2 text-[15px] font-semibold leading-6 tracking-[0.01em] text-[#1F2937] transition-all duration-200 hover:bg-[#E8EDF3] hover:text-[#0B1220] [font-family:Arial,Helvetica,sans-serif]"
                  >
                    Home
                  </Link>
                </li>

                <li
                  className="relative"
                  style={{ pointerEvents: "auto", zIndex: 1001 }}
                >
                  <Link
                    href="/services"
                    className="whitespace-nowrap rounded-md px-3 py-2 text-[15px] font-semibold leading-6 tracking-[0.01em] text-[#1F2937] transition-all duration-200 hover:bg-[#E8EDF3] hover:text-[#0B1220] [font-family:Arial,Helvetica,sans-serif]"
                  >
                    Services
                  </Link>
                </li>

                <li
                  className="relative"
                  style={{ pointerEvents: "auto", zIndex: 1001 }}
                >
                  <Link
                    href="/custom-business-solutions"
                    className="whitespace-nowrap rounded-md px-3 py-2 text-[15px] font-semibold leading-6 tracking-[0.01em] text-[#1F2937] transition-all duration-200 hover:bg-[#E8EDF3] hover:text-[#0B1220] [font-family:Arial,Helvetica,sans-serif]"
                  >
                    Custom Business Solutions
                  </Link>
                </li>

                <li
                  className="relative"
                  style={{ pointerEvents: "auto", zIndex: 1001 }}
                >
                  <Link
                    href="/about"
                    className="whitespace-nowrap rounded-md px-3 py-2 text-[15px] font-semibold leading-6 tracking-[0.01em] text-[#1F2937] transition-all duration-200 hover:bg-[#E8EDF3] hover:text-[#0B1220] [font-family:Arial,Helvetica,sans-serif]"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Right Section */}
            <div
              className="relative z-50 flex shrink-0 items-center justify-end"
              style={{ pointerEvents: "auto" }}
            >
              <Link
                href="/get-started"
                className="group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md border border-[#67D391] bg-[#67D391] px-6 py-3 text-base font-semibold leading-6 tracking-normal text-[#06100B] shadow-[0_0_12px_rgba(103,211,145,0.45),0_0_28px_rgba(103,211,145,0.28)] transition-all duration-200 ease-out hover:-translate-y-1 hover:scale-[1.025] hover:border-[#8AE0AA] hover:bg-[#8AE0AA] hover:shadow-[0_0_20px_rgba(103,211,145,0.9),0_0_50px_rgba(103,211,145,0.6),0_0_100px_rgba(103,211,145,0.28)] active:translate-y-0 active:scale-[0.99] [font-family:Arial,Helvetica,sans-serif]"
                style={{ pointerEvents: "auto" }}
              >
                <span className="flex items-center gap-2">
                  Get Started

                  <svg
                    className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}