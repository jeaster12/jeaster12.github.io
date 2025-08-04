/**
 * Modern TypeScript Lightbox Implementation
 * Replaces jQuery-based lightbox functionality
 */

interface LightboxElements {
  lightbox: HTMLElement;
  image: HTMLImageElement;
  caption: HTMLElement;
  closeButton: HTMLElement;
}

interface LightboxOptions {
  fadeInDuration?: number;
  fadeOutDuration?: number;
  enableKeyboardNavigation?: boolean;
  enableTouchGestures?: boolean;
}

class ModernLightbox {
  private elements: LightboxElements | null = null;
  private options: Required<LightboxOptions>;
  private isOpen: boolean = false;

  constructor(options: LightboxOptions = {}) {
    this.options = {
      fadeInDuration: 300,
      fadeOutDuration: 200,
      enableKeyboardNavigation: true,
      enableTouchGestures: true,
      ...options
    };

    this.init();
  }

  /**
   * Initialize lightbox functionality
   */
  private init(): void {
    this.setupElements();
    this.bindEvents();
  }

  /**
   * Setup required DOM elements
   */
  private setupElements(): void {
    const lightbox = document.getElementById('lightbox') as HTMLElement;
    const image = document.getElementById('lightbox-image') as HTMLImageElement;
    const caption = document.getElementById('lightbox-caption') as HTMLElement;
    const closeButton = document.getElementById('lightbox-close') as HTMLElement;

    if (!lightbox || !image || !caption || !closeButton) {
      console.warn('Lightbox elements not found. Lightbox functionality disabled.');
      return;
    }

    this.elements = { lightbox, image, caption, closeButton };
  }

  /**
   * Bind event listeners
   */
  private bindEvents(): void {
    if (!this.elements) return;

    // Trigger elements
    const triggers = document.querySelectorAll('.lightbox-trigger');
    triggers.forEach(trigger => {
      trigger.addEventListener('click', this.handleTriggerClick.bind(this));
    });

    // Close button
    this.elements.closeButton.addEventListener('click', this.close.bind(this));

    // Overlay click
    this.elements.lightbox.addEventListener('click', this.handleOverlayClick.bind(this));

    // Keyboard navigation
    if (this.options.enableKeyboardNavigation) {
      document.addEventListener('keydown', this.handleKeyDown.bind(this));
    }

    // Touch gestures (basic implementation)
    if (this.options.enableTouchGestures) {
      this.setupTouchGestures();
    }
  }

  /**
   * Handle trigger click events
   */
  private handleTriggerClick(event: Event): void {
    event.preventDefault();
    
    const trigger = event.currentTarget as HTMLElement;
    const img = trigger.querySelector('img') as HTMLImageElement;
    
    if (!img || !this.elements) return;

    this.open({
      src: img.src,
      alt: img.alt || '',
      caption: img.alt || ''
    });
  }

  /**
   * Handle overlay click events
   */
  private handleOverlayClick(event: Event): void {
    if (event.target === this.elements?.lightbox) {
      this.close();
    }
  }

  /**
   * Handle keyboard events
   */
  private handleKeyDown(event: KeyboardEvent): void {
    if (!this.isOpen) return;

    switch (event.key) {
      case 'Escape':
        this.close();
        break;
      // Could extend with arrow keys for gallery navigation
      case 'ArrowLeft':
        // Previous image logic
        break;
      case 'ArrowRight':
        // Next image logic
        break;
    }
  }

  /**
   * Setup touch gestures for mobile
   */
  private setupTouchGestures(): void {
    if (!this.elements) return;

    let startX = 0;
    let startY = 0;
    const threshold = 50;

    const handleTouchStart = (event: TouchEvent): void => {
      startX = event.touches[0].clientX;
      startY = event.touches[0].clientY;
    };

    const handleTouchEnd = (event: TouchEvent): void => {
      if (!event.changedTouches.length) return;

      const endX = event.changedTouches[0].clientX;
      const endY = event.changedTouches[0].clientY;
      
      const deltaX = endX - startX;
      const deltaY = endY - startY;

      // Swipe down to close
      if (Math.abs(deltaY) > Math.abs(deltaX) && deltaY > threshold) {
        this.close();
      }
    };

    this.elements.image.addEventListener('touchstart', handleTouchStart, { passive: true });
    this.elements.image.addEventListener('touchend', handleTouchEnd, { passive: true });
  }

  /**
   * Open lightbox with image data
   */
  public open(imageData: { src: string; alt: string; caption: string }): void {
    if (!this.elements) return;

    this.elements.image.src = imageData.src;
    this.elements.image.alt = imageData.alt;
    this.elements.caption.textContent = imageData.caption;

    // Show lightbox with fade in effect
    this.elements.lightbox.style.display = 'flex';
    this.elements.lightbox.style.opacity = '0';
    
    // Force reflow
    this.elements.lightbox.offsetHeight;
    
    this.elements.lightbox.style.transition = `opacity ${this.options.fadeInDuration}ms ease`;
    this.elements.lightbox.style.opacity = '1';

    // Prevent body scroll
    document.body.style.overflow = 'hidden';
    this.isOpen = true;

    // Trap focus for accessibility
    this.elements.closeButton.focus();
  }

  /**
   * Close lightbox
   */
  public close(): void {
    if (!this.elements || !this.isOpen) return;

    this.elements.lightbox.style.transition = `opacity ${this.options.fadeOutDuration}ms ease`;
    this.elements.lightbox.style.opacity = '0';

    setTimeout(() => {
      if (this.elements) {
        this.elements.lightbox.style.display = 'none';
      }
    }, this.options.fadeOutDuration);

    // Restore body scroll
    document.body.style.overflow = 'auto';
    this.isOpen = false;
  }

  /**
   * Destroy lightbox instance
   */
  public destroy(): void {
    if (!this.elements) return;

    // Remove event listeners
    const triggers = document.querySelectorAll('.lightbox-trigger');
    triggers.forEach(trigger => {
      trigger.removeEventListener('click', this.handleTriggerClick.bind(this));
    });

    this.elements.closeButton.removeEventListener('click', this.close.bind(this));
    this.elements.lightbox.removeEventListener('click', this.handleOverlayClick.bind(this));
    document.removeEventListener('keydown', this.handleKeyDown.bind(this));

    this.elements = null;
    this.isOpen = false;
  }
}

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new ModernLightbox();
});

export { ModernLightbox };
export type { LightboxOptions };
