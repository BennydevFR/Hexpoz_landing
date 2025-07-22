'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface FormData {
  email: string;
  interestLevel: 'curious' | 'excited' | 'needToKnowMore' | '';
}

export default function AppleCTASection() {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    interestLevel: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showInterestSelect, setShowInterestSelect] = useState(false);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.email && !showInterestSelect) {
      setShowInterestSelect(true);
    } else if (formData.interestLevel) {
      setError('');
      setIsLoading(true);

      try {
        const response = await fetch('/api/submit-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Une erreur est survenue');
        }

        setIsSubmitted(true);
        setFormData({ email: '', interestLevel: '' });
        setShowInterestSelect(false);
        setTimeout(() => setIsSubmitted(false), 3000);
      } catch (err) {
        setError('Une erreur est survenue. Veuillez réessayer.');
      } finally {
        setIsLoading(false);
      }
    }
  };

  const interestOptions = [
    { value: 'curious', label: 'Curieux(se) d\'en savoir plus 🤔' },
    { value: 'excited', label: 'Très intéressé(e) par le concept ! 🔥' },
    { value: 'needToKnowMore', label: 'Besoin de plus d\'informations 🤓' }
  ];

  return (
    <section id="cta" className="py-40 lg:py-48 xl:py-56 px-4 sm:px-6 lg:px-8 xl:px-12 bg-[#111111] m-2 rounded-lg">
      <div className="max-w-4xl xl:max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-zinc-800/50 rounded-full text-sm text-zinc-400 backdrop-blur-sm border border-zinc-700/50 mb-8">
            <span className="mr-2">🎯</span>
            Phase 1: Bêta Fermée • Phase 2: Accès Anticipé
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-6 lg:mb-8">
            Rejoignez la bêta
            <br />
            <span className="text-zinc-400">fermée</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
            {/* Phase 1: Bêta */}
            <div className="bg-zinc-900/30 border border-white/5 rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-sm text-zinc-400 mb-2">Phase 1 - En cours</div>
              <h3 className="text-xl text-white mb-2 font-light">Bêta Fermée</h3>
              <p className="text-zinc-400 text-sm mb-4">Accès exclusif aux premiers testeurs</p>
              <div className="flex items-center justify-center space-x-4">
                <div>
                  <div className="text-2xl font-light text-white">59</div>
                  <div className="text-zinc-500 text-xs">places restantes</div>
                </div>
              </div>
            </div>

            {/* Phase 2: Accès Anticipé */}
            <div className="bg-zinc-900/30 border border-white/5 rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-sm text-zinc-400 mb-2">Phase 2 - À venir</div>
              <h3 className="text-xl text-white mb-2 font-light">Accès Anticipé</h3>
              <p className="text-zinc-400 text-sm mb-4">Réservez votre place pour le lancement</p>
              <div className="flex items-center justify-center space-x-4">
                <div>
                  <div className="text-2xl font-light text-white">1000</div>
                  <div className="text-zinc-500 text-xs">places disponibles</div>
                </div>
                <div className="w-px h-8 bg-white/10"></div>
                <div>
                  <div className="text-2xl font-light text-white">0</div>
                  <div className="text-zinc-500 text-xs">places réservées</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Formulaire d'inscription */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-lg xl:max-w-xl mx-auto mb-8 lg:mb-12"
          >
            <form onSubmit={handleEmailSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="votre@email.com"
                  className="flex-1 px-6 py-4 bg-zinc-900/50 border border-white/10 rounded-xl text-white placeholder-zinc-400 focus:outline-none focus:border-white/30 transition-colors font-light backdrop-blur-sm"
                  required
                  disabled={isLoading || showInterestSelect}
                />
                <motion.button
                  type="submit"
                  className={`px-8 py-4 bg-white text-black rounded-xl font-medium hover:bg-zinc-200 transition-all duration-300 whitespace-nowrap ${
                    isLoading ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  whileHover={{ scale: isLoading ? 1 : 1.02 }}
                  whileTap={{ scale: isLoading ? 1 : 0.98 }}
                  disabled={isLoading || isSubmitted}
                >
                  {isLoading ? '...' : isSubmitted ? '✓ Inscrit !' : showInterestSelect ? 'Confirmer' : 'Continuer'}
                </motion.button>
              </div>

              {showInterestSelect && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-3"
                >
                  <p className="text-zinc-400 text-sm">Quel est votre niveau d'intérêt ?</p>
                  <div className="grid grid-cols-1 gap-2">
                    {interestOptions.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, interestLevel: option.value as FormData['interestLevel'] }))}
                        className={`px-4 py-3 rounded-xl text-left text-sm transition-all duration-300 ${
                          formData.interestLevel === option.value
                            ? 'bg-white text-black'
                            : 'bg-zinc-900/50 text-white hover:bg-zinc-800/50'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </form>
            
            {error && (
              <p className="text-red-400 text-sm font-light mt-4">
                {error}
              </p>
            )}
            
            <p className="text-zinc-500 text-sm font-light mt-4">
              ✨ Accès bêta exclusif • Aucun spam, promis
            </p>
          </motion.div>
          
          {/* Urgence finale */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <div className="inline-flex items-center px-4 py-2 bg-red-500/10 rounded-full text-sm text-red-400 backdrop-blur-sm border border-red-500/20">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
              Bêta fermée - 59 places restantes
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 