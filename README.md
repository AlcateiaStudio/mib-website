# Technical & Functional Specification: "Made in Bugs" Studio Website

**Version:** 1.0  
**Date:** July 7, 2025  
**Project Owner:** Made in Bugs Studio

## 1. Project Overview

### 1.1. Concept
The "Made in Bugs" website will serve as the online presence for the indie game studio. The brand's identity is playful and self-aware, embracing the chaotic nature of game development. The central theme revolves around the mascot, "Sisyphus," a dung beetle, symbolizing perseverance through "bugs" to create quality games.

### 1.2. Aesthetic
The visual style should be minimalistic, clean, and charming, heavily inspired by the hand-drawn, crayon-like aesthetic of indie games like "Baba Is You." The overall feel should be light, friendly, and interactive.

## 2. Technical Stack

- **Framework:** Next.js (using the App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Deployment:** Github Pages
- **Internationalization:** i18n

## 3. Global Features & Requirements

### 3.1. Internationalization
The website **MUST** be fully internationalized to support multiple languages.

**Initial Languages:**
- Brazilian Portuguese (pt-BR) - Default
- English (en-US)

**Routing:** The URL structure **MUST** reflect the current locale (e.g., `madeinbugs.com/en/about`, `madeinbugs.com/pt-br/about`).

**Content Management:** All user-facing strings **MUST** be sourced from locale-specific JSON files (e.g., `locales/en.json`, `locales/pt.json`). No hardcoded text is permitted in the components.

**UI:** A language switcher component, represented by national flags, **MUST** be present in a consistent location on all pages (e.g., top-right corner).

## 4. Page-Specific Specifications

### 4.1. Homepage (/)
The homepage is the primary interactive experience and does not scroll. It serves as a visual and interactive hub.

**Layout:**
- A single, full-viewport view. No scrolling.
- All content is to be centered vertically and horizontally.

#### Component: SisyphusMascot
This is the central UI element. It **MUST** be interactive.

- **Idle State:** The component **MUST** continuously cycle through 2-3 similar sprites of Sisyphus every ~500ms to create a subtle, "breathing" or "wiggling" animation.
- **Hover State:** On `onMouseEnter`, the component **MUST** trigger a unique, playful animation or switch to a "curious" sprite. On `onMouseLeave`, it should revert to the idle state animation. State management (`useState`) will be required to track the hover state.
- **Click State:** On `onClick`, the component **MUST** trigger another unique, more expressive animation (e.g., a jump, a wave, a funny gesture).

#### Component: NavigationMenu
This component contains the navigation buttons that appear around the SisyphusMascot.

- **Appearance Animation:** The buttons **SHOULD NOT** be visible on initial page load. After a short delay (e.g., 1 second), they **MUST** appear one by one or simultaneously with a cartoon-style "puff of smoke" animation. This can be achieved using a CSS sprite sheet animation or a sequence of images.

#### Component: NavButton
Each button is a separate instance of this component.

- **Props:** The component should accept props like `href` (e.g., `/about`), `imageSrc`, `hoverImageSrc`, and `labelTextKey` (for the i18n label).
- **Visuals:** The button's appearance is an image/drawing (e.g., `button_team.png`).
- **Hover Effect:** On `onMouseEnter`, the `src` of the button's image **MUST** be swapped to the `hoverImageSrc` (e.g., `button_team_hover.png`). On `onMouseLeave`, it **MUST** revert.
- **Navigation:** On `onClick`, the component **MUST** navigate the user to the corresponding page. Example: move to `/illustrations`.
- **Initial Buttons:** Team, Illustrations, Games, About, Contact.

### 4.2. Content Pages (Template)
This applies to all sub-pages like `/about`, `/team`, `/games`, etc.

**Layout:**
- These pages **MUST** be scrollable.
- They should feature a consistent layout, including a simple header (perhaps with a small version of the logo) and a footer.
- The language switcher component must be present.

**Content:**
- The main content area will be populated based on the page's purpose.
- Styling for headers, paragraphs, and other elements should adhere to the global hand-drawn aesthetic.

## 5. Asset Requirements

All assets should be provided as high-quality PNGs with transparent backgrounds, optimized for the web.

### Mascot Sprites (SisyphusMascot):
- `sisyphus_idle_01.png`, `sisyphus_idle_02.png`, `sisyphus_idle_03.png`
- `sisyphus_hover.png` (or sprite sheet for hover animation)
- `sisyphus_click.png` (or sprite sheet for click animation)

### Navigation Buttons (NavButton):
- `button_team.png`, `button_team_hover.png`
- `button_illustrations.png`, `button_illustrations_hover.png`
- `button_games.png`, `button_games_hover.png`
- `button_about.png`, `button_about_hover.png`
- `button_contact.png`, `button_contact_hover.png`

### Animation Sprites:
- `smoke_puff_animation.png` (sprite sheet for the button appearance animation)

### UI Elements:
- `flag_br.png` (Brazil)
- `flag_us.png` (USA)
- `logo_main.png` (Main studio logo, if different from mascot)
- `logo_small.png` (For use in headers on sub-pages)

## 6. Implementation Plan

### Phase 1: Project Setup & Dependencies

#### Step 1: Complete Package Dependencies
- Add missing core dependencies to `package.json`:
  - `next` (latest stable version)
  - `react` and `react-dom`
  - `typescript`
  - `tailwindcss`, `autoprefixer`, `postcss`
  - `@types/react` and `@types/react-dom`
- Install all dependencies using `npm install`

#### Step 2: Configure Tailwind CSS
- Initialize Tailwind CSS configuration (`tailwind.config.js`)
- Create `postcss.config.js`
- Add Tailwind directives to main CSS file
- Configure Tailwind for custom fonts and colors to match "Baba Is You" aesthetic

#### Step 3: Setup Internationalization Messages
- Create `messages/en.json` with all English text strings
- Create `messages/pt-BR.json` with all Portuguese text strings
- Include navigation labels, page titles, and all UI text
- Ensure proper locale structure matches i18n configuration

#### Step 4: Create Next.js App Router Structure
- Create `src/app` directory structure
- Setup layout files with proper i18n routing: `src/app/[locale]/layout.tsx`
- Create middleware for locale handling: `src/middleware.ts`
- Configure proper routing for both locales

### Phase 2: Core Components Development

#### Step 5: Language Switcher Component
- Create `src/components/LanguageSwitcher.tsx`
- Implement flag-based language switching
- Add proper styling with flag images
- Ensure component works across all pages
- Test locale switching functionality

#### Step 6: SisyphusMascot Component
- Create `src/components/SisyphusMascot.tsx`
- Implement idle animation state (cycling through 2-3 sprites every ~500ms)
- Add hover state management with `useState`
- Implement click animation functionality
- Add proper TypeScript interfaces for component props
- Ensure smooth transitions between animation states

#### Step 7: NavButton Component
- Create `src/components/NavButton.tsx`
- Implement image swapping on hover (imageSrc ↔ hoverImageSrc)
- Add proper navigation functionality using Next.js routing
- Include internationalized label support
- Add proper TypeScript props interface
- Implement smooth hover transitions

#### Step 8: NavigationMenu Component
- Create `src/components/NavigationMenu.tsx`
- Implement delayed appearance animation (1 second delay)
- Add "puff of smoke" animation effect using Framer Motion
- Position buttons around the mascot properly
- Create all 5 navigation buttons (Team, Illustrations, Games, About, Contact)
- Ensure responsive positioning

### Phase 3: Page Implementation

#### Step 9: Homepage Layout
- Create `src/app/[locale]/page.tsx` (homepage)
- Implement full-viewport, no-scroll layout
- Center all content vertically and horizontally
- Integrate SisyphusMascot and NavigationMenu components
- Add proper styling for the minimalistic aesthetic
- Ensure proper responsive behavior

#### Step 10: Content Page Template
- Create `src/components/ContentLayout.tsx` template
- Implement scrollable layout with header and footer
- Add small logo in header
- Integrate LanguageSwitcher in consistent position
- Create proper content area styling
- Ensure consistent styling across all pages

#### Step 11: Individual Content Pages
- Create `src/app/[locale]/about/page.tsx`
- Create `src/app/[locale]/team/page.tsx`
- Create `src/app/[locale]/games/page.tsx`
- Create `src/app/[locale]/illustrations/page.tsx`
- Create `src/app/[locale]/contact/page.tsx`
- Add placeholder content for each page
- Ensure all pages use ContentLayout template

### Phase 4: Styling & Animations

#### Step 12: Global Styling System
- Create global CSS with Tailwind customizations
- Implement hand-drawn, crayon-like aesthetic
- Add custom fonts that match "Baba Is You" style
- Create color palette for the playful theme
- Add proper typography scaling and spacing

#### Step 13: Animation Implementation
- Implement sprite-based animations using Framer Motion
- Create smooth transitions for all interactive elements
- Add loading animations and micro-interactions
- Ensure animations are performant and accessible
- Test animations across different devices

#### Step 14: Responsive Design
- Implement mobile-first responsive design
- Ensure homepage works well on all screen sizes
- Adapt navigation menu for mobile devices
- Test touch interactions on mobile
- Ensure proper image optimization for all devices

### Phase 5: Assets & Content Integration

#### Step 15: Asset Organization
- Create proper folder structure in `public/assets/`
- Organize sprites: `public/assets/sprites/`
- Organize buttons: `public/assets/buttons/`
- Organize UI elements: `public/assets/ui/`
- Optimize all images for web delivery
- Create fallback images for missing assets

#### Step 16: Content Management
- Populate all internationalization files with final content
- Add proper metadata for SEO in both languages
- Create consistent content structure across all pages
- Ensure all text follows the playful, self-aware brand voice
- Add proper alt text for all images

### Phase 6: Testing & Optimization

#### Step 17: Functionality Testing
- Test all interactive elements (mascot animations, buttons, navigation)
- Verify internationalization works correctly
- Test all page transitions and routing
- Ensure proper error handling
- Test accessibility features

#### Step 18: Performance Optimization
- Optimize images and sprites for web delivery
- Implement proper image loading strategies
- Minimize JavaScript bundle size
- Optimize CSS delivery
- Test loading performance across different network conditions

#### Step 19: Browser Compatibility
- Test across major browsers (Chrome, Firefox, Safari, Edge)
- Ensure animations work consistently
- Test mobile browser compatibility
- Fix any browser-specific issues
- Validate HTML and CSS

### Phase 7: Deployment & Final Steps

#### Step 20: GitHub Pages Deployment
- Verify static export configuration in `next.config.js`
- Test build process (`npm run build`)
- Configure GitHub Actions for automatic deployment
- Test deployed site functionality
- Ensure all assets load correctly in production

#### Step 21: Final Quality Assurance
- Comprehensive testing of all features
- Verify internationalization in production
- Test all animations and interactions
- Check responsive behavior across devices
- Validate SEO and metadata

#### Step 22: Documentation & Handoff
- Document component usage and props
- Create deployment instructions
- Document content management process
- Create troubleshooting guide
- Prepare project handoff materials

### Phase 8: Future Enhancements (Optional)

#### Step 23: Performance Monitoring
- Implement analytics tracking
- Monitor Core Web Vitals
- Track user interactions with mascot and navigation
- Gather feedback on user experience

#### Step 24: Content Expansion
- Add more languages if needed
- Expand content on existing pages
- Add new sections as studio grows
- Implement content management system if needed

### Assets Required Before Implementation
- All Sisyphus mascot sprites (idle, hover, click states)
- All navigation button images (normal and hover states)
- Flag images for language switcher
- Logo variations (main and small)
- Smoke puff animation sprite sheet
- Any additional UI elements or decorative graphics

### Technical Considerations
- Ensure all animations are optimized for performance
- Implement proper error boundaries for React components
- Use semantic HTML for accessibility
- Implement proper TypeScript types throughout
- Follow Next.js best practices for App Router
- Ensure proper SEO optimization for both languages