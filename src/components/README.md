# Portfolio Components Architecture

This directory contains the component-based architecture for Josh Easter's portfolio site, built with Astro.

## Directory Structure

```
src/components/
├── sections/           # Page sections
│   ├── Hero.astro     # Home/landing section
│   ├── About.astro    # About section
│   ├── Skills.astro   # Skills & technologies
│   ├── Experience.astro # Work experience
│   ├── Portfolio.astro # Featured projects
│   └── Contact.astro  # Contact information
├── ui/                # Reusable UI components
│   ├── Button.astro   # Button component with variants
│   ├── IconButton.astro # Button with icon
│   ├── Card.astro     # Card container component
│   └─��� Badge.astro    # Badge/tag component
└── README.md          # This file
```

## Component Usage

### Layout Components

#### BaseLayout
```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout 
  title="Page Title"
  description="Page description for SEO"
  image="/optional-og-image.jpg"
>
  <!-- Page content -->
</BaseLayout>
```

### UI Components

#### Button
```astro
---
import Button from '../components/ui/Button.astro';
---

<!-- Primary button -->
<Button variant="primary" size="lg" href="/contact">
  Get In Touch
</Button>

<!-- Secondary button -->
<Button variant="secondary" href="#portfolio">
  View Work
</Button>

<!-- Outline button -->
<Button variant="outline" size="sm">
  Learn More
</Button>
```

#### IconButton
```astro
---
import IconButton from '../components/ui/IconButton.astro';
---

<IconButton 
  icon="lucide:external-link" 
  href="https://example.com" 
  target="_blank"
  variant="outline"
>
  Visit Site
</IconButton>
```

#### Card
```astro
---
import Card from '../components/ui/Card.astro';
---

<Card variant="bordered" padding="lg">
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</Card>
```

#### Badge
```astro
---
import Badge from '../components/ui/Badge.astro';
---

<Badge variant="primary">React</Badge>
<Badge variant="secondary">TypeScript</Badge>
<Badge variant="success">Completed</Badge>
```

### Section Components

Each section component is self-contained and includes its own styling and logic:

- **Hero**: Landing section with CTA buttons and profile image
- **About**: Personal story, stats, and key strengths
- **Skills**: Technology icons and capabilities
- **Experience**: Professional timeline
- **Portfolio**: Featured projects with case study links
- **Contact**: Contact information and CTA

## Design System

### Color Palette
- **Primary**: Blue to Purple gradient (`from-blue-600 to-purple-600`)
- **Secondary**: Purple to Pink gradient (`from-purple-600 to-pink-600`)
- **Success**: Green variants (`green-400`, `green-600`)
- **Warning**: Yellow variants (`yellow-400`, `yellow-600`)
- **Error**: Red variants (`red-400`, `red-600`)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: Font weights 600-700
- **Body**: Font weight 400
- **Labels**: Font weight 500

### Spacing
- **Sections**: `py-20` (80px vertical padding)
- **Cards**: `p-6` or `p-8` (24px or 32px padding)
- **Gaps**: `gap-4`, `gap-6`, `gap-8` (16px, 24px, 32px)

### Responsive Design
- **Mobile**: Default styles
- **Tablet**: `md:` breakpoint (768px+)
- **Desktop**: `lg:` breakpoint (1024px+)

## Best Practices

1. **Component Reusability**: All UI components accept props for customization
2. **TypeScript**: Full type safety with interface definitions
3. **Accessibility**: ARIA labels, focus management, and semantic HTML
4. **Performance**: Optimized images, lazy loading, and minimal JavaScript
5. **SEO**: Proper meta tags, semantic structure, and Open Graph data

## Adding New Components

When creating new components:

1. Define TypeScript interfaces for props
2. Use Tailwind CSS for styling
3. Include appropriate ARIA attributes
4. Add JSDoc comments for documentation
5. Export types for external use

Example component structure:
```astro
---
export interface Props {
  variant?: 'default' | 'primary';
  size?: 'sm' | 'md' | 'lg';
  class?: string;
}

const { 
  variant = 'default',
  size = 'md',
  class: className = '',
  ...rest 
} = Astro.props;

// Component logic here
---

<element class={computedClasses} {...rest}>
  <slot />
</element>
```
