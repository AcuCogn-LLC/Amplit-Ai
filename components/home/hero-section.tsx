'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, AudioLines, Pause } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const VIDEO_URL = 'https://www.youtube.com/embed/gJXAg87tQrY';
const AUDIO_URL = '/audio1.mpeg';

const HERO_CONTENT = {
  headline: 'Amplifying',
  headlineHighlight: 'Healthcare Intelligence',
  subtitle:
    'Your AI-powered front desk answers every call, books appointments, and works 24/7 — so you never miss an oppourtunity again.',
  ctaPrimary: 'Try Now',
  ctaPrimaryActive: 'Pause Demo',
  ctaSecondary: 'Watch Demo',
  annotation: 'Talk with Amplit Ai',
  captionLabel: 'Amplit AI is speaking',
};

const CAPTIONS = [
  { start: 0.0, end: 4.2, speaker: "Amplit AI", text: "Thank you for calling Smile Plus Dental. My name is Dentsi." },
  { start: 4.4, end: 6.8, speaker: "Amplit AI", text: "How can I help you today?" },
  { start: 7.0, end: 9.8, speaker: "Patient", text: "i would like to book an appointment." },
  { start: 10.0, end: 15.9, speaker: "Amplit AI", text: "Of course — I'd be happy to help. Are you a new or existing patient with us?" },
  { start: 16.1, end: 18.2, speaker: "Patient", text: "i am a new patient." },
  { start: 18.4, end: 22.9, speaker: "Amplit AI", text: "Great! Let's get you registered. May I have your full name, please?" },
  { start: 23.1, end: 25.5, speaker: "Patient", text: "lisa park, l i s a." },
  { start: 25.7, end: 27.4, speaker: "Patient", text: "p a r k." },
  { start: 27.6, end: 30.4, speaker: "Amplit AI", text: "That's Lisa Park — is that right?" },
  { start: 30.6, end: 31.6, speaker: "Patient", text: "that's correct." },
  { start: 31.8, end: 35.6, speaker: "Amplit AI", text: "Thank you! And may I have your date of birth?" },
  { start: 35.8, end: 38.6, speaker: "Patient", text: "eleven sixteen two thousand 7." },
  { start: 38.8, end: 43.0, speaker: "Amplit AI", text: "Thanks — that's November 16 2007 is that correct?" },
  { start: 43.2, end: 44.2, speaker: "Patient", text: "that's correct." },
  { start: 44.4, end: 48.6, speaker: "Amplit AI", text: "Is +14696702982 the best phone number to reach you?" },
  { start: 48.8, end: 51.2, speaker: "Patient", text: "no. can you update my number?" },
  { start: 51.4, end: 53.5, speaker: "Patient", text: "can you update my number?" },
  { start: 53.7, end: 58.2, speaker: "Amplit AI", text: "I can update your number. What is your new phone number, please?" },
  { start: 58.4, end: 59.8, speaker: "Patient", text: "516957" },
  { start: 60.0, end: 61.4, speaker: "Patient", text: "8453." },
  { start: 61.6, end: 65.1, speaker: "Amplit AI", text: "Thanks — that's 5169578453 is that right?" },
  { start: 65.3, end: 66.3, speaker: "Patient", text: "that's correct." },
  { start: 66.5, end: 73.8, speaker: "Amplit AI", text: "Great! And what is your email address? We'll use it to send your appointment confirmation, reminders, and new patient forms." },
  { start: 74.0, end: 76.4, speaker: "Patient", text: "my email address is l park." },
  { start: 76.6, end: 79.7, speaker: "Patient", text: "8117 at gmail dot com." },
  { start: 79.9, end: 83.0, speaker: "Amplit AI", text: "That's lpark.8117@gmail.com — is that right?" },
  { start: 83.2, end: 83.9, speaker: "Patient", text: "no." },
  { start: 84.1, end: 88.3, speaker: "Amplit AI", text: "I understand. Could you please spell it out for me again?" },
  { start: 88.5, end: 90.6, speaker: "Patient", text: "l p a r k" },
  { start: 90.8, end: 93.9, speaker: "Patient", text: "8117 at gmail dot com" },
  { start: 94.1, end: 97.2, speaker: "Amplit AI", text: "That's lpark8117@gmail.com — is that right?" },
  { start: 97.4, end: 98.4, speaker: "Patient", text: "that's correct." },
  { start: 98.6, end: 110.1, speaker: "Amplit AI", text: "Got that saved. Could you tell me the reason for your visit today — are you coming in for a routine cleaning and checkup, or are you experiencing any pain or specific" },
  { start: 110.3, end: 111.3, speaker: "Amplit AI", text: "dental concerns?" },
  { start: 111.5, end: 114.3, speaker: "Patient", text: "i'm coming in for a routine cleaning." },
  { start: 114.5, end: 118.3, speaker: "Amplit AI", text: "Understood. Will you be using dental insurance for this visit?" },
  { start: 118.5, end: 119.2, speaker: "Patient", text: "yes." },
  { start: 119.4, end: 125.3, speaker: "Amplit AI", text: "Got it. Could you please provide the name of your insurance carrier and your member ID?" },
  { start: 125.5, end: 126.5, speaker: "Patient", text: "cigna healthcare." },
  { start: 126.7, end: 130.5, speaker: "Amplit AI", text: "Thanks! And what is your Cigna Healthcare member ID, please?" },
  { start: 130.7, end: 132.1, speaker: "Patient", text: "817354." },
  { start: 132.3, end: 135.8, speaker: "Amplit AI", text: "Thanks — that's 8173554 is that right?" },
  { start: 136.0, end: 137.0, speaker: "Patient", text: "that's correct." },
  { start: 137.2, end: 143.1, speaker: "Amplit AI", text: "Thank you for that information. Do you have a preferred day or time for your appointment?" },
  { start: 143.3, end: 147.8, speaker: "Patient", text: "i'm looking for next week tuesday at 4 p m." },
  { start: 148.0, end: 157.1, speaker: "Amplit AI", text: "I have available slots on Tuesday August 25th. I see Dr. James Park has openings at 12:00 PM, 12:30 PM, and 1:00 PM." },
  { start: 157.3, end: 163.2, speaker: "Amplit AI", text: "I don't see a 4:00 PM slot available with any doctor on that day." },
  { start: 163.4, end: 169.3, speaker: "Amplit AI", text: "Would you like to choose from these available times, or would you prefer a different day?" },
  { start: 169.5, end: 173.3, speaker: "Patient", text: "can i have that tuesday at 1 p" },
  { start: 173.5, end: 175.2, speaker: "Patient", text: "m with dr park?" },
  { start: 175.4, end: 183.1, speaker: "Amplit AI", text: "I have you scheduled for Tuesday August 25 at 1:00 PM with Dr. James Park for a routine cleaning." },
  { start: 183.3, end: 185.0, speaker: "Amplit AI", text: "Does that sound right?" },
  { start: 185.2, end: 186.2, speaker: "Patient", text: "that's correct." },
  { start: 186.4, end: 191.3, speaker: "Amplit AI", text: "Perfect. You'll receive a confirmation with all the details by text and email." },
  { start: 191.5, end: 195.3, speaker: "Amplit AI", text: "Is there anything else I can help you with today?" },
  { start: 195.5, end: 196.9, speaker: "Patient", text: "no thank you." },
  { start: 197.1, end: 201.3, speaker: "Amplit AI", text: "Thank you for choosing Smile Plus Dental. Have a wonderful day!" },
  { start: 201.5, end: 202.5, speaker: "Patient", text: "bye-bye." }
];

const AudioWave = ({ isPlaying }: { isPlaying: boolean }) => {
  return (
    <div className="flex items-center justify-center gap-[3px] h-6 pt-1">
      {[1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          animate={{ height: isPlaying ? ["20%", "100%", "30%", "80%", "20%"] : "20%" }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            repeatType: "mirror",
            delay: i * 0.15,
            ease: "easeInOut"
          }}
          className="w-1 bg-brand rounded-full"
        />
      ))}
    </div>
  );
};

const KaraokeText = ({ text, start, end, currentTime, speaker }: { text: string, start: number, end: number, currentTime: number, speaker: string }) => {
  const words = text.split(" ");
  const duration = end - start || 1;
  const wordDuration = duration / words.length;

  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-[11px] font-bold text-brand uppercase tracking-wider">{speaker}</span>
      <p className="text-[15px] md:text-[17px] font-medium leading-relaxed flex flex-wrap gap-x-1.5">
        {words.map((word, i) => {
          const wordStart = start + i * wordDuration;
          const isHighlighted = currentTime >= wordStart;
          return (
            <span
              key={i}
              className={`transition-colors duration-150 ${isHighlighted ? "text-gray-900" : "text-gray-300"}`}
            >
              {word}
            </span>
          );
        })}
      </p>
    </div>
  );
};

export default function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const reqRef = useRef<number>();

  const updateTime = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
    reqRef.current = requestAnimationFrame(updateTime);
  };

  useEffect(() => {
    if (isPlaying) {
      reqRef.current = requestAnimationFrame(updateTime);
    } else {
      if (reqRef.current !== undefined) {
        cancelAnimationFrame(reqRef.current);
      }
    }
    return () => {
      if (reqRef.current !== undefined) {
        cancelAnimationFrame(reqRef.current);
      }
    };
  }, [isPlaying]);

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

  const handleAudioEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const activeCaptionIndex = CAPTIONS.findIndex(c => currentTime >= c.start && currentTime <= c.end);
  let currentCaptionObj = CAPTIONS[activeCaptionIndex];
  
  if (!currentCaptionObj) {
    const lastCaption = [...CAPTIONS].reverse().find(c => currentTime > c.end);
    if (lastCaption) {
      currentCaptionObj = lastCaption;
    } else {
      currentCaptionObj = CAPTIONS[0];
    }
  }

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

            {/* Inline Karaoke Audio Wave */}
            <AnimatePresence mode="wait">
              {isPlaying && currentCaptionObj && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-8 p-5 rounded-2xl bg-white/40 border border-black/5 shadow-sm backdrop-blur-xl flex items-start gap-5 max-w-lg text-left"
                >
                  <AudioWave isPlaying={isPlaying} />
                  <KaraokeText 
                    text={currentCaptionObj.text} 
                    start={currentCaptionObj.start} 
                    end={currentCaptionObj.end} 
                    currentTime={currentTime} 
                    speaker={currentCaptionObj.speaker} 
                  />
                </motion.div>
              )}
            </AnimatePresence>
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
        onEnded={handleAudioEnded}
        onError={(e) => console.error("Audio generated an error:", e)}
      />

      {/* Floating Caption Bar Removed */}
    </section>
  );
}
