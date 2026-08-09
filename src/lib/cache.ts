// src/lib/cache.ts
import { setTimeout } from 'timers';
import { PasswordGenerator } from './passwordGenerator';

interface CacheItem {
  value: string;
  expiresAt: number;
}

class Cache {
  private cache: { [key: string]: CacheItem } = {};
  private ttl: number;

  constructor(ttl: number) {
    this.ttl = ttl;
  }

  get(key: string): string | undefined {
    const item = this.cache[key];
    if (item && item.expiresAt > Date.now()) {
      return item.value;
    }
    delete this.cache[key];
    return undefined;
  }

  set(key: string, value: string): void {
    this.cache[key] = {
      value,
      expiresAt: Date.now() + this.ttl,
    };
  }

  clear(): void {
    this.cache = {};
  }
}

const passwordCache = new Cache(60 * 1000); // 1 minute TTL

export function getCachedPassword(length: number, options: any): string | undefined {
  const key = `password-${length}-${JSON.stringify(options)}`;
  return passwordCache.get(key);
}

export function cachePassword(length: number, options: any, password: string): void {
  const key = `password-${length}-${JSON.stringify(options)}`;
  passwordCache.set(key, password);
}

export function clearPasswordCache(): void {
  passwordCache.clear();
}

// Example usage:
// const password = PasswordGenerator.generate(12, { uppercase: true, numbers: true });
// cachePassword(12, { uppercase: true, numbers: true }, password);
// const cachedPassword = getCachedPassword(12, { uppercase: true, numbers: true });