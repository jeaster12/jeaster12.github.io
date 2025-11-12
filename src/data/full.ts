/**
 * Centralized Case Study Metrics
 * All metrics should be sourced from this file to ensure consistency
 */

// ============================================================================
// HERO / SUMMARY METRICS
// ============================================================================
export const heroMetrics = {
  wcagCompliance: '89%',
  roi: '3.7x',
  adoption: '60%',
  adoptionDescription: 'Weekly Active Users'
} as const

// ============================================================================
// TEAM & SCALE
// ============================================================================
export const teamMetrics = {
  engineersLed: 7,
  engineersLedBreakdown: '1 Staff, 3 Senior, 2 Mid, 1 Junior',
  totalEngineers: '6,000+',
  productTeams: 24,
  weeklyActiveUsers: 720,
  weeklyActivePercent: '60%'
} as const

// ============================================================================
// ADOPTION JOURNEY
// ============================================================================
export const adoptionJourney = {
  timeline: '6 Months from PoC to GA',
  phases: {
    poc: {
      monthRange: '1-2',
      title: 'Proof of Concept',
      designPartners: 7, // 5 engineers + 2 designers
      engineers: 5,
      designers: 2,
      result: '85% found it "extremely useful"',
      totalUsers: 7
    },
    privateBeta: {
      monthRange: '3-4',
      title: 'Private Beta',
      productTeams: 3,
      totalUsers: 45,
      weeklyActiveUse: '62%',
      goal: 'Stress test at scale, gather feedback'
    },
    openBeta: {
      month: '5',
      title: 'Open Beta',
      access: 'All engineers (opt-in)',
      totalUsers: 240,
      weeklyActiveUse: '58%'
    },
    generalAvailability: {
      month: '6',
      title: 'General Availability',
      rollout: 'Default for all new projects',
      totalUsers: '720+',
      weeklyActiveUse: '60%',
      nps: '+68'
    }
  },
  metrics: {
    weeklyActiveUsers: '60%',
    totalUsers: '720+',
    eligibleUsers: 6000,
    queriesPerUser: 18,
    teamCoverage: '100%',
    teamsOnboarded: 24,
    npsScore: '+68',
    industryAvgNps: '+30'
  }
} as const

// ============================================================================
// ROI & BUSINESS IMPACT
// ============================================================================
export const roiMetrics = {
  annualValue: '$2.2M',
  roi: '3.7x',
  paybackPeriod: '3.5 months',
  breakdown: {
    engineeringEfficiency: {
      value: '$1.4M',
      description: 'Time saved on reviews and rework'
    },
    designTeamCapacity: {
      value: '$620K',
      description: 'Reduced support overhead'
    },
    infrastructureSavings: {
      value: '$180K',
      description: 'Reduced build and test costs'
    },
    riskMitigation: {
      value: '$100K+',
      description: 'Avoided compliance penalties'
    }
  }
} as const

// ============================================================================
// QUALITY METRICS
// ============================================================================
export const qualityMetrics = {
  defectReduction: {
    productionBugs: {
      reduction: '-78.4%',
      before: 126,
      after: 2,
      period: 'per quarter'
    },
    criticalSecurityIssues: {
      reduction: '-100%',
      before: 8,
      after: 0,
      period: 'per quarter'
    },
    accessibilityViolations: {
      reduction: '-89%',
      before: 342,
      after: 21,
      standard: 'WCAG 2.1 AA'
    },
    designSystemViolations: {
      reduction: '-89%',
      before: 284,
      after: 31
    }
  },
  codeQuality: {
    sonarQubeRating: {
      after: 'A',
      before: 'C'
    },
    testCoverage: {
      current: '87.3%',
      before: '62%',
      target: '85%'
    },
    technicalDebtRatio: {
      current: '3.2%',
      before: '8.7%',
      target: '<5%'
    },
    cyclomaticComplexity: {
      current: '6.8',
      before: '12.4',
      target: '<10'
    }
  },
  wcagCompliance: {
    overall: '89%',
    levelAA: true,
    before: '67%',
    improvement: '+22 points'
  }
} as const

// ============================================================================
// DEVELOPER PRODUCTIVITY
// ============================================================================
export const productivityMetrics = {
  prReviewTime: {
    reduction: '-53%',
    before: '2.1 days',
    after: '12.6 hours'
  },
  reviewCycles: {
    reduction: '67%',
    before: '3-5 cycles',
    after: '1-2 cycles'
  },
  timeToFirstPR: {
    reduction: '-80%',
    before: '5 days',
    after: '1 day'
  },
  componentReuse: {
    increase: '3.2x',
    before: '18%',
    after: '58%'
  },
  buildTime: {
    reduction: '-42%',
    before: '8.3min',
    after: '4.8min'
  },
  uiBugsReduction: '67%',
  accessibilityBugsReduction: '80%',
  cycleTimeReduction: '44%',
  firstPassRate: '78%'
} as const

// ============================================================================
// PERFORMANCE METRICS
// ============================================================================
export const performanceMetrics = {
  validation: {
    p95Latency: '28ms',
    p50Latency: '<15ms',
    target: '<50ms'
  },
  bundleSize: {
    reduction: '-28%',
    before: '245KB',
    after: '176KB'
  },
  pageLoadTime: {
    improvement: '-33%',
    before: '2.4s',
    after: '1.6s'
  },
  errorRate: {
    reduction: '-81%',
    before: '0.9%',
    after: '0.17%'
  },
  lighthouseScore: {
    current: 98,
    before: 72
  },
  costReduction: {
    aiInference: '86%',
    description: 'vs. cloud-based LLM solutions'
  }
} as const

// ============================================================================
// ROLE-BASED IMPACT
// ============================================================================
export const roleImpact = {
  designers: {
    supportTimeReduction: '60%',
    before: '60% of time on support',
    after: '15% of time on support',
    designSystemUpdates: '3x faster',
    designDebtReduction: '89%',
    explorationTimeIncrease: '5x',
    dsUsage: '91%'
  },
  engineers: {
    prReviewReduction: '53%',
    accessibilityBugsReduction: '80%',
    componentReuseIncrease: '3.2x',
    buildTimeReduction: '42%',
    onboardingSpeedup: '5x',
    fewerReviewCycles: '67%',
    satisfactionScore: '4.6/5',
    wouldRecommend: '89%'
  },
  productManagers: {
    timeToMarket: '44% faster',
    productionIncidents: '67% fewer',
    featuresDelivered: '3.1x more',
    stakeholderSatisfaction: '92%',
    firstPassRate: '78%'
  }
} as const

// ============================================================================
// DEVELOPER SATISFACTION
// ============================================================================
export const satisfactionMetrics = {
  overallSatisfaction: '4.6/5',
  totalRespondents: 68,
  wouldRecommend: '89%',
  attritionRateReduction: '-40%',
  productivityScoreIncrease: '+28%',
  npsScore: '+68',
  feedback: {
    loves: ['Instant feedback saves me hours of debugging', 'I learned design system tokens in days, not weeks', 'PRs get approved faster with fewer comments', 'No more anxiety about breaking things', 'Accessibility is finally easy to get right'],
    improvements: ['Sometimes feedback is too verbose', 'Would like more custom rule configuration', 'Pre-push hooks can feel slow (60s)', 'Need better docs for MCP Server capabilities', 'Want integration with more tools (Storybook, etc.)']
  }
} as const

// ============================================================================
// TECHNICAL ARCHITECTURE
// ============================================================================
export const architectureMetrics = {
  mcpServer: {
    language: 'TypeScript',
    runtime: 'Node.js',
    tools: 15,
    integrations: ['VSCode', 'GitHub', 'Splunk'],
    aiModel: 'Llama 2 70B (self-hosted)'
  },
  qualityGates: {
    stages: 3,
    stages_list: ['IDE (Real-time)', 'Git Hooks (Pre-push)', 'CI/CD (Pre-merge)'],
    configSharing: 'Single source of truth'
  },
  performance: {
    ideLatency: '<50ms P95',
    gitHookDuration: '~60s',
    cicdDuration: '200-500ms'
  }
} as const

// ============================================================================
// CHALLENGES OVERCOME
// ============================================================================
export const challenges = {
  performance: {
    challenge: 'IDE validation needed <50ms P95 latency',
    solution: 'WebAssembly + incremental parsing + caching',
    result: '28ms P95 latency achieved'
  },
  hallucination: {
    challenge: 'AI providing inaccurate recommendations',
    solution: 'MCP grounded tool execution',
    result: 'Zero hallucinations in production'
  },
  adoption: {
    challenge: 'Balancing strictness vs. adoption',
    solution: 'Progressive rollout + opt-in warnings',
    result: '60% adoption (2-3x industry average)'
  },
  scaling: {
    challenge: 'Supporting 6,000+ engineers across 24 teams',
    solution: 'Distributed architecture + team champions',
    result: '100% team coverage'
  },
  tokenCost: {
    challenge: 'Cloud LLM costs at scale',
    solution: 'Self-hosted Llama 2 70B',
    result: '86% cost reduction'
  },
  biome: {
    challenge: 'Migration from ESLint/Prettier',
    solution: 'Automated migration + compatibility layer',
    result: '10x faster linting, 1 day migration'
  }
} as const

// ============================================================================
// KEY TAKEAWAYS
// ============================================================================
export const keyTakeaways = {
  platformInfrastructure: 'Built foundational quality infrastructure that scaled to 6,000 engineers across 24 teams',
  technicalExcellence: 'Multi-touch quality gates, grounded AI execution, 28ms P95 latency, 86% cost reduction',
  businessImpact: '3.7x ROI, 27-point WCAG improvement, 2-3x industry adoption, 4 promotions'
} as const

// ============================================================================
// BEFORE & AFTER COMPARISON
// ============================================================================
export const beforeAfter = {
  before: {
    designSupport: '60% of design team time',
    lostToRework: '$4.2M/year',
    a11yProductionIssues: '89%',
    reviewCycles: '3-5 cycles per PR',
    wcagCompliance: '67%'
  },
  after: {
    uiBugsReduction: '67%',
    wcagCompliance: '89%',
    designTimeFreed: '60%',
    onboardingSpeed: '5x faster',
    annualValue: '$2.2M (3.7x ROI)'
  }
} as const

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Get a formatted metric value with fallback
 */
export function getMetric(path: string, defaultValue: string = 'N/A'): string {
  try {
    const keys = path.split('.')
    let value: any = exports
    for (const key of keys) {
      value = value[key]
      if (value === undefined) return defaultValue
    }
    return String(value)
  } catch {
    return defaultValue
  }
}

/**
 * Format a metric for display
 */
export function formatMetric(value: string | number, suffix?: string): string {
  const formatted = typeof value === 'number' ? value.toLocaleString() : value
  return suffix ? `${formatted}${suffix}` : formatted
}

// ============================================================================
// PROJECT-SPECIFIC METRICS (from Metrics.ts)
// ============================================================================

export const CupcakeMetrics = {
  hero: {
    appsUnified: '50+',
    developersServed: '1000s',
    endUsers: '100Ks',
    acquisitions: 3
  },
  developmentVelocity: {
    featureDevelopmentTime: 60, // % faster delivery
    uiBugReduction: 75, // % fewer inconsistencies
    codeReusability: 85 // % shared components
  },
  designEfficiency: {
    designToDevHandoff: 70 // % time reduction
  },
  businessValue: {
    technicalDebt: 80 // % massive reduction
  }
} as const

export const DSMCPMetrics = {
  hero: {
    searchTimeReduced: 52, // %
    annualSavings: '$2.2M',
    fasterOnboarding: 78, // %
    wcagCompliance: 94 // %
  },
  developerProductivity: {
    featureImplementation: 44, // % faster delivery
    codeReviewCycles: 53, // % fewer iterations
    uiBugsPerSprint: 67 // % reduction
  },
  designSystemAdoption: {
    componentAdoption: 43, // % increase
    consistencyIssues: 61, // % decrease
    teamEfficiency: 35 // % improvement
  },
  teamExperience: {
    developerNPS: {
      before: 6.2,
      after: 8.7
    },
    timeToProductivity: {
      before: '3w',
      after: '3d'
    }
  }
} as const

export const DSMCPDesignMetrics = {
  hero: {
    annualSavings: '$2.2M',
    fasterDelivery: 44, // %
    componentAdoption: 91, // %
    wcagCompliance: 94 // %
  },
  designTeamImpact: {
    supportTimeReduction: 60, // % freed capacity
    strategicWorkTime: 3, // x increase
    documentationBurden: 75 // % reduction
  },
  businessValue: {
    annualROI: '$2.2M',
    designDebtPrevented: '$450K', // annual savings
    timeToMarket: 44 // % improvement
  },
  qualityAndConsistency: {
    designConsistency: 61, // % improvement
    wcagCompliance: 94, // % achievement
    componentAdoption: 91 // % increase
  },
  timeAllocation: {
    supportQuestions: {
      before: 35, // %
      after: 8 // %
    },
    strategicDesignWork: {
      before: 20, // %
      after: 79 // %
    }
  },
  qualityImprovements: {
    componentAdoption: {
      value: 91, // %
      change: 25, // % increase
      from: 73 // %
    },
    documentationAccuracy: {
      value: 94, // %
      change: 40, // % increase
      from: 67 // %
    },
    developerSatisfaction: {
      value: 8.7, // /10
      change: 40, // % increase
      from: 6.2 // /10
    },
    designConsistency: {
      value: 91, // %
      change: 26, // % increase
      from: 72 // %
    }
  },
  designerSuccessStory: {
    dailyTimeFreed: 4.5, // hours
    increaseInResearch: 300, // %
    documentationComplaints: 0
  }
} as const

export const DSMCPTechMetrics = {
  performance: {
    initialPOC: 1.2, // seconds
    afterOptimization: 450, // milliseconds
    productionP95: 200 // milliseconds (< this value)
  },
  costs: {
    month1: {
      openAI: 12000, // $
      pinecone: 2400, // $
      infrastructure: 600, // $
      total: 15000 // $
    },
    month6: {
      openAI: 1800, // $ (90% cache hit rate)
      pinecone: 1600, // $ (optimized tier)
      infrastructure: 600, // $ (right-sized)
      total: 4000, // $
      reduction: 73 // %
    }
  },
  challenges: {
    retrievalAccuracyImprovement: 34, // %
    suggestionAccuracy: 97, // %
    costReductionPercent: 73, // %
    costReductionFrom: 15000, // $
    costReductionTo: 4000 // $
  },
  monitoring: {
    performance: {
      requestThroughput: '1K/min',
      errorRates: 0.1, // % (< this value)
      cacheHitRates: 90 // %
    },
    quality: {
      relevanceScoresAvg: 0.89,
      accuracyMetrics: 97, // %
      userFeedback: 8.7, // /10
      hallucinationRate: 3 // % (< this value)
    },
    usage: {
      dailyActiveUsers: 850, // +
      queriesPerUserAvg: 12.3
    },
    business: {
      costPerQuery: 0.002, // $
      roiTracking: 575, // % (+ this value)
      adoptionMetrics: 91, // %
      satisfactionScores: 8.7 // /10
    }
  }
} as const

export const MCPMetrics = {
  hero: {
    developerAdoption: 91, // % within 3 months
    feedbackTime: 8.2, // seconds average
    usageCorrelation: 0.73, // r value with code quality
    dailyValidations: 15400 // across teams
  },
  impact: {
    issuesCaughtBeforeCommit: 87, // %
    fasterOnboarding: 62, // %
    feedbackTimeReduction: {
      before: 35, // seconds (30-45s average)
      after: 8.2 // seconds
    }
  },
  validation: {
    tools: ['ESLint', 'TypeScript', 'Prettier', 'axe-core', 'Stylelint'],
    capabilities: ['Color/spacing/typography tokens', 'Component compositions', 'WCAG 2.1 AA compliance', 'Codebase conventions']
  },
  technical: {
    zeroHallucinations: true, // Only reports real tool findings
    incrementalValidation: true,
    parallelExecution: true,
    figmaSync: 'nightly' // Automated token sync
  }
} as const

export const EnterpriseQualityMetrics = {
  hero: {
    roi: 3.7, // x return on investment
    developerAdoption: 91, // % by month 6
    engineers: 6000, // total engineers
    productTeams: 24, // teams shipping frontend
    feedbackTime: 8.2, // seconds average
    dailyValidations: 15400,
    uptime: 99.2 // % SLA
  },
  financial: {
    investment: 600, // $k initial
    annualValue: 2200, // $k ($1.76M savings + $440k revenue)
    paybackPeriod: 3.5, // months
    threeYearROI: 10.3, // x
    annualWasteEliminated: 1200 // $k from rework
  },
  quality: {
    bugReduction: 78.4, // % (126 → 27 per quarter)
    criticalSecurityIssues: { before: 8, after: 0 }, // per quarter
    accessibilityViolations: { before: 342, after: 38, reduction: 89 }, // % WCAG
    designSystemViolations: { before: 284, after: 31, reduction: 89 }, // %
    testCoverage: { before: 62, after: 87.3 }, // %
    sonarQubeRating: { before: 'C', after: 'A' },
    lighthouseScore: { before: 71, after: 89 },
    crashFreeSessions: 99.8, // %
    productionErrorRate: 0.02 // %
  },
  productivity: {
    deliveryCycle: { before: 2.8, after: 1.6, improvement: 44 }, // days / %
    reviewBurden: {
      commentsBefore: 12.4,
      commentsAfter: 5.8,
      reviewTimeBefore: 42,
      reviewTimeAfter: 20,
      improvement: 53 // %
    },
    onboarding: {
      firstPRBefore: 13,
      firstPRAfter: 5,
      designSystemFluencyBefore: 8,
      designSystemFluencyAfter: 3,
      improvement: 62 // %
    }
  },
  compliance: {
    wcagCompliance: 89, // % Level AA
    issuesCaughtPreCommit: 87, // %
    issuesCaughtIDE: 87, // % at Stage 1
    issuesCaughtPrePush: 96, // % cumulative through Stage 2
    issuesCaughtCI: 99 // % cumulative through Stage 3
  },
  adoption: {
    satisfaction: 4.6, // /5 rating (n=68)
    wouldRecommend: 89, // %
    attritionReduction: 40, // %
    teamRetention: 100, // %
    promotions: 4 // in 18 months
  },
  problem: {
    uiBugsFromDesignSystem: 67, // %
    wcagComplianceBefore: 67, // %
    codeReviewsWithFrontendMistakes: 40, // %
    legalExposure: true
  },
  team: {
    coreTeam: 7, // 1 staff, 3 senior, 2 mid, 1 junior
    crossFunctionalContributors: 12 // Design, Platform, DevOps
  }
} as const

// Export all metrics in a single object for convenience
export const PortfolioMetrics = {
  cupcake: CupcakeMetrics,
  dsMCP: DSMCPMetrics,
  dsMCPDesign: DSMCPDesignMetrics,
  dsMCPTech: DSMCPTechMetrics,
  mcp: MCPMetrics,
  enterpriseQuality: EnterpriseQualityMetrics
} as const

// Type exports for TypeScript support
export type CupcakeMetrics = typeof CupcakeMetrics
export type DSMCPMetrics = typeof DSMCPMetrics
export type DSMCPDesignMetrics = typeof DSMCPDesignMetrics
export type DSMCPTechMetrics = typeof DSMCPTechMetrics
export type MCPMetrics = typeof MCPMetrics
export type EnterpriseQualityMetrics = typeof EnterpriseQualityMetrics
export type PortfolioMetrics = typeof PortfolioMetrics
