import type { Metadata } from "next";
import Starfield from "@/components/starfield";
import PageIllustration from "@/components/page-illustration";
import Pricing from "@/components/pricing";

export const metadata: Metadata = {
  title: "Pricing - NajmX | Custom Solutions",
  description: "Flexible pricing packages tailored to your business needs.",
};

export default function PricingPage() {
  return (
    <>
      <Starfield />
      <PageIllustration />
      <Pricing />
    </>
  );
}

