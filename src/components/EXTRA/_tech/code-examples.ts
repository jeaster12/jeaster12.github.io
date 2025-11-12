// Code examples for technical-examples.astro
// All code snippets used in the technical examples page

export const performanceToolExample = `// Available MCP Tools for Performance Analysis
tools.bundle_size_check({
  component: "UserDashboard.tsx",
  threshold: "50kb"
})

tools.dependency_analysis({
  file: "src/components/Chart.tsx",
  check: "heavy_dependencies"
})

tools.render_performance({
  component: "ProductList",
  metric: "time_to_interactive"
})`

export const a11yToolExample = `// Available MCP Tools for Accessibility
tools.axe_audit({
  file: "src/components/Modal.tsx",
  level: "WCAG2.1AA"
})

tools.aria_validation({
  component: "CustomDropdown",
  check_roles: true,
  check_labels: true
})

tools.keyboard_navigation({
  component: "Navigation",
  verify_focus_order: true
})`

export const designSystemToolExample = `// Available MCP Tools for Design System
tools.token_validation({
  file: "Button.tsx",
  check_colors: true,
  check_spacing: true,
  check_typography: true
})

tools.component_api_check({
  component: "Button",
  verify_props: ["variant", "size", "disabled"]
})

tools.pattern_compliance({
  file: "LoginForm.tsx",
  patterns: ["form-validation", "error-handling"]
})`

export const exampleResponse = `Based on my analysis of UserDashboard.tsx:
## Performance Issues Found

1. **Heavy Dependency Detected**
   - lodash (71.4 kB) imported but only using 2 methods
   - Recommendation: Use lodash-es with tree-shaking or individual imports
   - Impact: -65 kB in bundle size

2. **Inefficient Rendering**
   - \`useEffect\` without dependencies causing re-renders
   - Location: Line 42
   - Fix: Add [userId, dateRange] to dependency array

3. **Large Initial Bundle**
   - Current: 128 kB (gzipped: 42 kB)
   - Threshold: 50 kB
   - Recommendation: Code-split ChartComponent and lazy load

✓ All checks grounded in actual file analysis and design system rules
✓ Recommendations based on configured thresholds and best practices`

export const cardBeforeExample = `import React from 'react';

interface CardProps {
  title: string;
  children: React.ReactNode;
}

export function Card({ title, children }: CardProps) {
  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        border: '1px solid #e5e7eb',
        borderRadius: '8px',
        padding: '24px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
      }}
    >
      <h3 style={{
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#111827',
        marginBottom: '16px'
      }}>
        {title}
      </h3>
      <div style={{ color: '#6b7280' }}>
        {children}
      </div>
    </div>
  );
}`

export const cardAfterExample = `import React from 'react';
import { Card as DSCard } from '@/components/ui/Card';

interface CardProps {
  title: string;
  children: React.ReactNode;
}

export function Card(\{ title, children \}: CardProps) {
  return (
    <DSCard>
      <DSCard.Header>
        <DSCard.Title>\{title\}</DSCard.Title>
      </DSCard.Header>
      <DSCard.Content>
        \{children\}
      </DSCard.Content>
    </DSCard>
  );
}`

export const deleteButtonBeforeExample = `import React from 'react';
import { TrashIcon } from '@/components/icons';

interface DeleteButtonProps {
  onDelete: () => void;
}

export function DeleteButton(\{ onDelete \}: DeleteButtonProps) {
  return (
    <button
      onClick=\{onDelete\}
      className="p-2 rounded hover:bg-red-50"
    >
      <TrashIcon className="w-5 h-5 text-red-600" />
    </button>
  );
}`

export const deleteButtonAfterExample = `import React from 'react';
import { TrashIcon } from '@/components/icons';

interface DeleteButtonProps {
  onDelete: () => void;
}

export function DeleteButton(${'{ onDelete }'}: DeleteButtonProps) {
  return (
    <button
      onClick=${'{onDelete}'}
      className="p-2 rounded hover:bg-red-50"
      aria-label="Delete item"
    >
      <TrashIcon className="w-5 h-5 text-red-600" />
    </button>
  );
}`

export const typeScriptTypesExample = `// Before: UserResponse had a 'name' field
export interface UserResponse {
  id: string;
  name: string;  // <- This field was removed
  email: string;
  role: 'admin' | 'user';
}

// After: Changed to firstName and lastName
export interface UserResponse {
  id: string;
  firstName: string;  // <- Split into two fields
  lastName: string;
  email: string;
  role: 'admin' | 'user';
}`

export const userProfileBeforeExample = `import React from 'react';
import { UserResponse } from '@/api/types';

interface UserProfileProps {
  user: UserResponse;
}

export function UserProfile(\{ user \}: UserProfileProps) {
  return (
    <div className="card">
      <h2>\{user.name\}</h2>  \{/* Property 'name' does not exist */\}
      <p>\{user.email\}</p>
      <span>\{user.role\}</span>
    </div>
  );
}`

export const userProfileAfterExample = `import React from 'react';
import { UserResponse } from '@/api/types';

interface UserProfileProps {
  user: UserResponse;
}

export function UserProfile(\{ user \}: UserProfileProps) {
  const fullName = \`\$\{user.firstName\} \$\{user.lastName\}\`;

  return (
    <div className="card">
      <h2>\{fullName\}</h2>
      <p>\{user.email\}</p>
      <span>\{user.role\}</span>
    </div>
  );
}`

export const datePickerBeforeExample = `import React from 'react';
import moment from 'moment';  // <- Large library (232 KB)

interface DatePickerProps {
  value: Date;
  onChange: (date: Date) => void;
}

export function DatePicker(\{ value, onChange \}: DatePickerProps) {
  const formattedDate = moment(value).format('YYYY-MM-DD');

  return (
    <input
      type="date"
      value=\{formattedDate\}
      onChange=\{(e) => onChange(moment(e.target.value).toDate())\}
    />
  );
}`

export const datePickerAfterExample = `import React from 'react';

interface DatePickerProps {
  value: Date;
  onChange: (date: Date) => void;
}

export function DatePicker(\{ value, onChange \}: DatePickerProps) {
  // Use native Date API (0 KB added to bundle)
  const formattedDate = value.toISOString().split('T')[0];

  return (
    <input
      type="date"
      value=\{formattedDate\}
      onChange=\{(e) => onChange(new Date(e.target.value))\}
    />
  );
}`

export const richTextBeforeExample = `import React from 'react';

interface RichTextDisplayProps {
  content: string;  // HTML string from user input
}

export function RichTextDisplay(\{ content \}: RichTextDisplayProps) {
  // DANGEROUS: Directly rendering user HTML
  return (
    <div
      dangerouslySetInnerHTML=\{\{ __html: content \}\}
      className="prose"
    />
  );
}`

export const richTextAfterExample = `import React, { useMemo } from 'react';
import DOMPurify from 'dompurify';

interface RichTextDisplayProps {
  content: string;  // HTML string from user input
}

export function RichTextDisplay(\{ content \}: RichTextDisplayProps) {
  // Sanitize HTML to prevent XSS attacks
  const sanitizedContent = useMemo(() => {
    return DOMPurify.sanitize(content, \{
      ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'u', 'a', 'ul', 'ol', 'li'],
      ALLOWED_ATTR: ['href', 'title'],
      ALLOW_DATA_ATTR: false,
    \});
  \}, [content]);

  return (
    <div
      dangerouslySetInnerHTML=\{\{ __html: sanitizedContent \}\}
      className="prose"
    />
  );
}`

export const analyzeBundleExample = `// VS Code extension queries MCP server
const analysis = await mcp.analyzeBundleImpact({
  component: 'DatePicker',
  context: { pageBundle: 280kb, budget: 350kb }
});
// Returns: alternative suggestions + dependency chain`
