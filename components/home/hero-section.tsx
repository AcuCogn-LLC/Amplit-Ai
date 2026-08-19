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
  annotation: 'Talk with Dentsi',
  captionLabel: 'Dentsi is speaking',
};

const CAPTIONS = [
  { start: 2, end: 8, speaker: "Dentsi", text: "Thank you for calling Smile Plus Dental. My name is Dentsi. How can I help you today?" },
  { start: 8, end: 11, speaker: "Patient", text: "I would like to book an appointment." },
  { start: 11, end: 16, speaker: "Dentsi", text: "Of course I'd be happy to help. Are you a new or existing patient with us?" },
  { start: 16, end: 19, speaker: "Patient", text: "I am a new patient." },
  { start: 19, end: 24, speaker: "Dentsi", text: "Great. Let's get you registered. May I have your full name please, Lisa?" },
  { start: 24, end: 31, speaker: "Patient", text: "Park LISAPA RK." },
  { start: 31, end: 34, speaker: "Dentsi", text: "That's Lisa Park. Is that right?" },
  { start: 34, end: 36, speaker: "Patient", text: "That's correct." },
  { start: 36, end: 40, speaker: "Dentsi", text: "Thank you. And may I have your date of birth?" },
  { start: 40, end: 44, speaker: "Patient", text: "11/16/2007." },
  { start: 44, end: 49, speaker: "Dentsi", text: "Thanks. That's November 16th, 2007. Is that correct?" },
  { start: 49, end: 52, speaker: "Patient", text: "That's correct." },
  { start: 52, end: 59, speaker: "Dentsi", text: "Is 1-469-670-2982 the best phone number to reach you?" },
  { start: 59, end: 63, speaker: "Patient", text: "No.  Can you update my number?" },
  { start: 63, end: 68, speaker: "Dentsi", text: "I can update your number. What is your new phone number please?" },
  { start: 68, end: 75, speaker: "Patient", text: "516-957-8453." },
  { start: 75, end: 81, speaker: "Dentsi", text: "Thanks. That's 516-957-8453. Is that right?" },
  { start: 81, end: 85, speaker: "Patient", text: "That's correct." },
  { start: 85, end: 93, speaker: "Dentsi", text: "Great, and what is your e-mail address? We'll use it to send your appointment confirmation reminders and new patient forms." },
  { start: 93, end: 101, speaker: "Patient", text: "My e-mail address is lpark8117@gmail.com." },
  { start: 101, end: 105, speaker: "Dentsi", text: "Thatslpark.8117@gmail.com is that." },
  { start: 105, end: 109, speaker: "Patient", text: "Right. No." },
  { start: 109, end: 113, speaker: "Dentsi", text: "I understand. Could you please spell it out for me again?" },
  { start: 113, end: 123, speaker: "Patient", text: "L park8117@gmail.com." },
  { start: 123, end: 128, speaker: "Dentsi", text: "Thatslpark8117@gmail.com is that right?" },
  { start: 128, end: 132, speaker: "Patient", text: "That's correct." },
  { start: 132, end: 142, speaker: "Dentsi", text: "Got that saved. Could you tell me the reason for your visit today? Are you coming in for a routine cleaning and checkup, or are you experiencing any pain or specific dental concerns?" },
  { start: 142, end: 146, speaker: "Patient", text: "I'm coming in for a routine cleaning." },
  { start: 146, end: 150, speaker: "Dentsi", text: "Understood. Will you be using dental insurance for this visit?" },
  { start: 150, end: 153, speaker: "Patient", text: "Yes." },
  { start: 153, end: 159, speaker: "Dentsi", text: "Got it. Could you please provide the name of your insurance carrier and your member ID?" },
  { start: 159, end: 162, speaker: "Patient", text: "Cigna Healthcare." },
  { start: 162, end: 167, speaker: "Dentsi", text: "Thanks. And what is your Cigna Healthcare member ID please?" },
  { start: 167, end: 171, speaker: "Patient", text: "817354." },
  { start: 171, end: 176, speaker: "Dentsi", text: "Thanks. That's 817-3554. Is that right?" },
  { start: 176, end: 181, speaker: "Patient", text: "That's correct." },
  { start: 181, end: 186, speaker: "Dentsi", text: "Thank you for that information. Do you have a preferred day or time for your appointment?" },
  { start: 186, end: 192, speaker: "Patient", text: "I'm looking for next week Tuesday at 4:00 PM." },
  { start: 192, end: 210, speaker: "Dentsi", text: "I have available slots on Tuesday, August 25th. I see Doctor James Park has openings at 12 PM, 12:30 PM, and 1:00 PMI don't see a 4:00 PM slot available with any doctor on that day. Would you like to choose from these available times or would you prefer a different day?" },
  { start: 210, end: 217, speaker: "Patient", text: "Can I have that Tuesday at 1:00 PM with Doctor Park?" },
  { start: 217, end: 225, speaker: "Dentsi", text: "I have you scheduled for Tuesday, August 25th at 1:00 PM with Doctor James Park for a routine cleaning. Does that sound right?" },
  { start: 225, end: 228, speaker: "Patient", text: "That's correct." },
  { start: 228, end: 236, speaker: "Dentsi", text: "Perfect, you'll receive a confirmation with all the details by text and e-mail. Is there anything else I can help you with today?" },
  { start: 236, end: 239, speaker: "Patient", text: "No, thank you." },
  { start: 239, end: 243, speaker: "Dentsi", text: "Thank you for choosing Smile Plus Dental. Have a wonderful day." },
  { start: 243, end: 248, speaker: "Patient", text: "Bye bye." },
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
