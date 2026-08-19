'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, AudioLines, Pause } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const VIDEO_URL = 'https://www.youtube.com/embed/gJXAg87tQrY';
const AUDIO_URL = '/audio.mp3';

const HERO_CONTENT = {
  headline: 'Amplifying',
  headlineHighlight: 'Healthcare Intelligence',
  subtitle:
    'Your AI-powered front desk answers every call, books appointments, and works 24/7 — so you never miss an oppourtunity again.',
  ctaPrimary: 'See In Action',
  ctaPrimaryActive: 'Pause Demo',
  ctaSecondary: 'Watch Demo',
  annotation: 'Talk with Amplit Ai',
  captionLabel: 'Amplit AI is speaking',
};

const CAPTIONS = [
  { start: 0, end: 6, speaker: "Amplit AI", text: "Thank you for calling Smile Plus Dental. My name is Dentsi." },
  { start: 6, end: 8, speaker: "Amplit AI", text: "How can I help you today?" },
  { start: 8, end: 14, speaker: "Patient", text: "i would like to book an appointment." },
  { start: 14, end: 16, speaker: "Amplit AI", text: "Of course — I'd be happy to help. Are you a new or existing patient with us?" },
  { start: 16, end: 21, speaker: "Patient", text: "i am a new patient." },
  { start: 21, end: 26, speaker: "Amplit AI", text: "Great! Let's get you registered. May I have your full name, please?" },
  { start: 26, end: 29, speaker: "Patient", text: "lisa park, l i s a." },
  { start: 29, end: 32, speaker: "Patient", text: "p a r k." },
  { start: 32, end: 34, speaker: "Amplit AI", text: "That's Lisa Park — is that right?" },
  { start: 34, end: 37, speaker: "Patient", text: "that's correct." },
  { start: 37, end: 42, speaker: "Amplit AI", text: "Thank you! And may I have your date of birth?" },
  { start: 42, end: 47, speaker: "Patient", text: "eleven sixteen two thousand 7." },
  { start: 47, end: 49, speaker: "Amplit AI", text: "Thanks — that's November 16 2007 is that correct?" },
  { start: 49, end: 56, speaker: "Patient", text: "that's correct." },
  { start: 56, end: 60, speaker: "Amplit AI", text: "Is +14696702982 the best phone number to reach you?" },
  { start: 60, end: 62, speaker: "Patient", text: "no. can you update my number?" },
  { start: 62, end: 66, speaker: "Patient", text: "can you update my number?" },
  { start: 66, end: 71, speaker: "Amplit AI", text: "I can update your number. What is your new phone number, please?" },
  { start: 71, end: 74, speaker: "Patient", text: "516957" },
  { start: 74, end: 80, speaker: "Patient", text: "8453." },
  { start: 80, end: 83, speaker: "Amplit AI", text: "Thanks — that's 5169578453 is that right?" },
  { start: 83, end: 91, speaker: "Patient", text: "that's correct." },
  { start: 91, end: 95, speaker: "Amplit AI", text: "Great! And what is your email address? We'll use it to send your appointment confirmation, reminders, and new patient forms." },
  { start: 95, end: 99, speaker: "Patient", text: "my email address is l park." },
  { start: 99, end: 106, speaker: "Patient", text: "8117 at gmail dot com." },
  { start: 106, end: 108, speaker: "Amplit AI", text: "That's lpark.8117@gmail.com — is that right?" },
  { start: 108, end: 112, speaker: "Patient", text: "no." },
  { start: 112, end: 116, speaker: "Amplit AI", text: "I understand. Could you please spell it out for me again?" },
  { start: 116, end: 121, speaker: "Patient", text: "l p a r k" },
  { start: 121, end: 127, speaker: "Patient", text: "8117 at gmail dot com" },
  { start: 127, end: 130, speaker: "Amplit AI", text: "That's lpark8117@gmail.com — is that right?" },
  { start: 130, end: 140, speaker: "Patient", text: "that's correct." },
  { start: 140, end: 142, speaker: "Amplit AI", text: "Got that saved. Could you tell me the reason for your visit today — are you coming in for a routine cleaning and checkup, or are you experiencing any pain or specific" },
  { start: 142, end: 145, speaker: "Amplit AI", text: "dental concerns?" },
  { start: 145, end: 149, speaker: "Patient", text: "i'm coming in for a routine cleaning." },
  { start: 149, end: 151, speaker: "Amplit AI", text: "Understood. Will you be using dental insurance for this visit?" },
  { start: 151, end: 157, speaker: "Patient", text: "yes." },
  { start: 157, end: 161, speaker: "Amplit AI", text: "Got it. Could you please provide the name of your insurance carrier and your member ID?" },
  { start: 161, end: 165, speaker: "Patient", text: "cigna healthcare." },
  { start: 165, end: 170, speaker: "Amplit AI", text: "Thanks! And what is your Cigna Healthcare member ID, please?" },
  { start: 170, end: 175, speaker: "Patient", text: "817354." },
  { start: 175, end: 177, speaker: "Amplit AI", text: "Thanks — that's 8173554 is that right?" },
  { start: 177, end: 185, speaker: "Patient", text: "that's correct." },
  { start: 185, end: 189, speaker: "Amplit AI", text: "Thank you for that information. Do you have a preferred day or time for your appointment?" },
  { start: 189, end: 201, speaker: "Patient", text: "i'm looking for next week tuesday at 4 p m." },
  { start: 201, end: 205, speaker: "Amplit AI", text: "I have available slots on Tuesday August 25th. I see Dr. James Park has openings at 12:00 PM, 12:30 PM, and 1:00 PM." },
  { start: 205, end: 209, speaker: "Amplit AI", text: "I don't see a 4:00 PM slot available with any doctor on that day." },
  { start: 209, end: 213, speaker: "Amplit AI", text: "Would you like to choose from these available times, or would you prefer a different day?" },
  { start: 213, end: 215, speaker: "Patient", text: "can i have that tuesday at 1 p" },
  { start: 215, end: 223, speaker: "Patient", text: "m with dr park?" },
  { start: 223, end: 225, speaker: "Amplit AI", text: "I have you scheduled for Tuesday August 25 at 1:00 PM with Dr. James Park for a routine cleaning." },
  { start: 225, end: 227, speaker: "Amplit AI", text: "Does that sound right?" },
  { start: 227, end: 233, speaker: "Patient", text: "that's correct." },
  { start: 233, end: 235, speaker: "Amplit AI", text: "Perfect. You'll receive a confirmation with all the details by text and email." },
  { start: 235, end: 237, speaker: "Amplit AI", text: "Is there anything else I can help you with today?" },
  { start: 237, end: 242, speaker: "Patient", text: "no thank you." },
  { start: 242, end: 243, speaker: "Amplit AI", text: "Thank you for choosing Smile Plus Dental. Have a wonderful day!" },
  { start: 243, end: 248, speaker: "Patient", text: "bye-bye." }
];

export default function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = async () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        try {
          // Play returns a promise that can be rejected by the browser
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (error) {
          console.error("Audio playback failed:", error);
          // If browser blocked it, we could show an error, but let's just make sure it doesn't crash
        }
      }
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleAudioEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const currentCaptionObj = CAPTIONS.find(c => currentTime >= c.start && currentTime <= c.end);
  const currentCaption = currentCaptionObj?.text || "🎵 ...";
  const currentSpeaker = currentCaptionObj?.speaker || HERO_CONTENT.captionLabel;

  return (
    <section className="relative h-[70vh] mt-10 md:mt-20 overflow-hidden flex flex-col">
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex items-center flex-1">
        {/* Two-column layout */}
        <div className="flex flex-col md:flex-row items-center w-full gap-8">

          {/* Left: Text content */}
          <div className="flex-1 max-w-xl text-center md:text-left">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-[2.5rem] sm:text-3xl md:text-5xl font-bold text-gray-900 leading-[1.1] mb-5 sm:mb-6 tracking-tight"
            >
              {HERO_CONTENT.headline} <br />
              <span className="text-brand"> {HERO_CONTENT.headlineHighlight}</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
              className="text-[#4e5157] font-medium text-[15px] md:text-[17px] mb-8 md:mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed"
            >
              {HERO_CONTENT.subtitle}
            </motion.p>

            {/* CTA + annotation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.4, ease: "easeOut" }}
              className="flex flex-wrap items-center justify-center md:justify-start gap-4"
            >
              {/* See In Action button */}
              <button
                onClick={togglePlay}
                className="relative z-50 inline-flex items-center gap-3 px-6 py-3 bg-brand border border-transparent text-white font-medium text-sm rounded-full shadow-[0_4px_14px_rgba(var(--brand-rgb),0.2)] hover:shadow-[0_6px_20px_rgba(var(--brand-rgb),0.25)] transition-all group cursor-pointer"
              >
                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  {isPlaying ? (
                    <Pause className="w-3.5 h-3.5 text-white fill-current ml-0.5" />
                  ) : (
                    <AudioLines className="w-3.5 h-3.5 text-white ml-0.5" />
                  )}
                </span>
                {isPlaying ? HERO_CONTENT.ctaPrimaryActive : HERO_CONTENT.ctaPrimary}
              </button>

              <Dialog>
                <DialogTrigger asChild>
                  <button
                    className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-black/5 text-[#4e5157] font-medium text-sm rounded-full hover:bg-black/5 hover:text-gray-900 transition-all group"
                  >
                    <span className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center shrink-0 group-hover:bg-black/10 transition-colors">
                      <Play className="w-3.5 h-3.5 text-black/60 fill-current ml-0.5 group-hover:text-black transition-colors" />
                    </span>
                    {HERO_CONTENT.ctaSecondary}
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
            </motion.div>

            {/* Curved arrow + Talk to Amplit */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.7, ease: "easeOut" }}
              className="hidden md:flex flex-col items-start ml-40 mt-3"
            >
              <svg
                width="60"
                height="50"
                viewBox="0 0 60 50"
                fill="none"
                className="text-gray-400 -mb-1"
              >
                <path
                  d="M10 5 Q20 30 45 38"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M40 33 L45 38 L38 40"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-sm text-gray-400 font-medium ml-8">{HERO_CONTENT.annotation}</span>
            </motion.div>
          </div>

          {/* Right: Hero image — hidden on small, visible md+ */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
            className="hidden md:flex flex-1 items-center justify-center relative"
          >
            <video
              src="/videos/hero-video-v1.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full object-cover scale-110 opacity-90"
              style={{
                WebkitMaskImage: 'radial-gradient(circle, black 35%, transparent 60%)',
                maskImage: 'radial-gradient(circle, black 35%, transparent 60%)'
              }}
            ></video>
          </motion.div>

        </div>
      </div>

      {/* Audio Element */}
      <audio
        ref={audioRef}
        src={AUDIO_URL}
        preload="auto"
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleAudioEnded}
        onError={(e) => console.error("Audio generated an error:", e)}
      />

      {/* Floating Caption Bar */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-2xl bg-white/90 backdrop-blur-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-2xl border border-black/5 p-5 flex items-center gap-6"
          >
            <div className="flex-1">
              <p className="text-xs font-semibold text-brand/80 uppercase tracking-wider mb-1.5">{currentSpeaker}</p>
              <p className="text-lg md:text-xl font-medium text-black/80 leading-snug">
                {currentCaption}
              </p>
            </div>

            <button
              onClick={togglePlay}
              className="w-12 h-12 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center shrink-0 transition-colors"
            >
              <Pause className="w-5 h-5 text-black/70" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
