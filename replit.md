# replit.md

## Overview

This is a full-stack React TypeScript application named "rest-express" that serves as a landing page for Devura, an AI subnet launching on the Bittensor network. The application is built with modern web technologies including React, Express.js, and Drizzle ORM, featuring a clean architecture with separate client and server directories.

## System Architecture

The application follows a monorepo structure with clear separation of concerns:

- **Frontend**: React SPA with Vite bundler, TypeScript, and Tailwind CSS
- **Backend**: Express.js server with TypeScript support
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **UI Components**: shadcn/ui component library for consistent design
- **State Management**: TanStack Query for server state management

## Key Components

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Bundler**: Vite with hot module replacement
- **Styling**: Tailwind CSS with custom Devura theme variables
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Routing**: Wouter for lightweight client-side routing
- **Forms**: React Hook Form with Zod validation
- **Animations**: Framer Motion for smooth animations

### Backend Architecture
- **Server**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Validation**: Zod schemas for request/response validation
- **Storage**: Abstracted storage interface with in-memory and database implementations
- **Middleware**: Custom logging and error handling middleware

### Database Schema
```typescript
// Users table for future authentication
users: {
  id: serial primary key
  username: text unique
  password: text
}

// Email signups for newsletter collection
email_signups: {
  id: serial primary key
  email: text unique
  subscribed_at: timestamp
  is_active: boolean
}
```

## Data Flow

1. **Email Signup Flow**:
   - User enters email on landing page
   - Frontend validates email format using Zod
   - POST request to `/api/signup` endpoint
   - Server validates and checks for duplicates
   - Email stored in database with timestamp
   - Success/error feedback displayed to user

2. **Admin Data Access**:
   - GET `/api/signups` endpoint for retrieving all signups
   - Currently no authentication (future enhancement needed)

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Neon PostgreSQL database driver
- **@tanstack/react-query**: Server state management
- **drizzle-orm**: Type-safe database ORM
- **framer-motion**: Animation library
- **react-hook-form**: Form handling
- **zod**: Schema validation

### UI Dependencies
- **@radix-ui/***: Unstyled, accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **lucide-react**: Icon library
- **class-variance-authority**: Styling variants utility

## Deployment Strategy

### Development
- `npm run dev`: Starts development server with hot reload
- Vite dev server proxies API requests to Express backend
- TypeScript compilation in watch mode

### Production Build
- `npm run build`: 
  1. Builds React frontend with Vite
  2. Bundles Express server with esbuild
  3. Outputs to `dist/` directory
- `npm start`: Runs production server from built files

### Database Management
- `npm run db:push`: Pushes schema changes to database
- Drizzle migrations stored in `./migrations/` directory
- Requires `DATABASE_URL` environment variable

## Changelog

```
Changelog:
- June 27, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```

## Architecture Decisions

### Problem: Full-stack TypeScript Development
**Solution**: Monorepo structure with shared types and utilities
**Rationale**: Enables code sharing between client and server while maintaining clear boundaries

### Problem: Database Integration  
**Solution**: Drizzle ORM with PostgreSQL
**Rationale**: Type-safe database operations with excellent TypeScript integration, though the application currently uses in-memory storage for development

### Problem: UI Consistency
**Solution**: shadcn/ui component system
**Rationale**: Provides consistent, accessible components while allowing customization

### Problem: Form Validation
**Solution**: React Hook Form + Zod
**Rationale**: Excellent developer experience with type-safe validation and minimal re-renders

### Problem: Server State Management
**Solution**: TanStack Query
**Rationale**: Handles caching, synchronization, and error states for API interactions

### Problem: Styling Architecture
**Solution**: Tailwind CSS with CSS custom properties
**Rationale**: Utility-first approach with custom Devura brand colors defined as CSS variables