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
  { href: "/", icon: HomeIcon, label: "Accueil" },
  { href: "/galeries", icon: SquareLibrary, label: "Galeries" },
  { href: "/roadmap", icon: GitCommitVertical, label: "Roadmap" },
  { href: "/contact", icon: MailIcon, label: "Contact" },
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
                "gap-0.5 sm:gap-1 md:gap-2 max-w-[90vw] md:max-w-fit mx-auto",
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
                  <div className="relative w-6 h-6 sm:w-6 sm:h-6 md:w-11 md:h-11 rounded-md sm:rounded-lg md:rounded-xl overflow-hidden bg-gradient-to-br from-blue-500/40 via-purple-500/40 to-pink-500/40 backdrop-blur-sm border border-zinc-600/60 flex items-center justify-center group hover:scale-110 transition-all duration-300 ease-in-out shadow-lg hover:shadow-blue-500/25">
                    <div 
                      className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-pink-400/20 animate-pulse group-hover:animate-none"
                      aria-hidden="true"
                    ></div>
                    <div 
                      className="absolute inset-0 bg-gradient-to-br from-blue-300/15 via-purple-300/15 to-pink-300/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      aria-hidden="true"
                    ></div>
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
                className="flex items-center"
                aria-label="Menu principal"
              >
                {NAVIGATION_ITEMS.map((item, index) => (
                  <DockIcon key={item.label} className="mx-0.5">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link
                          href={item.href}
                          className={cn(
                            "h-6 w-6 sm:h-6 sm:w-6 md:h-10 md:w-10 rounded-md sm:rounded-lg md:rounded-xl flex items-center justify-center group relative",
                            "text-zinc-400 hover:text-white",
                            "bg-zinc-800/20 hover:bg-gradient-to-br hover:from-blue-500/30 hover:via-purple-500/30 hover:to-pink-500/30",
                            "border border-zinc-700/30 hover:border-zinc-600/70",
                            "backdrop-blur-sm transition-all duration-300 ease-in-out",
                            "hover:shadow-lg hover:shadow-blue-500/25",
                            "hover:-translate-y-0.5"
                          )}
                          aria-label={item.label}
                        >
                          <item.icon 
                            className="h-3.5 w-3.5 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 group-hover:scale-110 transition-transform duration-300"
                            aria-hidden="true"
                          />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent 
                        className="bg-zinc-900/95 border-zinc-800 text-zinc-200 font-medium"
                        role="tooltip"
                      >
                        <p>{item.label}</p>
                      </TooltipContent>
                    </Tooltip>
                  </DockIcon>
                ))}
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
                    <button
                      onClick={() => {
                        const waitlistSection = document.getElementById('waitlist');
                        if (waitlistSection) {
                          waitlistSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }}
                      className={cn(
                        "w-6 h-6 sm:w-6 sm:h-6 md:w-10 md:h-10 rounded-md sm:rounded-lg md:rounded-xl flex items-center justify-center group relative",
                        "text-white font-medium",
                        "bg-gradient-to-r from-blue-500/90 via-purple-500/90 to-pink-500/90",
                        "hover:from-blue-500 hover:via-purple-500 hover:to-pink-500",
                        "border border-blue-400/60 hover:border-blue-400/90",
                        "backdrop-blur-sm transition-all duration-300 ease-in-out",
                        "hover:shadow-lg hover:shadow-blue-500/30",
                        "hover:-translate-y-0.5 shadow-md"
                      )}
                      aria-label="Rejoindre la liste d'attente"
                    >
                      <MailIcon 
                        className="h-3.5 w-3.5 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 group-hover:scale-110 transition-transform duration-300"
                        aria-hidden="true"
                      />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent 
                    className="bg-zinc-900/95 border-zinc-800 text-zinc-200 font-medium"
                    role="tooltip"
                  >
                    <p>Rejoindre la liste d'attente</p>
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