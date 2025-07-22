'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function FeaturesSection() {
  const features = [
    {
      icon: "🎨",
      title: "Galeries 3D Immersives",
      description: "Créez des espaces d'exposition virtuels époustouflants qui donnent vie à vos œuvres.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: "⚡",
      title: "Édition Intuitive",
      description: "Interface ultra-moderne pour organiser vos créations en quelques clics.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: "🌐",
      title: "Partage Universel",
      description: "Diffusez vos galeries instantanément sur tous les supports et réseaux.",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: "👥",
      title: "Communauté Créative",
      description: "Connectez-vous avec une communauté d'artistes passionnés du monde entier.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: "📱",
      title: "Experience Mobile",
      description: "Accès optimal sur mobile, tablette et desktop avec la même qualité.",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: "🚀",
      title: "Performance Ultime",
      description: "Technologie de pointe pour des chargements instantanés et une fluidité parfaite.",
      gradient: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section id="features" className="py-40 lg:py-48 xl:py-56 px-4 sm:px-6 lg:px-8 xl:px-12 relative overflow-hidden bg-[#111111]/80 m-2 rounded-lg">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/20 via-transparent to-zinc-800/20"></div>
      
      <div className="max-w-6xl xl:max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16 xl:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 lg:mb-6 tracking-tight">
            Fonctionnalités
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent block">
              Révolutionnaires
            </span>
          </h2>
          <p className="text-lg lg:text-xl xl:text-2xl text-zinc-400 max-w-3xl xl:max-w-4xl mx-auto leading-relaxed">
            Découvrez les outils qui transformeront votre façon de créer et partager l'art numérique
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 lg:gap-8 xl:gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className="bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50 rounded-3xl p-8 h-full transition-all duration-500 group-hover:border-zinc-700/70 group-hover:bg-zinc-800/50">
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl mb-6 flex items-center justify-center text-2xl shadow-lg`}>
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-500">
                    {feature.title}
                  </h3>
                  
                  <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors duration-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="bg-zinc-900/30 backdrop-blur-xl border border-zinc-800/50 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-white mb-8">Rejoignez la Révolution</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">2,847</div>
                <div className="text-zinc-400">Créateurs en attente</div>
              </div>
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">15K+</div>
                <div className="text-zinc-400">Œuvres créées</div>
              </div>
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent mb-2">98%</div>
                <div className="text-zinc-400">Satisfaction</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 