import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NajmX - VoIP & FAX Solutions | Egypt, UK & US",
  description: "Every client is a star in our constellation. NajmX delivers cutting-edge VoIP and FAX solutions connecting businesses globally.",
};

import Starfield from "@/components/starfield";
import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import About from "@/components/about";
import Pricing from "@/components/pricing";
import Cta from "@/components/cta";
import WhatsAppButton from "@/components/whatsapp-button";
import BackToTop from "@/components/back-to-top";

export default function Home() {
  return (
    <>
      <Starfield />
      <PageIllustration />
      <Hero />
      <Workflows />
      <Features />
      <Testimonials />
      <About />
      <Pricing />
      <Cta />
      <WhatsAppButton />
      <BackToTop />
    </>
  );
}