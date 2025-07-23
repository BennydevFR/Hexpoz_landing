import { headers } from 'next/headers';
import './globals.css';
import { HeaderNotch } from "@/components/commons/HeaderNotch";

export const metadata = {
  title: "HEXPOZ - Galeries 3D Révolutionnaires",
  description: "L'expérience révolutionnaire qui redéfinit votre façon d'explorer et de partager vos créations artistiques en 3D.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Récupérer les headers de manière asynchrone
  const headersList = await headers();
  const csrfToken = headersList.get('X-CSRF-Token') || '';

  return (
    <html lang="fr">
      <head>
        <meta name="csrf-token" content={csrfToken} />
      </head>
      <body className="bg-[#1d1d1d] text-white antialiased">
        <HeaderNotch />
        {children}
      </body>
    </html>
  );
}
