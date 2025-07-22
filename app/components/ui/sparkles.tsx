"use client";
import React, { useId, useMemo } from "react";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, SingleOrMultiple } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";

type ParticlesProps = {
  id?: string;
  className?: string;
  background?: string;
  particleSize?: number;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
  disableInteractions?: boolean;
  blurMode?: boolean; // Nouveau mode pour grosses particules floutées
};

export const SparklesCore = (props: ParticlesProps) => {
  const {
    id,
    className,
    background,
    minSize,
    maxSize,
    speed,
    particleColor,
    particleDensity,
    disableInteractions,
    blurMode,
  } = props;
  const [init, setInit] = useState(false);
  
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  
  const controls = useAnimation();

  const particlesLoaded = async (container?: Container) => {
    if (container) {
      controls.start({
        opacity: 1,
        transition: {
          duration: 1,
        },
      });
    }
  };

  const generatedId = useId();
  
  return (
    <motion.div animate={controls} className={cn("opacity-0", className)}>
      {init && (
        <Particles
          id={id || generatedId}
          className={cn("h-full w-full")}
          particlesLoaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: background || "transparent",
              },
            },
            fullScreen: {
              enable: false,
              zIndex: 1,
            },
            fpsLimit: 120,
            interactivity: disableInteractions ? {
              detectsOn: "canvas",
              events: {
                onClick: { enable: false },
                onHover: { enable: false },
                resize: { enable: false } as any
              }
            } : {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "attract",
                },
                resize: true as any,
              },
              modes: {
                push: {
                  quantity: 10,
                },
                attract: {
                  distance: 200,
                  duration: 0.4,
                  factor: 5,
                },
              },
            },
            particles: {
              bounce: {
                horizontal: {
                  value: 1,
                },
                vertical: {
                  value: 1,
                },
              },
              collisions: {
                enable: false,
              },
              color: {
                value: blurMode ? [
                  "#6366F1", // Indigo doux
                  "#8B5CF6", // Violet doux
                  "#F472B6", // Rose doux
                  "#FBBF24", // Amber doux
                  "#34D399", // Emerald doux
                  "#60A5FA", // Bleu doux
                  "#C084FC", // Purple doux
                  "#FB7185", // Rose-rouge doux
                ] : [
                  "#FF0080", // Rose flash
                  "#00FFFF", // Cyan
                  "#FF6400", // Orange
                  "#8000FF", // Violet
                  "#FFFF00", // Jaune
                  "#FF3366", // Rose-rouge
                  "#00FF80", // Vert flash
                  "#FF8000", // Orange vif
                  "#8080FF", // Bleu-violet
                  "#FF0040", // Rouge-rose
                ],
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: blurMode ? "bounce" : "out",
                },
                random: true,
                speed: blurMode ? {
                  min: speed ? speed * 0.2 : 0.1,
                  max: speed || 0.5,
                } : {
                  min: speed ? speed * 0.5 : 0.5,
                  max: speed || 2,
                },
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  width: 400,
                  height: 400,
                },
                value: blurMode ? (particleDensity || 20) : (particleDensity || 300), // Moins de particules en mode blur
              },
              opacity: {
                value: blurMode ? {
                  min: 0.2,
                  max: 0.6,
                } : {
                  min: 0.3,
                  max: 1,
                },
                animation: {
                  enable: true,
                  speed: speed || (blurMode ? 1 : 3),
                  sync: false,
                },
              },
              shape: {
                type: "circle",
              },
              size: {
                value: blurMode ? {
                  min: minSize || 40,
                  max: maxSize || 120,
                } : {
                  min: minSize || 0.5,
                  max: maxSize || 3,
                },
                animation: {
                  enable: true,
                  speed: blurMode ? 0.5 : 2,
                  sync: false,
                },
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </motion.div>
  );
}; 