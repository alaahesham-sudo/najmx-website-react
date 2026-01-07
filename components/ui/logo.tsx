"use client";

import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0 items-center gap-3 hover:no-underline" aria-label="NajmX">
      <div className="flex items-center gap-3">
        <div className="relative w-12 h-12">
          <Image 
            src="/images/najmx-logo.jpg" 
            alt="NajmX Logo" 
            fill
            className="object-contain"
            priority
            sizes="48px"
          />
        </div>
        <span className="text-4xl font-bold bg-[linear-gradient(to_right,var(--color-gray-100),var(--color-yellow-500))] bg-clip-text text-transparent">
          NajmX
        </span>
      </div>
    </Link>
  );
}
