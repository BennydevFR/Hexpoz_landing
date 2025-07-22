'use client';

import React, { useState, useRef, useEffect, useCallback, memo } from 'react';
import { motion, Variants, Easing } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Maximize2, Minimize2 } from 'lucide-react';

// Composant pour les boutons de contrôle
const ControlButton = memo(({ 
  onClick, 
  icon: Icon, 
  label, 
  gradientColors 
}: { 
  onClick: (e?: React.MouseEvent) => void, 
  icon: React.ElementType, 
  label: string, 
  gradientColors: string 
}) => (
  <button
    type="button"
    onClick={onClick}
    className="group relative p-2 md:px-6 md:py-3"
  >
    <div className={`absolute inset-0 bg-gradient-to-r ${gradientColors} rounded-full md:rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
    <div className="relative bg-white/5 rounded-full md:rounded-xl backdrop-blur-md border border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.2)] group-hover:border-white/20 group-hover:bg-white/10 transition-all duration-300">
      <div className="flex items-center md:space-x-2 p-2 md:px-4">
        <Icon className="w-5 h-5 text-white" />
        <span className="hidden md:inline text-white/90 text-sm font-light">{label}</span>
      </div>
    </div>
  </button>
));

ControlButton.displayName = 'ControlButton';

const ease: Easing = [0.25, 0.1, 0.25, 1];

// Animation variants
const titleVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 1.2, ease }
  }
};

const showcaseVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 1.5, ease }
  }
};

export default function AppleProductShowcase() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleFullscreenChange = useCallback(() => {
    setIsFullscreen(Boolean(
      document.fullscreenElement ||
      (document as any).webkitFullscreenElement ||
      (document as any).mozFullScreenElement ||
      (document as any).msFullscreenElement
    ));
  }, []);

  useEffect(() => {
    const fullscreenEvents = [
      'fullscreenchange',
      'webkitfullscreenchange',
      'mozfullscreenchange',
      'MSFullscreenChange'
    ];

    fullscreenEvents.forEach(event => {
      document.addEventListener(event, handleFullscreenChange);
    });

    return () => {
      fullscreenEvents.forEach(event => {
        document.removeEventListener(event, handleFullscreenChange);
      });
    };
  }, [handleFullscreenChange]);

  const togglePlay = useCallback(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  }, [isPlaying]);

  const toggleMute = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  }, [isMuted]);

  const toggleFullscreen = useCallback(async () => {
    if (!videoRef.current) return;

    try {
      if (!isFullscreen) {
        if (videoRef.current.requestFullscreen) {
          await videoRef.current.requestFullscreen();
        } else if ((videoRef.current as any).webkitRequestFullscreen) {
          await (videoRef.current as any).webkitRequestFullscreen();
        } else if ((videoRef.current as any).mozRequestFullScreen) {
          await (videoRef.current as any).mozRequestFullScreen();
        } else if ((videoRef.current as any).msRequestFullscreen) {
          await (videoRef.current as any).msRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        } else if ((document as any).webkitExitFullscreen) {
          await (document as any).webkitExitFullscreen();
        } else if ((document as any).mozCancelFullScreen) {
          await (document as any).mozCancelFullScreen();
        } else if ((document as any).msExitFullscreen) {
          await (document as any).msExitFullscreen();
        }
      }
    } catch (err) {
      console.error('Erreur lors du passage en plein écran:', err);
    }
  }, [isFullscreen]);

  return (
    <section id="showcase" className="py-40 lg:py-48 xl:py-56 px-4 sm:px-6 lg:px-8 xl:px-12 bg-[#111111] m-2 rounded-lg">
      <div className="max-w-6xl xl:max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={titleVariants}
          className="text-center mb-12 lg:mb-16 xl:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-6 lg:mb-8">
            Une expérience
            <br />
            <span className="text-zinc-400">révolutionnaire</span>
          </h2>
          
          <p className="text-lg lg:text-xl xl:text-2xl text-zinc-500 max-w-3xl xl:max-w-4xl mx-auto font-light leading-relaxed">
            HEXPOZ transforme la façon dont vous créez, partagez et explorez l'art numérique. 
            Chaque galerie devient un univers immersif où vos créations prennent vie.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={showcaseVariants}
          className="relative mx-auto max-w-4xl xl:max-w-5xl"
        >
          <div className="relative" ref={containerRef}>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-emerald-500/30 rounded-2xl lg:rounded-3xl blur-2xl opacity-75"></div>
            
            <div className="relative bg-gradient-to-br from-zinc-900 via-black to-zinc-900 rounded-2xl lg:rounded-3xl overflow-hidden border border-white/20 backdrop-blur-xl shadow-2xl">
              <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]"></div>
              
              <div className="h-8 bg-gradient-to-r from-zinc-800 via-zinc-900 to-zinc-800 border-b border-white/10 flex items-center px-4">
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/90"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/90"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/90"></div>
                </div>
              </div>

              <div className="relative aspect-[16/9] bg-black">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  src="https://ysvbxtkeeelcldaarwmz.supabase.co/storage/v1/object/public/landing//hexpoz.webm"
                  playsInline
                  loop
                  muted={isMuted}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  controls={false}
                  controlsList="nodownload nofullscreen noremoteplayback"
                  x-webkit-airplay="deny"
                  disablePictureInPicture
                />
                
                <div 
                  className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center justify-center md:justify-between max-w-md mx-auto gap-2 md:gap-4">
                    <ControlButton
                      onClick={togglePlay}
                      icon={isPlaying ? Pause : Play}
                      label={isPlaying ? 'Pause' : 'Lecture'}
                      gradientColors="from-purple-500/30 via-blue-500/30 to-emerald-500/30"
                    />

                    <ControlButton
                      onClick={toggleMute}
                      icon={isMuted ? VolumeX : Volume2}
                      label={isMuted ? 'Son off' : 'Son on'}
                      gradientColors="from-blue-500/30 via-purple-500/30 to-pink-500/30"
                    />

                    <ControlButton
                      onClick={(e?: React.MouseEvent<Element, MouseEvent>) => {
                        if (e) {
                          e.preventDefault();
                          e.stopPropagation();
                        }
                        toggleFullscreen();
                      }}
                      icon={isFullscreen ? Minimize2 : Maximize2}
                      label={isFullscreen ? 'Réduire' : 'Plein écran'}
                      gradientColors="from-emerald-500/30 via-blue-500/30 to-purple-500/30"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -top-8 -right-8 w-32 h-32 bg-blue-500/20 rounded-full blur-[32px] animate-pulse"></div>
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-purple-500/20 rounded-full blur-[32px] animate-pulse"></div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 w-24 h-24 bg-emerald-500/20 rounded-full blur-[24px] animate-pulse"></div>
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 w-24 h-24 bg-pink-500/20 rounded-full blur-[24px] animate-pulse"></div>
        </motion.div>
      </div>
    </section>
  );
} 