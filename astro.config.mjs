// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';
import path from 'path';

// https://astro.build/config
export default defineConfig({
  base: process.env.BASE_PATH || '/',
  integrations: [
    tailwind({
      configFile: './tailwind.config.js',
      applyBaseStyles: false
    }),
    icon({
      include: {
        'logos': ['*'],
        'line-md': ['*']
      }
    }),
    mdx()
  ],
  // Image optimization configuration
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    },
    // Optimize images more aggressively for LCP
    remotePatterns: [],
    domains: []
  },
  // Ensure favicon files are copied to the build output
  publicDir: 'public',
  build: {
    assets: 'assets',
    inlineStylesheets: 'auto' // Inline small CSS for better performance
  },
  vite: {
    resolve: {
      alias: {
      '@': path.resolve('./src'),
      '@components': path.resolve('./src/components'),
      '@assets': path.resolve('./src/assets'),
      '@data': path.resolve('./src/data'),
      '@layouts': path.resolve('./src/layouts'),
      '@pages': path.resolve('./src/pages'),
      '@utils': path.resolve('./src/utils')
      }
    },
    build: {
      // Enable CSS code splitting for better caching
      cssCodeSplit: true,
      // Use terser for better minification
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true, // Remove console.logs in production
          drop_debugger: true,
          pure_funcs: ['console.log', 'console.info', 'console.debug']
        },
        format: {
          comments: false // Remove comments
        }
      },
      // Chunk strategy for better code splitting
      rollupOptions: {
        output: {
          manualChunks: {
            // Vendor chunk for large dependencies
            'vendor-icons': ['astro-icon'],
            'vendor-lightbox': ['glightbox']
          }
        }
      },
      // Increase chunk size warning limit (default is 500kb)
      chunkSizeWarningLimit: 600
    },
    // Optimize dependencies
    optimizeDeps: {
      include: ['glightbox'],
      exclude: []
    }
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark', // Default theme
      themes: {
        light: 'github-light',
        dark: 'github-dark'
      }
    }
  }
});
