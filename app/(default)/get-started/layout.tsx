import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Started | VICIdial, VoIP & Call Center Infrastructure",

  description:
    "Request a quote from NajmX for VICIdial hosting, VoIP/SIP, DID numbers, PBX systems, managed servers, technical support, or custom business solutions.",

  alternates: {
    canonical: "https://najmx.net/get-started",
  },

  openGraph: {
    title: "Get Started | VICIdial, VoIP & Call Center Infrastructure",
    description:
      "Tell NajmX about your calling infrastructure requirements and get help with VICIdial, VoIP/SIP, DID numbers, PBX systems, servers, and custom solutions.",
    url: "https://najmx.net/get-started",
    type: "website",
  },
};

export default function GetStartedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}