"use client";

import { motion } from 'framer-motion';
import { useEffect, useState, useCallback } from 'react';
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation';

export function HeaderNotch() {
  const [headerWidth, setHeaderWidth] = useState(0); // Commencer à 0 pour éviter un flash
  const [isDebugMode, setIsDebugMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [debounceTimer, setDebounceTimer] = useState<NodeJS.Timeout | null>(null);

  const debouncedMeasureHeaderWidth = useCallback(() => {
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }
    
    const timer = setTimeout(() => {
      measureHeaderWidthInternal();
    }, 150); // 150ms de debounce
    
    setDebounceTimer(timer);
  }, [debounceTimer]);

  const measureHeaderWidthInternal = useCallback(() => {
    // Essayer plusieurs sélecteurs pour trouver le Dock
    const selectors = [
      'header [data-dock="true"]',
      'header > div > div > div', // Structure du TooltipProvider > Dock
      'header .dock', // Si le composant Dock a une classe dock
      'header > div > div:last-child', // Dernier div dans le header
    ];

    let headerElement = null;
    for (const selector of selectors) {
      headerElement = document.querySelector(selector) as HTMLElement;
      if (headerElement) break;
    }

    if (headerElement) {
      const rect = headerElement.getBoundingClientRect();
      
      // Récupérer la largeur réelle incluant les padding/border
      const actualWidth = rect.width;
      
      if (isDebugMode) {
        console.log('🔍 Header Debug:', {
          element: headerElement,
          selector: selectors.find(s => document.querySelector(s)),
          boundingRect: rect,
          actualWidth: actualWidth
        });
      }
      
      // Appliquer une largeur légèrement plus grande pour créer l'effet d'encoche
      const notchWidth = Math.round(actualWidth * 1.025);
      
      // Ne mettre à jour que si la largeur a changé significativement (plus de 2px)
      if (Math.abs(notchWidth - headerWidth) > 2) {
        setHeaderWidth(notchWidth);
      }
      
      if (isDebugMode) {
        console.log(`📏 Header: ${actualWidth}px → Encoche: ${notchWidth}px (104%)`);
      }
      
      return notchWidth;
    }
    return 0; // Retourner 0 au lieu de 320 par défaut
  }, [isDebugMode, headerWidth]);

  const measureHeaderWidth = debouncedMeasureHeaderWidth;

  useEffect(() => {
    // Mesurer immédiatement au montage
    measureHeaderWidthInternal();

    // Observer les changements du header
    const resizeObserver = new ResizeObserver(() => {
      measureHeaderWidthInternal();
    });

    // Observer les mutations du DOM pour détecter les changements de structure
    const mutationObserver = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === 'childList' || mutation.type === 'attributes') {
          measureHeaderWidthInternal();
          break;
        }
      }
    });

    const headerElement = document.querySelector('header');
    const dockElement = document.querySelector('[data-dock="true"]');

    if (headerElement) {
      resizeObserver.observe(headerElement);
      mutationObserver.observe(headerElement, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['class', 'style']
      });
    }

    if (dockElement) {
      resizeObserver.observe(dockElement);
      mutationObserver.observe(dockElement, {
        attributes: true,
        attributeFilter: ['class', 'style']
      });
    }

    // Observer aussi les changements de taille de fenêtre
    window.addEventListener('resize', measureHeaderWidthInternal);

    // Mesurer périodiquement pendant les premières secondes pour s'assurer de la synchronisation
    const intervalId = setInterval(measureHeaderWidthInternal, 100);
    setTimeout(() => clearInterval(intervalId), 2000);

    // Nettoyage
    return () => {
      resizeObserver.disconnect();
      mutationObserver.disconnect();
      window.removeEventListener('resize', measureHeaderWidthInternal);
      clearInterval(intervalId);
    };
  }, [measureHeaderWidthInternal]);

  // Effet de scroll pour déplacer le header notch vers le haut
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mode debug activable via double-clic
  const handleDoubleClick = () => {
    setIsDebugMode(!isDebugMode);
    console.log(`🔧 Debug mode ${!isDebugMode ? 'ON' : 'OFF'}`);
    measureHeaderWidthInternal();
  };

  return (
    <div className={`fixed left-0 right-0 z-20 flex justify-center transition-all duration-500 ease-out ${
      isScrolled ? 'top-[0.6%] sm:top-[0.6%] md:top-[0.5%]' : 'top-[1.2%] sm:top-[1.2%] md:top-[1%]'
    }`} style={{ pointerEvents: 'none' }}>
      <motion.div
        initial={false} // Désactive l'animation initiale
        style={{ width: headerWidth ? `${headerWidth}px` : '0', pointerEvents: 'none' }}
        className="notch-container"
        onDoubleClick={handleDoubleClick}
      >
        {/* Encoche principale - Avec le même composant Sparkles que le fond */}
        <div className={`relative overflow-hidden transition-all duration-500 ${
          isScrolled 
            ? 'rounded-lg sm:rounded-xl md:rounded-2xl h-[2.75rem] sm:h-[3.25rem] md:h-[4.5rem]' 
            : 'rounded-b-lg sm:rounded-b-xl md:rounded-b-2xl h-[2.5rem] sm:h-[3rem] md:h-[4rem]'
        }`}>
          {/* Fond avec Background Gradient Animation liquid */}
          <div className={`absolute inset-0 w-full h-full transition-all duration-500 ${
            isScrolled 
              ? 'rounded-lg sm:rounded-xl md:rounded-2xl' 
              : 'rounded-b-lg sm:rounded-b-xl md:rounded-b-2xl'
          } overflow-hidden`}>
            <BackgroundGradientAnimation
              gradientBackgroundStart="rgb(10, 10, 10)"
              gradientBackgroundEnd="rgb(15, 15, 15)"
              firstColor="100, 60, 255"
              secondColor="180, 80, 255" 
              thirdColor="80, 200, 255"
              fourthColor="100, 60, 255"
              fifthColor="80, 200, 255"
              pointerColor="120, 80, 255"
              size="60%"
              blendingValue="soft-light"
              interactive={false}
              containerClassName="absolute inset-0 w-full h-full"
            />
          </div>
          
          {/* Bordure brillante animée */}
          <div className={`absolute inset-0 z-10 transition-all duration-500 ${
            isScrolled 
              ? 'rounded-lg sm:rounded-xl md:rounded-2xl' 
              : 'rounded-b-lg sm:rounded-b-xl md:rounded-b-2xl'
          }`}></div>
          
          {/* Lueur externe */}
          <div className={`absolute -inset-0.5 bg-gradient-to-b from-zinc-400/20 via-zinc-500/10 to-transparent blur-sm -z-10 animate-glow-breathe transition-all duration-500 ${
            isScrolled 
              ? 'rounded-lg sm:rounded-xl md:rounded-2xl' 
              : 'rounded-b-lg sm:rounded-b-xl md:rounded-b-2xl'
          }`}></div>
        </div>

        {/* Indicateur de debug */}
        {isDebugMode && (
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-red-500/90 text-white text-xs px-2 py-1 rounded font-mono">
            {headerWidth}px (Debug ON)
          </div>
        )}

        {/* Styles CSS pour les animations */}
        <style jsx>{`
          @keyframes smooth-pulse {
            0%, 100% { 
              opacity: 0.2;
              transform: scale(1);
            }
            50% { 
              opacity: 0.5;
              transform: scale(1.01);
            }
          }

          @keyframes particle-float {
            0%, 100% {
              transform: translateY(0px) rotate(0deg);
              opacity: 0.6;
            }
            25% {
              transform: translateY(-1px) rotate(90deg);
              opacity: 0.8;
            }
            50% {
              transform: translateY(-2px) rotate(180deg);
              opacity: 1;
            }
            75% {
              transform: translateY(-1px) rotate(270deg);
              opacity: 0.8;
            }
          }

          @keyframes border-shimmer {
            0% {
              border-color: rgba(39, 39, 42, 0.6);
              box-shadow: 0 0 0 rgba(39, 39, 42, 0);
            }
            50% {
              border-color: rgba(63, 63, 70, 0.8);
              box-shadow: 0 0 4px rgba(63, 63, 70, 0.3);
            }
            100% {
              border-color: rgba(39, 39, 42, 0.6);
              box-shadow: 0 0 0 rgba(39, 39, 42, 0);
            }
          }

          @keyframes glow-breathe {
            0%, 100% {
              filter: blur(0.5px);
              opacity: 0.1;
            }
            50% {
              filter: blur(1px);
              opacity: 0.15;
            }
          }

          .animate-smooth-pulse {
            animation: smooth-pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }

          .animate-particle-float {
            animation: particle-float 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }

          .animate-border-shimmer {
            animation: border-shimmer 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }

          .animate-glow-breathe {
            animation: glow-breathe 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }

          /* Transition fluide pour le redimensionnement */
          .notch-container {
            transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }

          /* Amélioration des effets de blur */
          .enhanced-backdrop {
            backdrop-filter: blur(12px) saturate(1.2);
            -webkit-backdrop-filter: blur(12px) saturate(1.2);
          }

          /* Désactivation TOTALE des interactions sur le HeaderNotch */
          .notch-container,
          .notch-container *,
          .notch-container canvas,
          .notch-container div,
          #tsparticles-notch,
          #tsparticles-notch *,
          #tsparticles-notch canvas,
          #tsparticles-notch div {
            pointer-events: none !important;
            user-select: none !important;
            -webkit-user-select: none !important;
            -moz-user-select: none !important;
            -ms-user-select: none !important;
            touch-action: none !important;
          }
        `}</style>
      </motion.div>
    </div>
  );
} 