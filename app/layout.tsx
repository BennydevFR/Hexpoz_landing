import type { Metadata } from "next";
import "./globals.css";
import { HeaderNotch } from "@/components/commons/HeaderNotch";

export const metadata: Metadata = {
  title: "HEXPOZ - Galeries 3D Révolutionnaires",
  description: "L'expérience révolutionnaire qui redéfinit votre façon d'explorer et de partager vos créations artistiques en 3D.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="bg-[#1d1d1d] text-white antialiased">
        <HeaderNotch />
        {children}
      </body>
    </html>
  );
}
