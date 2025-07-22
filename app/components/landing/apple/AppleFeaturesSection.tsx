'use client';

import React from 'react';
import { cn } from '../../../lib/utils';
import { Box, Smartphone, Zap, Settings, Shield, Tablet, Laptop, GlobeIcon } from 'lucide-react';
import { Globe } from '../../../components/magicui/Globe';
import Image from 'next/image';
import type { COBEOptions } from 'cobe';

export default function AppleFeaturesSection() {
  const globeConfig: COBEOptions = {
    width: 800,
    height: 800,
    phi: 0,
    theta: 0.3,
    dark: 0,
    diffuse: 1,
    mapSamples: 16000,
    mapBrightness: 6,
    baseColor: [1, 1, 1],
    markerColor: [251 / 255, 100 / 255, 21 / 255],
    glowColor: [1, 1, 1],
    devicePixelRatio: 2,
    onRender: () => {},
    markers: [
      // On garde les mêmes marqueurs
      { location: [14.5995, 120.9842], size: 0.03 },
      { location: [19.076, 72.8777], size: 0.1 },
      { location: [23.8103, 90.4125], size: 0.05 },
      { location: [30.0444, 31.2357], size: 0.07 },
      { location: [39.9042, 116.4074], size: 0.08 },
      { location: [-23.5505, -46.6333], size: 0.1 },
      { location: [19.4326, -99.1332], size: 0.1 },
      { location: [40.7128, -74.006], size: 0.1 },
      { location: [34.6937, 135.5022], size: 0.05 },
      { location: [41.0082, 28.9784], size: 0.06 },
    ],
  };

  const features = [
    {
      icon: <Box className="w-5 h-5" />,
      title: 'Création intuitive',
      description: 'Interface épurée pour créer vos galeries 3D en quelques clics.',
      size: 'large',
      image: {
        src: '/editor-6.webp',
        width: 900,
        height: 540
      }
    },
    {
      icon: <GlobeIcon className="w-5 h-5" />,
      title: 'Partage universel',
      description: 'Partagez vos créations avec le monde entier d\'un simple lien.',
      size: 'medium',
      decoration: true
    },
    {
      icon: <Smartphone className="w-5 h-5" />,
      title: 'Responsive design',
      description: 'Vos galeries s\'adaptent parfaitement à tous les écrans.',
      size: 'medium',
      decoration: 'devices'
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: 'Performance optimale',
      description: 'Notre priorité est de rendre HEXPOZ accessible au plus grand nombre. Bien que les performances dépendent de votre matériel, nous optimisons constamment l\'application pour garantir une expérience fluide avec un minimum requis raisonnable.',
      disclaimer: 'Actuellement optimisé pour la plupart des navigateurs, support Safari en cours de développement.',
      size: 'medium-large'
    },
    {
      icon: <Settings className="w-5 h-5" />,
      title: 'Personnalisation',
      description: 'Exprimez votre identité artistique en toute liberté. Notre éditeur de profil vous permet de composer votre espace personnel selon vos envies, reflétant parfaitement votre style et votre créativité.',
      size: 'large-medium',
      image: {
        src: '/profil.webp',
        width: 1200,
        height: 800
      }
    },
    
  ];

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-[#111111] m-2 rounded-lg overflow-hidden relative">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 via-zinc-900/25 to-zinc-900/50" />
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6">
            Fonctionnalités
            <span className="block text-zinc-400 mt-2 text-xl md:text-2xl lg:text-3xl">avancées</span>
          </h2>
          <p className="text-base lg:text-lg text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
            Découvrez les outils qui font de HEXPOZ la plateforme de référence pour l'art 3D.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className={cn(
                "group relative",
                feature.size === 'large' && "lg:col-span-4 h-[500px]",
                feature.size === 'large-medium' && [
                  "lg:col-span-2",
                  "lg:h-[400px]",
                  "md:h-[450px]", // Réduction de la hauteur sur tablette
                  "h-[520px]" // Réduction de la hauteur sur mobile
                ],
                feature.size === 'medium-large' && [
                  "lg:col-span-2",
                  "h-[320px]",
                  "md:h-[400px]",
                  "h-[450px]"
                ],
                feature.size === 'medium' && "lg:col-span-2 h-[250px]",
                feature.size === 'small' && "lg:col-span-1 h-[250px]"
              )}
            >
              <div 
                className={cn(
                  "w-full h-full rounded-2xl p-8 lg:p-10 backdrop-blur-sm",
                  "bg-white/[0.02] hover:bg-white/[0.04]",
                  "border border-white/[0.05] hover:border-white/[0.08]",
                  "transition-all duration-300 ease-out",
                  "relative overflow-hidden"
                )}
              >
                {/* Masque sur le bord droit */}
                <div className="absolute right-0 top-0 bottom-0 w-[100px] bg-gradient-to-r from-transparent to-[#111111] z-10" />

                {feature.decoration === 'devices' && (
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute right-12 top-1/2 -translate-y-1/2 flex flex-col items-end gap-6">
                      <div className="relative group/laptop">
                        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-full blur-2xl" />
                        <Laptop 
                          className="w-28 h-28 text-white/40 transform -rotate-6 transition-all duration-300 group-hover:rotate-0 group-hover/laptop:text-white/60" 
                          strokeWidth={1}
                        />
                      </div>
                      <div className="relative flex items-center gap-4">
                        <div className="relative group/phone">
                          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-full blur-2xl" />
                          <Smartphone 
                            className="w-20 h-20 text-white/30 transform -rotate-12 translate-y-4 transition-all duration-300 group-hover:rotate-0 group-hover/phone:text-white/50" 
                            strokeWidth={1}
                          />
                        </div>
                        <div className="relative group/tablet">
                          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-full blur-2xl" />
                          <Tablet 
                            className="w-24 h-24 text-white/35 transform rotate-6 transition-all duration-300 group-hover:rotate-0 group-hover/tablet:text-white/55" 
                            strokeWidth={1}
                          />
                        </div>
                      </div>
                    </div>
                    {/* Ligne décorative */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-[70%] bg-gradient-to-b from-transparent via-white/5 to-transparent mr-6" />
                  </div>
                )}
                {feature.decoration === true && (
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute bottom-0 right-0 w-[800px] h-[800px] translate-y-1/2 translate-x-1/2">
                      <Globe className="opacity-[0.08] pointer-events-none" config={globeConfig} />
                    </div>
                  </div>
                )}

                <div className="h-full flex flex-col relative z-20">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-lg bg-white/[0.03] flex items-center justify-center
                                group-hover:bg-white/[0.05] transition-colors duration-300">
                      <div className="text-white/70 group-hover:text-white/90 transition-colors duration-300">
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-light text-white/90 
                              group-hover:text-white transition-colors duration-300">
                      {feature.title}
                    </h3>
                  </div>
                  
                  <p className={cn(
                    "text-base text-zinc-400 font-light leading-relaxed transition-colors duration-300",
                    feature.image ? "max-w-[45%] lg:max-w-[45%] max-w-full" : "max-w-full",
                    "group-hover:text-zinc-300"
                  )}>
                    {feature.description}
                    {feature.disclaimer && (
                      <span className="block mt-2 text-sm text-zinc-500 font-light">
                        Note : {feature.disclaimer}
                      </span>
                    )}
                  </p>

                  <div className="mt-auto pt-4">
                    <div className="h-[1px] w-12 bg-white/[0.05] group-hover:w-16 transition-all duration-300" />
                  </div>

                  {feature.image && (
                    <div className={cn(
                      "absolute",
                      // Différentes positions selon la carte
                      feature.title === 'Création intuitive' && [
                        "lg:right-4 lg:w-[55%] lg:bottom-0", // Desktop
                        "md:right-0 md:w-[85%] md:-bottom-4", // Tablet
                        "right-0 w-[95%] -bottom-4" // Mobile
                      ],
                      feature.title === 'Personnalisation' && [
                        "lg:right-[-60%] lg:w-[100%] lg:bottom-0", // Desktop
                        "right-0 w-full -bottom-4 mt-8" // Mobile et Tablet
                      ]
                    )}>
                      <div className="relative w-full h-full">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/50 z-10" />
                        <Image
                          src={feature.image.src}
                          width={feature.image.width}
                          height={feature.image.height}
                          alt={feature.title}
                          className={cn(
                            "w-full h-auto",
                            feature.title === 'Création intuitive' ? "lg:rounded-l-lg rounded-lg" : "rounded-l-lg"
                          )}
                        />
                      </div>
                    </div>
                  )}

                  {/* Masque uniquement pour la carte personnalisation */}
                  {feature.title === 'Personnalisation' && (
                    <div className={cn(
                      "absolute top-0 bottom-0 pointer-events-none",
                      "lg:-right-10 lg:w-[200px] lg:bg-gradient-to-r lg:from-transparent lg:via-[#111111]/50 lg:to-[#111111] lg:z-30",
                      "hidden lg:block" // Masque uniquement visible en desktop
                    )} />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 