import React from "react";
import { motion, type Variants } from "framer-motion";

export type HeroDiagramProps = {
  /** SVG viewBox (e.g. "0 0 800 400") for aspect ratio and scaling */
  viewBox: string;
  /** Tailwind/custom class for the SVG container */
  className?: string;
  /** Optional explicit width (default: full width of container) */
  width?: string | number;
  /** Optional explicit height */
  height?: string | number;
  /** Content: use <motion.g>, <motion.path>, etc. for animatable parts */
  children: React.ReactNode;
  /** Optional variants for the root SVG (default: fade-in up) */
  svgVariants?: Variants;
  /** Reduce motion preference: skip entrance animation */
  reduceMotion?: boolean;
};

const defaultSvgVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

/**
 * Renders an inline SVG diagram as a hero/product visual with Framer Motion.
 * Use structured SVG (not <img>) so you can animate groups/paths.
 *
 * How to use with your diagram:
 * 1. Paste your SVG into a component or this file.
 * 2. Convert to JSX: class → className, stroke-width → strokeWidth, fill-rule → fillRule, etc.
 * 3. Wrap elements you want to animate in motion.g / motion.path / motion.circle and add initial, animate, transition.
 * 4. Pass the inner content as children and set viewBox from your original SVG.
 */
export function HeroDiagram({
  viewBox,
  className = "",
  width = "100%",
  height = "100%",
  children,
  svgVariants = defaultSvgVariants,
  reduceMotion = false
}: HeroDiagramProps) {
  const MotionSvg = motion.svg;

  return (
    <MotionSvg
      viewBox={viewBox}
      preserveAspectRatio="xMidYMid meet"
      width={width}
      height={height}
      className={className}
      variants={reduceMotion ? undefined : svgVariants}
      initial={reduceMotion ? false : "hidden"}
      animate={reduceMotion ? false : "visible"}
      aria-hidden
    >
      {children}
    </MotionSvg>
  );
}

export default HeroDiagram;
