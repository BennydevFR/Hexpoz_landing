

import React, { useMemo } from 'react';
import CarouselGallery from './CarouselGallery';

// Données statiques extraites
const CAROUSEL_ITEMS = [
  { title: "L'éditeur de galerie", gradient: "from-purple-500/20 to-blue-500/20" , image: "/editor-5.png"},
  { title: "Exposition Virtuelle", gradient: "from-blue-500/20 to-purple-500/20" , image: "/gallery.png"},
  { title: "Carte NFC pour partager d'un geste", gradient: "from-purple-500/20 to-indigo-500/20" , image: "/card.png"},
];

const STEPS = [
  {
    title: 'Créer',
    desc: 'Donnez vie à votre univers artistique en quelques clics',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 8V16M8 12H16" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    title: 'Partager',
    desc: 'Diffusez votre galerie au monde entier',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.59 13.51L15.42 17.49M15.41 6.51L8.59 10.49M21 5C21 6.65685 19.6569 8 18 8C16.3431 8 15 6.65685 15 5C15 3.34315 16.3431 2 18 2C19.6569 2 21 3.34315 21 5ZM9 12C9 13.6569 7.65685 15 6 15C4.34315 15 3 13.6569 3 12C3 10.3431 4.34315 9 6 9C7.65685 9 9 10.3431 9 12ZM21 19C21 20.6569 19.6569 22 18 22C16.3431 22 15 20.6569 15 19C15 17.3431 16.3431 16 18 16C19.6569 16 21 17.3431 21 19Z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    title: 'Visiter',
    desc: 'Explorez les œuvres en toute immersion',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 12C3 12S6.27273 5 12 5C17.7273 5 21 12 21 12C21 12 17.7273 19 12 19C6.27273 19 3 12 3 12Z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }
];

export default function AppleVisionSection() {
  // Mémorisation des éléments qui ne changent pas
  const stepsElements = useMemo(() => (
    STEPS.map((step, i) => (
      <div key={i} className="group">
        <div className="relative flex items-center space-x-6">
          <div className="w-14 h-14 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/10 group-hover:border-white/20 transition-all duration-300">
            <div className="text-white/40 group-hover:text-white/60 transition-colors duration-300">
              {step.icon}
            </div>
          </div>
          <div>
            <h4 className="text-xl text-white font-light mb-2 group-hover:text-purple-400 transition-colors duration-300">
              {step.title}
            </h4>
            <p className="text-zinc-400 font-light">{step.desc}</p>
          </div>
        </div>
      </div>
    ))
  ), []);

  return (
    <section className="relative py-32 lg:py-40 xl:py-48 px-4 sm:px-6 lg:px-8 xl:px-12 bg-[#111111] m-2 rounded-lg overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 via-transparent to-blue-500/5 opacity-60 transform -skew-y-12" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/50 via-zinc-900/80 to-zinc-900" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header section */}
        <div className="text-center mb-24">
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400/80 via-blue-400/80 to-purple-400/80 text-sm uppercase tracking-[0.2em] mb-4 font-light">
            Vision & Innovation
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8">
            L'Art de Raconter
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-200">
              Votre Histoire
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
            Une nouvelle dimension pour vos créations, où chaque œuvre prend vie dans un espace immersif unique.
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left column - Interactive showcase */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-zinc-900 to-black border border-white/10">
              {/* 3D Scene */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Background Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] transform -skew-y-12" />
                
                {/* 3D Carousel */}
                <CarouselGallery items={CAROUSEL_ITEMS} />
              </div>

              {/* Ambient Light Effects */}
              <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-purple-500/5 rounded-full blur-[100px] animate-pulse transform -skew-y-12" />
              <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-blue-500/5 rounded-full blur-[100px] animate-pulse transform -skew-y-12" />
            </div>
          </div>

          {/* Right column */}
          <div className="lg:col-span-5 space-y-12">
            {/* Vision statement */}
            <div className="space-y-6">
              <h3 className="text-2xl font-light text-transparent bg-clip-text bg-gradient-to-r from-purple-400/90 to-blue-400/90">
                Votre Vision, Notre Mission
              </h3>
              <p className="text-zinc-400 font-light leading-relaxed">
                Nous réinventons l'expérience artistique numérique en créant des espaces où vos œuvres prennent vie et racontent leur histoire unique.
              </p>
            </div>

            {/* Steps */}
            <div className="space-y-8">
              {stepsElements}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 