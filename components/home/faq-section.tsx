'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Link from 'next/link';
import { motion } from 'framer-motion';

const faqItems = [
  {
    id: 'item-1',
    question: 'How quickly does Amplit AI answer patient calls?',
    answer:
      'Amplit AI answers every call in under 2 seconds — 24 hours a day, 7 days a week. There is no hold music, no voicemail, and no missed calls, even during peak hours or after-hours.',
  },
  {
    id: 'item-2',
    question: 'Which practice management systems does it integrate with?',
    answer:
      'Amplit AI integrates directly with leading dental practice management software including Dentrix, Eaglesoft, Open Dental, and Curve Dental. Appointments are booked and synced in real time with zero manual entry required.',
  },
  {
    id: 'item-3',
    question: 'Can the AI understand different accents and dental terminology?',
    answer:
      'Yes. Amplit AI is trained specifically on dental workflows and medical terminology. It handles a wide range of accents reliably and understands procedures, insurance terms, and common patient requests out of the box.',
  },
  {
    id: 'item-4',
    question: 'Does it verify insurance during the call?',
    answer:
      'Amplit AI can perform real-time insurance verification during the conversation, confirming coverage details before the appointment is booked — saving your front desk significant time and reducing billing surprises.',
  },
  {
    id: 'item-5',
    question: 'How long does it take to set up?',
    answer:
      'Most practices are fully live within a few days. Our onboarding team configures the AI to your custom scripts, protocols, and practice management system. No technical expertise is required on your end.',
  },
  {
    id: 'item-6',
    question: 'Is patient data secure and HIPAA compliant?',
    answer:
      'Absolutely. Amplit AI is built with HIPAA compliance at its core. All patient interactions are encrypted in transit and at rest, and we maintain strict data access controls to protect sensitive health information.',
  },
  {
    id: 'item-7',
    question: 'Is patient data secure and HIPAA compliant?',
    answer:
      'Absolutely. Amplit AI is built with HIPAA compliance at its core. All patient interactions are encrypted in transit and at rest, and we maintain strict data access controls to protect sensitive health information.',
  },
  {
    id: 'item-8',
    question: 'Is patient data secure and HIPAA compliant?',
    answer:
      'Absolutely. Amplit AI is built with HIPAA compliance at its core. All patient interactions are encrypted in transit and at rest, and we maintain strict data access controls to protect sensitive health information.',
  },
  {
    id: 'item-9',
    question: 'Is patient data secure and HIPAA compliant?',
    answer:
      'Absolutely. Amplit AI is built with HIPAA compliance at its core. All patient interactions are encrypted in transit and at rest, and we maintain strict data access controls to protect sensitive health information.',
  },
];

export default function FAQSection() {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Subtle background tint */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: 'radial-gradient(120% 60% at 50% 50%, rgba(101,148,177,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-sm font-semibold text-brand uppercase tracking-widest mb-3"
          >
            Got Questions?
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-bold text-black md:text-4xl lg:text-5xl leading-tight"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-black/80 mt-4 text-base leading-relaxed"
          >
            Everything you need to know about Amplit AI and how it works for your dental practice.
          </motion.p>
        </div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto max-w-3xl"
        >
          <Accordion
            type="single"
            collapsible
            className="w-full rounded-3xl border border-brand/15 bg-white px-8 py-3 shadow-sm"
          >
            {faqItems.map((item) => (
              <AccordionItem key={item.id} value={item.id} className="border-brand/15 border-dashed last:border-0">
                <AccordionTrigger className="cursor-pointer text-left text-base font-semibold text-black hover:text-brand hover:no-underline transition-colors">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-base text-black/80 leading-relaxed">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <p className="text-black/80 mt-6 px-8 text-sm">
            Still have questions?{' '}
            <Link href="/contact" className="text-brand font-medium hover:underline">
              Contact our team
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
