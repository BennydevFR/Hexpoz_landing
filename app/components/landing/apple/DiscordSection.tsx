"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { DiscordLogo } from "@/components/ui/discord-logo";

export default function DiscordSection() {
  return (
    <section 
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 xl:px-12 relative overflow-hidden pt-8 bg-[#111111] m-2 rounded-lg"
      aria-label="Discord section"
      role="region"
    >
      {/* Background gradient subtil */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-zinc-800/30 via-transparent to-zinc-800/30"
        aria-hidden="true"
      />
      
      <div className="relative z-10 text-center max-w-5xl xl:max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Badge Discord */}
          <div 
            className="inline-flex items-center px-3 py-1 bg-[#5865F2]/10 rounded-full text-xs text-[#5865F2] mb-6 lg:mb-8 backdrop-blur-sm border border-[#5865F2]/10"
            role="status"
          >
            <span 
              className="w-1.5 h-1.5 bg-[#5865F2] rounded-full mr-2 animate-pulse"
              aria-hidden="true"
            />
            <span>Communauté Discord</span>
          </div>

          {/* Titre */}
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-6 tracking-tight"
            style={{ lineHeight: 1.1 }}
          >
            Rejoignez la communauté
            <span className="block mt-3 bg-gradient-to-r from-[#5865F2] via-[#5865F2] to-[#7289DA] bg-clip-text text-transparent">
              HEXPOZ
            </span>
          </h2>

          {/* Description */}
          <div className="mx-auto max-w-[65ch] mb-12">
            <p style={{
              fontSize: '16px',
              lineHeight: '1.5',
              color: 'rgb(113, 113, 122)',
              fontWeight: '300',
              margin: '0 auto',
              textRendering: 'optimizeLegibility'
            }}>
              Échangez avec d'autres créateurs, partagez vos expériences et restez informé des dernières nouveautés d'HEXPOZ.
            </p>
          </div>

          {/* Carte Discord */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative mx-auto max-w-3xl mb-12"
          >
            <div className="absolute inset-0 bg-[#5865F2] blur-3xl opacity-20" />
            <div className="relative bg-[#5865F2] rounded-2xl p-8 md:p-12 overflow-hidden">
              {/* Motif de fond */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />
              
              {/* Effet de brillance */}
              <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] animate-[shimmer_4s_infinite]" />
              
              {/* Contenu */}
              <div className="relative flex flex-col items-center gap-6">
                <DiscordLogo className="text-white w-24 h-24" size={96} />
                <div className="text-center">
                  <h3 className="text-white text-2xl font-light mb-4">
                    Rejoignez plus de 500 créateurs
                  </h3>
                  <p className="text-white/80 text-lg font-light mb-8">
                    Notre communauté Discord est l'endroit idéal pour échanger, apprendre et grandir ensemble.
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      className="px-8 py-3 bg-white text-[#5865F2] hover:bg-white/90 text-lg transition-all duration-300 rounded-lg font-light"
                      onClick={() => window.open('https://discord.gg/hexpoz', '_blank')}
                    >
                      Rejoindre le Discord
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 