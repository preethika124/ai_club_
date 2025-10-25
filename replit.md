# AI Club Website

## Overview

This is a professional AI Club website built with React, TypeScript, Express, and PostgreSQL. The application showcases club activities, team members, editorial content, and achievements through a modern, responsive interface with a light theme design featuring cyan-to-emerald gradients.

The website provides a content management system for displaying team members, events/activities, articles, and achievements. It uses a full-stack architecture with a REST API backend and a React frontend featuring smooth animations and modern UI components from shadcn/ui.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**React SPA with TypeScript**
- Single-page application using Wouter for client-side routing
- Component-based architecture with reusable UI components
- TypeScript for type safety across the application
- Path aliases configured for clean imports (`@/`, `@shared/`, `@assets/`)

**UI Component Library**
- shadcn/ui components based on Radix UI primitives
- Tailwind CSS for styling with custom design system
- Framer Motion for animations and transitions
- Custom theme configuration with CSS variables for light mode

**State Management**
- TanStack Query (React Query) for server state management
- Query client configured with custom fetch handlers
- Automatic caching and background refetching disabled for static content
- Toast notifications for user feedback

**Design System**
- Custom color palette: Cyan (#0891b2) and Emerald (#059669) as primary colors
- Gradient system for hero sections and interactive elements
- Typography based on Inter and Poppins fonts
- Responsive spacing and grid systems defined in design guidelines
- Card-based layouts with consistent border radius (16px for cards, 8px for buttons)

### Backend Architecture

**Express.js REST API**
- RESTful endpoints for CRUD operations on club data
- Middleware for JSON parsing and request logging
- Custom request/response logging with timing
- Separation of concerns: routes, storage layer, and server setup

**Storage Layer (In-Memory with Database Schema)**
- Interface-based storage (`IStorage`) for easy swapping between implementations
- Current implementation uses in-memory storage (`MemStorage`)
- Seeded with initial data for team members, events, articles, and achievements
- Ready for PostgreSQL integration via Drizzle ORM

**API Endpoints Structure**
- `/api/team` - Team member management (with category filtering)
- `/api/events` - Events/activities (with year filtering)
- `/api/articles` - Editorial content (with category and search filtering)
- `/api/achievements` - Club achievements and statistics

### Data Models

**Team Members**
- Attributes: name, role, category (faculty/student/core), department, year, LinkedIn, avatar color
- Categories enable role-based filtering in the UI

**Events/Activities**
- Attributes: title, description, category, date components (date/month/year), participant count, tags, image count
- Categories: Workshop, Hackathon, Seminar, Project, Event, Competition

**Articles**
- Attributes: title, excerpt, category, author info, date, read time, featured flag
- Categories: Tutorials, Events, Research, Projects, Insights
- Featured articles displayed prominently

**Achievements**
- Attributes: title, description, icon, category
- Used to showcase club milestones and accomplishments

### Build System

**Vite for Development and Production**
- Fast HMR (Hot Module Replacement) during development
- Optimized production builds with code splitting
- Custom plugins for Replit integration (runtime error overlay, dev banner, cartographer)
- Separate client and server build processes

**Development Workflow**
- `npm run dev` - Runs Express server with Vite middleware for HMR
- `npm run build` - Builds both frontend (Vite) and backend (esbuild)
- `npm run start` - Production server serving static assets
- `npm run check` - TypeScript type checking

**Module System**
- ESM (ES Modules) throughout the application
- Node.js with `"type": "module"` in package.json
- Import path resolution configured in both TypeScript and Vite

### Styling Architecture

**Tailwind CSS with Custom Configuration**
- Extended color system using HSL with CSS variables
- Custom border radius values for consistent design
- Responsive breakpoints and mobile-first approach
- PostCSS for processing with autoprefixer

**CSS Variables for Theming**
- Light mode defined in `:root` with HSL color values
- Semantic color names (background, foreground, primary, secondary, etc.)
- Component-specific colors (card, popover, sidebar borders)
- Interactive state colors (hover elevations, active states)

## External Dependencies

### Database
- **Drizzle ORM** - Type-safe SQL toolkit for PostgreSQL
- **@neondatabase/serverless** - Serverless PostgreSQL driver
- Schema defined in `shared/schema.ts` with Zod validation
- Migration support via drizzle-kit
- Note: Currently using in-memory storage; PostgreSQL can be added by setting `DATABASE_URL` environment variable

### UI Libraries
- **Radix UI** - Headless UI primitives (20+ component packages)
- **shadcn/ui** - Pre-built accessible components built on Radix
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **react-type-animation** - Typing animation effects
- **react-intersection-observer** - Scroll-triggered animations

### State & Data Fetching
- **TanStack Query v5** - Server state management and caching
- Custom query client with unified error handling

### Forms & Validation
- **react-hook-form** - Form state management
- **@hookform/resolvers** - Validation resolver adapters
- **zod** - Schema validation library
- **drizzle-zod** - Generate Zod schemas from Drizzle schemas

### Routing
- **wouter** - Lightweight client-side routing

### Icons
- **react-icons** - Icon library (Font Awesome icons used throughout)
- **lucide-react** - Additional icon set for UI components

### Development Tools
- **TypeScript** - Static type checking
- **Vite** - Build tool and dev server
- **esbuild** - JavaScript bundler for server code
- **tsx** - TypeScript execution for development
- **@replit/vite-plugin-* ** - Replit-specific development plugins

### Session Management
- **connect-pg-simple** - PostgreSQL session store (for future authentication)

### Utilities
- **class-variance-authority** - Type-safe variant handling for components
- **clsx** - Conditional className utility
- **tailwind-merge** - Merge Tailwind classes intelligently
- **date-fns** - Date manipulation and formatting
- **embla-carousel-react** - Carousel component for image galleries