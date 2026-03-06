'use client'

import { motion } from "framer-motion"

const TRUST_CONTENT = {
  video: "/videos/Dentsi-video.mp4",
  floatingCard: {
    title: "24/7 Call Handling",
    subtitle: "Never miss a patient call",
  },
  headline: "Your AI Front Desk That Never Miss a Patient",
  description:
    "Dentsi handles patient calls, schedules appointments, and manages front desk tasks automatically so your staff can focus on patient care instead of administrative work.",
  points: [
    "Answers every patient call instantly",
    "Books and manages appointments automatically",
    "Works 24/7 including weekends and holidays",
    "Eliminates missed calls and lost patients",
  ],
}

export default function DentsiTrust() {
  return (
    <section className="w-full relative py-10">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden border border-brand/20 ">
              <video
              src={TRUST_CONTENT.video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full object-cover scale-110 opacity-100"
            
            ></video>
            </div>

            {/* floating card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg px-4 py-3 border border-gray-100">
              <p className="text-sm font-semibold text-gray-900">
                {TRUST_CONTENT.floatingCard.title}
              </p>
              <p className="text-xs text-gray-500">
                {TRUST_CONTENT.floatingCard.subtitle}
              </p>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="w-10 h-1 rounded-full bg-brand mb-6" />

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6">
              {TRUST_CONTENT.headline}
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {TRUST_CONTENT.description}
            </p>

            <div className="space-y-4">
              {TRUST_CONTENT.points.map((point) => (
                <div key={point} className="flex gap-3 items-start">
                  <div className="w-2 h-2 rounded-full bg-brand mt-2"></div>
                  <p className="text-gray-700">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}