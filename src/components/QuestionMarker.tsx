import React from "react";
import { motion } from "framer-motion";

interface QuestionMarkerProps {
  x: number;
  y: number;
  scale?: number;
  showAha?: boolean;
  isFinalCelebration?: boolean;
}

/**
 * Animated question mark that travels through the diagram
 * Shows an "aha" effect when showAha is true
 */
export function QuestionMarker({
  x,
  y,
  showAha = false,
  isFinalCelebration = false
}: QuestionMarkerProps) {
  const celebrationScale = isFinalCelebration ? 1.5 : 1;

  return (
    <g transform={`translate(${x}, ${y}) scale(${celebrationScale})`}>
      {/* Outer glow ring - BIGGER! */}
      <motion.circle
        cx="0"
        cy="0"
        r="45"
        fill="none"
        stroke="#FFD700"
        strokeWidth="4"
        opacity={showAha ? 1 : 0}
        animate={{
          scale: showAha ? [1, 1.5, 1] : 1,
          opacity: showAha ? [1, 0, 1] : 0
        }}
        transition={{
          duration: 0.6,
          repeat: showAha ? Infinity : 0,
          repeatDelay: 0.2
        }}
      />

      {/* Background circle - BIGGER! */}
      <motion.circle
        cx="0"
        cy="0"
        r="35"
        fill="#2359D3"
        stroke="#FFFFFF"
        strokeWidth="4"
        animate={{
          scale: showAha ? [1, 1.2, 1] : 1
        }}
        transition={{
          duration: 0.4,
          repeat: showAha ? 2 : 0
        }}
      />

      {/* Question mark or lightbulb */}
      {!showAha ? (
        <text
          fill="#FFFFFF"
          fontSize="48"
          fontWeight="bold"
          fontFamily="DIN Next, system-ui, sans-serif"
          textAnchor="middle"
          dominantBaseline="central"
          y="3"
        >
          ?
        </text>
      ) : (
        <g transform="translate(-18, -18)">
          {/* Simplified lightbulb icon - BIGGER! */}
          <path
            d="M12,2 C8,2 5,5 5,9 C5,11.5 6.5,13.5 8,15 L8,18 C8,19 9,20 10,20 L14,20 C15,20 16,19 16,18 L16,15 C17.5,13.5 19,11.5 19,9 C19,5 16,2 12,2 Z M10,22 L14,22"
            fill="#FFD700"
            stroke="#FFFFFF"
            strokeWidth="2"
            transform="scale(1.8)"
          />
          {/* Lightbulb rays - MORE PROMINENT! */}
          <motion.g
            animate={{
              opacity: [0, 1, 0],
              scale: [0.8, 1.3, 0.8]
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity
            }}
          >
            <line
              x1="0"
              y1="-28"
              x2="0"
              y2="-35"
              stroke="#FFD700"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <line
              x1="24"
              y1="-18"
              x2="30"
              y2="-24"
              stroke="#FFD700"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <line
              x1="36"
              y1="0"
              x2="43"
              y2="0"
              stroke="#FFD700"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <line
              x1="24"
              y1="18"
              x2="30"
              y2="24"
              stroke="#FFD700"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </motion.g>
        </g>
      )}

      {/* Sparkle effect for "aha" moments - bigger sparkles! */}
      {showAha && (
        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 1, 0], scale: [0, 2, 0] }}
          transition={{ duration: 0.6, repeat: 3 }}
        >
          <path
            d="M0,-50 L3,-45 L8,-42 L3,-39 L0,-34 L-3,-39 L-8,-42 L-3,-45 Z"
            fill="#FFD700"
          />
          <path
            d="M45,-8 L48,-3 L53,0 L48,3 L45,8 L42,3 L37,0 L42,-3 Z"
            fill="#FFD700"
          />
          <path
            d="M-45,8 L-42,13 L-37,16 L-42,19 L-45,24 L-48,19 L-53,16 L-48,13 Z"
            fill="#FFD700"
          />
          <path
            d="M-8,-45 L-5,-42 L0,-40 L-5,-38 L-8,-35 L-11,-38 L-16,-40 L-11,-42 Z"
            fill="#FFD700"
          />
        </motion.g>
      )}
    </g>
  );
}
