'use client';
import DentsiHero from '../../components/products/dentsi-hero';
import DentsiFeatures from '../../components/products/dentsi-features';
import ProductCTA from '@/components/products/product-cta';
import DentsiImpact from '@/components/products/dentsi-impact';


export default function DentsiPage() {

  return (
    <>
        <DentsiHero />


   
      <DentsiFeatures />

      <DentsiImpact />

        <ProductCTA />
  
    </>
  );
}
