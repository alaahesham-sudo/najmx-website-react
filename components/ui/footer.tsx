import Logo from "./logo";
import Image from "next/image";
import FooterIllustration from "@/public/images/footer-illustration.svg";

export default function Footer() {
  return (
    <footer>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
          aria-hidden="true"
        >
          <Image
            className="max-w-none"
            src={FooterIllustration}
            width={1076}
            height={378}
            alt="Footer illustration"
          />
        </div>
        <div className="grid grid-cols-2 justify-between gap-12 py-8 sm:grid-rows-[auto_auto] md:grid-cols-4 md:grid-rows-[auto_auto] md:py-12 lg:grid-cols-[repeat(4,minmax(0,140px))_1fr] lg:grid-rows-1 xl:gap-20">
          {/* Products */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="#products"
                >
                  NajmVoIP
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="#products"
                >
                  NajmFAX
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="#solutions"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="#pricing"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="#about"
                >
                  About NajmX
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="#contact"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="#contact"
                >
                  Partners
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="#contact"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="#contact"
                >
                  24/7 Support
                </a>
              </li>
            </ul>
          </div>

          {/* Global Offices */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">
              Global Offices
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-indigo-200/65">
                  🇪🇬 Cairo, Egypt
                </span>
              </li>
              <li>
                <span className="text-indigo-200/65">
                  🇬🇧 London, UK
                </span>
              </li>
              <li>
                <span className="text-indigo-200/65">
                  🇺🇸 Sheridan, WY, USA
                </span>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="mailto:info@najmx.net"
                >
                  info@najmx.net
                </a>
              </li>
            </ul>
          </div>

          {/* Logo & Copyright */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 lg:text-right">
            <div className="mb-3">
              <Logo />
            </div>
            <div className="text-sm">
              <p className="text-indigo-200/65">
                © 2025 NajmX Tech Solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}