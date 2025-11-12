/**
 * Accessibility Metrics - Centralized source for all accessibility-related metrics
 * This file consolidates ONLY verified a11y metrics from across the portfolio
 * All metrics have been verified to exist in the codebase
 */

// ============================================================================
// WCAG COMPLIANCE METRICS
// Source: full.ts, FrontEndImpactCard.astro, various components
// ============================================================================
export const wcagMetrics = {
  overall: {
    current: '89%',
    before: '67%',
    improvement: '+22 points',
    level: 'WCAG 2.1 AA',
    // Source: full.ts:156-161
  },
  dsMCP: {
    current: '94%',
    before: '67%',
    improvement: '+27 points',
    level: 'WCAG 2.1 AA'
    // Source: full.ts:427,456, MeasurableResults.astro
  },
  frontendPlatform: {
    current: '94%',
    before: '33%',
    improvement: '+61 points',
    level: 'WCAG 2.1 AA'
    // Source: FrontEndImpactCard.astro:41, ExecutiveSummaryCard.astro:31
  },
  enterprise: {
    current: '89%',
    before: '67%',
    level: 'Level AA'
    // Source: full.ts:638
  }
} as const

// ============================================================================
// ACCESSIBILITY VIOLATIONS REDUCTION
// Source: full.ts:123-127, full.ts:612
// ============================================================================
export const violationReduction = {
  overall: {
    reduction: '-89%',
    before: 342,
    after: 21,
    period: 'per quarter',
    standard: 'WCAG 2.1 AA'
    // Source: full.ts:123-127
  },
  enterprise: {
    reduction: '-89%',
    before: 342,
    after: 38,
    // Source: full.ts:612
  }
} as const

// ============================================================================
// ACCESSIBILITY BUG REDUCTION
// Source: full.ts:194, full.ts:248
// ============================================================================
export const bugReduction = {
  overall: {
    reduction: '80%',
    // Source: full.ts:194, full.ts:248
  },
  uiBugs: {
    reduction: '67%',
    // Source: full.ts:193
  },
  a11yProductionIssues: {
    before: '89%',
    // Source: full.ts:356
  }
} as const

// ============================================================================
// COMPLIANCE & QUALITY GATES
// Source: full.ts:637-643
// ============================================================================
export const complianceMetrics = {
  wcagCompliance: {
    percentage: '89%',
    level: 'Level AA'
    // Source: full.ts:638
  },
  issuesCaughtPreCommit: {
    percentage: '87%',
    stage: 'IDE (Real-time)',
    // Source: full.ts:639
  },
  issuesCaughtIDE: {
    percentage: '87%',
    stage: 'Stage 1 - IDE',
    // Source: full.ts:640
  },
  issuesCaughtPrePush: {
    percentage: '96%',
    stage: 'Stage 2 - Git Hooks',
    // Source: full.ts:641
  },
  issuesCaughtCI: {
    percentage: '99%',
    stage: 'Stage 3 - CI/CD',
    // Source: full.ts:642
  }
} as const

// ============================================================================
// WCAG CRITERIA COVERAGE
// Source: Ally.astro:20-50
// ============================================================================
export const wcagCriteria = {
  colorContrast: {
    minimum: '4.5:1',
    standard: 'WCAG 2.1 AA',
    automated: true
    // Source: Ally.astro:20
  },
  focusIndicators: {
    visible: '2px outline',
    requirement: 'Visible focus indicators',
    automated: true
    // Source: Ally.astro:21
  },
  textScaling: {
    target: '200%',
    requirement: 'Text scaling without overflow',
    automated: true
    // Source: Ally.astro:22
  },
  touchTargets: {
    minimum: '44px',
    requirement: 'Minimum touch target size',
    automated: true
    // Source: Ally.astro:23
  },
  keyboardNavigation: {
    tabOrder: 'Logical flow',
    focusTrapping: 'Modal/dialog containment',
    skipLinks: 'Bypass navigation',
    shortcuts: 'Arrow keys, Enter, Escape'
    // Source: Ally.astro:33-36
  },
  screenReader: {
    ariaLabels: 'Descriptive and concise',
    liveRegions: 'Dynamic content updates',
    landmarks: 'Navigation structure',
    states: 'Expanded, selected, disabled'
    // Source: Ally.astro:46-49
  }
} as const

// ============================================================================
// AUTOMATED TESTING TOOLS
// Source: full.ts:580-582, Ally.astro:157-170
// ============================================================================
export const testingTools = {
  validation: {
    tools: ['ESLint', 'TypeScript', 'Prettier', 'axe-core', 'Stylelint'],
    capabilities: [
      'Color/spacing/typography tokens',
      'Component compositions',
      'WCAG 2.1 AA compliance',
      'Codebase conventions'
    ]
    // Source: full.ts:581-582
  },
  aiPoweredChecks: {
    colorContrast: 'Automatic ratio calculation and warnings',
    focusManagement: 'Tab order validation and focus trapping',
    ariaAttributes: 'Required labels and proper usage',
    semanticHTML: 'Proper heading hierarchy and landmarks'
    // Source: Ally.astro:133-146
  },
  testingPipeline: {
    axeCore: 'Automated accessibility testing in CI/CD',
    lighthouse: 'Performance and accessibility scoring',
    wave: 'Visual accessibility evaluation',
    manualTesting: 'Screen reader and keyboard validation'
    // Source: Ally.astro:157-170
  }
} as const

// ============================================================================
// ACCESSIBILITY GUILD STRUCTURE
// Source: Ally.astro:54-98
// ============================================================================
export const accessibilityGuild = {
  structure: {
    guildLead: {
      role: 'Senior Accessibility Specialist',
      responsibility: 'Sets standards, reviews components'
      // Source: Ally.astro:64-65
    },
    productChampions: {
      count: 12,
      ratio: '1 per team',
      responsibility: 'Advocates and educates within teams'
      // Source: Ally.astro:68-69
    },
    testingVolunteers: {
      count: 8,
      type: 'Internal and external',
      responsibility: 'Real-world usage validation'
      // Source: Ally.astro:72-73
    }
  },
  education: {
    monthlyWorkshops: 'Hands-on accessibility training (screen reader demos, disability simulation)',
    designReviews: 'A11y checkpoints in process (catch issues before implementation)',
    certification: 'Accessibility competency program (team members earn badges)'
    // Source: Ally.astro:85-95
  }
} as const

// ============================================================================
// ACCESSIBILITY IMPACT RESULTS
// Source: Ally.astro:107-121
// ============================================================================
export const impactResults = {
  wcagCompliance: {
    value: '94%',
    before: '67%',
    improvement: '+27 points'
    // Source: Ally.astro:107-109
  }
} as const

// ============================================================================
// RISK MITIGATION
// Source: full.ts:100-101
// ============================================================================
export const riskMitigation = {
  compliancePenalties: {
    value: '$100K+',
    description: 'Avoided compliance penalties'
    // Source: full.ts:100-101
  },
  legalExposure: {
    before: true,
    // Source: full.ts:655
  }
} as const

// ============================================================================
// PRODUCTIVITY IMPACT (A11Y-RELATED)
// Source: FrontEndImpactCard.astro:52, ImpactExec.astro:22
// ============================================================================
export const productivityImpact = {
  implementationTime: {
    task: 'Accessible modal',
    before: '45 minutes',
    after: '8 minutes',
    reduction: '82%'
    // Source: FrontEndImpactCard.astro:52, ImpactExec.astro:22
  },
  reviewCycles: {
    before: '3.2',
    after: '1.5',
    reduction: '53%',
    description: 'Per frontend PR'
    // Source: FrontEndImpactCard.astro:51
  },
  onboarding: {
    before: '3 weeks',
    after: '3 days',
    improvement: '7x faster'
    // Source: FrontEndImpactCard.astro:53
  }
} as const

// ============================================================================
// COMPONENT-LEVEL A11Y METRICS
// Source: Ally.astro:200, FrontEndImpactCard.astro:41-43
// ============================================================================
export const componentMetrics = {
  buttonComponent: {
    score: '94%',
    violations: 2,
    suggestions: 3,
    checks: ['Contrast', 'ARIA', 'Keyboard', 'Semantics']
    // Source: Ally.astro:200-210
  },
  designTokenAdherence: {
    before: '58%',
    after: '96%',
    description: 'No hardcoded values'
    // Source: FrontEndImpactCard.astro:42
  },
  componentAPIMisuse: {
    before: '40%',
    after: '8%',
    description: 'Prop validation'
    // Source: FrontEndImpactCard.astro:43
  }
} as const

// ============================================================================
// BUSINESS VALUE (A11Y-SPECIFIC)
// Source: full.ts:83-103
// ============================================================================
export const businessValue = {
  annualValue: {
    total: '$2.2M',
    breakdown: {
      engineeringEfficiency: '$1.4M',
      designTeamCapacity: '$620K',
      infrastructureSavings: '$180K',
      riskMitigation: '$100K+'
    }
    // Source: full.ts:83-103
  },
  roi: {
    value: '3.7x',
    paybackPeriod: '3.5 months'
    // Source: full.ts:84-85
  }
} as const

// ============================================================================
// DEVELOPER FEEDBACK (A11Y-SPECIFIC)
// Source: full.ts:276, Metrics.astro:39-52
// ============================================================================
export const developerFeedback = {
  satisfaction: {
    quote: '"Accessibility is finally easy to get right"',
    // Source: full.ts:276
  },
  quotes: [
    {
      quote: '"The MCP Server is like having a senior developer looking over my shoulder, but without the judgment. It catches issues I didn\'t even know existed."',
      author: 'Frontend Developer, 6 months experience'
      // Source: Metrics.astro:39-41
    },
    {
      quote: '"The contextual suggestions are incredible. Instead of just saying \'fix this color,\' it shows me exactly which token to use and why."',
      author: 'Senior Engineer, Accessibility Team'
      // Source: Metrics.astro:48-51
    }
  ]
} as const

// ============================================================================
// LIGHTHOUSE SCORES
// Source: full.ts:223-226, full.ts:616
// ============================================================================
export const lighthouseScores = {
  overall: {
    current: 98,
    before: 72,
    improvement: '+26 points'
    // Source: full.ts:224-226
  },
  enterprise: {
    current: 89,
    before: 71,
    improvement: '+18 points'
    // Source: full.ts:616
  }
} as const

// ============================================================================
// KEY TAKEAWAYS (A11Y-FOCUSED)
// Source: full.ts:346
// ============================================================================
export const keyTakeaways = {
  wcagImprovement: {
    metric: '+27 points',
    description: 'WCAG improvement'
    // Source: full.ts:346
  }
} as const

// ============================================================================
// EXPORT ALL A11Y METRICS
// ============================================================================
export const AccessibilityMetrics = {
  wcag: wcagMetrics,
  violations: violationReduction,
  bugs: bugReduction,
  compliance: complianceMetrics,
  criteria: wcagCriteria,
  testing: testingTools,
  guild: accessibilityGuild,
  impact: impactResults,
  risk: riskMitigation,
  productivity: productivityImpact,
  components: componentMetrics,
  business: businessValue,
  feedback: developerFeedback,
  lighthouse: lighthouseScores,
  takeaways: keyTakeaways
} as const

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Get WCAG compliance for a specific project
 */
export function getWCAGCompliance(project: 'overall' | 'dsMCP' | 'frontendPlatform' | 'enterprise'): string {
  return wcagMetrics[project].current
}

/**
 * Get accessibility improvement percentage
 */
export function getA11yImprovement(project: 'overall' | 'dsMCP' | 'frontendPlatform' | 'enterprise'): string {
  const metric = wcagMetrics[project]
  if ('improvement' in metric) {
    return metric.improvement
  }
  return 'N/A'
}

/**
 * Calculate total violations reduced
 */
export function getTotalViolationsReduced(): number {
  return violationReduction.overall.before - violationReduction.overall.after
}

/**
 * Get accessibility ROI value
 */
export function getA11yROI(): string {
  return businessValue.roi.value
}

// ============================================================================
// TYPE EXPORTS
// ============================================================================
export type WCAGMetrics = typeof wcagMetrics
export type ViolationReduction = typeof violationReduction
export type BugReduction = typeof bugReduction
export type ComplianceMetrics = typeof complianceMetrics
export type AccessibilityMetricsType = typeof AccessibilityMetrics
