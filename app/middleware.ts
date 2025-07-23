import { createCsrfMiddleware } from '@edge-csrf/nextjs';

// Initialisation du middleware CSRF
const csrfMiddleware = createCsrfMiddleware({
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    httpOnly: true
  }
});

export const middleware = csrfMiddleware; 