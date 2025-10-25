# AI Club Website Design Guidelines

## Design Approach
**System-Based Approach**: Light theme design with cyan-emerald gradient system, modern card-based layouts, professional spacing, and smooth animations throughout.

## Color System

**Primary Palette:**
- Primary: #0891b2 (Cyan 600) - Main brand color
- Secondary: #059669 (Emerald 600) - Secondary actions
- Background: #ffffff (Pure White)
- Surface: #f8fafc (Slate 50) - Card backgrounds
- Text Primary: #0f172a (Slate 900)
- Text Secondary: #475569 (Slate 600)
- Border: #e2e8f0 (Slate 200)

**Gradients:**
- Hero/Buttons: Cyan to Emerald (#0891b2 to #059669)
- Background: Light blue to light green (#f0f9ff to #ecfdf5)
- Card accents: White to Slate 50

## Typography

**Font Families:** Inter, Poppins, or system-ui

**Hierarchy:**
- H1: 64px (desktop), 40px (mobile) - Gradient text, -0.02em letter-spacing
- H2: 36px - Bold, #0f172a
- H3: 28px - Bold
- H4: 24px
- Body: 16-18px, line-height 1.6-1.8, #475569

## Layout System

**Spacing Primitives:**
- Section padding: 100px vertical (desktop), 60px (mobile)
- Container max-width: 1280px
- Grid gaps: 32px (desktop), 20px (mobile)
- Card padding: 32px

**Grid Systems:**
- Objectives: 3 columns (desktop) → 2 (tablet) → 1 (mobile)
- Team: 4 columns → 3 → 2
- Editorials: 3 columns → 2 → 1
- About Features: 2x2 grid

## Component Library

### Navigation Bar
- Height: 80px, sticky with white background
- Blur backdrop on scroll with subtle shadow
- Logo: Gradient text (cyan to emerald)
- Links: #475569, hover #0891b2, active with bottom border
- Mobile: Animated hamburger to X, slide-in drawer from right
- Social icons with gradient hover backgrounds

### Hero Section
- Full viewport height with gradient background
- Subtle geometric pattern overlay
- Main heading with gradient text (64px)
- Animated typing tagline effect
- Dual CTA buttons: Primary (gradient) + Secondary (white with border)
- Statistics row: White cards with counter animations
- Animated scroll indicator (cyan arrow)

### Cards (Universal Pattern)
- White background with shadow (0 4px 6px rgba(0,0,0,0.1))
- Border radius: 16px
- Hover: translateY(-4px) + stronger shadow
- Icons in gradient circles
- Staggered fade-in animations on scroll

### Buttons
- Primary: Gradient background (cyan to emerald), white text
- Secondary: White background, cyan border and text
- Border radius: 8px
- Hover: lift effect (translateY(-2px)), opacity 0.9
- Transitions: 300ms ease-in-out

### Feature Cards (About Section)
- 2x2 grid layout
- Icon in gradient circle at top
- Bold heading (#0f172a)
- Single line description
- Hover lift effect

### Objective Cards
- 6 cards in responsive grid
- 2px solid border (#e2e8f0)
- Hover: gradient border (cyan to emerald)
- Icon in light cyan circle background
- 2-3 line descriptions
- Staggered entrance animations

### Statistics Display
- Large gradient numbers with counter animations
- Icons in gradient circles
- White cards with gradient top border
- 4 stat items in row

### Team Cards
- Circular photos (200x200px) with 4px white border + gradient outer border
- Name: Bold, #0f172a, 20px
- Role: Gradient text, 16px
- Department info: #475569, 14px
- LinkedIn icon with gradient hover
- Category filtering (Faculty/Students/Core)

### Timeline (Activities)
- Vertical gradient line (cyan to emerald)
- Gradient circle dots with white borders
- Cards alternate left-right (desktop), stacked (mobile)
- Date badges: Gradient background, white text
- Category tags: Color-coded backgrounds (cyan/purple/blue/green)
- Image galleries: 3-4 gradient placeholders with rounded corners
- Participant count and tag pills in footer

### Editorial Cards
- Featured: Full-width with large image, gradient CTA button
- Grid cards: 16:9 image ratio with category badge overlay
- Author avatars (tiny circular)
- Read time and date (#94a3b8)
- Hover lift effect with shadow increase

### Filter/Category Pills
- Active: Gradient background, white text, shadow
- Inactive: White background, gray text, border
- Smooth transitions between states

## Animations & Interactions

**Timing:** 300ms ease-in-out standard

**Effects:**
- Card hovers: translateY(-4px)
- Counter animations on statistics
- Typing effect for hero tagline
- Staggered fade-in for card grids
- Smooth scroll to sections
- Hamburger to X animation
- Image zoom on hover (subtle)

**Scroll Behaviors:**
- Active navigation highlighting
- Scroll indicator in hero
- Timeline reveals on scroll
- Backdrop blur on navbar scroll

## Images

**Hero Section:** No large hero image - uses gradient background with geometric pattern overlay instead.

**Throughout Site:**
- Team member photos: Circular gradient-bordered avatars (use colored placeholders)
- Activity cards: 3-4 event images in grid layouts (gradient placeholders with icons)
- Editorial cards: 16:9 featured images (gradient placeholders)
- Use gradient colored placeholders with relevant icons until real images available

## Responsive Behavior

**Breakpoints:**
- Desktop: 1280px max container
- Tablet: 2-3 columns
- Mobile: Single column, stacked layouts, 60px section padding

**Mobile Adjustments:**
- Hamburger menu with slide-in drawer
- Typography scales down (H1: 40px)
- Statistics stack vertically
- Timeline becomes single column
- Grid gaps reduce to 20px

## Shadows & Depth

- Small: 0 1px 3px rgba(0,0,0,0.1)
- Medium: 0 4px 6px rgba(0,0,0,0.1)
- Large: 0 10px 25px rgba(0,0,0,0.1)
- Hover states increase shadow depth

## Special Treatments

- Gradient text for headings and key elements
- Highlight boxes: Light cyan background (#ecfeff) with 4px left border
- Badge elements: Gradient backgrounds with white text
- Search bar: White with shadow, gradient border on focus
- Pagination: Numbered buttons, active with gradient