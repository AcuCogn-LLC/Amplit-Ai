"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Puzzle, Shield, Cpu, Target, Scaling, Zap } from "lucide-react";

const features = [
  {
    icon: Puzzle,
    title: "Plug-&-Play Integrations",
    description:
      "Seamlessly connect with Dentrix, Eaglesoft, Open Dental and more — zero manual configuration, live in days.",
    featured: true,
  },
  {
    icon: Shield,
    title: "Centralized & Secure AI",
    description:
      "Deploy with confidence. All data is encrypted in transit and at rest, with strict HIPAA controls.",
    featured: false,
  },
  {
    icon: Cpu,
    title: "Proprietary AI Models",
    description:
      "Models trained on dental workflows and your practice's unique protocols.",
    featured: false,
  },
  {
    icon: Target,
    title: "Precision & Accuracy",
    description: "Enterprise-grade accuracy with complete data privacy.",
    featured: false,
  },
  {
    icon: Scaling,
    title: "Infinite Scalability",
    description:
      "From single practice to DSO — scale without changing a line of code.",
    featured: false,
  },
  {
    icon: Zap,
    title: "24/7 Availability",
    description:
      "Always-on AI that never sleeps, ensuring zero missed calls or opportunities.",
    featured: false,
  },
];

/* Stripes for the featured card */
const stripeCount = Array.from({ length: 20 }, (_, i) => i);

export default function AcuCognFeatures() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="bg-white py-16 md:py-24 relative overflow-hidden">
      {/* Radial bg tint */}
      <div
        className="absolute inset-0 pointer-events-none bg-ambient-tint"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-sm font-semibold text-brand uppercase tracking-widest mb-3">
            Platform Capabilities
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-tight mb-4">
            Everything your practice needs,
            <br className="hidden sm:block" /> built in.
          </h2>
          <p className="text-black/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Domain-specific AI with complete privacy and compliance —
            purpose-built for healthcare.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="group relative overflow-hidden rounded-[28px] 
             bg-white/60 backdrop-blur-xl 
             border border-brand/12
             sm:col-span-2 lg:col-span-2 lg:row-span-2 
             p-8 flex flex-col justify-between 
             min-h-[240px] lg:min-h-[360px]"
          >
            {/* Ambient glow */}
            <div
              className="absolute inset-0 pointer-events-none bg-ambient-glow"
            />
            <div
              className="w-14 h-14 rounded-2xl 
                  bg-brand/10 
                  flex items-center justify-center 
                  mb-8
                  group-hover:scale-105
                  transition duration-300"
            >
              <Puzzle className="w-6 h-6 text-brand" />
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-neutral-900 mb-4 tracking-tight">
                {features[0].title}
              </h3>

              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed max-w-md">
                {features[0].description}
              </p>
            </div>
          </motion.div>

          {[features[1], features[2]].map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.08 }}
              className="group relative rounded-[24px] bg-white border border-brand/12 p-6 flex flex-col gap-4 "
            >
              <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center">
                <f.icon className="w-5 h-5 text-brand" />
              </div>
              <div>
                <h3 className="text-base font-bold text-black mb-1.5">
                  {f.title}
                </h3>
                <p className="text-sm text-black/80 leading-relaxed">
                  {f.description}
                </p>
              </div>
            </motion.div>
          ))}


          {[features[3], features[4], features[5]].map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.22 + i * 0.08 }}
              className="group relative rounded-[24px] bg-white border border-brand/12 p-6 flex flex-col gap-4 "
            >
              <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center">
                <f.icon className="w-5 h-5 text-brand" />
              </div>
              <div>
                <h3 className="text-base font-bold text-black mb-1.5">
                  {f.title}
                </h3>
                <p className="text-sm text-black/80 leading-relaxed">
                  {f.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
