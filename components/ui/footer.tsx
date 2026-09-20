import Link from "next/link";
import Image from "next/image";

export default function Footer() {
return ( <footer className="border-t border-[#202B3D] bg-[#050810]"> <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

    {/* Main Footer */}
    <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1.15fr]">

      {/* Brand */}
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-3"
          aria-label="NajmX"
        >
          <div className="relative h-[48px] w-[48px] shrink-0 rounded-full border border-[#D0AE69]/80 p-2">
	  	
            <Image
              src="/images/najmx-logo.png"
              alt="NajmX Logo"
              fill
              priority	
              className="object-contain p-2.5"
              sizes="64px"
            />
          </div>

          <span className="relative -mb-1 overflow-visible bg-[linear-gradient(110deg,#F3F5F7_0%,#F3F5F7_42%,#D0AE69_68%,#A27D38_100%)] bg-clip-text pb-1 text-[34px] font-extrabold leading-[1.2] tracking-tight text-transparent drop-shadow-[0_1px_2px_rgba(0,0,0,0.28)]">
            NajmX
          </span>
        </Link>

        <p className="mt-5 max-w-sm text-sm leading-7 text-[#929DAB]">
          VICIdial, VoIP/SIP, PBX, DID, and managed server infrastructure
          for call centers and businesses.
        </p>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/company/najmxllc"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="NajmX on LinkedIn"
          className="mt-5 inline-flex h-9 w-9 items-center justify-center rounded-md border border-[#253146] bg-[#0C141F] text-[#0A66C2] transition-all duration-200 hover:border-[#0A66C2] hover:bg-[#0A66C2]/10 hover:text-[#0A66C2]"
        >
          <svg
            className="h-[18px] w-[18px]"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.3ZM5.32 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0-4.14ZM3.54 20.45H7.1V8.99H3.54v11.46ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 .77 0 .77 1.77 0Z" />
          </svg>
        </a>
      </div>

      {/* Services */}
      <div>
        <h3 className="mb-5 text-[17px] font-semibold leading-6 tracking-[0.01em] text-[#F3F5F7] [font-family:Arial,Helvetica,sans-serif]">
          Services
        </h3>

        <ul className="space-y-3 text-sm">
          {[
            ["VICIdial & Dialer Hosting", "/services/vicidial-dialer-hosting"],
            ["VoIP & SIP", "/services/voip-sip"],
            ["DID Numbers", "/services/did-numbers"],
            ["PBX & Call Center Systems", "/services/pbx-call-center"],
            ["Managed Servers", "/services/managed-servers"],
            ["Technical Support", "/services/technical-support"],
            ["Custom Business Solutions", "/custom-business-solutions"],
          ].map(([label, href]) => (
            <li key={label}>
              <Link
                href={href}
                className="text-[#929DAB] transition-colors duration-200 hover:text-[#B8944A]"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Company */}
      <div>
        <h3 className="mb-5 text-[17px] font-semibold leading-6 tracking-[0.01em] text-[#F3F5F7] [font-family:Arial,Helvetica,sans-serif]">
          Company
        </h3>

        <ul className="space-y-3 text-sm">
          <li>
            <Link
              href="/about"
              className="text-[#929DAB] transition-colors duration-200 hover:text-[#B8944A]"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              className="text-[#929DAB] transition-colors duration-200 hover:text-[#B8944A]"
            >
              Contact
            </Link>
          </li>

          <li>
            <Link
              href="/get-started"
              className="text-[#929DAB] transition-colors duration-200 hover:text-[#B8944A]"
            >
              Get Started
            </Link>
          </li>
        </ul>
      </div>

      {/* Support */}
      <div>
        <h3 className="mb-5 text-[17px] font-semibold leading-6 tracking-[0.01em] text-[#F3F5F7] [font-family:Arial,Helvetica,sans-serif]">
          Support
        </h3>

        <p className="mb-5 text-sm leading-7 text-[#929DAB]">
          Support built around your working hours, including U.S. business
          coverage and 24/7 monitoring and assistance for operations that
          run around the clock.
        </p>

        <Link
          href="/get-started"
          className="inline-flex items-center justify-center rounded-md border border-[#67D391] bg-[#67D391] px-6 py-3 text-sm font-semibold text-[#06100B] shadow-[0_0_18px_rgba(103,211,145,0.24)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#8AE0AA] hover:bg-[#8AE0AA] hover:shadow-[0_0_34px_rgba(103,211,145,0.55),0_0_70px_rgba(103,211,145,0.22)]"
        >
          Request a Quote
        </Link>
      </div>
    </div>

    {/* Bottom */}
    <div className="border-t border-[#202B3D] py-6">
      <div className="flex flex-col gap-4 text-sm text-[#6F7B8B] md:flex-row md:items-center md:justify-between">
        <p>© 2026 NajmX LLC. All Rights Reserved.</p>

        <div className="flex flex-wrap gap-x-1 gap-y-2">
          <Link
            href="/legal/privacy-policy"
            className="transition-colors duration-200 hover:text-[#B8944A]"
          >
            Privacy Policy |
          </Link>

          <Link
            href="/legal/terms-of-service"
            className="transition-colors duration-200 hover:text-[#B8944A]"
          >
            Terms of Service |
          </Link>

          <Link
            href="/legal/acceptable-use-policy"
            className="transition-colors duration-200 hover:text-[#B8944A]"
          >
            Acceptable Use Policy
          </Link>
        </div>
      </div>
    </div>

  </div>
</footer>

);
}
