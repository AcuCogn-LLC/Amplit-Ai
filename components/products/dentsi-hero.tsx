'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, AudioLines, Pause } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const VIDEO_URL = 'https://youtu.be/9rD7ETJALYE';
const AUDIO_URL = '/audio1.mpeg';

const HERO_CONTENT = {
  headline: 'Meet Your 24/7 AI Front Desk Assistant -',
  headlineHighlight: 'Dentsi',
  subtitle:
    'Dentsi answers every call instantly, understands patient needs, and books appointments \u2014 just like a trained front desk staff member.',
  ctaPrimary: 'Hear It Live',
  ctaPrimaryActive: 'Listening...',
  ctaSecondary: 'Watch Demo',
  videoTitle: 'Product demo video',
  annotation: 'Talk with Dentsi',
  heroVideo: '/videos/Dentsi-video.mp4',
  captionLabel: 'Dentsi is speaking',
};

const CAPTIONS = [
  { start: 2, end: 8, text: "Thank you for calling Smile Plus Dental. My name is Dentsi. How can I help you today?" },
  { start: 8, end: 11, text: "I would like to book an appointment." },
  { start: 11, end: 16, text: "Of course I'd be happy to help. Are you a new or existing patient with us?" },
  { start: 16, end: 19, text: "I am a new patient." },
  { start: 19, end: 24, text: "Great. Let's get you registered. May I have your full name please, Lisa?" },
  { start: 24, end: 31, text: "Park LISAPA RK." },
  { start: 31, end: 34, text: "That's Lisa Park. Is that right?" },
  { start: 34, end: 36, text: "That's correct." },
  { start: 36, end: 40, text: "Thank you. And may I have your date of birth?" },
  { start: 40, end: 44, text: "11/16/2007." },
  { start: 44, end: 49, text: "Thanks. That's November 16th, 2007. Is that correct?" },
  { start: 49, end: 52, text: "That's correct." },
  { start: 52, end: 59, text: "Is 1-469-670-2982 the best phone number to reach you?" },
  { start: 59, end: 63, text: "No.  Can you update my number?" },
  { start: 63, end: 68, text: "I can update your number. What is your new phone number please?" },
  { start: 68, end: 75, text: "516-957-8453." },
  { start: 75, end: 81, text: "Thanks. That's 516-957-8453. Is that right?" },
  { start: 81, end: 85, text: "That's correct." },
  { start: 85, end: 93, text: "Great, and what is your e-mail address? We'll use it to send your appointment confirmation reminders and new patient forms." },
  { start: 93, end: 101, text: "My e-mail address is lpark8117@gmail.com." },
  { start: 101, end: 105, text: "Thatslpark.8117@gmail.com is that." },
  { start: 105, end: 109, text: "Right. No." },
  { start: 109, end: 113, text: "I understand. Could you please spell it out for me again?" },
  { start: 113, end: 123, text: "L park8117@gmail.com." },
  { start: 123, end: 128, text: "Thatslpark8117@gmail.com is that right?" },
  { start: 128, end: 132, text: "That's correct." },
  { start: 132, end: 142, text: "Got that saved. Could you tell me the reason for your visit today? Are you coming in for a routine cleaning and checkup, or are you experiencing any pain or specific dental concerns?" },
  { start: 142, end: 146, text: "I'm coming in for a routine cleaning." },
  { start: 146, end: 150, text: "Understood. Will you be using dental insurance for this visit?" },
  { start: 150, end: 153, text: "Yes." },
  { start: 153, end: 159, text: "Got it. Could you please provide the name of your insurance carrier and your member ID?" },
  { start: 159, end: 162, text: "Cigna Healthcare." },
  { start: 162, end: 167, text: "Thanks. And what is your Cigna Healthcare member ID please?" },
  { start: 167, end: 171, text: "817354." },
  { start: 171, end: 176, text: "Thanks. That's 817-3554. Is that right?" },
  { start: 176, end: 181, text: "That's correct." },
  { start: 181, end: 186, text: "Thank you for that information. Do you have a preferred day or time for your appointment?" },
  { start: 186, end: 192, text: "I'm looking for next week Tuesday at 4:00 PM." },
  { start: 192, end: 210, text: "I have available slots on Tuesday, August 25th. I see Doctor James Park has openings at 12 PM, 12:30 PM, and 1:00 PMI don't see a 4:00 PM slot available with any doctor on that day. Would you like to choose from these available times or would you prefer a different day?" },
  { start: 210, end: 217, text: "Can I have that Tuesday at 1:00 PM with Doctor Park?" },
  { start: 217, end: 225, text: "I have you scheduled for Tuesday, August 25th at 1:00 PM with Doctor James Park for a routine cleaning. Does that sound right?" },
  { start: 225, end: 228, text: "That's correct." },
  { start: 228, end: 236, text: "Perfect, you'll receive a confirmation with all the details by text and e-mail. Is there anything else I can help you with today?" },
  { start: 236, end: 239, text: "No, thank you." },
  { start: 239, end: 243, text: "Thank you for choosing Smile Plus Dental. Have a wonderful day." },
  { start: 243, end: 248, text: "Bye bye." },
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

  const currentCaption = CAPTIONS.find(c => currentTime >= c.start && currentTime <= c.end)?.text || "🎵 ...";

  return (
    <section className="relative min-h-[70vh] mt-10 md:mt-20 overflow-hidden flex flex-col">
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex items-center justify-center flex-1">
        {/* Centered content */}
        <div className="flex flex-col items-center w-full max-w-2xl text-center">

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-[2.5rem] sm:text-3xl md:text-5xl font-bold text-black leading-[1.1] mb-5 sm:mb-6 tracking-tight"
          >
            {HERO_CONTENT.headline} <span className="text-brand">{HERO_CONTENT.headlineHighlight}</span>
          </motion.h1>


          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="text-[#4e5157] font-medium mb-8 md:mb-10 max-w-lg leading-relaxed text-[15px] md:text-[17px]"
          >
            {HERO_CONTENT.subtitle}
          </motion.p>

          {/* CTA + annotation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.4, ease: "easeOut" }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            {/* See In Action button with wave effects */}
            <div className="relative z-50">
              {/* Sonar ripple rings */}
              {[0, 0.6, 1.2].map((delay) => (
                <motion.div
                  key={delay}
                  animate={{
                    scale: [1, 2.2],
                    opacity: [0.45, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut",
                    delay,
                  }}
                  className="absolute inset-0 rounded-full border-2 border-brand/40 pointer-events-none"
                />
              ))}
              <motion.button
                onClick={togglePlay}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                animate={{
                  y: [0, -4, 0],
                }}
                transition={{
                  y: {
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                className="relative inline-flex items-center gap-3 px-7 py-3.5 bg-brand border border-transparent text-white font-semibold text-sm rounded-full shadow-[0_4px_14px_rgba(var(--brand-rgb),0.3)] hover:shadow-[0_8px_25px_rgba(var(--brand-rgb),0.4)] transition-shadow group cursor-pointer overflow-hidden"
              >
                {/* Shimmer sweep */}
                <motion.div
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 pointer-events-none"
                />
                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 relative">
                  {isPlaying ? (
                    <Pause className="w-3.5 h-3.5 text-white fill-current ml-0.5" />
                  ) : (
                    <motion.span
                      animate={{ rotate: [0, -15, 15, -10, 10, 0] }}
                      transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        repeatDelay: 2,
                        ease: "easeInOut",
                      }}
                      className="flex items-center justify-center"
                    >
                      <AudioLines className="w-3.5 h-3.5 text-white ml-0.5" />
                    </motion.span>
                  )}
                </span>
                <span className="relative">{isPlaying ? HERO_CONTENT.ctaPrimaryActive : HERO_CONTENT.ctaPrimary}</span>
              </motion.button>
            </div>

            <Dialog>
              <DialogTrigger asChild>
                <button
                  className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-black/5 text-black/70 font-medium text-sm rounded-full hover:bg-black/5 hover:text-black transition-all group"
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
                  title={HERO_CONTENT.videoTitle}
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
            className="hidden md:flex flex-col items-center mt-3"
          >
            <svg
              width="60"
              height="50"
              viewBox="0 0 60 50"
              fill="none"
              className="text-black/50 -mb-1"
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
            <span className="text-sm text-black/40 font-medium">{HERO_CONTENT.annotation}</span>
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
              <p className="text-xs font-semibold text-brand/80 uppercase tracking-wider mb-1.5">{HERO_CONTENT.captionLabel}</p>
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