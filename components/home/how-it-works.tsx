'use client';

import React, { useEffect, useRef } from 'react';
import { PhoneCall, CalendarCheck, MessageSquareText } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { BorderBeam } from '@/components/ui/border-beam';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  {
    step: '01',
    icon: PhoneCall,
    title: 'Patient Calls In',
    description: 'When a patient calls your practice, Amplit AI answers instantly — 24/7, no hold music, no missed calls.',
    bullets: ['Answers in under 2 seconds', 'Handles multiple calls simultaneously', 'Understands accents & terminology'],
    visual: 'phone',
    reverse: false,
  },
  {
    step: '02',
    icon: MessageSquareText,
    title: 'AI Handles the Conversation',
    description: 'Amplit AI collects patient information, answers FAQs, and verifies insurance through a natural conversation.',
    bullets: ['Insurance verification in real time', 'Answers common questions instantly', 'Follows your custom protocols'],
    visual: 'chat',
    reverse: true,
  },
  {
    step: '03',
    icon: CalendarCheck,
    title: 'Appointment Booked & Synced',
    description: 'Appointments are booked directly into your practice management system. No manual entry, zero admin overhead.',
    bullets: ['Syncs with Dentrix, Eaglesoft & more', 'Automated confirmations', 'Reduces no-shows by up to 40%'],
    visual: 'calendar',
    reverse: false,
  },
];

/* --- Responsive Visual Components --- */

function PhoneVisual() {
  return (
    <div className="relative flex items-center justify-center w-full h-full scale-75 md:scale-100">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="absolute rounded-full border border-brand/30"
          style={{
            width: `${120 + i * 40}px`,
            height: `${120 + i * 40}px`,
            animation: `ping ${1.2 + i * 0.4}s cubic-bezier(0,0,0.2,1) infinite`,
            animationDelay: `${i * 0.3}s`,
          }}
        />
      ))}
      <div className="relative z-10 w-16 h-16 md:w-20 md:h-20 rounded-full bg-brand flex items-center justify-center shadow-2xl">
        <PhoneCall className="w-6 h-6 md:w-8 md:h-8 text-white" />
      </div>
    </div>
  );
}

function ChatVisual() {
  const bubbles = [
    { text: 'Hi! I\'d like to book a cleaning.', from: 'user' },
    { text: 'Of course! Are you existing?', from: 'ai' },
    { text: 'Yes, I am Sarah.', from: 'user' },
  ];
  return (
    <div className="flex flex-col justify-center gap-3 w-full px-4 md:px-8">
      {bubbles.map((b, i) => (
        <div key={i} className={`flex ${b.from === 'user' ? 'justify-end' : 'justify-start'}`}>
          <div className={`px-4 py-2 rounded-2xl text-xs md:text-sm shadow-sm max-w-[80%] ${b.from === 'user' ? 'bg-brand text-white' : 'bg-white border text-black/80'
            }`}>
            {b.text}
          </div>
        </div>
      ))}
    </div>
  );
}

function CalendarVisual() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 w-full scale-90 md:scale-100">
      <div className="bg-white border border-black/10 rounded-2xl p-4 shadow-md w-56 md:w-64">
        <div className="grid grid-cols-2 gap-2">
          {['9:00 AM', '10:30 AM', '2:00 PM', '3:30 PM'].map((slot, i) => (
            <div key={slot} className={`rounded-lg p-2 text-[10px] md:text-xs font-bold text-center ${i === 1 ? 'bg-brand text-white' : 'bg-gray-100'
              }`}>
              {slot}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const visuals: Record<string, React.ReactNode> = {
  phone: <PhoneVisual />,
  chat: <ChatVisual />,
  calendar: <CalendarVisual />,
};

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.step-card');

      // Only run pinning animation on screens larger than 768px
      ScrollTrigger.matchMedia({
        "(min-width: 768px)": function () {
          cards.forEach((card, i) => {
            ScrollTrigger.create({
              trigger: card,
              start: "top 10%",
              endTrigger: containerRef.current,
              end: "bottom 80%",
              pin: true,
              pinSpacing: false,
              scrub: true,
            });

            if (i < cards.length - 1) {
              gsap.to(card, {
                scrollTrigger: {
                  trigger: cards[i + 1],
                  start: "top 80%",
                  end: "top 10%",
                  scrub: true,
                },
                scale: 0.9,
              });
            }
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-12 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold text-black tracking-tight">How It Works</h2>
        </div>

        <div className="relative">
          {steps.map((step) => (
            <div
              key={step.step}
              className="step-card w-full mb-8 md:mb-24 last:mb-0"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center bg-white border border-black/5 rounded-[30px] md:rounded-[40px] p-6 md:p-16 min-h-fit md:min-h-[500px] shadow-sm">

                <BorderBeam size={250} duration={12} colorFrom="#6594B1" colorTo="#a8c8de" borderWidth={1.5} />

                {/* Text Content: Always top on mobile, alternates on desktop */}
                <div className={`order-1 ${step.reverse ? 'md:order-2' : 'md:order-1'}`}>
                  <span className="text-4xl md:text-6xl font-black text-brand/20 mb-2 md:mb-4 block">
                    {step.step}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-6 md:mb-8 text-base md:text-lg leading-relaxed">
                    {step.description}
                  </p>
                  <ul className="space-y-3">
                    {step.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                        <div className="shrink-0 w-1.5 h-1.5 rounded-full bg-brand" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual Content: Bottom on mobile, alternates on desktop */}
                <div className={`order-2 h-[250px] md:h-[350px] bg-brand-bg2 rounded-2xl md:rounded-3xl flex items-center justify-center relative overflow-hidden ${step.reverse ? 'md:order-1' : 'md:order-2'
                  }`}>
                  {visuals[step.visual]}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}