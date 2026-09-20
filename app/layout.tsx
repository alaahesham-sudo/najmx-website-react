import type { Metadata } from "next";
import "./css/style.css";

import BackToTop from "@/components/back-to-top";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const nacelle = localFont({
  src: [
    {
      path: "../public/fonts/nacelle-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/nacelle-italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/nacelle-semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/nacelle-semibolditalic.woff2",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-nacelle",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://najmx.net"),

  title: {
    default: "NajmX | VICIdial Hosting, VoIP & Call Center Infrastructure",
    template: "%s | NajmX",
  },

  description:
    "VICIdial hosting, VoIP and SIP connectivity, DID numbers, PBX systems, managed servers, and technical support for call centers and businesses.",

  alternates: {
    canonical: "https://najmx.net",
  },

  openGraph: {
    type: "website",
    url: "https://najmx.net",
    siteName: "NajmX",
    title: "NajmX | VICIdial Hosting, VoIP & Call Center Infrastructure",
    description:
      "VICIdial hosting, VoIP and SIP connectivity, DID numbers, PBX systems, managed servers, and technical support for call centers and businesses.",
    images: [
      {
        url: "/images/najmx-logo.jpg",
        width: 1200,
        height: 630,
        alt: "NajmX - Call Center Infrastructure",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "NajmX | VICIdial Hosting, VoIP & Call Center Infrastructure",
    description:
      "VICIdial hosting, VoIP and SIP connectivity, DID numbers, PBX systems, managed servers, and technical support for call centers and businesses.",
    images: ["/images/najmx-logo.jpg"],
  },

  icons: {
    icon: "/images/najmx-logo.png",
    shortcut: "/images/najmx-logo.png",
    apple: "/images/najmx-logo.png",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://najmx.net/#organization",
  name: "NajmX LLC",
  url: "https://najmx.net",
  logo: "https://najmx.net/images/najmx-logo.jpg",
  description:
    "VICIdial hosting, VoIP and SIP connectivity, DID numbers, PBX systems, managed servers, and technical support for call centers and businesses.",
  email: "info@najmx.net",
  sameAs: ["https://www.linkedin.com/company/najmxllc"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${nacelle.variable} bg-gray-950 font-inter text-base text-gray-200 antialiased`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
          <BackToTop />
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </body>
    </html>
  );
}