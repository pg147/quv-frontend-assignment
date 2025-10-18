# 🎨 EduVista — Frontend Assignment (React + Mantine UI)

A responsive, pixel-refined landing page built with **React** and **Mantine UI**, developed as part of a frontend assignment.  
The project focuses on **design accuracy**, **clean architecture**, and **scalable, theme-driven UI** — following all given guidelines with attention to detail and frontend craftsmanship.

---

## ✨ Overview

EduVista is a single-page, responsive landing interface that closely follows the provided Figma design.  
Every layout, spacing, and typographic element has been implemented using Mantine’s **theming and style props**, ensuring design consistency and maintainability without external CSS frameworks.

The page has been structured semantically (`header`, `nav`, `main`, `section`, `footer`) to enhance accessibility, SEO, and code readability.

---

## 🧰 Tech Stack

| Tool | Purpose |
|------|----------|
| **React 19.1.1** | UI library for building the component-based architecture |
| **Mantine UI 8.3.5** | Core design system and theming engine |
| **Vite 7.1.7** | Lightweight bundler and development server |
| **TypeScript 5.9.3** | Type-safe, scalable development |
---

## 🧩 Implementation Highlights

### 🎯 1. Design Accuracy & Responsiveness
- Layout and visual hierarchy implemented to mirror the Figma design precisely across all breakpoints.
- Responsive grid and flex layouts built with Mantine’s `Grid`, `Flex`, `Box` components.
- Each section maintains a consistent vertical rhythm for readability and balanced whitespace.

### 🎨 2. Theming & Styling
- Entire UI styled using Mantine’s **theme configuration** — all color tokens, spacing, and typography centralized under `src/theme/theme.ts`.
- No Tailwind, styled-components, or external CSS frameworks used.
- Mantine `component` props (e.g., `component="header"`) used for semantic structure.

### 🧱 3. Component Architecture
- Atomic, modular folder structure ensures reusability and clarity:

````bash
src/
├── components/ # Core UI elements (Navbar, Button, etc.)
├── sections/ # Page-level sections (Hero, Features, Footer)
├── theme/ # Mantine theme and color configuration
├── constants/ # Static values and enums
├── types/ # Shared TypeScript types
├── App.tsx # Root composition
└── main.tsx # Entry point
````


### ⚙️ 4. State & Logic
- Simple, localized React state used where necessary (no over-engineering).
- Focused entirely on clean UI flow and visual accuracy.

### ♿ 5. Accessibility
- Landmarks implemented semantically (`header`, `nav`, `main`, `footer`).
- All buttons, links, and interactive elements have ARIA roles.

---

## 🪄 Design Rationale & Improvements

While maintaining alignment with the provided Figma design, I introduced thoughtful refinements to elevate the visual and interaction quality:

| Aspect | Improvement | Rationale |
|--------|--------------|-----------|
| **Typography** | Replaced Montserrat with **DM Sans** | Better legibility and modern tone aligning with the design’s educational theme |
| **Spacing & Rhythm** | Adjusted paddings, gaps, and margins | Improved vertical rhythm and balance, especially on smaller viewports |
| **Visual Hierarchy** | Rebalanced text weights and section separations | Enhances scannability and overall page flow |
| **Responsive Behavior** | Refined breakpoints and column stacking | Ensures consistent visual proportion between text and images |
| **Accessibility** | Semantic HTML + aria-labels | Better for screen readers and SEO crawlers |

These decisions were guided by both **frontend design instinct** and **user experience awareness**, maintaining fidelity to the design intent while improving usability and polish.

---

## 🚀 Getting Started

### To run the project locally:
```bash
npm run start:project
```