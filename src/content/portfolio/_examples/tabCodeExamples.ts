export const tabCodeExamples = {
  dev: `// In VS Code command palette
mcp.search_components({
  query: 'primary button with loading'
}) // → returns component + props + usage

// Apply and validate
mcp.validate({
  file: 'Button.tsx'
}) // → OK (a11y + tokens)`,
  vsCode: `// Triggers suggestion while typing
const button = <button type="Primary"...
// Tab autocompletes`,
  github: `// Design System Validation
✓ Accessibility Check (WCAG 2.1 AA)
✓ Token Usage: 94% compliant`,
  designer: `// Spec Snapshot
Component: PrimaryButton
Props: variant, size, isLoading
Tokens: color.primary.500, spacing.md, radius.sm
A11y: contrast ≥ 4.5:1, focus ring visible`,
  figma: `// Figma Checks
Component: PrimaryButton
Status: ✓ Implemented
Usage: 247 instances`,
  qa: `{
  "component": "PrimaryButton",
  "checks": { "tokens": "pass", "contrast": "pass", "aria": "warn" },
  "warnings": ["Add aria-live='polite' for dynamic label"]
}`,
  po: `{
  "feature": "Payments v2",
  "compliance": 0.98,
  "a11y": { "blocking": 0, "warnings": 2 },
  "predicted_cycle_time_change": -0.18
}`,
  cli: `$ dsValidate
Scanned 1,247 files
Compliance: 94%
Blocked: 3
`
}
