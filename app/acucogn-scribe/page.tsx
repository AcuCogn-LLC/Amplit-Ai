'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { ArrowRight, FileText, Brain, Shield, Clock, Mic, Cloud, CheckCircle } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';
import ProductCTA from '@/components/products/product-cta';
import AcuCognScribeHero from '@/components/products/acucogn-hero';
import AcuCognFeatures from '@/components/products/acucogn-features';
import AcuCognBenefits from '@/components/products/acucogn-benefits';


const benefits = [
  'Reduce documentation burden by 70%',
  'Improve clinical note accuracy',
  'Enhance patient-provider interaction',
  'Seamless EHR integration',
  'Support for multiple specialties',
  'Customizable templates',
];

export default function AcuCognScribePage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [benefitsRef, benefitsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      <AcuCognScribeHero />


      <AcuCognFeatures />

      <AcuCognBenefits />

      <ProductCTA />
    </>
  );
}
