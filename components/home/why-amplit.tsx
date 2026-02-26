"use client";

import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";

const pmsLogos = [
  { name: "Dentrix", color: "#2563eb" },
  { name: "Eaglesoft", color: "#16a34a" },
  { name: "Open Dental", color: "#dc2626" },
  { name: "Curve", color: "#9333ea" },
  { name: "Carestream", color: "#ea580c" },
  { name: "Dentimax", color: "#0891b2" },
];

function CallMockup() {
  return (
    <div className="w-full max-w-sm mx-auto bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
      <div>
        {/* Header */}
        <div className="bg-brand px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
              <PhoneCall className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-white text-xs font-semibold">Incoming Call</p>
              <p className="text-white/70 text-xs">+1 (972) 555-0148</p>
            </div>
          </div>
          <span className="text-white/80 text-xs font-mono">00:04</span>
        </div>
        {/* Body */}
        <div className="px-5 py-5 space-y-4">
          {[
            {
              label: "Intent",
              value: "Book Cleaning",
              color: "bg-brand/10 text-brand",
            },
            {
              label: "Patient",
              value: "Sarah M. — Existing",
              color: "bg-black/5 text-black/60",
            },
            {
              label: "Insurance",
              value: "Delta Dental ✓",
              color: "bg-green-50 text-green-700",
            },
          ].map((row) => (
            <div key={row.label} className="flex items-center justify-between">
              <span className="text-[13px] text-gray-400 font-medium">
                {row.label}
              </span>
              <span
                className={`text-xs font-semibold px-3 py-1.5 rounded-full ${row.color}`}
              >
                {row.value}
              </span>
            </div>
          ))}
          {/* Slot */}
          <div className="mt-5 bg-brand/5 rounded-xl p-4 border border-brand/10">
            <p className="text-xs text-gray-400 mb-2 font-medium">
              Booking slot
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-gray-900">
                Thu, Mar 6 · 10:30 AM
              </span>
              <span className="text-[11px] bg-brand text-white rounded-full px-2.5 py-1 font-semibold tracking-wide uppercase">
                Confirmed
              </span>
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className="border-t border-gray-100 px-5 py-3.5 flex items-center gap-2 bg-gray-50/50">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[11px] text-black/80 font-medium uppercase tracking-wider">
            AI handling call — 0 staff needed
          </span>
        </div>
        {/* This gradient will now be constrained to this specific div */}
        <div
          className="absolute inset-x-0 bottom-0 h-60 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, #ffffff 0%, rgba(248, 249, 251, 0) 100%)",
          }}
        />
      </div>
    </div>
  );
}

export default function WhyAmplit() {
  return (
    <section className="bg-white py-16 md:py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #6594B1 100%)",
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-16">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-10 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[32px] sm:text-[40px] md:text-[52px] font-bold text-gray-900 tracking-normal leading-none"
          >
            Why Amplit?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-black/60 text-[15px] leading-relaxed max-w-[420px] md:pt-2"
          >
            With Amplit AI, you can 10x your patient intake without compromising
            on quality. Capture every call fully automated, 24/7—holidays
            included. Don't waste energy on manual scheduling.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Left Column — Large Card */}
          {/* Left Column — Large Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-[24px] sm:rounded-[32px] bg-white border border-black/5  p-6 sm:p-10 flex flex-col justify-between min-h-[420px] sm:min-h-[580px]"
          >
            <BorderBeam size={350} duration={12} colorFrom="#6594B1" colorTo="#a8c8de" borderWidth={1.5} />
            
            <div className="flex-1 flex items-start justify-center pt-2 pb-10 relative overflow-hidden">
              <CallMockup />
            </div>

            <div>
              <h3 className="text-[24px] sm:text-[32px] md:text-[38px] font-medium text-gray-900 leading-[1.1] mb-3">
                Intelligent call handler
              </h3>
              <p className="text-black/80 text-[14px] sm:text-[15px] leading-relaxed max-w-md">
                With our intuitive AI and powerful features, you can
                effortlessly collect patient info, verify insurance, and book
                appointments seamlessly without staff.
              </p>
            </div>
          </motion.div>

          {/* Right Column — Sub Grid */}
          <div className="flex flex-col gap-5">
            {/* Top right — Multi-PMS */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative overflow-hidden rounded-[24px] sm:rounded-[32px] bg-white p-6 sm:p-10 flex-1 flex flex-col justify-center"
            >
              <BorderBeam size={200} duration={10} colorFrom="#6594B1" colorTo="#a8c8de" borderWidth={1.5} />
              <h3 className="text-[24px] sm:text-[32px] md:text-[38px] font-medium text-gray-900 leading-[1.1] mb-3">
                Multi-PMS
              </h3>
              <p className="text-black/80 text-[14px] sm:text-[15px] mb-6 sm:mb-8 max-w-sm">
                Ability to understand and sync natively with leading dental
                practice management systems in real-time.
              </p>
              <div className="flex flex-wrap gap-3">
                {pmsLogos.map((pms) => (
                  <span
                    key={pms.name}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white shadow-sm border border-gray-100/50 text-[13px] font-medium text-gray-700"
                  >
                    <span
                      className="w-3.5 h-3.5 rounded-full flex-shrink-0"
                      style={{ background: pms.color }}
                    />
                    {pms.name}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Bottom right — 2 Square Cards */}
            <div className="grid grid-cols-2 gap-5">
              {/* Stat Card */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                // Added relative and overflow-hidden
                className="relative overflow-hidden rounded-[24px] sm:rounded-[32px] bg-gradient-to-b from-brand to-[#F4F8FF] p-5 sm:p-8 aspect-square flex flex-col justify-between"
              >
                {/* Glowing Gradient Circle */}
                <div
                  className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-60 z-0"
                  style={{
                    background:
                      "radial-gradient(circle, #6594B1 0%, rgba(101, 148, 177, 0) 70%)",
                  }}
                />

                <div className="relative z-10">
                  <span className="text-[28px]">📉</span>
                </div>

                <div className="relative z-10">
                  <p className="text-[32px] sm:text-[44px] md:text-[52px] font-medium text-gray-900 mb-1 leading-none">
                    40%
                  </p>
                  <p className="text-black/80 text-[12px] sm:text-[14px]">
                    Reduction in no-shows
                  </p>
                </div>
              </motion.div>

              {/* Rating Card */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="rounded-[24px] sm:rounded-[32px] bg-gradient-to-b from-brand to-[#ffffff] p-5 sm:p-8 aspect-square flex flex-col justify-between"
              >
                <p className="text-[32px] sm:text-[44px] md:text-[52px] font-medium text-white mb-2 leading-none">
                  4.9
                </p>
                <div>
                  {/* Avatar Mockups matching the image */}
                  <div className="flex -space-x-2.5 mb-3.5 mt-1">
                    {[
                      "bg-purple-300",
                      "bg-emerald-300",
                      "bg-amber-300",
                      "bg-pink-300",
                    ].map((color, i) => (
                      <div
                        key={i}
                        className={`w-8 h-8 rounded-full border-2 border-brand ${color}`}
                      />
                    ))}
                  </div>
                  <p className="text-black/80 text-[11px] sm:text-[13px] leading-snug">
                    Rated by top practices globally
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
