
"use client";

import Link from "next/link";

export default function TopBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[99998] w-full border-b border-[#202B3D] bg-[#070B13] shadow-[0_4px_16px_rgba(0,0,0,0.25)]">
      <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-10">
        <p className="text-xs font-medium tracking-[0.03em] text-[#DDE2E8] sm:text-sm">
          VICIdial, VoIP & Call Center Infrastructure Services
        </p>

        <div className="flex items-center gap-5 text-xs font-semibold sm:text-sm">
          <Link
            href="/get-started"
            className="text-[#D0AE69] transition-colors duration-200 hover:text-[#E5C989]"
          >
            Request a Quote
          </Link>

          <span className="h-4 w-px bg-[#334155]" />

          <Link
            href="/contact"
            className="text-[#AEB6C2] transition-colors duration-200 hover:text-[#F3F5F7]"
          >
            Support
          </Link>
        </div>
      </div>
    </div>
  );
}

