/*================================================
*
* Table of Contents :
* 1. Page Preloader
* 2. Scroll Spy
* 3. Toggle Menu
* 4. Dark Mode Toggle
* 5. Portfolio Filter
* 6. Lightbox
*
================================================*/
'use strict'


/*===============================================
  2. Active Section on Scroll
===============================================*/
const sections = document.querySelectorAll('.section')
let sectionOffsets = {}
let currentActive = null

function updateSections() {
  sectionOffsets = {}
  sections.forEach(section => {
    if (section.id) {
      sectionOffsets[section.id] = section.offsetTop
    }
  })
}

// Initialize and update on window resize
updateSections()
window.addEventListener('resize', updateSections, { passive: true })

// Throttle scroll event for better performance
let isScrolling
window.addEventListener('scroll', () => {
  window.clearTimeout(isScrolling)
  isScrolling = setTimeout(() => {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop
    const viewportHeight = window.innerHeight
    const documentHeight = document.documentElement.scrollHeight
    let newActive = null

    // Check if we're near the bottom of the page (within 200px)
    const isNearBottom = scrollPosition + viewportHeight >= documentHeight - 200

    // Find the current active section
    for (const [id, offset] of Object.entries(sectionOffsets)) {
      // Use a larger offset for sections or when near the bottom
      const threshold = isNearBottom ? viewportHeight / 2 : 100
      if (offset <= scrollPosition + threshold) {
        newActive = id
      }
    }

    // Update active state if changed
    if (newActive && newActive !== currentActive) {
      currentActive = newActive

      // Update active navigation link
      const activeLink = document.querySelector('.section-link.active')
      if (activeLink) {
        activeLink.classList.remove('active')
      }

      const newActiveLink = document.querySelector(`.section-link[href*="${CSS.escape(newActive)}"]`)
      if (newActiveLink) {
        newActiveLink.classList.add('active')
      }
    }
  }, 50)
}, { passive: true })

/*===============================================
  3. Toggle Menu
===============================================*/
const toggleMenu = document.querySelector('.toggle-menu')

if (toggleMenu) {
  const menuBtn = document.querySelector('.menu-btn')
  const menuClose = document.querySelector('.menu-close')

  // Toggle menu open/close
  if (menuBtn) {
    menuBtn.addEventListener('click', e => {
      e.stopPropagation()
      toggleMenu.classList.toggle('show')
    })
  }

  // Close menu when clicking close button
  if (menuClose) {
    menuClose.addEventListener('click', () => {
      toggleMenu.classList.remove('show')
    })
  }

  // Close menu when clicking outside or on a navigation link
  document.addEventListener('click', e => {
    if (!e.target.closest('.toggle-menu') && !e.target.closest('.menu-btn')) {
      toggleMenu.classList.remove('show')
    }
  })

  // Close menu when clicking on a navigation link
  const navLinks = document.querySelectorAll('.toggle-menu .nav-link')
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggleMenu.classList.remove('show')
    })
  })
}

/*===============================================
  4. Dark Mode Toggle
===============================================*/
// Store handler to allow proper cleanup
let themeToggleHandlers = new WeakMap()

function handleThemeToggle() {
  const html = document.documentElement

  if (html.classList.contains('dark')) {
    html.classList.remove('dark')
    localStorage.theme = 'light'
  } else {
    html.classList.add('dark')
    localStorage.theme = 'dark'
  }
}

function setupDarkModeToggle() {
  const toggleButtons = document.querySelectorAll('#header-theme-toggle, #theme-toggle')

  toggleButtons.forEach(button => {
    // Remove old listener if exists
    const oldHandler = themeToggleHandlers.get(button)
    if (oldHandler) {
      button.removeEventListener('click', oldHandler)
    }

    // Store and add new listener
    themeToggleHandlers.set(button, handleThemeToggle)
    button.addEventListener('click', handleThemeToggle)
  })
}

// Initialize dark mode toggle buttons
document.addEventListener('DOMContentLoaded', setupDarkModeToggle)
document.addEventListener('astro:page-load', setupDarkModeToggle)

// Cleanup before page swap
document.addEventListener('astro:before-swap', () => {
  const toggleButtons = document.querySelectorAll('#header-theme-toggle, #theme-toggle')
  toggleButtons.forEach(button => {
    const handler = themeToggleHandlers.get(button)
    if (handler) {
      button.removeEventListener('click', handler)
      themeToggleHandlers.delete(button)
    }
  })
})
