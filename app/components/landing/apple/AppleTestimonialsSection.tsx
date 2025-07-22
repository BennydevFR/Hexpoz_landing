'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function AppleTestimonialsSection() {
  const testimonials = [
    {
      name: 'Marie Dubois',
      title: 'Artiste Numérique',
      content: 'HEXPOZ a révolutionné ma façon de présenter mes œuvres. Mes clients sont émerveillés par l\'immersion 3D.',
      avatar: '👩‍🎨'
    },
    {
      name: 'Thomas Chen',
      title: 'Designer 3D',
      content: 'Interface intuitive, résultats spectaculaires. HEXPOZ transforme mes créations en expériences inoubliables.',
      avatar: '👨‍💻'
    },
    {
      name: 'Sarah Johnson',
      title: 'Galeriste',
      content: 'Nos expositions virtuelles attirent désormais des visiteurs du monde entier. Un game-changer absolu.',
      avatar: '👩‍💼'
    }
  ];

  return (
    <section className="py-40 lg:py-48 xl:py-56 px-4 sm:px-6 lg:px-8 xl:px-12 bg-[#111111] m-2 rounded-lg">
      <div className="max-w-5xl xl:max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16 xl:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-6 lg:mb-8">
            Ils nous font
            <br />
            <span className="text-zinc-400">confiance</span>
          </h2>
          <p className="text-lg lg:text-xl xl:text-2xl text-zinc-400 max-w-3xl xl:max-w-4xl mx-auto font-light leading-relaxed">
            Découvrez pourquoi des milliers d'artistes choisissent HEXPOZ pour transformer leurs créations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 xl:gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-zinc-900/30 backdrop-blur-sm border border-white/5 rounded-2xl p-8"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">{testimonial.avatar}</span>
                </div>
                <div>
                  <h4 className="text-white font-light">{testimonial.name}</h4>
                  <p className="text-zinc-400 text-sm font-light">{testimonial.title}</p>
                </div>
              </div>
              <p className="text-zinc-300 font-light leading-relaxed italic">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 