'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function WaitlistSection() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setIsSubmitted(true);
    setEmail('');
  };

  const benefits = [
    "🎯 Accès prioritaire à la plateforme",
    "🎁 Bonus exclusifs de lancement",
    "💰 50% de réduction sur l'abonnement Premium",
    "🚀 Formation personnalisée incluse"
  ];

  return (
    <section id="waitlist" className="py-40 lg:py-48 xl:py-56 px-4 sm:px-6 lg:px-8 xl:px-12 relative overflow-hidden bg-[#111111]/80 m-2 rounded-lg">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/20 via-transparent to-zinc-800/20"></div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      
      <div className="max-w-4xl xl:max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {!isSubmitted ? (
            <>
              <div className="inline-flex items-center px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-full text-sm text-orange-400 mb-6 lg:mb-8 backdrop-blur-sm">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 animate-pulse"></span>
                Accès anticipé limité • Places limitées
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 lg:mb-6 tracking-tight">
                Rejoignez l'Élite
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent block">
                  des Créateurs
                </span>
              </h2>

              <p className="text-lg lg:text-xl xl:text-2xl text-zinc-400 mb-8 lg:mb-12 max-w-2xl xl:max-w-3xl mx-auto leading-relaxed">
                Soyez parmi les premiers à révolutionner votre art avec HEXPOZ. 
                L'accès anticipé vous donne un avantage exclusif.
              </p>

              {/* Benefits Grid */}
              <div className="grid md:grid-cols-2 gap-3 lg:gap-4 mb-8 lg:mb-12 max-w-2xl xl:max-w-3xl mx-auto">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50 rounded-2xl p-4 text-left"
                  >
                    <div className="text-zinc-300 text-sm font-medium">{benefit}</div>
                  </motion.div>
                ))}
              </div>

              {/* Email Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50 rounded-3xl p-8 md:p-12"
              >
                <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
                  <div className="flex-1">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="votre@email.com"
                      className="w-full px-6 py-4 bg-zinc-800/50 border border-zinc-700/50 rounded-2xl text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300"
                      required
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[140px]"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isLoading ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      'Rejoindre'
                    )}
                  </motion.button>
                </form>

                <p className="text-zinc-500 text-sm mt-6">
                  En vous inscrivant, vous acceptez de recevoir nos communications. 
                  Désinscription possible à tout moment.
                </p>
              </motion.div>

              {/* Social Proof */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-12 text-center"
              >
                <div className="inline-flex items-center space-x-2 text-zinc-400 text-sm">
                  <div className="flex -space-x-2">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full border-2 border-zinc-900 flex items-center justify-center text-xs font-bold text-white">
                        {String.fromCharCode(65 + i)}
                      </div>
                    ))}
                  </div>
                  <span>
                    <strong className="text-white">2,847</strong> créateurs déjà inscrits
                  </span>
                </div>
              </motion.div>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mx-auto mb-8 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-4">
                Bienvenue dans l'Élite !
              </h3>
              
              <p className="text-xl text-zinc-400 mb-8">
                Vous recevrez votre invitation d'accès anticipé très bientôt.
              </p>
              
              <div className="bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50 rounded-2xl p-6 max-w-md mx-auto">
                <p className="text-zinc-300 text-sm">
                  🎁 Votre code de réduction 50% vous sera envoyé dans les 24h
                </p>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
} 