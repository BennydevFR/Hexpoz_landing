interface RateLimitConfig {
  interval: number;
  uniqueTokenPerInterval: number;
  maxRequests: number;
}

interface RateLimitStore {
  [key: string]: {
    count: number;
    resetTime: number;
  };
}

const store: RateLimitStore = {};

export function rateLimit(config: RateLimitConfig) {
  const { interval, maxRequests } = config;

  return {
    async check() {
      const now = Date.now();
      const key = Math.floor(now / interval);

      if (!store[key]) {
        store[key] = {
          count: 0,
          resetTime: now + interval,
        };

        // Nettoyage des anciennes entrées
        Object.keys(store).forEach((oldKey) => {
          if (store[oldKey].resetTime < now) {
            delete store[oldKey];
          }
        });
      }

      if (store[key].count >= maxRequests) {
        throw new Error('Rate limit exceeded');
      }

      store[key].count++;
      return true;
    },
  };
} 