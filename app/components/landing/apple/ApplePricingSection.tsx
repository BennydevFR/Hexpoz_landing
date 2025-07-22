'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function ApplePricingSection() {
  const plans = [
    {
      name: 'Créateur',
      price: '12.99',
      originalPrice: '19',
      period: 'mois',
      description: 'Parfait pour les artistes individuels',
      features: [
        '5 galeries 3D',
        'Stockage 10GB',
        'Support communauté',
        'Partage public',
        'Prix garanti à vie'
      ],
      popular: false,
      isBeta: true,
      remainingSpots: 59
    },
    {
      name: 'Professionnel',
      price: '49',
      period: 'mois',
      description: 'Idéal pour les professionnels',
      features: [
        'Galeries illimitées',
        'Stockage 100GB',
        'Support prioritaire',
        'Analytics avancées',
        'Domaine personnalisé'
      ],
      popular: true
    },
    {
      name: 'Studio',
      price: '99',
      period: 'mois',
      description: 'Pour les équipes créatives',
      features: [
        'Tout du Professionnel',
        'Stockage 500GB',
        'Collaboration équipe',
        'API personnalisée',
        'Support dédié'
      ],
      popular: false
    }
  ];

  return (
    <section className="py-40 lg:py-48 xl:py-56 px-4 sm:px-6 lg:px-8 xl:px-12 bg-[#111111] m-2 rounded-lg">
      <div className="max-w-6xl xl:max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16 xl:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-6 lg:mb-8">
            Tarifs
            <br />
            <span className="text-zinc-400">transparents</span>
          </h2>
          <p className="text-lg lg:text-xl xl:text-2xl text-zinc-400 max-w-3xl xl:max-w-4xl mx-auto font-light leading-relaxed">
            Choisissez le plan qui correspond à vos ambitions créatives. Changez à tout moment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 xl:gap-10 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-zinc-900/30 backdrop-blur-sm border rounded-2xl p-8 ${
                plan.popular 
                  ? 'border-white/20 ring-1 ring-white/10' 
                  : 'border-white/5'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-white text-black px-4 py-1 rounded-full text-sm font-medium">
                    Le plus populaire
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-light text-white mb-2">{plan.name}</h3>
                <p className="text-zinc-400 font-light mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  {plan.originalPrice && (
                    <span className="text-2xl font-light text-zinc-500 line-through mr-2">{plan.originalPrice}€</span>
                  )}
                  <span className="text-5xl font-light text-white">{plan.price}€</span>
                  <span className="text-zinc-400 font-light">/{plan.period}</span>
                  {plan.isBeta && (
                    <div className="mt-2">
                      <span className="text-sm text-emerald-400 font-medium">Prix spécial beta fermée</span>
                      <p className="text-xs text-zinc-400 mt-1">Ce tarif restera le vôtre même après le lancement officiel</p>
                      <p className="text-xs text-amber-400/90 font-medium mt-2">
                        Plus que {plan.remainingSpots} places disponibles
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                    <span className="text-zinc-300 font-light">{feature}</span>
                  </li>
                ))}
              </ul>

              {plan.isBeta && (
                <a 
                  href="#waitlist"
                  className="block w-full py-3 rounded-xl font-medium transition-all duration-300 bg-white text-black hover:bg-zinc-200 text-center"
                >
                  Rejoindre la beta
                </a>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-zinc-400 font-light">
            Essai gratuit de 14 jours. Aucune carte de crédit requise.
          </p>
        </motion.div>
      </div>
    </section>
  );
} 