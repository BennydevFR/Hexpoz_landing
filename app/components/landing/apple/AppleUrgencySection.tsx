'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AppleUrgencySection() {
  return (
    <section id="urgency" className="py-40 lg:py-48 xl:py-56 px-4 sm:px-6 lg:px-8 xl:px-12 bg-[#111111] m-2 rounded-lg">
      <div className="max-w-4xl xl:max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
        >
          {/* Badge d'urgence */}
          <div className="inline-flex items-center px-4 py-2 bg-red-500/10 rounded-full text-sm text-red-400 mb-6 lg:mb-8 backdrop-blur-sm border border-red-500/20">
            <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
            Bêta fermée disponible fin 2025
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-6 lg:mb-8">
            Rejoignez les
            <br />
            <span className="text-zinc-400">pionniers</span>
          </h2>
          
          <p className="text-lg lg:text-xl xl:text-2xl text-zinc-400 mb-8 lg:mb-12 font-light max-w-2xl xl:max-w-3xl mx-auto leading-relaxed">
            Participez au lancement d'HEXPOZ en trois phases exclusives. Commencez par la bêta fermée pour bénéficier d'avantages uniques, ou rejoignez l'accès anticipé pour faire partie des premiers utilisateurs.
          </p>
          
          {/* Phases et compteur */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 bg-zinc-900/30 backdrop-blur-sm border border-white/5 rounded-xl p-6">
            <div className="text-center">
              <div className="text-sm text-purple-400 mb-2">Phase 1: Bêta Fermée</div>
              <div className="text-3xl font-light text-white mb-2">41/100</div>
              <div className="text-red-400 font-light text-lg mb-2">59 places restantes</div>
              <div className="text-zinc-400 font-light text-sm">Carte NFC offerte</div>
            </div>
            <div className="text-center border-l border-r border-white/10">
              <div className="text-sm text-blue-400 mb-2">Phase 2: Accès Anticipé</div>
              <div className="text-3xl font-light text-white mb-2">0/1000</div>
              <div className="text-zinc-400 font-light text-sm">Bientôt disponible</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-green-400 mb-2">Phase 3: Lancement</div>
              <div className="text-3xl font-light text-white mb-2">∞</div>
              <div className="text-zinc-400 font-light text-sm">À venir</div>
            </div>
          </div>
          
          {/* Avantages Bêta */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-zinc-900/30 backdrop-blur-sm border border-white/5 rounded-xl overflow-hidden group hover:border-purple-500/20 transition-all duration-300"
            >
              <div className="relative h-40 w-full bg-gradient-to-br from-purple-500/10 to-zinc-900/50">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/card.png"
                    alt="Carte NFC HEXPOZ"
                    width={200}
                    height={120}
                    className="object-contain transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute top-4 left-4">
                  <div className="flex items-center space-x-1">
                    <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
                    <span className="text-xs text-purple-400 font-medium">EXCLUSIF BÊTA</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-white font-light mb-2 flex items-center">
                  <span className="text-xl mr-2">💳</span>
                  Carte NFC Exclusive
                </h4>
                <p className="text-zinc-400 text-sm font-light">
                  Offerte pour les 100 premiers
                </p>
                <div className="mt-4 pt-4 border-t border-white/5">
                  <p className="text-xs text-zinc-500">
                    Normalement disponible après 6 mois d'ancienneté ou avec un forfait Pro/Studio
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-zinc-900/30 backdrop-blur-sm border border-white/5 rounded-xl overflow-hidden group hover:border-blue-500/20 transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-light mb-2">Vision & Impact</h4>
                    <p className="text-zinc-400 text-sm font-light">Participez activement au développement et à l'évolution d'HEXPOZ</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/5">
                  <ul className="space-y-2">
                    <li className="text-xs text-zinc-500 flex items-center">
                      <span className="w-1 h-1 bg-blue-400 rounded-full mr-2"></span>
                      Accès aux fonctionnalités expérimentales
                    </li>
                    <li className="text-xs text-zinc-500 flex items-center">
                      <span className="w-1 h-1 bg-blue-400 rounded-full mr-2"></span>
                      Retours directs avec l'équipe
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-zinc-900/30 backdrop-blur-sm border border-white/5 rounded-xl overflow-hidden group hover:border-green-500/20 transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-light mb-2">Tarif préférentiel</h4>
                    <p className="text-zinc-400 text-sm font-light">12.99€/mois au lieu de 19.99€</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/5">
                  <div className="flex items-center justify-between text-sm">
                    <div className="text-zinc-500">Prix standard</div>
                    <div className="text-zinc-400 line-through">19.99€/mois</div>
                  </div>
                  <div className="flex items-center justify-between text-sm mt-2">
                    <div className="text-green-400">Prix bêta</div>
                    <div className="text-white font-medium">12.99€/mois</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* CTA principal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a
              href="#cta"
              className="inline-flex items-center px-12 py-4 bg-white text-black rounded-full font-medium hover:bg-zinc-200 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Rejoindre la bêta fermée
              <span className="ml-2">→</span>
            </a>
            
            <p className="text-zinc-500 text-sm font-light mt-4">
              ⏱️ Plus que 59 places en bêta fermée
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 