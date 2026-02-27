"use client";
import DentsiHero from "../../components/products/dentsi-hero";
import DentsiFeatures from "../../components/products/dentsi-features";
import ProductCTA from "@/components/products/product-cta";
import DentsiBenefits from "@/components/products/dentsi-benefits";

export default function DentsiPage() {
  return (
    <>
      <DentsiHero />
      <DentsiFeatures />
      <DentsiBenefits />
      <ProductCTA />
    </>
  );
}
