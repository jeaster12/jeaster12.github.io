/**
 * Utility functions for the portfolio application
 */

/**
 * Debounce function to limit how often a function can be called
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
  immediate?: boolean
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | undefined;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = undefined;
      if (!immediate) func(...args);
    };

    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) func(...args);
  };
}

/**
 * Throttle function to limit how often a function can be called
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;

  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

/**
 * Get a DOM element by ID with type safety
 */
export function getElementById<T extends HTMLElement = HTMLElement>(
  id: string,
  required: true
): T;
export function getElementById<T extends HTMLElement = HTMLElement>(
  id: string,
  required?: false
): T | null;
export function getElementById<T extends HTMLElement = HTMLElement>(
  id: string,
  required = false
): T | null {
  const element = document.getElementById(id) as T | null;
  
  if (required && !element) {
    throw new Error(`Required element with ID "${id}" not found`);
  }
  
  return element;
}

/**
 * Type-safe query selector
 */
export function querySelector<T extends HTMLElement = HTMLElement>(
  selector: string,
  context: Document | HTMLElement = document,
  required: true
): T;
export function querySelector<T extends HTMLElement = HTMLElement>(
  selector: string,
  context?: Document | HTMLElement,
  required?: false
): T | null;
export function querySelector<T extends HTMLElement = HTMLElement>(
  selector: string,
  context: Document | HTMLElement = document,
  required = false
): T | null {
  const element = context.querySelector(selector) as T | null;
  
  if (required && !element) {
    throw new Error(`Required element with selector "${selector}" not found`);
  }
  
  return element;
}

/**
 * Type-safe query selector all
 */
export function querySelectorAll<T extends HTMLElement = HTMLElement>(
  selector: string,
  context: Document | HTMLElement = document
): NodeListOf<T> {
  return context.querySelectorAll(selector) as NodeListOf<T>;
}

/**
 * Check if element is visible in viewport
 */
export function isElementInViewport(element: HTMLElement): boolean {
  const rect = element.getBoundingClientRect();
  
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

/**
 * Smooth scroll to element
 */
export function scrollToElement(
  element: HTMLElement | string,
  options: ScrollIntoViewOptions = { behavior: 'smooth', block: 'start' }
): void {
  const targetElement = typeof element === 'string' 
    ? querySelector(element) 
    : element;

  if (targetElement) {
    targetElement.scrollIntoView(options);
  }
}

/**
 * Get device type based on screen width
 */
export function getDeviceType(): 'mobile' | 'tablet' | 'desktop' {
  const width = window.innerWidth;
  
  if (width < 768) return 'mobile';
  if (width < 1024) return 'tablet';
  return 'desktop';
}

/**
 * Check if user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Create a custom event
 */
export function createCustomEvent<T = any>(
  type: string,
  detail?: T,
  options: CustomEventInit = {}
): CustomEvent<T> {
  return new CustomEvent(type, {
    detail,
    bubbles: true,
    cancelable: true,
    ...options
  });
}

/**
 * Wait for DOM content to be loaded
 */
export function ready(callback: () => void): void {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', callback);
  } else {
    callback();
  }
}

/**
 * Wait for all images to load
 */
export function imagesLoaded(
  container: HTMLElement | string = document.body
): Promise<void> {
  const containerElement = typeof container === 'string' 
    ? querySelector(container)! 
    : container;

  const images = querySelectorAll<HTMLImageElement>('img', containerElement);
  const promises: Promise<void>[] = [];

  images.forEach(img => {
    if (img.complete) return;
    
    promises.push(
      new Promise((resolve, reject) => {
        img.addEventListener('load', () => resolve());
        img.addEventListener('error', () => reject(new Error(`Failed to load image: ${img.src}`)));
      })
    );
  });

  return Promise.all(promises).then(() => undefined);
}

/**
 * Local storage utility with type safety
 */
export const storage = {
  get<T>(key: string): T | null {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch {
      return null;
    }
  },

  set<T>(key: string, value: T): void {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.warn('Failed to save to localStorage:', error);
    }
  },

  remove(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.warn('Failed to remove from localStorage:', error);
    }
  },

  clear(): void {
    try {
      localStorage.clear();
    } catch (error) {
      console.warn('Failed to clear localStorage:', error);
    }
  }
};
