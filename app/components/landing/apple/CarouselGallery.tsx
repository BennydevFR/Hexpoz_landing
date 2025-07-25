'use client';

import React, { useState, useCallback, memo } from 'react';
import Image from 'next/image';

interface CarouselItem {
  title: string;
  gradient: string;
  image: string;
}

interface CarouselGalleryProps {
  items: CarouselItem[];
}

// Composant de navigation extrait et mémorisé
const NavigationButton = memo(({ 
  onClick, 
  direction, 
  gradientFrom,
  currentIndex,
  totalItems
}: { 
  onClick: () => void; 
  direction: 'next' | 'prev';
  gradientFrom: string;
  currentIndex: number;
  totalItems: number;
}) => {
  const buttonLabel = direction === 'next' 
    ? `Voir l'élément suivant (${currentIndex + 2} sur ${totalItems})`
    : `Voir l'élément précédent (${currentIndex === 0 ? totalItems : currentIndex} sur ${totalItems})`;

  return (
    <button 
      onClick={onClick}
      className={`absolute ${direction === 'next' ? '-top-6 -right-6' : '-bottom-6 -left-6'} w-16 h-16 group z-[999]`}
      aria-label={buttonLabel}
      role="button"
      aria-controls="carousel-items"
    >
      <div className="relative w-full h-full">
        <div 
          className={`absolute inset-0 bg-gradient-to-br from-${gradientFrom}/10 to-transparent rounded-lg backdrop-blur-sm border border-${gradientFrom}/20 transform ${direction === 'next' ? 'rotate-45' : '-rotate-45'} group-hover:from-${gradientFrom}/20 transition-all duration-300`}
          aria-hidden="true"
        />
        <div 
          className={`absolute inset-2 bg-gradient-to-br from-${gradientFrom}/5 to-transparent rounded-lg border border-${gradientFrom}/10 transform ${direction === 'next' ? 'rotate-45' : '-rotate-45'} flex items-center justify-center`}
          aria-hidden="true"
        >
          <svg 
            className={`w-6 h-6 text-white/70 transition-transform duration-300 group-hover:scale-110 ${direction === 'next' ? '-rotate-45' : 'rotate-45'}`} 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            aria-hidden="true"
            role="img"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1.5} 
              d={direction === 'next' ? "M9 5l7 7-7 7" : "M15 19l-7-7 7-7"} 
            />
          </svg>
        </div>
      </div>
    </button>
  );
});

NavigationButton.displayName = 'NavigationButton';

// Composant de carte NFC extrait et mémorisé
const NFCCardContent = memo(() => (
  <>
    <div className="absolute left-8 top-1/2 -translate-y-1/2 w-[45%] h-[80%] rounded-sm">
      <Image
        src="/mockup.png"
        alt="Démonstration de l'utilisation de la carte NFC avec un iPhone"
        fill
        className="object-contain"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        loading="lazy"
      />
    </div>
    <div 
      className="absolute left-[calc(35%+2rem)] top-[calc(60%+2rem)] -translate-y-1/2 w-24 h-16"
      aria-hidden="true"
    >
      <svg className="w-full h-full" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Flèches indicatives du mouvement NFC">
        <path d="M0 20 L80 20" stroke="white" strokeWidth="1" strokeDasharray="4 4" strokeOpacity="0.3" />
        <path d="M70 10 L80 20 L70 30" stroke="white" strokeWidth="1" strokeOpacity="0.3" />
        <path d="M80 40 L0 40" stroke="white" strokeWidth="1" strokeDasharray="4 4" strokeOpacity="0.3" />
        <path d="M10 30 L0 40 L10 50" stroke="white" strokeWidth="1" strokeOpacity="0.3" />
      </svg>
    </div>
  </>
));

NFCCardContent.displayName = 'NFCCardContent';

// Composant de carte du carousel extrait et mémorisé
const CarouselCard = memo(({ 
  item, 
  style, 
  isActive, 
  isNFCCard,
  index,
  totalItems
}: { 
  item: CarouselItem; 
  style: React.CSSProperties; 
  isActive: boolean;
  isNFCCard: boolean;
  index: number;
  totalItems: number;
}) => (
  <div 
    className="relative aspect-[16/9] rounded-sm shadow-2xl transition-transform duration-300 hover:-translate-y-1 [transform-style:preserve-3d] bg-gradient-to-br from-zinc-900/90 to-black" 
    style={style}
    role="group"
    aria-label={`Slide ${index + 1} sur ${totalItems}: ${item.title}`}
    aria-hidden={!isActive}
  >
    <div className="relative z-30 flex flex-col h-full">
      <h3 className="text-white text-base md:text-lg font-light pl-4 md:pl-6 pt-3 md:pt-6">{item.title}</h3>
      
      <div className={`relative flex-1 flex items-center ${isNFCCard ? 'justify-end pr-4 -mt-2 md:-mt-4' : 'justify-center mt-2 md:mt-6'}`}>
        {isNFCCard && <NFCCardContent />}
        <div className={`relative ${isNFCCard ? 'w-[60%] h-[90%]' : 'w-[98%] h-[95%]'} rounded-sm`}>
          <Image
            src={item.image}
            alt={`Illustration de ${item.title}`}
            fill
            className="object-cover rounded-sm"
            style={{ objectPosition: 'top left' }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={isActive}
            loading={isActive ? 'eager' : 'lazy'}
          />
        </div>
      </div>
    </div>

    <div 
      className="absolute inset-0 z-40 rounded-sm border border-white/10"
      aria-hidden="true"
    />
  </div>
));

CarouselCard.displayName = 'CarouselCard';

export default function CarouselGallery({ items }: CarouselGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  // Gestion des raccourcis clavier
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowLeft':
        handlePrev();
        break;
      case 'ArrowRight':
        handleNext();
        break;
      default:
        break;
    }
  }, [handleNext, handlePrev]);

  return (
    <div 
      className="relative w-full h-full flex items-center justify-center perspective-[2500px]"
      role="region"
      aria-label="Galerie de fonctionnalités"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div 
        className="relative w-full max-w-4xl mx-auto -mt-12 transform-style-3d -rotate-12"
        role="presentation"
      >
        {/* Changement ici : on utilise role="tablist" et "tab" qui sont plus appropriés pour un carousel */}
        <div 
          className="relative w-full transform-style-3d"
          id="carousel-items"
          role="tablist"
          aria-label="Galerie de slides"
        >
          {items.map((item, index) => {
            const adjustedIndex = (index - currentIndex + items.length) % items.length;
            const isNFCCard = item.title.includes("NFC");
            const isActive = adjustedIndex === 0;
            
            const cardStyle: React.CSSProperties = {
              left: '50%',
              top: '50%',
              transform: `translate(-50%, -50%) 
                        translateZ(-${120 * (adjustedIndex + 1)}px) 
                        translateY(${25 * adjustedIndex}px) 
                        translateX(-${40 * adjustedIndex}px)
                        rotateY(-25deg)
                        rotateX(25deg)
                        scale(${1 - adjustedIndex * 0.05})`,
              opacity: isActive ? 1 : 0.8,
              zIndex: items.length - adjustedIndex,
              transformStyle: 'preserve-3d',
              pointerEvents: isActive ? 'auto' : 'none',
              position: 'absolute',
              width: '100%',
              maxWidth: '36rem'
            };
            
            return (
              <div 
                key={index}
                className="relative aspect-[16/9] rounded-sm shadow-2xl transition-transform duration-300 hover:-translate-y-1 [transform-style:preserve-3d] bg-gradient-to-br from-zinc-900/90 to-black" 
                style={cardStyle}
                role="tab"
                aria-selected={isActive}
                aria-label={`Slide ${index + 1} sur ${items.length}: ${item.title}`}
                aria-hidden={!isActive}
                tabIndex={isActive ? 0 : -1}
                id={`carousel-item-${index}`}
              >
                <div 
                  className="relative z-30 flex flex-col h-full"
                  role="tabpanel"
                  aria-labelledby={`carousel-item-${index}`}
                >
                  <h3 className="text-white text-base md:text-lg font-light pl-4 md:pl-6 pt-3 md:pt-6">
                    {item.title}
                  </h3>
                  
                  <div className={`relative flex-1 flex items-center ${isNFCCard ? 'justify-end pr-4 -mt-2 md:-mt-4' : 'justify-center mt-2 md:mt-6'}`}>
                    {isNFCCard && <NFCCardContent />}
                    <div className={`relative ${isNFCCard ? 'w-[60%] h-[90%]' : 'w-[98%] h-[95%]'} rounded-sm`}>
                      <Image
                        src={item.image}
                        alt={`Illustration de ${item.title}`}
                        fill
                        className="object-cover rounded-sm"
                        style={{ objectPosition: 'top left' }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={isActive}
                        loading={isActive ? 'eager' : 'lazy'}
                      />
                    </div>
                  </div>
                </div>

                <div 
                  className="absolute inset-0 z-40 rounded-sm border border-white/10"
                  aria-hidden="true"
                />
              </div>
            );
          })}
        </div>
      </div>

      <NavigationButton 
        onClick={handleNext} 
        direction="next" 
        gradientFrom="purple"
        currentIndex={currentIndex}
        totalItems={items.length}
      />
      <NavigationButton 
        onClick={handlePrev} 
        direction="prev" 
        gradientFrom="blue"
        currentIndex={currentIndex}
        totalItems={items.length}
      />

      <div className="sr-only">
        Utilisez les flèches gauche et droite du clavier pour naviguer entre les slides.
        Slide actuel : {currentIndex + 1} sur {items.length}
      </div>
    </div>
  );
} 