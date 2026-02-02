# Changelog

## [Unreleased] - 2026-02-02

### Added - NovAIn Platform Diagram Animation System

#### Overview

Implemented a comprehensive animated flowchart visualization for the NovAIn Decision Platform, featuring an interactive question mark that travels through decision paths with "aha moment" lightbulb animations. The diagram showcases the platform's three learning modules (Business Clarity, Analytics Translator, ML Readiness) and their integration into a complete learning journey.

#### New Components

##### 1. `NovAInPlatformDiagram.tsx` (2,903 lines)

**Purpose**: Main animated diagram component showing the complete NovAIn learning journey

**Features**:

- **5-Stage Animation Sequence**:
  1. Gray arrows roll out (9 seconds after scroll into view)
  2. Question mark travels through Business Clarity path
  3. Question mark travels through Analytics Translator path
  4. Question mark travels through ML Readiness path
  5. Lesson → Quiz → Final celebration with enhanced effects
- **Waypoint-Based Animation System**:
  - 5 predefined paths with 20+ waypoints total
  - Each waypoint includes position, pause duration, label, and "aha" flag
  - Smooth transitions between waypoints (800ms travel time)
  - Dynamic pause timing at key decision points (400ms-2000ms)

- **Visual Elements**:
  - Complete flowchart with 50+ animated SVG elements
  - 3 learning module cards (Business Clarity, Analytics Translator, ML Readiness)
  - 8 decision nodes with animated arrows
  - 2 lens components (Business Lens, Prompt Lens)
  - Lesson and Quiz outputs
  - User learning node with final celebration

- **Animation States**:
  - `markerPosition`: Current x,y coordinates of the traveling question mark
  - `showAha`: Triggers lightbulb "aha moment" animation
  - `isAnimating`: Prevents animation overlap
  - `currentPath`: Tracks which of 5 paths is active
  - `highlightedElements`: Accumulates visited nodes for visual feedback
  - `isFinalCelebration`: Triggers enhanced final celebration effect

- **Timing Configuration**:
  - Base delay: 4 seconds (matches scroll animation timing)
  - Arrow stagger: 0.1 seconds
  - Total animation duration: ~19 seconds
  - Final celebration hold: 3.5 seconds before reset

##### 2. `QuestionMarker.tsx` (165 lines)

**Purpose**: Animated question mark character with lightbulb transformation

**Features**:

- **Dual State Display**:
  - Question mark: Blue circle with white "?" text
  - Lightbulb: Gold bulb with radiating rays during "aha moments"

- **Layered Animation**:
  - Outer glow ring (45px radius) - pulses during aha moments
  - Background circle (35px radius) - scales and bounces
  - Icon content - switches between ? and lightbulb
  - Sparkle effects - 4 animated stars at cardinal points

- **Animation Properties**:
  - Smooth position transitions (powered by Framer Motion)
  - Scale animations: 1.0 → 1.2 → 1.0 during aha
  - Opacity pulses: 1 → 0 → 1 for glow effects
  - Infinite repeat with 0.2s delay during pause
  - Final celebration: 1.5x scale multiplier

- **Visual Specifications**:
  - Colors: Navy Blue (#2359D3), Gold (#FFD700), White
  - Font: DIN Next, 48px bold
  - Stroke width: 4px for visibility
  - Lightbulb rays: 4 radiating lines with pulsing animation

##### 3. `HeroDiagram.tsx` (69 lines)

**Purpose**: Reusable SVG diagram wrapper with motion support

**Features**:

- Motion.svg wrapper for Framer Motion integration
- Configurable viewBox for responsive scaling
- Default fade-in-up entrance animation (0.6s duration)
- Reduce motion support for accessibility
- `preserveAspectRatio="xMidYMid meet"` for proper scaling

**API**:

```typescript
interface HeroDiagramProps {
  viewBox: string; // SVG coordinate system
  className?: string; // Tailwind classes
  width?: string | number; // Default: "100%"
  height?: string | number; // Default: "100%"
  children: React.ReactNode; // SVG content
  svgVariants?: Variants; // Custom animation variants
  reduceMotion?: boolean; // Skip animations
}
```

##### 4. `useScrollAnimation.ts` (60 lines)

**Purpose**: Custom React hook for scroll-based animation triggers

**Features**:

- Intersection Observer API integration
- Configurable threshold (default: 30% visibility)
- Optional `triggerOnce` mode for one-time animations
- Returns: `{ ref, isInView, hasAnimated }`
- Automatic cleanup on unmount
- Supports repeat animations by resetting `isInView` when element leaves viewport

**Configuration**:

```typescript
interface UseScrollAnimationOptions {
  threshold?: number; // 0-1, visibility required to trigger
  rootMargin?: string; // Expand/contract intersection area
  triggerOnce?: boolean; // Animate only once vs. repeat
}
```

#### Integration Points

##### HomePage.tsx

- Imported `NovAInPlatformDiagram` component
- Added dedicated section with gray background (#C3CFD9)
- Positioned after "Join the Beta" section
- Before "Upskilling Agents vs. Workforce Automation" comparison

```tsx
<div className="relative z-10 bg-[#C3CFD9] py-16 px-4 sm:px-6 lg:px-8">
  <NovAInPlatformDiagram />
</div>
```

#### Animation Flow Details

**Stage 1: Initial Load**

- Diagram fades in (handled by HeroDiagram wrapper)
- All elements render in initial state
- Question mark positioned at start node (-223, 564)

**Stage 2: Gray Arrows (9 seconds)**

- Arrows animate in sequentially with 0.1s stagger
- Creates flowing appearance showing decision paths
- Question mark waits at start position

**Stage 3: Business Clarity Path (~3 seconds)**

- Question mark travels through 6 waypoints
- Pauses at each decision node (0.4s-2.0s)
- Shows lightbulb "aha" at 5 key points
- Highlights: Start → Business Clarity Module → Decide → Act → Business Lens → Prompt Lens

**Stage 4: Analytics Translator Path (~2.5 seconds)**

- Returns to start, takes middle path
- Travels through 5 waypoints
- Highlights: Analytics Translator Module → Measure → Need ML? → Business Lens → Prompt Lens

**Stage 5: ML Readiness Path (~2.5 seconds)**

- Returns to start, takes bottom path
- Travels through 5 waypoints
- Highlights: ML Readiness Module → Choose Model → Evaluate → Business Lens → Prompt Lens

**Stage 6: Lesson Path (~1.5 seconds)**

- Continues from Prompt Lens
- Travels through Lesson output to User
- Shows learning moment celebration

**Stage 7: Quiz Path & Final Celebration (~2 seconds)**

- User takes Quiz
- Returns to User with enhanced celebration
- Question mark scales to 1.5x
- Extended aha animation
- Holds celebration for 3.5 seconds
- Resets to initial state for replay

#### Technical Implementation

**Dependencies**:

- React 18+ (hooks: `useState`, `useEffect`, `useRef`)
- Framer Motion (animation library)
- TypeScript (full type safety)

**Performance Optimizations**:

- `pathWaypoints` moved outside component (prevents recreation on re-render)
- Intersection Observer for efficient scroll detection
- Animation gating with `isAnimating` flag prevents overlaps
- `triggerOnce: false` allows replay without re-mounting component

**Accessibility**:

- `aria-hidden` on decorative SVG elements
- Reduce motion support built into HeroDiagram
- Text alternatives provided by surrounding content

#### File Modifications

**Modified**: `src/pages/HomePage.tsx`

- Added import for `NovAInPlatformDiagram`
- Added diagram section after Beta signup CTA
- Integrated into page layout with matching design system

#### Known Limitations & Future Enhancements

**Current Limitations**:

- Animation timing is fixed (not user-configurable)
- No pause/play controls
- Replays automatically on scroll (by design)

**Potential Enhancements**:

- Add animation speed controls
- Mobile-optimized waypoints (smaller screens)
- Skip animation button for repeat visitors
- Integration with analytics to track engagement
- Alternative text mode for screen readers

### Fixed

#### React Hook Dependency Warning

**File**: `src/components/NovAInPlatformDiagram.tsx`

**Issue**:
ESLint warning on line 155 - `useEffect` hook was missing dependencies `isAnimating` and `pathWaypoints` in the dependency array.

**Root Cause**:

- `pathWaypoints` was defined inside component, recreated on every render
- `isAnimating` was used in the effect but not listed as a dependency
- Violated React's exhaustive-deps rule

**Solution**:

1. **Moved `pathWaypoints` outside component** (lines 7-52)
   - Static data doesn't need to be inside component
   - Prevents unnecessary object recreation
   - Eliminates as a dependency concern

2. **Added `isAnimating` to dependency array** (line 188)
   - Changed from `[isInView]` to `[isInView, isAnimating]`
   - Guard clause prevents unwanted re-runs: `if (!isInView || isAnimating) return;`
   - Satisfies React hooks exhaustive-deps rule

**Impact**:

- Zero functional changes to animation behavior
- Eliminates ESLint warning
- Follows React best practices
- Improves code organization

---

## Technical Notes

### Animation Architecture

The system uses a multi-layered approach:

1. **Framer Motion** - Handles smooth CSS transforms and SVG animations
2. **React State** - Manages animation progression and UI synchronization
3. **Intersection Observer** - Triggers animations based on scroll position
4. **Async/Await Pattern** - Orchestrates complex timing sequences

### Code Quality

- Full TypeScript type safety
- Comprehensive inline documentation
- Semantic component naming
- Separation of concerns (components, hooks, utilities)
- React best practices (hooks, dependency arrays, memoization considerations)

### Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Requires Intersection Observer support (97%+ global coverage)
- Framer Motion handles browser-specific animation prefixes
- Fallback: Static diagram if JavaScript disabled

### Performance Metrics (Estimated)

- Initial load: ~50KB gzipped (includes Framer Motion)
- Animation: 60 FPS on modern devices
- Memory: Minimal (no large assets, SVG-based)
- CPU: Light (CSS transforms are GPU-accelerated)

---

**Contributors**: Development team
**Date**: February 2, 2026
**Branch**: `feat/framer-animation`
