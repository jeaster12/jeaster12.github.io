# AstroPort - Modern Portfolio Template

A sleek, responsive portfolio website built with Astro, React, and Tailwind CSS. This template is designed to showcase your work, skills, and experience in a clean and professional manner.

![AstroPort Preview](https://via.placeholder.com/1200x630/1e293b/ffffff?text=AstroPort+Preview)

Undo Push

## 🚀 Features

- ⚡ Blazing fast performance with Astro's static site generation
- 🎨 Modern, responsive design with Tailwind CSS
- 🌓 Dark/light mode support
- 📱 Mobile-first, responsive layout
- 📝 Blog functionality with MDX support
- 🖼️ Portfolio showcase with filtering
- 📬 Contact form with form validation
- 🔍 SEO optimized
- 🎨 Customizable color schemes
- 📱 Social media integration
- ⚛️ React components where needed

## 🛠️ Tech Stack

- [Astro](https://astro.build/) - The web framework for content-driven websites
- [React](https://reactjs.org/) - For interactive UI components
- [Tailwind CSS](https://tailwindcss.com/) - For utility-first styling
- [TypeScript](https://www.typescriptlang.org/) - For type safety
- [GSAP](https://greensock.com/gsap/) - For smooth animations
- [PhotoSwipe](https://photoswipe.com/) - For image lightbox functionality
- [Iconify](https://iconify.design/) - For beautiful icons

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- pnpm (recommended) or npm/yarn

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/astro-portfolio.git
   cd astro-portfolio
   ```

2. Install dependencies:
   ```sh
   pnpm install
   ```

3. Start the development server:
   ```sh
   pnpm dev
   ```

4. Open [http://localhost:4321](http://localhost:4321) in your browser.

## 🏗️ Project Structure

```
/
├── public/               # Static files
│   └── assets/           # Global assets (images, fonts, etc.)
│       └── images/       # Global images
│
├── src/
│   ├── assets/           # Static assets (processed by Vite)
│   │   └── images/       # Component-specific images
│   │
│   ├── components/       # Reusable components
│   │   ├── Blog/        # Blog-related components
│   │   ├── Layout/      # Layout components
│   │   └── Sections/    # Page sections
│   │
│   ├── content/         # Content collections (blog posts, portfolio items)
│   │   ├── blog/       # Blog posts
│   │   └── portfolio/  # Portfolio items
│   │
│   ├── data/            # Data files
│   ├── layouts/         # Page layouts
│   └── pages/           # Application routes and pages
│
├── astro.config.mjs     # Astro configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Project dependencies
```

## 🧞 Available Scripts

| Command             | Action                                           |
| ------------------- | ------------------------------------------------ |
| `pnpm install`      | Install dependencies                             |
| `pnpm dev`          | Start development server at `localhost:4321`     |
| `pnpm build`        | Build for production to `./dist/`                |
| `pnpm preview`      | Preview production build locally                 |
| `pnpm astro ...`    | Run Astro CLI commands                          |
| `pnpm check`        | Check for TypeScript and Astro errors            |

## 🎨 Customization

1. **Update Content**:
   - Edit files in `src/content/` to modify blog posts and portfolio items
   - Update site metadata in `src/data/content.ts`

2. **Styling**:
   - Customize colors in `tailwind.config.js`
   - Add custom styles in `src/styles/global.css`

3. **Components**:
   - Modify components in `src/components/`
   - Update layouts in `src/layouts/`

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Astro](https://astro.build/)
- Icons by [Iconify](https://iconify.design/)
- Fonts from [Google Fonts](https://fonts.google.com/)
