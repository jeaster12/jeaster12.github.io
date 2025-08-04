/**
 * Global TypeScript definitions for the portfolio
 */

// DOM Elements with specific IDs
interface PortfolioElements {
  lightbox: HTMLElement;
  'lightbox-image': HTMLImageElement;
  'lightbox-caption': HTMLElement;
  'lightbox-close': HTMLElement;
}

// Custom events for the portfolio
interface CustomEventMap {
  'lightbox:open': CustomEvent<{ src: string; alt: string; caption: string }>;
  'lightbox:close': CustomEvent<void>;
  'navigation:scroll': CustomEvent<{ scrollY: number }>;
}

// Extend the Document interface
declare global {
  interface Document {
    addEventListener<K extends keyof CustomEventMap>(
      type: K,
      listener: (this: Document, ev: CustomEventMap[K]) => any,
      options?: boolean | AddEventListenerOptions
    ): void;
    
    removeEventListener<K extends keyof CustomEventMap>(
      type: K,
      listener: (this: Document, ev: CustomEventMap[K]) => any,
      options?: boolean | EventListenerOptions
    ): void;
  }

  // Window interface extensions
  interface Window {
    portfolioNavigation?: any;
    modernLightbox?: any;
  }
}

// Module declarations for assets
declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.jpeg' {
  const content: string;
  export default content;
}

declare module '*.webp' {
  const content: string;
  export default content;
}

// Utility types for portfolio functionality
export type NavigationDirection = 'next' | 'previous';
export type ThemeMode = 'light' | 'dark' | 'auto';
export type DeviceType = 'mobile' | 'tablet' | 'desktop';

export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  images: string[];
  url?: string;
  github?: string;
}

export interface SkillCategory {
  title: string;
  skills: Array<{
    name: string;
    icon: string;
    level?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  }>;
}

export {};
