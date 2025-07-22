'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AppleHeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 xl:px-12 relative overflow-hidden pt-8 bg-[#111111] m-2 rounded-lg">
      {/* Background gradient subtil */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/30 via-transparent to-zinc-800/30"></div>
      
      <div className="relative z-10 text-center max-w-5xl xl:max-w-6xl mx-auto -mt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Badge BETA */}
          <div className="inline-flex items-center px-3 py-1 bg-white/10 rounded-full text-xs text-zinc-300 mb-6 lg:mb-8 backdrop-blur-sm border border-white/10">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            Version BETA disponible
          </div>
          
          {/* Grille des lettres 3x2 */}
          <div className="mb-6 lg:mb-8">
            <div className="grid grid-cols-3 gap-0.5 lg:gap-1 xl:gap-1.5 max-w-48 lg:max-w-56 xl:max-w-64 mx-auto">
              {/* Première ligne: H E X */}
              <div className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white tracking-tight">H</div>
              <div className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white tracking-tight">E</div>
              <div className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white tracking-tight">X</div>
              
              {/* Deuxième ligne: P O Z */}
              <div className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white tracking-tight">P</div>
              <div className="flex items-center justify-center">
                <Image
                  src="/logo2.svg"
                  alt="HEXPOZ Logo"
                  width={50}
                  height={50}
                  className="w-8 h-8 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20"
                />
              </div>
              <div className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white tracking-tight">Z</div>
            </div>
          </div>
          
          {/* Sous-titre */}
          <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light text-zinc-400 mb-3 lg:mb-4">
            L'art en 3D. Réinventé.
          </p>
          
          {/* Description - Optimisée pour le LCP */}
          <div className="mx-auto max-w-[65ch] mb-8 lg:mb-12">
            <p style={{
              fontSize: '16px',
              lineHeight: '1.5',
              color: 'rgb(113, 113, 122)',
              fontWeight: '300',
              margin: '0 auto',
              textRendering: 'optimizeLegibility'
            }}>
              Découvrez une nouvelle dimension de créativité avec des galeries 3D immersives qui transforment votre vision artistique en réalité.
            </p>
          </div>
          
          {/* Boutons CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="#urgency"
              className="px-8 py-3 bg-white text-black rounded-lg font-medium hover:bg-zinc-200 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Découvrir HEXPOZ
            </motion.a>
            <motion.a
              href="#showcase"
              className="px-8 py-3 text-white hover:text-zinc-300 transition-colors duration-300 font-light rounded-lg border border-white/20 hover:border-white/30"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Voir en action
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 