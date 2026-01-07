import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NajmX - VoIP & FAX Solutions | Egypt, UK & US",
  description: "Every client is a star in our constellation. NajmX delivers cutting-edge VoIP and FAX solutions connecting businesses globally.",
};

import Starfield from "@/components/starfield";
import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Pricing from "@/components/pricing";
import BackToTop from "@/components/back-to-top";

export default function Home() {
  return (
    <>
      <Starfield />
      <PageIllustration />
      <Hero />
      <Pricing />
      <BackToTop />
    </>
  );
}