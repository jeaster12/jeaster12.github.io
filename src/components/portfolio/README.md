# Portfolio Components

This directory contains reusable components specifically designed for portfolio case study pages.

## Components

### Layout
- **PortfolioLayout** - Main layout wrapper for portfolio pages with navigation, hero, and lightbox

### Content Sections
- **ProjectDetails** - Project overview with features and metrics
- **TechStack** - Technical architecture and tools showcase
- **ProcessSection** - Multi-step process explanation with images
- **ContentSection** - Generic content wrapper with optional title
- **BenefitsSection** - Benefits organized by groups (e.g., For Developers, For Designers)

### UI Elements
- **ImageGallery** - Responsive image grid with lightbox functionality
- **FeatureCard** - Individual feature showcase with image and description

## Usage Example

```astro
---
import PortfolioLayout from '../../layouts/PortfolioLayout.astro';
import ProjectDetails from '../../components/portfolio/ProjectDetails.astro';
import TechStack from '../../components/portfolio/TechStack.astro';
import ImageGallery from '../../components/portfolio/ImageGallery.astro';
---

<PortfolioLayout
  title="Project Name - Josh Easter Portfolio"
  description="Project description"
  projectTitle="Project Name"
  projectSubtitle="Project subtitle"
  heroImage="/project-hero.jpg"
  gradientColors="from-blue-400 via-purple-400 to-pink-400"
>
  <ProjectDetails
    title="Project Overview"
    description="Detailed project description..."
    features={[
      { icon: "blue", text: "Feature 1" },
      { icon: "green", text: "Feature 2" }
    ]}
    metrics={[
      { icon: "green", text: "50% improvement" }
    ]}
  >
    <TechStack
      title="Technical Stack"
      categories={[
        {
          title: "Frontend",
          technologies: [
            { name: "React", gradient: "from-blue-500 to-cyan-500" },
            { name: "TypeScript", gradient: "from-yellow-500 to-orange-500" }
          ]
        }
      ]}
    />
  </ProjectDetails>

  <ImageGallery
    title="Gallery"
    images={[
      { src: "/image1.jpg", alt: "Description" },
      { src: "/image2.jpg", alt: "Description" }
    ]}
  />
</PortfolioLayout>
```

## Features

- **Responsive Design** - All components work on mobile and desktop
- **Lightbox Integration** - Images automatically work with the lightbox
- **Consistent Styling** - Matches the overall site design
- **TypeScript Support** - Full type definitions for all props
- **Flexible Layouts** - Components can be composed in different ways
