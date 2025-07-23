'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AppleFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Qu\'est-ce qui rend HEXPOZ unique ?',
      answer: 'Notre objectif avec HEXPOZ est de rendre la création de galeries 3D accessible à tous. Nous avons développé une interface simple et intuitive permettant à chacun de créer des espaces immersifs, même sans connaissances en 3D.'
    },
    {
      question: 'Quels types d\'œuvres puis-je exposer ?',
      answer: 'HEXPOZ accepte les images, les vidéos et les modèles 3D (format .glb). Pour les images et les vidéos, vous pouvez personnaliser le cadre selon vos préférences pour une présentation unique de vos œuvres.'
    },
    {
      question: 'Les galeries sont-elles accessibles sur mobile ?',
      answer: 'La visite des galeries 3D est parfaitement optimisée pour mobile, tablette et PC. Notre technologie s\'adapte aux capacités matérielles de chaque appareil pour garantir un rendu optimal. Cependant, l\'édition des galeries reste exclusivement disponible sur ordinateur pour garantir une précision maximale dans la création, le tactile ne permettant pas une expérience satisfaisante pour le moment.'
    },
    {
      question: 'Comment fonctionne le partage ?',
      answer: 'HEXPOZ propose deux modes de partage. Premièrement, chaque galerie publique dispose d\'un lien unique partageable, permettant aux visiteurs d\'explorer vos œuvres sans même avoir besoin de se connecter. Deuxièmement, nous proposons une carte NFC qui permet de partager votre profil d\'artiste en un seul geste. La personne qui scanne votre carte accède directement à votre portfolio, vos informations de contact et tout ce que vous souhaitez mettre en avant pour des opportunités professionnelles.'
    },
    {
      question: 'Y a-t-il une limite de stockage ?',
      answer: 'Cela dépend de votre plan et du type de contenu. Le plan Créateur (10GB) convient parfaitement pour des galeries d\'images. Pour des projets plus complexes intégrant vidéos et modèles 3D, les plans Professionnel (100GB) ou Studio (500GB) sont recommandés. Tous les plans sont extensibles selon vos besoins.'
    },
    {
      question: 'Puis-je personnaliser l\'apparence ?',
      answer: 'Totalement. Contrôlez l\'éclairage, les textures, les couleurs, et même la disposition spatiale pour créer l\'ambiance parfaite pour vos œuvres.'
    },
    {
      question: 'Le projet est-il en phase finale ?',
      answer: 'HEXPOZ est actuellement fonctionnel pour la création et le partage de galeries, mais nous sommes loin d\'avoir épuisé nos idées ! De nombreuses fonctionnalités sont en cours de développement. Notre vision est d\'évoluer avec nos utilisateurs : vos retours et suggestions sont précieux pour façonner l\'avenir d\'HEXPOZ et répondre au mieux à vos besoins. Si le projet vous plaît, nous continuerons avec enthousiasme à l\'enrichir et l\'améliorer.'
    }
  ];

  return (
    <section 
      className="py-40 lg:py-48 xl:py-56 px-4 sm:px-6 lg:px-8 xl:px-12 bg-[#111111] m-2 rounded-lg"
      aria-label="Questions fréquentes"
      role="region"
    >
      <div className="max-w-4xl xl:max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16 xl:mb-20"
          role="banner"
        >
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-6 lg:mb-8"
            id="faq-title"
          >
            Questions
            <br />
            <span className="text-zinc-400">fréquentes</span>
          </h2>
          <p className="text-lg lg:text-xl xl:text-2xl text-zinc-400 max-w-2xl xl:max-w-3xl mx-auto font-light leading-relaxed">
            Tout ce que vous devez savoir sur HEXPOZ et comment transformer vos créations en expériences 3D immersives.
          </p>
        </motion.div>

        <div 
          className="space-y-3 lg:space-y-4"
          role="list"
          aria-label="Liste des questions fréquentes"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-gradient-to-br from-zinc-900/50 to-zinc-900/30 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:border-white/20"
              role="listitem"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-7 text-left flex items-center justify-between group-hover:bg-white/[0.02] transition-all duration-500"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
              >
                <h3 className="text-lg font-light text-white/90 pr-4 group-hover:text-white transition-colors duration-300">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ 
                    rotate: openIndex === index ? 45 : 0,
                    scale: openIndex === index ? 1.1 : 1
                  }}
                  transition={{ 
                    duration: 0.4,
                    ease: [0.23, 1, 0.32, 1]
                  }}
                  className="text-zinc-400 text-2xl font-light flex-shrink-0 group-hover:text-white/80 transition-colors duration-300"
                  aria-hidden="true"
                >
                  +
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0, y: -20 }}
                    animate={{ height: 'auto', opacity: 1, y: 0 }}
                    exit={{ height: 0, opacity: 0, y: -10 }}
                    transition={{ 
                      duration: 0.5,
                      ease: [0.23, 1, 0.32, 1]
                    }}
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                  >
                    <div className="px-8 pb-7 border-t border-white/[0.03]">
                      <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.4 }}
                        className="text-zinc-400 font-light leading-relaxed pt-6 group-hover:text-zinc-300 transition-colors duration-300"
                      >
                        {faq.answer}
                      </motion.p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 