import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { createCsrfMiddleware } from '@edge-csrf/nextjs';

// Configuration du middleware CSRF
const csrfMiddleware = createCsrfMiddleware({
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax', // Plus permissif que 'strict' pour une meilleure UX
    path: '/',
    httpOnly: true
  },
  // Ignorer les routes qui ne nécessitent pas de protection CSRF
  excludePathPrefixes: [
    '/_next/',
    '/api/health', // Si vous avez des endpoints de santé
    '/favicon.ico',
  ],
  // Méthodes qui ne nécessitent pas de vérification CSRF
  ignoreMethods: ['GET', 'HEAD', 'OPTIONS'],
  // Nom du token dans le header
  token: {
    responseHeader: 'X-CSRF-Token'
  }
});

// Configuration du rate limiting
const rateLimit = {
  tokensByIP: new Map<string, { count: number; resetTime: number }>(),
  interval: 60 * 1000, // 1 minute
  maxRequests: 5 // 5 requêtes par minute
};

// Middleware principal
export async function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Rate limiting
  const clientIP = request.headers.get('x-forwarded-for') || 
                  request.headers.get('x-real-ip') || 
                  'unknown';
  const now = Date.now();
  const tokenData = rateLimit.tokensByIP.get(clientIP) || { count: 0, resetTime: now + rateLimit.interval };

  if (now > tokenData.resetTime) {
    // Réinitialiser le compteur si l'intervalle est dépassé
    tokenData.count = 0;
    tokenData.resetTime = now + rateLimit.interval;
  }

  if (tokenData.count >= rateLimit.maxRequests) {
    return new NextResponse('Too Many Requests', { status: 429 });
  }

  tokenData.count++;
  rateLimit.tokensByIP.set(clientIP, tokenData);

  // Nettoyer les anciennes entrées
  for (const [storedIp, data] of rateLimit.tokensByIP.entries()) {
    if (now > data.resetTime) {
      rateLimit.tokensByIP.delete(storedIp);
    }
  }

  try {
    // Appliquer la protection CSRF
    return await csrfMiddleware(request);
  } catch (error) {
    console.error('CSRF Error:', error);
    return new NextResponse('Invalid CSRF Token', { status: 403 });
  }
}

// Configuration des chemins où le middleware sera actif
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * 1. /_next/ (Next.js internals)
     * 2. /api/health (health check endpoints)
     * 3. /favicon.ico, /sitemap.xml (static files)
     */
    '/((?!_next|api/health|favicon.ico|sitemap.xml).*)',
  ],
}; 