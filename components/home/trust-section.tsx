"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const TRUST_CONTENT = {
  headline: "Intelligent AI Solutions for Modern HealthCare Practices",
  description:
    "Amplit AI brings purpose-built intelligence to every layer of your HealthCare practices — from the front desk to the back office. Less overhead, better patient experiences, and more revenue captured automatically.",
};

const PARTNER_LOGOS = [
  {
    name: "Handles All incoming Calls 24/7",
    logo: "/trust-image/call.png",
  },
  {
    name: "Book Appointments Seamlessly",
    logo: "/trust-image/Book.png",
  },
  {
    name: "Automated follow-ups and text reminders ",
    logo: "/trust-image/follow.png",
  },
  {
    name: "More care, less administrative work",
    logo: "/trust-image/multi-v1.png",
  },
];

export default function TrustSection() {
  return (
    <section className="relative w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          className="flex flex-col xl:flex-row bg-white rounded-3xl p-5 sm:p-7 lg:p-8 items-stretch gap-6 lg:gap-8 border border-brand/60"
          style={{
            boxShadow:
              "0 1px 3px rgba(0,0,0,0.04), 0 4px 24px rgba(0,0,0,0.03)",
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="shrink-0 flex flex-col justify-center w-full xl:w-[42%]"
          >
            <div className="w-10 h-1 rounded-full bg-brand mb-5" />

            <h2 className="text-lg sm:text-xl md:text-4xl font-bold text-gray-900 tracking-tight leading-snug mb-3">
              {TRUST_CONTENT.headline}{" "}
            </h2>

            <p className="text-[15px] md:text-[17px] text-[#4e5157] font-medium leading-relaxed max-w-md">
              {TRUST_CONTENT.description}
            </p>
          </motion.div>
          <div className="flex-1 grid grid-cols-2 gap-4 sm:gap-5">
            {PARTNER_LOGOS.map((partner) => (
              <div
                key={partner.name}
                className="group relative overflow-hidden rounded-2xl bg-brand-bg1 border border-brand/10 flex items-center justify-center cursor-default h-30 sm:h-46"
                style={{ boxShadow: "0 2px 8px rgba(101,148,177,0.08)" }}
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={1920}
                  height={1080}
                  className="w-full h-full object-contain grayscale-100 mix-blend-multiply transition-transform duration-500 group-hover:scale-[1.05]"
                />

                <span className="absolute bottom-2 left-2 text-[11px] font-semibold text-brand bg-white/80 backdrop-blur-sm px-2.5 py-1 rounded-lg opacity-100 transition-opacity duration-300 z-20">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
