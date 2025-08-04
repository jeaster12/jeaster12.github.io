// Main TypeScript file for portfolio functionality

import {
  throttle,
  querySelector,
  querySelectorAll,
  scrollToElement,
  ready,
  prefersReducedMotion
} from './utils.js';

interface NavigationOptions {
  behavior: 'smooth' | 'auto';
  block: 'start' | 'center' | 'end' | 'nearest';
}

class PortfolioNavigation {
  private readonly navigationElement: HTMLElement | null;
  private readonly scrollThreshold: number = 100;
  private readonly throttledScrollHandler: () => void;

  constructor() {
    this.navigationElement = querySelector('nav');
    this.throttledScrollHandler = throttle(this.updateNavigation.bind(this), 16); // ~60fps
    this.init();
  }

  private init(): void {
    this.setupSmoothScrolling();
    this.setupScrollEffects();
    this.setupLightbox();
  }

  /**
   * Setup smooth scrolling for navigation links
   */
  private setupSmoothScrolling(): void {
    const anchors = querySelectorAll<HTMLAnchorElement>('a[href^="#"]');

    anchors.forEach((anchor) => {
      anchor.addEventListener('click', this.handleAnchorClick.bind(this));
    });
  }

  /**
   * Handle anchor click events for smooth scrolling
   */
  private handleAnchorClick(event: Event): void {
    event.preventDefault();

    const target = event.target as HTMLAnchorElement;
    const href = target.getAttribute('href');

    if (!href) return;

    // Use utility function for smooth scrolling
    const options: ScrollIntoViewOptions = {
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
      block: 'start'
    };

    scrollToElement(href, options);
  }

  /**
   * Setup scroll effects for navigation
   */
  private setupScrollEffects(): void {
    window.addEventListener('scroll', this.throttledScrollHandler, { passive: true });
  }

  /**
   * Update navigation appearance based on scroll position
   */
  private updateNavigation(): void {
    if (!this.navigationElement) return;

    if (window.scrollY > this.scrollThreshold) {
      this.navigationElement.classList.add('bg-slate-900/98');
    } else {
      this.navigationElement.classList.remove('bg-slate-900/98');
    }
  }

  /**
   * Setup lightbox functionality for images
   */
  private setupLightbox(): void {
    const lightboxTriggers = document.querySelectorAll('.lightbox-trigger');
    const lightbox = document.getElementById('lightbox') as HTMLElement;
    const lightboxImage = document.getElementById('lightbox-image') as HTMLImageElement;
    const lightboxCaption = document.getElementById('lightbox-caption') as HTMLElement;
    const lightboxClose = document.getElementById('lightbox-close') as HTMLElement;

    if (!lightbox || !lightboxImage || !lightboxCaption || !lightboxClose) {
      return; // Lightbox elements not found
    }

    // Add click listeners to lightbox triggers
    lightboxTriggers.forEach((trigger: Element) => {
      trigger.addEventListener('click', () => this.openLightbox(trigger, lightbox, lightboxImage, lightboxCaption));
    });

    // Close lightbox event listeners
    lightboxClose.addEventListener('click', () => this.closeLightbox(lightbox));
    
    lightbox.addEventListener('click', (event: Event) => {
      if (event.target === lightbox) {
        this.closeLightbox(lightbox);
      }
    });

    // Keyboard support
    document.addEventListener('keydown', (event: KeyboardEvent) => {
      if (event.key === 'Escape' && lightbox.style.display === 'flex') {
        this.closeLightbox(lightbox);
      }
    });
  }

  /**
   * Open lightbox with image
   */
  private openLightbox(
    trigger: Element, 
    lightbox: HTMLElement, 
    lightboxImage: HTMLImageElement, 
    lightboxCaption: HTMLElement
  ): void {
    const img = trigger.querySelector('img') as HTMLImageElement;
    
    if (!img) return;

    lightboxImage.src = img.src;
    lightboxImage.alt = img.alt;
    lightboxCaption.textContent = img.alt;
    
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  /**
   * Close lightbox
   */
  private closeLightbox(lightbox: HTMLElement): void {
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new PortfolioNavigation();
});

// Type augmentation for better TypeScript support
declare global {
  interface Window {
    PortfolioNavigation: typeof PortfolioNavigation;
  }
}

export { PortfolioNavigation };
