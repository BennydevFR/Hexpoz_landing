'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function AppleAboutSection() {
  return (
    <section className="py-32 lg:py-40 px-4 sm:px-6 lg:px-8 bg-[#111111] m-2 rounded-2xl relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.02] via-transparent to-blue-500/[0.02]" />
      
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light text-white mb-6 tracking-tight">
            L'histoire derrière
            <span className="block mt-3 bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
              HEXPOZ
            </span>
          </h2>
        </motion.div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left Column - Main Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gradient-to-r from-purple-500/30 to-transparent" />
                <span className="text-zinc-500 font-light text-sm tracking-wider uppercase">Le Début</span>
              </div>
              <p className="text-zinc-300 font-light leading-relaxed">
                "Hey, mon amie artiste cherche un site avec une galerie 3D..." Une simple conversation entre amis. 
                Une demande qui semblait presque anodine, mais qui allait tout changer. Une artiste qui voulait 
                plus qu'une simple galerie en ligne - elle voulait un espace où l'art prendrait vie.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gradient-to-r from-blue-500/30 to-transparent" />
                <span className="text-zinc-500 font-light text-sm tracking-wider uppercase">Le Défi</span>
              </div>
              <p className="text-zinc-300 font-light leading-relaxed">
                La proposition était intimidante. Une galerie 3D ? C'était bien au-delà de notre zone de confort. 
                Le genre de projet qui vous fait douter de vos capacités. Mais parfois, les plus grands projets 
                naissent justement de ces moments d'incertitude.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Continuation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            className="space-y-16 lg:pt-24"
          >
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gradient-to-r from-emerald-500/30 to-transparent" />
                <span className="text-zinc-500 font-light text-sm tracking-wider uppercase">L'Obsession</span>
              </div>
              <p className="text-zinc-300 font-light leading-relaxed">
                Ce qui devait être un simple projet client est devenu une véritable obsession. Jour et nuit, 
                nous avons plongé dans le code, repoussant les limites de ce que nous pensions possible. 
                Chaque bug résolu nous rapprochait d'une vision plus grande.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gradient-to-r from-rose-500/30 to-transparent" />
                <span className="text-zinc-500 font-light text-sm tracking-wider uppercase">La Renaissance</span>
              </div>
              <p className="text-zinc-300 font-light leading-relaxed">
                Ironiquement, le projet initial n'a jamais vu le jour. Mais nous avions créé quelque chose de trop 
                spécial pour l'abandonner. C'est là qu'HEXPOZ est vraiment né : une plateforme qui rendrait 
                accessible à tous ce que nous avions initialement créé pour une seule personne.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Beta Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
          className="mt-32 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/[0.05] via-transparent to-blue-500/[0.05] rounded-xl" />
          <div className="relative border-t border-b border-white/[0.05] py-16">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="lg:pl-8">
                <div className="text-sm text-zinc-500 font-light tracking-wider uppercase mb-3">Version Beta</div>
                <h3 className="text-2xl text-white font-light">
                  Rejoignez les premiers créateurs
                </h3>
              </div>
              <div className="flex items-center gap-16 lg:pr-8">
                <div>
                  <div className="text-4xl font-light text-white mb-2">41</div>
                  <div className="text-sm text-zinc-500 font-light">Places Réservées</div>
                </div>
                <div className="h-16 w-px bg-white/[0.05]" />
                <div>
                  <div className="text-4xl font-light text-white mb-2">59</div>
                  <div className="text-sm text-zinc-500 font-light">Places Restantes</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 