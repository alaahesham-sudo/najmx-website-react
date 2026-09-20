
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact NajmX | VICIdial, VoIP & Call Center Infrastructure",

  description:
    "Contact NajmX about VICIdial hosting, VoIP/SIP, DID numbers, PBX systems, managed servers, technical support, and custom business solutions.",

  alternates: {
    canonical: "https://najmx.net/contact",
  },

  openGraph: {
    title: "Contact NajmX | VICIdial, VoIP & Call Center Infrastructure",
    description:
      "Contact NajmX to discuss VICIdial, VoIP/SIP, DID numbers, PBX systems, managed servers, technical support, or custom business infrastructure.",
    url: "https://najmx.net/contact",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
