import React from "react";

interface LightVortexProps {
  className?: string;
  size?: number;
}

/**
 * Shared lightweight SVG vortex used across pages.
 * Subtle strokes, low opacity, long durations for a gentle effect.
 */
const LightVortex: React.FC<LightVortexProps> = ({
  className = "",
  size = 220,
}) => {
  return (
    <div className={className} aria-hidden>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <g fill="none" strokeLinecap="round">
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="#60a5fa"
            strokeOpacity="0.06"
            strokeWidth="6"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 50 50"
              to="360 50 50"
              dur="36s"
              repeatCount="indefinite"
            />
          </circle>

          <circle
            cx="50"
            cy="50"
            r="30"
            stroke="#34d399"
            strokeOpacity="0.045"
            strokeWidth="4"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="360 50 50"
              to="0 50 50"
              dur="24s"
              repeatCount="indefinite"
            />
          </circle>

          <circle
            cx="50"
            cy="50"
            r="20"
            stroke="#a78bfa"
            strokeOpacity="0.04"
            strokeWidth="3"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 50 50"
              to="360 50 50"
              dur="48s"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </svg>
    </div>
  );
};

export default LightVortex;
