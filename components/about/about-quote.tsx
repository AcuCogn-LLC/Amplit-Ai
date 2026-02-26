'use client'
import { motion } from 'framer-motion';



export default function AboutQuote() {
    return (
        <section className="bg-white py-16 md:py-24">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-2xl md:text-3xl text-black font-bold leading-relaxed mb-4 sm:mb-6">
                        &ldquo;Patients don&apos;t remember your hold music. They remember how you made them feel.&rdquo;
                    </p>
                    <p className="text-brand font-medium">
                        AI handles the grind. Your team handles the moments that matter.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}