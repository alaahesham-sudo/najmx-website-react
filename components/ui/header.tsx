"use client";

import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-gray-900/90 px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-sm">
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          <ul className="flex flex-1 items-center justify-center gap-6">
            <li>
              <Link
                href="#products"
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="#solutions"
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                href="#pricing"
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>

          <ul className="flex flex-1 items-center justify-end gap-3">
            <li>
              <Link
                href="#contact"
                className="btn-sm bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] py-[5px] text-white shadow-lg hover:bg-[length:100%_150%]"
              >
                Request Demo
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}