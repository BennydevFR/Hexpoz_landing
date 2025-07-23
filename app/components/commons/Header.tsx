"use client";

import React, { useState, useEffect } from "react";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { HomeIcon, MailIcon, GithubIcon, LinkedinIcon, GitCommitVertical, SearchIcon, SquareLibrary, UserIcon, LogOutIcon, LayoutDashboardIcon, PlusCircleIcon, SettingsIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const NAVIGATION_ITEMS = [
  { label: "H" },
  { label: "E" },
  { label: "X" },
  { label: "P" },
  { label: "O" },
  { label: "Z" },
];

const VISITOR_MENU_ITEMS = [
  { href: "/visitor/profile", label: "Mon Profil", icon: UserIcon },
  { href: "/visitor/favorites", label: "Favoris", icon: HomeIcon },
  { href: "/visitor/collections", label: "Collections", icon: SquareLibrary },
  { href: "/visitor/notifications", label: "Notifications", icon: MailIcon },
  { href: "/visitor/settings", label: "Paramètres", icon: SettingsIcon },
];

const CREATOR_MENU_ITEMS = [
  { href: "/creator/dashboard", label: "Dashboard", icon: LayoutDashboardIcon },
  { href: "/creator/profile", label: "Mon Profil", icon: UserIcon },
  { href: "/creator/editor", label: "Créer une galerie", icon: PlusCircleIcon },
  { href: "/creator/settings", label: "Paramètres", icon: SettingsIcon },
];

type MenuItem = {
  href: string;
  label: string;
  icon: React.ForwardRefExoticComponent<any>;
  action?: () => void;
};

export function Header() {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [accountType, setAccountType] = useState<'visitor' | 'creator'>('visitor');
  const [syncAttempted, setSyncAttempted] = useState(false);

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed left-0 right-0 z-30 flex justify-center p-0 transition-all duration-500 ease-out ${
          isScrolled 
            ? '-top-[1.6rem] sm:-top-[1.35rem] md:-top-[1.55rem]' 
            : '-top-[2rem] sm:-top-[2rem] md:-top-[2rem]'
        }`}
        role="banner"
      >
        <div 
          className="relative flex items-center justify-between w-full max-w-7xl px-2 sm:px-2 md:px-4 z-50"
          role="navigation"
          aria-label="Navigation principale"
        >
          <TooltipProvider>
            <Dock 
              data-dock="true"
              data-header-dock="true"
              className={cn(
                "transition-all duration-500 ease-in-out flex items-center dock-element",
                "bg-zinc-900/60 backdrop-blur-lg",
                "h-10 md:h-16",
                "px-1 sm:px-2 md:px-4",
                "border border-zinc-800/80 pointer-events-auto shadow-2xl",
                "gap-0.5 sm:gap-1 md:gap-2",
                "min-w-[20rem] sm:min-w-[22rem] md:min-w-[25rem] hover:min-w-[22rem] sm:hover:min-w-[24rem] md:hover:min-w-[27rem]",
                isScrolled 
                  ? "border-t-zinc-700/70 border-t rounded-lg sm:rounded-xl md:rounded-2xl" 
                  : "border-t-transparent rounded-t-none rounded-b-lg sm:rounded-b-xl md:rounded-b-2xl",
              )}
            >
              {/* Logo */}
              <DockIcon className="mr-0.5 sm:mr-1 md:mr-2">
                <Link 
                  href="/" 
                  className="relative z-60"
                  aria-label="Retour à l'accueil"
                >
                  <div className="relative w-6 h-6 sm:w-6 sm:h-6 md:w-11 md:h-11 rounded-md sm:rounded-lg md:rounded-xl overflow-hidden bg-gradient-to-r from-zinc-900/90 via-zinc-800/90 to-zinc-900/90 backdrop-blur-sm border border-zinc-700/50 flex items-center justify-center group hover:scale-110 transition-all duration-300 ease-in-out shadow-lg">
                    <Image 
                      src="/logo2.svg" 
                      alt="Logo HEXPOZ" 
                      width={14} 
                      height={14} 
                      className="relative z-10 group-hover:scale-110 transition-transform duration-300 sm:w-4 sm:h-4 md:w-6 md:h-6" 
                    />
                  </div>
                </Link>
              </DockIcon>

              {/* Séparateur */}
              <DockIcon className="mx-0.5 sm:mx-1 md:mx-1">
                <Separator 
                  orientation="vertical" 
                  className="h-4 sm:h-4 md:h-6 bg-zinc-700/60 shadow-sm"
                  aria-hidden="true"
                />
              </DockIcon>

              {/* Navigation Items */}
              <nav 
                className="flex items-center justify-center flex-1 h-full"
                aria-label="Menu principal"
              >
                <DockIcon>
                  <div
                    className={cn(
                      "flex items-center justify-between group h-6 md:h-8",
                      "transition-all duration-300 ease-in-out",
                      "hover:-translate-y-0.5",
                      "bg-gradient-to-r from-zinc-900/90 via-zinc-800/90 to-zinc-900/90",
                      "border border-zinc-700/50",
                      "backdrop-blur-md",
                      "px-3 py-0.5",
                      "rounded-lg",
                      "w-[15rem] sm:w-[17rem] md:w-[20rem]"
                    )}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                      <span className={cn(
                        "text-[0.65rem] sm:text-xs font-medium tracking-wide whitespace-nowrap",
                        "bg-gradient-to-b from-white via-zinc-100 to-zinc-300 text-transparent bg-clip-text"
                      )}>
                        Bêta prévue fin 2025
                      </span>
                    </div>
                    <div className="hidden sm:flex items-center whitespace-nowrap">
                      <span className="text-[0.65rem] text-zinc-500 mx-1.5">•</span>
                      <span className="text-[0.6rem] text-zinc-400">
                        En développement
                      </span>
                    </div>
                  </div>
                </DockIcon>
              </nav>

              {/* Séparateur */}
              <DockIcon className="mx-0.5 sm:mx-1 md:mx-1">
                <Separator 
                  orientation="vertical" 
                  className="h-4 sm:h-4 md:h-6 bg-zinc-700/60 shadow-sm"
                  aria-hidden="true"
                />
              </DockIcon>
              
              {/* CTA Button */}
              <DockIcon className="ml-0.5">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href="/contact"
                      className={cn(
                        "w-6 h-6 sm:w-6 sm:h-6 md:w-10 md:h-10 rounded-md sm:rounded-lg md:rounded-xl flex items-center justify-center group relative",
                        "text-white font-medium",
                        "bg-gradient-to-r from-zinc-900/90 via-zinc-800/90 to-zinc-900/90",
                        "border border-zinc-700/50",
                        "backdrop-blur-sm transition-all duration-300 ease-in-out",
                        "hover:shadow-lg",
                        "hover:-translate-y-0.5 shadow-md"
                      )}
                      aria-label="Nous contacter"
                    >
                      <MailIcon 
                        className="h-3.5 w-3.5 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 group-hover:scale-110 transition-transform duration-300"
                        aria-hidden="true"
                      />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent 
                    className="bg-zinc-900/95 border-zinc-800 text-zinc-200 font-medium"
                    role="tooltip"
                  >
                    <p>Nous contacter</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            </Dock>
          </TooltipProvider>
        </div>
      </header>
    </>
  );
}  