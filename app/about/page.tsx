'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { ArrowRight, Heart, Target, Users, Shield, Zap, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';
import AboutCTA from '@/components/about/about-cta';
import AboutHero from '@/components/about/about-hero';
import AboutMission from '@/components/about/about-mission';
import AboutValues from '@/components/about/about-values';
import AboutQuote from '@/components/about/about-quote';

export default function AboutPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [missionRef, missionInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [valuesRef, valuesInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>

      <AboutHero />


      <AboutMission />

      <AboutValues />
      <AboutQuote/>
        <AboutCTA />
    </>
  );
}
