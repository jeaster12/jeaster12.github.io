/**
 * Utility function to run initialization code on both initial page load and Astro page transitions.
 *
 * Handles three scenarios:
 * 1. Initial page load (DOMContentLoaded)
 * 2. Astro view transitions (astro:page-load)
 * 3. Already loaded DOM (executes immediately)
 *
 * @param callback - The initialization function to run
 *
 * @example
 * ```ts
 * import { onPageLoad } from '@/utils/onPageLoad';
 *
 * function init() {
 *   console.log('Initializing component...');
 * }
 *
 * onPageLoad(init);
 * ```
 */
export function onPageLoad(callback: () => void): void {
  // If DOM is still loading, wait for DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', callback);
  } else {
    // DOM is already loaded, execute immediately
    callback();
  }

  // Also listen for Astro page transitions (View Transitions API)
  document.addEventListener('astro:page-load', callback);
}
