export const mainContent = {
  About: {
    avatar: '/assets/images/new.webp',
    textType: ["Hi, I'm Josh", 'Husband & Father', 'Musician', 'Tech Nerd', 'Huge Baseball Fan!'],
    header: 'Multidisciplinary Leader<br /> Engineering • UX • Product',
    subtitle: 'About Me',
    description: 'Passionate about human-centered design, scalable UX/UI architecture, and inclusive cross-functional leadership. Proven success in improving usability, accessibility, performance, and design consistency across digital products.'
  },
  Experience: {
    title: 'Professional Journey',
    subtitle: 'Experience',
    description:
      'Demonstrated ability to deliver <strong>excellent results</strong> while leading a <strong>multidiscipline team</strong> with engineers, developers, designers, analysts, and marketing personnel. Ability to work independently, with <strong>good organizational skills</strong> and the adaptability to work on <strong>multiple projects</strong> with <strong>exceptional attention to detail</strong>.',
    items: [
      {
        company: 'ADP, Automatic Data Processing, Inc.',
        shortName: 'ADP',
        role: 'Senior Director of Engineering',
        period: 'April 2023 - Present',
        logo: '/assets/images/adp_logo.svg',
        description: "Led the UX Design System Engineering teams, managing a multidisciplinary team of designers, developers, and QA to deliver cohesive, high-impact user experiences across the firm's digital ecosystem.",
        highlights: [
          'Architected UI/UX strategies that leveraged A.I. tooling to emphasize reliability, maintainability, scalability, and accessibility',
          'Created process to maintain application usability, accessibility, and code quality standards, while ensuring seamless integration with existing technical architectures and enterprise systems',
          'Managed the full software development lifecycle (SDLC) with an emphasis on agile methodologies and cross-functional coordination',
          'Drove continuous improvement initiatives, A.I. onboarding, identifying opportunities to streamline processes, enhance product performance, and reduce design and technical debt',
          "Championed accessibility and performance standards through component APIs, design tokens, AI enhanced quality gating, and process NFR's"
        ],
        achievements: [
          'Lead centralized UX Engineering initiatives for 80+ enterprise applications; architected and maintained scalable design system',
          'Revised delivery strategies to increase output over 60% while also fostering a new QA strategy to align with business goals and technical constraints, reducing defects by 17%',
          'Decreased time to market by 38%, raised usability scores by 9+ points, and established a Center of Excellence for design and dev collaboration',
          'Grew and mentored multidisciplinary teams across UX and front-end engineering, fostering inclusive culture and delivery excellence'
        ]
      },
      {
        company: 'S&P Global (formerly IHS Markit)',
        shortName: 'S&P Global',
        role: 'Associate Director of Development & UX',
        period: 'March 2022 - April 2023',
        logo: '/assets/images/S&P_Global_logo.svg',
        description: 'Directed platform engineering and UX strategy for enterprise financial software solutions, architecting scalable systems using modern web technologies. Spearheaded technical integration during major corporate merger while maintaining seamless user experiences across product ecosystem.',
        highlights: [
          'Led platform engineering architecture for 80+ customer-facing financial applications using TypeScript, Angular, and React',
          'Orchestrated technical integration during IHS Markit-S&P Global merger, unifying disparate platforms, databases, and user workflows',
          'Collaborated cross-functionally with Product and UX teams to transform customer insights into actionable platform features',
          'Established user-centered design practices through customer feedback loops, analytics integration, and data-driven decision making',
          'Developed comprehensive technical documentation, design systems, and engineering standards to ensure consistency and quality'
        ],
        achievements: [
          'Executed seamless M&A platform integration affecting thousands of users while maintaining 99.9% service availability',
          'Accelerated product delivery by 38% and increased usability scores by 9+ points through process optimization',
          'Built and mentored high-performing engineering teams, establishing Centers of Excellence for frontend development',
          'Designed and implemented enterprise-wide design system and component library, standardizing UX across all products'
        ]
      },
      {
        company: 'IHS Markit (Acquired by S&P Global)',
        shortName: 'IHS Markit',
        roles: [
          {
            title: 'Associate Director of Development',
            period: 'December 2020 - April 2022'
          },
          {
            title: 'Senior Associate Manager',
            period: 'March 2019 - December 2020'
          },
          {
            title: 'Senior Associate',
            period: 'August 2018 - March 2019'
          }
        ],
        logo: '/assets/images/IHS_Markit_logo.svg',
        description: 'Architected and delivered unified platform serving diverse product portfolio for enterprise financial software solutions. Led cross-functional engineering teams through complex platform challenges while managing technical debt and maintaining system performance.',
        highlights: [
          'Architected unified platform infrastructure serving diverse product portfolio with established technical standards and governance models',
          'Led cross-functional engineering teams through complex platform challenges, balancing technical debt management with feature delivery',
          'Operationalized platform systems during major merger, unifying technical architectures and user workflows into centralized infrastructure',
          'Established collaboration frameworks between engineering and product teams to improve delivery velocity and technical decision-making',
          'Created comprehensive documentation and communication standards that enabled rapid product development and consistent experiences'
        ],
        achievements: [
          'Delivered scalable platform architecture that enabled rapid product development across entire product portfolio',
          'Successfully managed major M&A platform integration, consolidating disparate systems into unified technical infrastructure',
          'Improved delivery velocity through enhanced engineering-product collaboration and streamlined decision-making processes',
          'Maintained system performance and stability while simultaneously addressing technical debt and delivering new features'
        ]
      },
      {
        company: 'Ipreo (Acquired by IHS Markit)',
        shortName: 'Ipreo',
        roles: [
          {
            title: 'Lead UI Developer',
            period: 'July 2017 - August 2018'
          },
          {
            title: 'Senior UX Developer',
            period: 'August 2015 - July 2017'
          },
          {
            title: 'UX/UI Developer',
            period: 'January 2015 - August 2015'
          }
        ],
        logo: '/assets/images/Ipreo_logo.png',
        description: 'Established foundational platform architecture and component systems for enterprise financial software, creating technical standards and development frameworks that enabled scalable product development across the organization.',
        highlights: [
          'Established early platform architecture and component systems with technical standards and development frameworks',
          'Built strong partnerships between design, product, and engineering teams to improve delivery velocity and technical quality',
          'Led implementation of user-centered technical solutions, incorporating customer feedback into platform architecture decisions',
          'Created reusable component libraries and established coding standards that enabled consistent product development',
          'Developed workflows and communication processes that bridged technical and product stakeholders'
        ],
        achievements: [
          'Built foundational platform architecture that enabled scalable product development across the organization',
          'Improved delivery velocity and technical quality through enhanced cross-functional team collaboration',
          'Delivered customer-focused platform features informed by direct user feedback and usage analytics',
          'Established technical standards and frameworks that became organizational best practices'
        ]
      }
    ]
  },
  Portfolio: {
    title: 'My Latest Projects',
    subtitle: 'Portfolio',
    description: 'Take a look at some of my past projects. Each project comes with its own set of challenges and learning experiences.'
  },
  Skills: {
    title: 'Engineering, Design, & Leadership Expertise',
    subtitle: 'Skills',
    description:
      'Hybrid <strong>engineering and design director</strong> with deep expertise across the <strong>full spectrum of product development</strong>, from Figma to production code. Proven leader in building <strong>scalable design systems</strong>, managing <strong>cross-functional teams</strong>, and driving innovation through <strong>AI-enhanced workflows</strong>.',
    categories: [
      {
        name: 'Engineering & Technology',
        icon: 'line-md:document-code-twotone',
        columns: 2,
        description: 'Vast engineering knowledge spanning modern frameworks, architecture patterns, and quality practices. This is an overview of some of the core technologies and methodologies I have used to build scalable, performant applications.',
        skills: [
          {
            title: 'Frontend Technologies',
            items: 'TypeScript, JavaScript (ES6+) • React, Angular, Vue, Web Components • HTML5, CSS3/SCSS, CSS Modules, Tailwind • Responsive & Mobile-First Design'
          },
          {
            title: 'Architecture & Platform',
            items: 'Micro Front-end Architecture • Component-Driven Development • API Design & Integration • Scalable UI Architecture'
          },
          {
            title: 'Quality Assurance & Testing',
            items: 'Test Automation Strategies • Code Quality Standards & Performance Testing • E2E, Unit, Visual Regression, & Integration Testing • Modern tooling: Playwright, Jest, Chromatic'
          },

          {
            title: 'AI & Emerging Tech',
            items: 'AI Integration Strategy • MCP & Generative AI Tools • AI-Enhanced Development Workflows • Automated Code Reviews, Testing, & QA'
          }
        ]
      },
      {
        name: 'User Experience Design',
        icon: 'line-md:pencil-twotone-alt',
        columns: 3,
        description: 'Human-centered design expertise focused on accessibility, usability, and inclusive experiences. This is a small highlight of some of the systems, tools, and practices I leverage to create intuitive digital products.',
        skills: [
          {
            title: 'UX Leadership & Strategy',
            items: 'Strategy & Governance • UX/UI Architecture • Design Tokens • Component Library Design • Cross-Platform Design • UX-to-Development Workflows'
          },
          {
            title: 'Design Tools & Prototyping',
            items: 'Figma • Adobe Creative Suite • Rapid Prototyping • High-Fidelity Mockups • Interactive Prototypes • Design Collaboration Tooling'
          },
          {
            title: 'Accessibility & Compliance',
            items: 'WCAG 2.1 AA/AAA Standards • Section 508 Compliance • Inclusive Design Principles • a11y Testing & Auditing • Assistive Technology Support • Automated Compliance Gating'
          }
        ]
      },
      {
        name: 'Leadership & Management',
        icon: 'line-md:person-twotone',
        columns: 2,
        description: 'Strategic leadership abilities in people management, product strategy, and business transformation. This overview captures some of the leadership skills I apply to build high-performing teams and deliver measurable impact.',
        skills: [
          {
            title: 'People & Team Leadership',
            items: 'Multi-Disciplinary Team Management • Team Building & Recruitment • Mentorship & Career Development • Performance Management • Culture Development'
          },
          {
            title: 'Product & Strategy',
            items: 'Product Vision & Roadmap Ownership • Stakeholder Management • B2B Enterprise Strategy • Feature Prioritization • Cross-Functional Collaboration'
          },
          {
            title: 'Process & Delivery',
            items: 'SAFe Agile/Scrum Methodologies • SDLC Optimization • Sprint Planning & Execution • Continuous Delivery • Process Improvement & Scaling'
          },
          {
            title: 'Business Impact',
            items: 'KPI Definition & Tracking • Data-Driven Decision Making • Performance & Usability Analytics • Time to Market Optimization • M&A Integration'
          }
        ]
      },
      {
        name: 'Program Management',
        icon: 'line-md:clipboard-list-twotone',
        columns: 2,
        description: "Enterprise-scale program coordination with proven success in stakeholder alignment and delivery excellence. These examples showcase real outcomes from initiatives I've led across engineering and design organizations.",
        skills: [
          {
            title: 'Strategic Planning & Execution',
            items:
              'Led enterprise-scale design system initiative supporting 80+ applications and 6,000+ engineers • Established quarterly roadmaps, monthly executive reviews, and weekly sprint cadences • Delivered 44% faster feature delivery and 38% reduction in time-to-market through systematic process optimization and cross-functional coordination'
          },
          {
            title: 'Stakeholder & Executive Alignment',
            items:
              'Orchestrated alignment across 4 organizations (Engineering, Design, Platform, Security) with regular demos, tailored executive dashboards, and quarterly business reviews • Secured C-level sponsorship by framing initiatives in business terms—demonstrating $2.3M annual savings and 3.7x ROI through quantified productivity gains and reduced technical debt'
          },
          {
            title: 'Risk Management & Quality Assurance',
            items:
              'Implemented rapid PoC validation strategies to de-risk technical feasibility or create opportunities for innovation before full commitment • Established comprehensive quality gates with automated testing covering E2E, Quality Assurance, Accessibility, and AI-enhanced code reviews • Reduced production defects by 17% while increasing output by 60% through strategic process improvements and QA transformation'
          },
          {
            title: 'Team Coordination & Resource Optimization',
            items:
              'Managed up to 12 direct reports including leaders with their own teams, plus 12+ cross-functional contributors with non-dedicated bandwidth • Maintained momentum through clear ownership models, status reporting, and tightly scoped workstreams • Achieved 100% retention and 4 promotions in 18 months while coordinating complex deliverables across distributed teams without burnout'
          }
        ]
      }
    ]
  },
  Blog: {
    title: 'Latest Writing',
    subtitle: 'Blog',
    description: 'Sharing my thoughts on engineering leadership, design systems, AI-enhanced development, and building high-performing teams. Sharing insights from years of scaling platforms and leading multidisciplinary teams.'
  },
  Contact: {
    title: "Let's Connect",
    subtitle: 'Contact',
    description: "I'm always excited to collaborate on innovative projects, discuss engineering/design challenges, or explore new opportunities. Whether you're looking to build something new or just want to connect, feel free to reach out.",
    contactItems: [
      { icon: 'line-md:linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/josh-easter/', newWindow: true },
      { icon: 'line-md:email-alt-twotone', label: 'Email Me', url: 'mailto:josh.a.easter@gmail.com' }
      // { icon: 'line-md:file-download-twotone', label: 'Resume', url: 'https://github.com/josh-easter', newWindow: true }
    ]
  }
}

export const globalConfig = {
  siteTitle: 'Josh Easter | Personal Site',
  siteDescription: 'Josh Easter is a UI/UX Designer and Photographer based in Melbourne, Australia.',
  ogImage: '/og.jpg',
  logo: {
    src: '/assets/images/JE2.svg',
    alt: 'Josh Easter logo'
  },
  canonical: true,
  noindex: false,
  name: 'Josh Easter',
  email: 'josh.a.easter@gmail.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/josh-easter/',
    github: 'https://github.com/josh-easter',
    instagram: ''
  }
}
