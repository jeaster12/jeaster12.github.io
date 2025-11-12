# Modern Portfolio

A sleek, responsive portfolio website built with Astro and Tailwind CSS, deployed at [josheaster.com](https://josheaster.com).

## 🚀 Features

- ⚡ Blazing fast performance with Astro's static site generation
- 🎨 Modern, responsive design with Tailwind CSS
- 🌓 Dark/light mode support
- 📱 Mobile-first, responsive layout
- 📝 Blog functionality with MDX support
- 🖼️ Portfolio showcase with GLightbox gallery
- 📬 Contact form with validation
- 🔍 SEO optimized with dynamic OG image generation
- 🎨 Customizable color schemes and typography
- 📱 Social media integration
- 🎯 Optimized with aggressive code splitting and minification

## 🛠️ Tech Stack

- [Astro](https://astro.build/) - The web framework for content-driven websites
- [Tailwind CSS](https://tailwindcss.com/) - For utility-first styling
- [TypeScript](https://www.typescriptlang.org/) - For type safety
- [MDX](https://mdxjs.com/) - For enhanced markdown content
- [GLightbox](https://biati-digital.github.io/glightbox/) - For image lightbox functionality
- [Astro Icon](https://www.astroicon.dev/) - Icon integration with Iconify
- [Sharp](https://sharp.pixelplumbing.com/) - For image optimization
- [Shiki](https://shiki.matsu.io/) - For syntax highlighting
- [@vercel/og](https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation) - For dynamic OG image generation

## 🚀 Getting Started

### Prerequisites

- Node.js 20.0.0 or higher
- pnpm 10.x (recommended)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/jeaster12/jeaster12.github.io.git
   cd jeaster12.github.io
   git checkout source
   ```

2. Install dependencies:
   ```sh
   pnpm install --frozen-lockfile
   ```

3. Start the development server:
   ```sh
   pnpm dev
   ```

4. Open [http://localhost:4321](http://localhost:4321) in your browser.

## 🏗️ Project Structure

```
/
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions deployment workflow
│
├── public/                   # Static files (favicons, etc.)
│
├── scripts/                  # Build and utility scripts
│
├── src/
│   ├── components/          # Reusable Astro components
│   │   ├── AboutSection.astro
│   │   ├── ContactSection.astro
│   │   ├── ExperienceSection.astro
│   │   ├── Footer.astro
│   │   ├── HeroSection.astro
│   │   ├── Layout.astro
│   │   ├── Navbar.astro
│   │   └── PortfolioSection.astro
│   │
│   ├── content/             # Content collections
│   │   ├── blog/            # Blog posts (MDX)
│   │   └── config.ts        # Content collection schemas
│   │
│   ├── data/                # Site data and configuration
│   │   ├── content.ts       # Main content data
│   │   ├── experience.ts    # Experience/resume data
│   │   ├── portfolio.ts     # Portfolio projects
│   │   └── social.ts        # Social media links
│   │
│   ├── layouts/             # Page layouts
│   │   ├── BaseLayout.astro
│   │   └── BlogLayout.astro
│   │
│   ├── pages/               # Routes and pages
│   │   ├── blog/
│   │   ├── index.astro
│   │   └── og.png.ts        # Dynamic OG image generation
│   │
│   ├── styles/              # Global styles
│   │   └── global.css
│   │
│   └── utils/               # Utility functions
│
├── astro.config.mjs         # Astro configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
├── package.json             # Project dependencies
├── CNAME                    # Custom domain configuration
└── .nojekyll                # Disable Jekyll processing
```

## 🧞 Available Scripts

| Command                       | Action                                           |
| ----------------------------- | ------------------------------------------------ |
| `pnpm install --frozen-lockfile` | Install dependencies                          |
| `pnpm dev`                    | Start development server at `localhost:4321`     |
| `pnpm build`                  | Build for production to `./dist/`                |
| `pnpm preview`                | Preview production build locally                 |
| `pnpm astro ...`              | Run Astro CLI commands                          |
| `pnpm check`                  | Check for TypeScript and Astro errors            |

## 🚢 Deployment

This site uses GitHub Actions for automated deployment to GitHub Pages.

### Deployment Workflow

The site is deployed automatically when you push to the `source` branch:

1. **Source Branch**: All development happens on the `source` branch
2. **Automatic Build**: On push, GitHub Actions runs the build process
3. **Deploy to Master**: The built site is automatically deployed to the `master` branch
4. **GitHub Pages**: Serves the site from the `master` branch at [josheaster.com](https://josheaster.com)

### Deployment Configuration

The deployment is configured in [.github/workflows/deploy.yml](.github/workflows/deploy.yml):

- **Trigger**: Push to `source` branch or manual workflow dispatch
- **Build Tool**: pnpm 10.x with Node.js 20
- **Output**: Builds to `./dist` directory
- **Target**: Deploys to `master` branch
- **Custom Domain**: Configured via CNAME file (josheaster.com)

### Manual Deployment

To manually trigger a deployment:

1. Go to the **Actions** tab in the GitHub repository
2. Select **Deploy AstroPort to GitHub Pages**
3. Click **Run workflow**
4. Choose the `source` branch and run

### Branch Structure

- `source` - Main development branch (make all changes here)
- `master` - Production branch (auto-updated by GitHub Actions, do not modify directly)

## 🎨 Customization

1. **Update Content**:
   - Edit site data in `src/data/` (content.ts, experience.ts, portfolio.ts, social.ts)
   - Add blog posts in `src/content/blog/`
   - Update personal information and sections in component files

2. **Styling**:
   - Customize colors and theme in `tailwind.config.js`
   - Add global styles in `src/styles/global.css`
   - Modify typography using custom font variables

3. **Components**:
   - Modify section components in `src/components/`
   - Update layouts in `src/layouts/`
   - Add new pages in `src/pages/`

## ⚡ Performance Optimizations

This site is optimized for maximum performance:

- **Image Optimization**: Sharp for automatic image processing and optimization
- **Code Splitting**: Manual chunks for vendor code (icons, lightbox)
- **Minification**: Terser with aggressive compression settings
- **CSS Optimization**: Code splitting and inline critical CSS
- **Tree Shaking**: Removes unused code from production builds
- **Static Generation**: All pages pre-rendered at build time for instant loading

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Astro](https://astro.build/)
- Icons by [Iconify](https://iconify.design/)
- Fonts: Nunito Sans, Open Sans, Roboto Mono from [Fontsource](https://fontsource.org/)
