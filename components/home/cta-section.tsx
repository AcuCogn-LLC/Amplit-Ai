'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { CONTACT_INFO } from '@/lib/constants';
import { BorderBeam } from '@/components/ui/border-beam';

export default function CTASection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Generate vertical stripe positions
  const stripes = Array.from({ length: 18 }, (_, i) => i);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl  px-12 py-16 md:py-20"
        >
          <BorderBeam size={250} duration={12} colorFrom="#6594B1" colorTo="#a8c8de" borderWidth={1.5} />

          {/* Ambient glow */}
          <div
            className="absolute inset-0 pointer-events-none bg-ambient-glow"
          />

          {/* Content */}
          <div className="relative z-10 max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight mb-5">
              We&apos;re the leading AI Front Desk in dental.
            </h2>
            <p className="text-black/80 text-base md:text-lg mb-10 leading-relaxed">
              Embark on a transformation journey into the future of healthcare AI as you
              kickstart your exploration of Amplit AI, where limitless possibilities await
              at every click and command.
            </p>
            <Link
              href={CONTACT_INFO.calendly}
              target="_blank"
              className="inline-flex items-center px-7 py-3.5 bg-brand text-white font-semibold rounded-full transition-all"
            >
              Book Your Demo
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
