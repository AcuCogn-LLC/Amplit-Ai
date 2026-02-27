'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Play } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

// Replace this with your actual YouTube video ID or video URL
const VIDEO_URL = 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1';

export default function VideoSection() {
  return (
    <section className="min-h-screen w-full relative overflow-hidden">
      {/* Radial Gradient Background from Bottom */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(125% 125% at 50% 90%, #fff 40%, #6594B1 100%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Outer mask — fades video into background at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative -mr-56 mt-1 overflow-hidden px-2 sm:mr-0 "
          style={{
            maskImage: "linear-gradient(to bottom, black 60%, transparent 95%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 95%)",
          }}
        >
          {/* Inner card frame */}
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl border border-black/10 bg-white p-4 shadow-lg shadow-zinc-950/15 ring-1 ring-black/5">
            {/* Video Container */}
            <div
              className="relative w-full overflow-hidden rounded-xl"
              style={{ aspectRatio: '16/9' }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    className="absolute inset-0 flex items-center justify-center w-full h-full group"
                    aria-label="Play video"
                  >
                    {/* Preview thumbnail */}
                    <Image
                      src="https://framerusercontent.com/images/2FuaEXnm34juefdUMjtBnks3EEU.png?scale-down-to=2048"
                      alt="Video preview"
                      fill
                      className="object-cover"
                      priority
                    />

                    {/* Play button */}
                    <span className="relative w-16 h-16 rounded-full bg-brand flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-brand-dark transition-all duration-200">
                      <Play className="w-6 h-6 text-white fill-white ml-1" />
                    </span>
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none shadow-2xl">
                  <iframe
                    src={VIDEO_URL}
                    title="Product demo video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full aspect-video rounded-xl"
                  />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
