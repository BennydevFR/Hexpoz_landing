'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Qu'est-ce qui rend HEXPOZ unique ?",
      answer: "HEXPOZ révolutionne l'art numérique en offrant des galeries 3D immersives ultra-réalistes. Notre technologie de pointe permet de créer des expériences artistiques qui transcendent les limites traditionnelles de l'exposition."
    },
    {
      question: "Comment puis-je commencer à créer mes galeries ?",
      answer: "Une fois votre accès accordé, notre interface intuitive vous guide pas à pas. En quelques clics, vous pouvez importer vos œuvres, les organiser dans l'espace 3D et personnaliser l'ambiance de votre galerie."
    },
    {
      question: "Mes créations sont-elles sécurisées ?",
      answer: "Absolument. Nous utilisons un chiffrement de niveau bancaire et des serveurs sécurisés. Vos œuvres restent votre propriété exclusive et vous contrôlez entièrement leur visibilité et leur partage."
    },
    {
      question: "Quand HEXPOZ sera-t-il disponible ?",
      answer: "La version BETA est en cours de finalisation. Les membres de notre liste d'attente recevront un accès prioritaire dans les prochaines semaines, avec des avantages exclusifs de lancement."
    },
    {
      question: "Quel est le prix de l'abonnement ?",
      answer: "Nous proposons plusieurs formules adaptées à tous les profils d'artistes. Les membres BETA bénéficient d'une réduction de 50% à vie sur leur abonnement, plus des bonus exclusifs."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-40 lg:py-48 xl:py-56 px-4 sm:px-6 lg:px-8 xl:px-12 bg-[#111111]/80 m-2 rounded-lg">
      <div className="max-w-4xl xl:max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16 xl:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 lg:mb-6 tracking-tight">
            Questions
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent block">
              Fréquentes
            </span>
          </h2>
          <p className="text-lg lg:text-xl xl:text-2xl text-zinc-400 max-w-2xl xl:max-w-3xl mx-auto leading-relaxed">
            Tout ce que vous devez savoir sur HEXPOZ et notre révolution artistique
          </p>
        </motion.div>

        <div className="space-y-3 lg:space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-zinc-800/50 transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-zinc-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-white mb-4">
              Encore des questions ?
            </h3>
            <p className="text-zinc-400 mb-6">
              Notre équipe est là pour vous accompagner dans votre découverte d'HEXPOZ
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Nous contacter
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 