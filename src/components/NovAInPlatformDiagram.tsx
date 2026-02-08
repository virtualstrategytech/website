import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HeroDiagram } from "./HeroDiagram";
import { QuestionMarker } from "./QuestionMarker";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

// Path waypoints - simplified to key decision points only, transitions handle smooth travel
// Defined outside component since it's static data
const pathWaypoints = {
  // Path 1: Business Clarity path (top row)
  business: [
    { x: -223, y: 564, pause: 2, label: "start", aha: true }, // Start with aha to show lightbulb
    { x: 496, y: 750, pause: 0.8, label: "business-clarity", aha: true }, // Longer pause at modules
    { x: 1122, y: 768, pause: 0.6, label: "decide", aha: true },
    { x: 1578, y: 768, pause: 0.6, label: "act", aha: true },
    { x: 1991, y: 768, pause: 0.4, label: "business-lens" },
    { x: 2401, y: 768, pause: 0.4, label: "prompt-lens" }
  ],
  // Path 2: Analytics Translator path (middle row)
  analytics: [
    { x: 516, y: 1310, pause: 0.8, label: "analytics-translator", aha: true }, // Longer at module
    { x: 1122, y: 1372, pause: 0.6, label: "measure", aha: true },
    { x: 1578, y: 1372, pause: 0.6, label: "need-ml", aha: true },
    { x: 1991, y: 1391, pause: 0.4, label: "business-lens-2" },
    { x: 2406, y: 1391, pause: 0.4, label: "prompt-lens-2" }
  ],
  // Path 3: ML Readiness path (bottom row) - ends at Prompt Lens
  ml: [
    { x: 516, y: 1950, pause: 0.8, label: "ml-readiness", aha: true }, // Longer at module
    { x: 1122, y: 2032, pause: 0.6, label: "choose-model", aha: true },
    { x: 1578, y: 2032, pause: 0.6, label: "evaluate", aha: true },
    { x: 1991, y: 2060, pause: 0.4, label: "business-lens-3" },
    { x: 2406, y: 2036, pause: 0.4, label: "prompt-lens-3" }
  ],
  // Path 4: Prompt Lens → Lesson → User (with celebration!)
  lessonPath: [
    { x: 2838, y: 1834, pause: 0.5, label: "lesson-output", aha: true },
    { x: 3350, y: 2036, pause: 1, label: "user-learns-lesson", aha: true }
  ],
  // Path 5: User → Quiz → User (FINAL celebration!)
  quizPath: [
    { x: 2838, y: 2243, pause: 0.5, label: "quiz-output", aha: true },
    {
      x: 3350,
      y: 2036,
      pause: 2,
      label: "user-learns-final",
      aha: true,
      final: true
    }
  ]
};

/**
 * NovAIn Decision Platform v4 - Complete animated flowchart with journey animation
 * Shows a question mark traveling through all three decision paths
 */
export function NovAInPlatformDiagram() {
  const baseDelay = 4; // Start arrow animations 4 seconds after scroll (slightly longer wait)
  const stagger = 0.1; // Keep original stagger timing

  // Scroll detection - triggers animation when diagram is in view
  const { ref, isInView } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.3,
    triggerOnce: false // Animation replays every time user scrolls to it
  });

  // Animation state
  const [markerPosition, setMarkerPosition] = useState({ x: -223, y: 564 });
  const [showAha, setShowAha] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentPath, setCurrentPath] = useState(0); // 0: none, 1: business, 2: analytics, 3: ml, 4: lesson, 5: quiz
  const [highlightedElements, setHighlightedElements] = useState<string[]>([]);
  const [isFinalCelebration, setIsFinalCelebration] = useState(false);

  // Run animation sequence when component comes into view
  useEffect(() => {
    if (!isInView || isAnimating) return;

    const runAnimation = async () => {
      // Stage 1: Wait for gray arrows to roll out first (9 seconds - tighter timing)
      await new Promise((resolve) => setTimeout(resolve, 9000));

      setIsAnimating(true);

      // Stage 2: Question mark journey through all paths (~10 seconds)
      // Stage 3: Final celebration lightbulb
      // Animate through all 5 paths sequentially
      for (const pathName of [
        "business",
        "analytics",
        "ml",
        "lessonPath",
        "quizPath"
      ] as const) {
        const waypoints = pathWaypoints[pathName];
        setCurrentPath(
          pathName === "business"
            ? 1
            : pathName === "analytics"
              ? 2
              : pathName === "ml"
                ? 3
                : pathName === "lessonPath"
                  ? 4
                  : 5 // quizPath
        );

        for (let i = 0; i < waypoints.length; i++) {
          const waypoint = waypoints[i];
          const nextWaypoint = waypoints[i + 1];

          // Move marker to this waypoint
          setMarkerPosition({ x: waypoint.x, y: waypoint.y });

          // Wait for marker to arrive (only if not the first waypoint)
          if (i > 0) {
            await new Promise((resolve) => setTimeout(resolve, 800));
          }

          // Show "aha" moment at decision points AFTER marker arrives
          if (waypoint.aha) {
            setShowAha(true);
            setHighlightedElements((prev) => [...prev, waypoint.label]);
            // Mark as final celebration if this is the last waypoint
            if (i === waypoints.length - 1) {
              setIsFinalCelebration(true);
            }
            await new Promise((resolve) =>
              setTimeout(resolve, (waypoint.pause || 0.4) * 1000)
            );
            setShowAha(false);
          }

          // Brief pause before moving to next waypoint
          const travelTime = nextWaypoint ? 200 : 400; // Small pause between waypoints
          await new Promise((resolve) => setTimeout(resolve, travelTime));
        }

        // Brief pause between paths
        await new Promise((resolve) => setTimeout(resolve, 300));
      }

      setIsAnimating(false);

      // Hold final celebration much longer before resetting
      setTimeout(() => {
        setHighlightedElements([]);
        setCurrentPath(0);
        setMarkerPosition({ x: -223, y: 564 });
        setIsFinalCelebration(false);
      }, 3500);
    };

    runAnimation();
  }, [isInView, isAnimating]);

  return (
    <div
      ref={ref}
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      <HeroDiagram
        viewBox="-475 264 4092 2324"
        className="w-full h-auto"
        reduceMotion={false}
      >
        {/* Background */}
        <rect width="2988" height="2160" x="156" y="264" fill="#C3CFD9" />

        {/* Title */}
        <motion.g
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: baseDelay, duration: 0.6 }}
        >
          <text fill="#293845">
            <tspan
              x="1141.7700805664062"
              y="388"
              fontFamily="DIN Next, system-ui, sans-serif"
              fontSize="90"
              fontWeight="bold"
            >
              NovAIn Upskilling Platform
            </tspan>
          </text>
        </motion.g>

        {/* Subtitle */}
        <motion.g
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: baseDelay + stagger, duration: 0.6 }}
        >
          <text fill="#293845">
            <tspan
              x="819.3401565551758"
              y="537"
              fontFamily="DIN Next, system-ui, sans-serif"
              fontSize="60"
              fontWeight="bold"
            >
              User gets outputs explained through two perspectives:
            </tspan>
          </text>
        </motion.g>

        {/* User Input */}
        <motion.g
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: baseDelay + stagger * 2, duration: 0.6 }}
        >
          <text fill="#293845">
            <tspan
              x="-369.09996795654297"
              y="465.19999980926514"
              fontFamily="DIN Next, system-ui, sans-serif"
              fontSize="60"
              fontWeight="bold"
            >
              User Input:
            </tspan>
          </text>
          <rect
            x="-355"
            y="492"
            width="264"
            height="144"
            rx="72"
            ry="72"
            fill="#2359D3"
          />
          <text fill="#FFFFFF">
            <tspan
              x="-295.35997009277344"
              y="552"
              fontFamily="DIN Next, system-ui, sans-serif"
              fontSize="36"
              fontWeight="bold"
            >
              Business{" "}
            </tspan>
          </text>
          <text fill="#FFFFFF">
            <tspan
              x="-293.00196838378906"
              y="600.5"
              fontFamily="DIN Next, system-ui, sans-serif"
              fontSize="36"
              fontWeight="bold"
            >
              Question
            </tspan>
          </text>
        </motion.g>

        {/* Arrow: User Input to Business Clarity */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: baseDelay + stagger * 3, duration: 0.8 }}
        >
          <motion.path
            d="M-81,564h537c22.09136,0 40,17.90864 40,40v38"
            fill="none"
            stroke="#788896"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeWidth="32"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: baseDelay + stagger * 3, duration: 0.6 }}
          />
          <line
            stroke="#788896"
            fill="#788896"
            strokeLinejoin="round"
            y1="578"
            strokeLinecap="round"
            strokeWidth="4"
            x1="-81"
            y2="550"
            x2="-81"
          />
          <polygon
            points="519.51141,641.63932 496,674 472.48859,641.63932"
            fill="#788896"
            stroke="#788896"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.g>

        {/* Business Clarity Module */}
        <motion.g
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: baseDelay + stagger * 4, duration: 0.6 }}
        >
          <path
            d="M601.00108,850.67195c-0.55288,1.56188 -2.34423,2.82805 -4.00108,2.82805l-201,0c-1.65685,0 -3.4482,-1.26616 -4.00108,-2.82805l-57.99784,-163.84391c-0.55288,-1.56188 0.34207,-2.82805 1.99892,-2.82805l321,0c1.65685,0 2.5518,1.26616 1.99892,2.82805z"
            fill="#1CD1D3"
          />
          <text fill="#FFFFFF">
            <tspan
              x="424.14002990722656"
              y="732.5"
              fontFamily="DIN Next, system-ui, sans-serif"
              fontSize="36"
              fontWeight="bold"
            >
              Business{" "}
            </tspan>
            <tspan
              x="443.6340103149414"
              y="781"
              fontFamily="DIN Next, system-ui, sans-serif"
              fontSize="36"
              fontWeight="bold"
            >
              Clarity{" "}
            </tspan>
            <tspan
              x="434.2200241088867"
              y="829.5"
              fontFamily="DIN Next, system-ui, sans-serif"
              fontSize="36"
              fontWeight="bold"
            >
              Module{" "}
            </tspan>
          </text>
        </motion.g>

        {/* Business Logic Engine */}
        <motion.g
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: baseDelay + stagger * 4.5, duration: 0.5 }}
        >
          <path
            d="M371,900c0,6.62741 -31.11626,12 -69.5,12c-38.38374,0 -69.5,-5.37259 -69.5,-12c0,-6.01553 0,-119.74867 0,-140.69816c7.57974,6.13858 35.8205,10.69816 69.5,10.69816c33.6795,0 61.92026,-4.55958 69.5,-10.69816c0,21.62354 0,134.55103 0,140.69816zM232,756c0,-6.62741 31.11626,-12 69.5,-12c38.38374,0 69.5,5.37259 69.5,12c0,6.62741 -31.11626,12 -69.5,12c-38.38374,0 -69.5,-5.37259 -69.5,-12z"
            fill="#1CD1D3"
          />
          <text fill="#FFFFFF">
            <tspan
              x="247.2300262451172"
              y="807.5"
              fontFamily="DIN Next, system-ui, sans-serif"
              fontSize="27"
              fontWeight="bold"
            >
              Business{" "}
            </tspan>
            <tspan
              x="269.50501251220703"
              y="843.5"
              fontFamily="DIN Next, system-ui, sans-serif"
              fontSize="27"
              fontWeight="bold"
            >
              Logic{" "}
            </tspan>
            <tspan
              x="260.905517578125"
              y="879.5"
              fontFamily="DIN Next, system-ui, sans-serif"
              fontSize="27"
              fontWeight="bold"
            >
              Engine
            </tspan>
          </text>
        </motion.g>

        {/* Arrow with Decision Options label */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: baseDelay + stagger * 5, duration: 0.8 }}
        >
          <motion.path
            d="M496,863.5v24.25c0,13.39289 10.85711,24.25 24.25,24.25h327.75c22.09136,0 40,-17.90864 40,-40v-66.31163c0,-20.81468 16.87368,-37.68837 37.68837,-37.68837h5.68837"
            fill="none"
            stroke="#788896"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeWidth="32"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: baseDelay + stagger * 5, duration: 0.7 }}
          />
          <rect
            x="548"
            y="883.75"
            width="302"
            height="56.5"
            rx="28"
            ry="28"
            fill="#788896"
          />
          <text fill="#FFFFFF">
            <tspan
              x="576.4740676879883"
              y="924.25"
              fontFamily="DIN Next, system-ui, sans-serif"
              fontSize="36"
              fontWeight="bold"
            >
              Decision Otions
            </tspan>
          </text>
          <line
            stroke="#788896"
            fill="#788896"
            strokeLinejoin="round"
            y1="863.5000000000002"
            strokeLinecap="round"
            strokeWidth="4"
            x1="482"
            y2="863.5000000000002"
            x2="510"
          />
          <polygon
            points="931.01605,744.48859 963.37673,768 931.01605,791.51141"
            fill="#788896"
            stroke="#788896"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.g>

        {/* Analytics Translator Module */}
        <motion.g
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: baseDelay + stagger * 6, duration: 0.6 }}
        >
          <path
            d="M621.00108,1377.67195c-0.55288,1.56188 -2.34423,2.82805 -4.00108,2.82805h-201c-1.65685,0 -3.4482,-1.26616 -4.00108,-2.82805l-57.99784,-163.84391c-0.55288,-1.56188 0.34207,-2.82805 1.99892,-2.82805h321c1.65685,0 2.5518,1.26616 1.99892,2.82805z"
            fill="#1CD1D3"
          />
          <text fill="#FFFFFF">
            <tspan
              x="442.5020217895508"
              y="1259.5"
              fontFamily="DIN Next, system-ui, sans-serif"
              fontSize="36"
              fontWeight="bold"
            >
              Analytics{" "}
            </tspan>
            <tspan
              x="432.5480270385742"
              y="1308"
              fontFamily="DIN Next, system-ui, sans-serif"
              fontSize="36"
              fontWeight="bold"
            >
              Translator{" "}
            </tspan>
            <tspan
              x="454.2200241088867"
              y="1356.5"
              fontFamily="DIN Next, system-ui, sans-serif"
              fontSize="36"
              fontWeight="bold"
            >
              Module{" "}
            </tspan>
          </text>
        </motion.g>

        {/* Analytics Logic Engine */}
        <motion.g
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: baseDelay + stagger * 6.5, duration: 0.5 }}
        >
          <path
            d="M391,1427c0,6.62741 -31.11626,12 -69.5,12c-38.38374,0 -69.5,-5.37259 -69.5,-12c0,-6.01553 0,-119.74867 0,-140.69816c7.57974,6.13858 35.8205,10.69816 69.5,10.69816c33.6795,0 61.92026,-4.55958 69.5,-10.69816c0,21.62354 0,134.55103 0,140.69816zM252,1283c0,-6.62741 31.11626,-12 69.5,-12c38.38374,0 69.5,5.37259 69.5,12c0,6.62741 -31.11626,12 -69.5,12c-38.38374,0 -69.5,-5.37259 -69.5,-12z"
            fill="#1CD1D3"
          />
          <text fill="#FFFFFF">
            <tspan
              x="266.0015182495117"
              y="1334.5"
              fontFamily="DIN Next, system-ui, sans-serif"
              fontSize="27"
              fontWeight="bold"
            >
              Analytics{" "}
            </tspan>
            <tspan
              x="289.50501251220703"
              y="1370.5"
              fontFamily="DIN Next, system-ui, sans-serif"
              fontSize="27"
              fontWeight="bold"
            >
              Logic{" "}
            </tspan>
            <tspan
              x="280.905517578125"
              y="1406.5"
              fontFamily="DIN Next, system-ui, sans-serif"
              fontSize="27"
              fontWeight="bold"
            >
              Engine
            </tspan>
          </text>
        </motion.g>

        {/* Arrow with Instrumentation Plan label (adjusted to start from module bottom) */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: baseDelay + stagger * 7, duration: 0.8 }}
        >
          <motion.path
            d="M516,1380v98c0,22.09136 17.90864,40 40,40h293.93388c22.09136,0 40,-17.90864 40,-40v-46c0,-22.09136 17.90864,-40 40,-40h27.21008"
            fill="none"
            stroke="#788896"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeWidth="32"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: baseDelay + stagger * 7, duration: 0.7 }}
          />
          <rect
            x="466"
            y="1489.75"
            width="392"
            height="56.5"
            rx="28"
            ry="28"
            fill="#788896"
          />
          <text fill="#FFFFFF">
            <tspan
              x="494.06005859375"
              y="1530.25"
              fontFamily="DIN Next, system-ui, sans-serif"
              fontSize="36"
              fontWeight="bold"
            >
              Instrumentation Plan
            </tspan>
          </text>
          <line
            stroke="#788896"
            fill="#788896"
            strokeLinejoin="round"
            y1="1380"
            strokeLinecap="round"
            strokeWidth="4"
            x1="502"
            y2="1380"
            x2="530"
          />
          <polygon
            points="954.8494,1368.48859 987.21008,1392 954.8494,1415.51141"
            fill="#788896"
            stroke="#788896"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.g>

        {/* ML Readiness Module */}
        <motion.g
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: baseDelay + stagger * 8, duration: 0.6 }}
        >
          <path
            d="M621.00108,2019.67195c-0.55288,1.56188 -2.34423,2.82805 -4.00108,2.82805h-201c-1.65685,0 -3.4482,-1.26616 -4.00108,-2.82805l-57.99784,-163.84391c-0.55288,-1.56188 0.34207,-2.82805 1.99892,-2.82805h321c1.65685,0 2.5518,1.26616 1.99892,2.82805z"
            fill="#1CD1D3"
          />
          <text fill="#FFFFFF">
            <tspan
              x="492.8660125732422"
              y="1901.5"
              fontFamily="DIN Next, system-ui, sans-serif"
              fontSize="36"
              fontWeight="bold"
            >
              ML{" "}
            </tspan>
            <tspan
              x="434.2220230102539"
              y="1950"
              fontFamily="DIN Next, system-ui, sans-serif"
              fontSize="36"
              fontWeight="bold"
            >
              Readiness{" "}
            </tspan>
            <tspan
              x="454.2200241088867"
              y="1998.5"
              fontFamily="DIN Next, system-ui, sans-serif"
              fontSize="36"
              fontWeight="bold"
            >
              Module{" "}
            </tspan>
          </text>
        </motion.g>

        {/* ML Logic Engine */}
        <motion.g
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: baseDelay + stagger * 8.5, duration: 0.5 }}
        >
          <path
            d="M391,2044c0,6.62741 -31.11626,12 -69.5,12c-38.38374,0 -69.5,-5.37259 -69.5,-12c0,-5.94864 0,-97.09131 0,-115.69816c7.57974,6.13858 35.8205,10.69816 69.5,10.69816c33.6795,0 61.92026,-4.55958 69.5,-10.69816c0,19.33113 0,109.59149 0,115.69816zM252,1925c0,-6.62741 31.11626,-12 69.5,-12c38.38374,0 69.5,5.37259 69.5,12c0,6.62741 -31.11626,12 -69.5,12c-38.38374,0 -69.5,-5.37259 -69.5,-12z"
            fill="#1CD1D3"
          />
          <text fill="#FFFFFF">
            <tspan
              x="268.59352111816406"
              y="1982"
              fontFamily="DIN Next, system-ui, sans-serif"
              fontSize="27"
              fontWeight="bold"
            >
              ML Logic{" "}
            </tspan>
            <tspan
              x="280.905517578125"
              y="2018"
              fontFamily="DIN Next, system-ui, sans-serif"
              fontSize="27"
              fontWeight="bold"
            >
              Engine
            </tspan>
          </text>
        </motion.g>

        {/* Arrow with Model Options label */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: baseDelay + stagger * 9, duration: 0.8 }}
        >
          <motion.path
            d="M516,2032.5v78.5c0,22.09136 17.90864,40 40,40h196c22.09136,0 40,-17.90864 40,-40v-50c0,-22.09136 17.90864,-40 40,-40h111.86555"
            fill="none"
            stroke="#788896"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeWidth="32"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: baseDelay + stagger * 9, duration: 0.7 }}
          />
          <rect
            x="503"
            y="2122.75"
            width="282"
            height="56.5"
            rx="28"
            ry="28"
            fill="#788896"
          />
          <text fill="#FFFFFF">
            <tspan
              x="531.050048828125"
              y="2163.25"
              fontFamily="DIN Next, system-ui, sans-serif"
              fontSize="36"
              fontWeight="bold"
            >
              Model Options
            </tspan>
          </text>
          <line
            stroke="#788896"
            fill="#788896"
            strokeLinejoin="round"
            y1="2032.4999999999998"
            strokeLinecap="round"
            strokeWidth="4"
            x1="502"
            y2="2032.4999999999998"
            x2="530"
          />
          <polygon
            points="943.50487,1997.48859 975.86555,2021 943.50487,2044.51141"
            fill="#788896"
            stroke="#788896"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.g>

        {/* Decision Diamonds - First Row */}
        <motion.g
          initial={{ opacity: 0, rotate: -5, scale: 0.9 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ delay: baseDelay + stagger * 10, duration: 0.5 }}
        >
          <path
            d="M1124.35023,885.13548c-1.29799,1.02974 -3.40247,1.02974 -4.70046,0l-145.29954,-115.27097c-1.29799,-1.02974 -1.29799,-2.69929 0,-3.72903l145.29954,-115.27097c1.29799,-1.02974 3.40247,-1.02974 4.70046,0l145.29954,115.27097c1.29799,1.02974 1.29799,2.69929 0,3.72903z"
            fill="#2359D3"
          />
          <text fill="#FFFFFF">
            <tspan
              x="1068.3240127563477"
              y="780.25"
              fontFamily="DIN Next, system-ui, sans-serif"
              fontSize="36"
              fontWeight="bold"
            >
              Decide
            </tspan>
          </text>
        </motion.g>

        <motion.g
          initial={{ opacity: 0, rotate: -5, scale: 0.9 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ delay: baseDelay + stagger * 10.5, duration: 0.5 }}
        >
          <path
            d="M1580.35023,885.13548c-1.29799,1.02974 -3.40247,1.02974 -4.70046,0l-145.29954,-115.27097c-1.29799,-1.02974 -1.29799,-2.69929 0,-3.72903l145.29954,-115.27097c1.29799,-1.02974 3.40247,-1.02974 4.70046,0l145.29954,115.27097c1.29799,1.02974 1.29799,2.69929 0,3.72903z"
            fill="#2359D3"
          />
          <text fill="#FFFFFF">
            <tspan
              x="1552.026008605957"
              y="780.25"
              fontFamily="DIN Next, system-ui, sans-serif"
              fontSize="36"
              fontWeight="bold"
            >
              Act
            </tspan>
          </text>
        </motion.g>

        {/* Arrows - First Row */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: baseDelay + stagger * 11, duration: 0.6 }}
        >
          <motion.line
            stroke="#788896"
            fill="none"
            strokeLinejoin="miter"
            y1="768"
            strokeLinecap="butt"
            strokeWidth="32"
            x1="1281.9999999999998"
            y2="768"
            x2="1367.9999999999986"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: baseDelay + stagger * 11, duration: 0.4 }}
          />
          <line
            stroke="#788896"
            fill="#788896"
            strokeLinejoin="round"
            y1="782"
            strokeLinecap="round"
            strokeWidth="4"
            x1="1281.9999999999998"
            y2="754"
            x2="1281.9999999999998"
          />
          <polygon
            points="1367.63932,744.48859 1400,768 1367.63932,791.51141"
            fill="#788896"
            stroke="#788896"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.g>

        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: baseDelay + stagger * 11.5, duration: 0.6 }}
        >
          <motion.line
            stroke="#788896"
            fill="none"
            strokeLinejoin="miter"
            y1="767.9999999999999"
            strokeLinecap="butt"
            strokeWidth="32"
            x1="1738"
            y2="768"
            x2="1853.9999999999995"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: baseDelay + stagger * 11.5, duration: 0.4 }}
          />
          <line
            stroke="#788896"
            fill="#788896"
            strokeLinejoin="round"
            y1="781.9999999999999"
            strokeLinecap="round"
            strokeWidth="4"
            x1="1738"
            y2="753.9999999999999"
            x2="1738"
          />
          <polygon
            points="1853.63932,744.48859 1886,768 1853.63932,791.51141"
            fill="#788896"
            stroke="#788896"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.g>

        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: baseDelay + stagger * 12, duration: 0.6 }}
        >
          <motion.line
            stroke="#788896"
            fill="none"
            strokeLinejoin="miter"
            y1="768"
            strokeLinecap="butt"
            strokeWidth="32"
            x1="2096"
            y2="768"
            x2="2264.0000000000014"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: baseDelay + stagger * 12, duration: 0.4 }}
          />
          <line
            stroke="#788896"
            fill="#788896"
            strokeLinejoin="round"
            y1="782"
            strokeLinecap="round"
            strokeWidth="4"
            x1="2096"
            y2="754"
            x2="2096"
          />
          <polygon
            points="2263.63932,744.48859 2296,768 2263.63932,791.51141"
            fill="#788896"
            stroke="#788896"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.g>

        {/* Large return arrow from Prompt Design to Analytics */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: baseDelay + stagger * 13, duration: 0.8 }}
        >
          <motion.path
            d="M2506,768l94,0c22.09136,0 40,17.90864 40,40v292c0,22.09136 -17.90864,40 -40,40h-2053.5c-16.34192,0 -29.68206,12.8524 -30.46379,29.00058"
            fill="none"
            stroke="#788896"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeWidth="32"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: baseDelay + stagger * 13, duration: 1 }}
          />
          <line
            stroke="#788896"
            fill="#788896"
            strokeLinejoin="round"
            y1="782.0000000000001"
            strokeLinecap="round"
            strokeWidth="4"
            x1="2506"
            y2="754.0000000000001"
            x2="2506"
          />
          <polygon
            points="539.51141,1168.63932 516,1201 492.48859,1168.63932"
            fill="#788896"
            stroke="#788896"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.g>

        {/* Lenses - First Row */}
        <motion.g
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: baseDelay + stagger * 14, duration: 0.6 }}
        >
          <ellipse cx="1991" cy="768" rx="95" ry="171" fill="#75D043" />
          <text fill="#FFFFFF">
            <tspan
              x="1918.6400299072266"
              y="731.75"
              fontFamily="DIN Next, system-ui, sans-serif"
              fontSize="36"
              fontWeight="bold"
            >
              Business{" "}
            </tspan>
            <tspan
              x="1923.2480087280273"
              y="780.25"
              fontFamily="DIN Next, system-ui, sans-serif"
              fontSize="36"
              fontWeight="bold"
            >
              Strategy{" "}
            </tspan>
            <tspan
              x="1952.5700149536133"
              y="828.75"
              fontFamily="DIN Next, system-ui, sans-serif"
              fontSize="36"
              fontWeight="bold"
            >
              Lens
            </tspan>
          </text>
          <g transform="translate(1884 627)">
            <svg width="48" height="48" viewBox="0 0 48 48">
              <path
                fill="#444444"
                d="M45,45H3c-1.10457,0-2-0.89543-2-2V9c0-1.10457,0.89543-2,2-2h42c1.10457,0,2,0.89543,2,2v34 C47,44.10457,46.10457,45,45,45z"
              />
              <path
                fill="#B3B3B3"
                d="M24,40c0,0-4.82016-1.89646-16.99971-1.99594C6.45017,37.99956,6,37.55563,6,37.0055V6c12.91667,0,18,2,18,2 V40z"
              />
              <path
                fill="#B3B3B3"
                d="M24,40c0,0,4.82016-1.89646,16.99971-1.99594C41.54983,37.99956,42,37.55563,42,37.0055V6 C29.08333,6,24,8,24,8V40z"
              />
              <path
                fill="#E6E6E6"
                d="M24,39c0,0-6.72025-3.79496-19.00562-3.99205C4.44716,34.99917,4,34.56,4,34.0127V4.01287 c0-0.55728,0.46262-1.01367,1.01982-1.0045C17.28903,3.21027,24,7,24,7V39z"
              />
              <path
                fill="#D1D1D1"
                d="M24,39c0,0,6.72025-3.79496,19.00562-3.99205C43.55285,34.99917,44,34.56,44,34.0127V4.01287 c0-0.55728-0.46262-1.01367-1.01982-1.0045C30.71097,3.21027,24,7,24,7V39z"
              />
            </svg>
          </g>
          <g transform="translate(2006 627)">
            <svg width="48" height="48" viewBox="0 0 48 48">
              <defs>
                <linearGradient
                  id="lens1-survey-0"
                  x1="9"
                  y1="2"
                  x2="9"
                  y2="14"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9ED9FA" />
                  <stop offset="1" stopColor="#60BEF6" />
                </linearGradient>
                <linearGradient
                  id="lens1-survey-1"
                  x1="9"
                  y1="34"
                  x2="9"
                  y2="46"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9ED9FA" />
                  <stop offset="1" stopColor="#60BEF6" />
                </linearGradient>
                <linearGradient
                  id="lens1-survey-2"
                  x1="8.98782"
                  y1="18.0121"
                  x2="8.98782"
                  y2="30.0121"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#344EEA" />
                  <stop offset="1" stopColor="#2138BB" />
                </linearGradient>
              </defs>
              <path
                d="M44 7H21C20.448 7 20 7.448 20 8C20 8.552 20.448 9 21 9H44C44.552 9 45 8.552 45 8C45 7.448 44.552 7 44 7Z"
                fill="#CBEAFB"
              />
              <path
                d="M44 23H21C20.448 23 20 23.448 20 24C20 24.552 20.448 25 21 25H44C44.552 25 45 24.552 45 24C45 23.448 44.552 23 44 23Z"
                fill="#344EEA"
              />
              <path
                d="M44 39H21C20.448 39 20 39.448 20 40C20 40.552 20.448 41 21 41H44C44.552 41 45 40.552 45 40C45 39.448 44.552 39 44 39Z"
                fill="#CBEAFB"
              />
              <path
                d="M14 2H4C3.44772 2 3 2.44772 3 3V13C3 13.5523 3.44772 14 4 14H14C14.5523 14 15 13.5523 15 13V3C15 2.44772 14.5523 2 14 2Z"
                fill="url(#lens1-survey-0)"
              />
              <path
                d="M14 34H4C3.44772 34 3 34.4477 3 35V45C3 45.5523 3.44772 46 4 46H14C14.5523 46 15 45.5523 15 45V35C15 34.4477 14.5523 34 14 34Z"
                fill="url(#lens1-survey-1)"
              />
              <path
                d="M10.4139 24L14.7069 19.707C15.0909 19.31 15.0799 18.677 14.6819 18.293C14.2939 17.919 13.6799 17.919 13.2929 18.293L8.99995 22.586L4.70695 18.293C4.30995 17.909 3.67695 17.92 3.29295 18.318C2.91895 18.706 2.91895 19.32 3.29295 19.707L7.58595 24L3.29295 28.293C2.89595 28.677 2.88495 29.31 3.26795 29.707C3.65195 30.104 4.28495 30.115 4.68195 29.732C4.68995 29.724 4.69895 29.716 4.70695 29.707L8.99995 25.414L13.2929 29.707C13.6899 30.091 14.3229 30.08 14.7069 29.682C15.0809 29.294 15.0809 28.68 14.7069 28.293L10.4139 24Z"
                fill="url(#lens1-survey-2)"
              />
            </svg>
          </g>
        </motion.g>

        <motion.g
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: baseDelay + stagger * 14.5, duration: 0.6 }}
        >
          <ellipse cx="2401" cy="768" rx="95" ry="216" fill="#7242CC" />
          <text fill="#FFFFFF">
            <tspan
              x="2342.1580123901367"
              y="731.75"
              fontFamily="DIN Next, system-ui, sans-serif"
              fontSize="36"
              fontWeight="bold"
            >
              Prompt
            </tspan>
            <tspan
              x="2346.5680236816406"
              y="780.25"
              fontFamily="DIN Next, system-ui, sans-serif"
              fontSize="36"
              fontWeight="bold"
            >
              Design{" "}
            </tspan>
            <tspan
              x="2362.5700149536133"
              y="828.75"
              fontFamily="DIN Next, system-ui, sans-serif"
              fontSize="36"
              fontWeight="bold"
            >
              Lens
            </tspan>
          </text>
          <g transform="translate(2306 588)">
            <svg width="48" height="48" viewBox="0 0 48 48">
              <path
                fill="#444444"
                d="M45,45H3c-1.10457,0-2-0.89543-2-2V9c0-1.10457,0.89543-2,2-2h42c1.10457,0,2,0.89543,2,2v34 C47,44.10457,46.10457,45,45,45z"
              />
              <path
                fill="#B3B3B3"
                d="M24,40c0,0-4.82016-1.89646-16.99971-1.99594C6.45017,37.99956,6,37.55563,6,37.0055V6c12.91667,0,18,2,18,2 V40z"
              />
              <path
                fill="#B3B3B3"
                d="M24,40c0,0,4.82016-1.89646,16.99971-1.99594C41.54983,37.99956,42,37.55563,42,37.0055V6 C29.08333,6,24,8,24,8V40z"
              />
              <path
                fill="#E6E6E6"
                d="M24,39c0,0-6.72025-3.79496-19.00562-3.99205C4.44716,34.99917,4,34.56,4,34.0127V4.01287 c0-0.55728,0.46262-1.01367,1.01982-1.0045C17.28903,3.21027,24,7,24,7V39z"
              />
              <path
                fill="#D1D1D1"
                d="M24,39c0,0,6.72025-3.79496,19.00562-3.99205C43.55285,34.99917,44,34.56,44,34.0127V4.01287 c0-0.55728-0.46262-1.01367-1.01982-1.0045C30.71097,3.21027,24,7,24,7V39z"
              />
            </svg>
          </g>
          <g transform="translate(2413 588)">
            <svg width="48" height="48" viewBox="0 0 48 48">
              <defs>
                <linearGradient
                  id="lens2-survey-0"
                  x1="9"
                  y1="2"
                  x2="9"
                  y2="14"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9ED9FA" />
                  <stop offset="1" stopColor="#60BEF6" />
                </linearGradient>
                <linearGradient
                  id="lens2-survey-1"
                  x1="9"
                  y1="34"
                  x2="9"
                  y2="46"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9ED9FA" />
                  <stop offset="1" stopColor="#60BEF6" />
                </linearGradient>
                <linearGradient
                  id="lens2-survey-2"
                  x1="8.98782"
                  y1="18.0121"
                  x2="8.98782"
                  y2="30.0121"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#344EEA" />
                  <stop offset="1" stopColor="#2138BB" />
                </linearGradient>
              </defs>
              <path
                d="M44 7H21C20.448 7 20 7.448 20 8C20 8.552 20.448 9 21 9H44C44.552 9 45 8.552 45 8C45 7.448 44.552 7 44 7Z"
                fill="#CBEAFB"
              />
              <path
                d="M44 23H21C20.448 23 20 23.448 20 24C20 24.552 20.448 25 21 25H44C44.552 25 45 24.552 45 24C45 23.448 44.552 23 44 23Z"
                fill="#344EEA"
              />
              <path
                d="M44 39H21C20.448 39 20 39.448 20 40C20 40.552 20.448 41 21 41H44C44.552 41 45 40.552 45 40C45 39.448 44.552 39 44 39Z"
                fill="#CBEAFB"
              />
              <path
                d="M14 2H4C3.44772 2 3 2.44772 3 3V13C3 13.5523 3.44772 14 4 14H14C14.5523 14 15 13.5523 15 13V3C15 2.44772 14.5523 2 14 2Z"
                fill="url(#lens2-survey-0)"
              />
              <path
                d="M14 34H4C3.44772 34 3 34.4477 3 35V45C3 45.5523 3.44772 46 4 46H14C14.5523 46 15 45.5523 15 45V35C15 34.4477 14.5523 34 14 34Z"
                fill="url(#lens2-survey-1)"
              />
              <path
                d="M10.4139 24L14.7069 19.707C15.0909 19.31 15.0799 18.677 14.6819 18.293C14.2939 17.919 13.6799 17.919 13.2929 18.293L8.99995 22.586L4.70695 18.293C4.30995 17.909 3.67695 17.92 3.29295 18.318C2.91895 18.706 2.91895 19.32 3.29295 19.707L7.58595 24L3.29295 28.293C2.89595 28.677 2.88495 29.31 3.26795 29.707C3.65195 30.104 4.28495 30.115 4.68195 29.732C4.68995 29.724 4.69895 29.716 4.70695 29.707L8.99995 25.414L13.2929 29.707C13.6899 30.091 14.3229 30.08 14.7069 29.682C15.0809 29.294 15.0809 28.68 14.7069 28.293L10.4139 24Z"
                fill="url(#lens2-survey-2)"
              />
            </svg>
          </g>
        </motion.g>

        {/* Output Cards */}
        <motion.g
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: baseDelay + stagger * 15, duration: 0.6 }}
        >
          <path
            d="M584.00803,941.83125c0.54785,-1.56366 2.33512,-2.83125 3.99197,-2.83125h254c1.65685,0 2.55588,1.2676 2.00803,2.83125l-46.01606,131.33749c-0.54785,1.56366 -2.33512,2.83125 -3.99197,2.83125h-254c-1.65685,0 -2.55588,-1.2676 -2.00803,-2.83125z"
            fill="#CC418E"
          />
          <text fill="#FFFFFF">
            <tspan
              x="636.7030181884766"
              y="999"
              fontFamily="DIN Next, system-ui, sans-serif"
              fontSize="27"
              fontWeight="bold"
            >
              Problem,{" "}
            </tspan>
            <tspan
              x="595.9465408325195"
              y="1035"
              fontFamily="DIN Next, system-ui, sans-serif"
              fontSize="27"
              fontWeight="bold"
            >
              Decision, Metric
            </tspan>
          </text>
        </motion.g>

        <motion.g
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: baseDelay + stagger * 16, duration: 0.6 }}
        >
          <path
            d="M584.00803,1544.83125c0.54785,-1.56366 2.33512,-2.83125 3.99197,-2.83125h254c1.65685,0 2.55588,1.2676 2.00803,2.83125l-46.01606,131.33749c-0.54785,1.56366 -2.33512,2.83125 -3.99197,2.83125h-254c-1.65685,0 -2.55588,-1.2676 -2.00803,-2.83125z"
            fill="#CC418E"
          />
          <text fill="#FFFFFF">
            <tspan
              x="613.685546875"
              y="1584"
              fontFamily="DIN Next, system-ui, sans-serif"
              fontSize="27"
              fontWeight="bold"
            >
              KPIs, Events,{" "}
            </tspan>
            <tspan
              x="626.4160079956055"
              y="1620"
              fontFamily="DIN Next, system-ui, sans-serif"
              fontSize="27"
              fontWeight="bold"
            >
              Dashboard{" "}
            </tspan>
            <tspan
              x="607.2055358886719"
              y="1656"
              fontFamily="DIN Next, system-ui, sans-serif"
              fontSize="27"
              fontWeight="bold"
            >
              Specifications
            </tspan>
          </text>
        </motion.g>

        <motion.g
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: baseDelay + stagger * 17, duration: 0.6 }}
        >
          <path
            d="M486.00803,2177.83125c0.54785,-1.56366 2.33512,-2.83125 3.99197,-2.83125h254c1.65685,0 2.55588,1.2676 2.00803,2.83125l-46.01606,131.33749c-0.54785,1.56366 -2.33512,2.83125 -3.99197,2.83125h-254c-1.65685,0 -2.55588,-1.2676 -2.00803,-2.83125z"
            fill="#CC418E"
          />
          <text fill="#FFFFFF">
            <tspan
              x="504.1835403442383"
              y="2217"
              fontFamily="DIN Next, system-ui, sans-serif"
              fontSize="27"
              fontWeight="bold"
            >
              Data Checklist,{" "}
            </tspan>
            <tspan
              x="504.87203216552734"
              y="2253"
              fontFamily="DIN Next, system-ui, sans-serif"
              fontSize="27"
              fontWeight="bold"
            >
              Model Options,{" "}
            </tspan>
            <tspan
              x="540.5255355834961"
              y="2289"
              fontFamily="DIN Next, system-ui, sans-serif"
              fontSize="27"
              fontWeight="bold"
            >
              Risk/ROI
            </tspan>
          </text>
        </motion.g>

        {/* Annotations */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: baseDelay + stagger * 18, duration: 0.6 }}
        >
          <text fill="#293845">
            <tspan
              x="1052.0300827026367"
              y="979"
              fontFamily="DIN Next, system-ui, sans-serif"
              fontSize="60"
              fontWeight="bold"
            >
              Problem, Decision, Metric
            </tspan>
          </text>
        </motion.g>

        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: baseDelay + stagger * 19, duration: 0.6 }}
        >
          <text fill="#293845">
            <tspan
              x="2698.020034790039"
              y="1220"
              fontFamily="DIN Next, system-ui, sans-serif"
              fontSize="60"
              fontWeight="bold"
            >
              Lenses are{" "}
            </tspan>
            <tspan
              x="2710.2900314331055"
              y="1292"
              fontFamily="DIN Next, system-ui, sans-serif"
              fontSize="60"
              fontWeight="bold"
            >
              views, not{" "}
            </tspan>
            <tspan
              x="2695.500030517578"
              y="1364"
              fontFamily="DIN Next, system-ui, sans-serif"
              fontSize="60"
              fontWeight="bold"
            >
              extra steps
            </tspan>
          </text>
        </motion.g>

        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: baseDelay + stagger * 20, duration: 0.6 }}
        >
          <text fill="#293845">
            <tspan
              x="981.7401123046875"
              y="1631"
              fontFamily="DIN Next, system-ui, sans-serif"
              fontSize="60"
              fontWeight="bold"
            >
              KPIs, Events, Dashboard Specs
            </tspan>
          </text>
        </motion.g>

        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: baseDelay + stagger * 21, duration: 0.6 }}
        >
          <text fill="#293845">
            <tspan
              x="940.6101303100586"
              y="2280"
              fontFamily="DIN Next, system-ui, sans-serif"
              fontSize="60"
              fontWeight="bold"
            >
              Model Options, Checklist, Risk ROI
            </tspan>
          </text>
        </motion.g>

        {/* Decision Diamonds - Second Row (v4 updated positions) */}
        <motion.g
          initial={{ opacity: 0, rotate: -5, scale: 0.9 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ delay: baseDelay + stagger * 22, duration: 0.5 }}
        >
          <path
            d="M1124.35023,1489.13548c-1.29799,1.02974 -3.40247,1.02974 -4.70046,0l-145.29954,-115.27097c-1.29799,-1.02974 -1.29799,-2.69929 0,-3.72903l145.29954,-115.27097c1.29799,-1.02974 3.40247,-1.02974 4.70046,0l145.29954,115.27097c1.29799,1.02974 1.29799,2.69929 0,3.72903z"
            fill="#2359D3"
          />
          <text fill="#FFFFFF">
            <tspan
              x="1053.4740142822266"
              y="1384.25"
              fontFamily="DIN Next, system-ui, sans-serif"
              fontSize="36"
              fontWeight="bold"
            >
              Measure
            </tspan>
          </text>
        </motion.g>

        <motion.g
          initial={{ opacity: 0, rotate: -5, scale: 0.9 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ delay: baseDelay + stagger * 22.5, duration: 0.5 }}
        >
          <path
            d="M1580.35023,1489.13548c-1.29799,1.02974 -3.40247,1.02974 -4.70046,0l-145.29954,-115.27097c-1.29799,-1.02974 -1.29799,-2.69929 0,-3.72903l145.29954,-115.27097c1.29799,-1.02974 3.40247,-1.02974 4.70046,0l145.29954,115.27097c1.29799,1.02974 1.29799,2.69929 0,3.72903z"
            fill="#2359D3"
          />
          <text fill="#FFFFFF">
            <tspan
              x="1529.7780227661133"
              y="1360"
              fontFamily="DIN Next, system-ui, sans-serif"
              fontSize="36"
              fontWeight="bold"
            >
              Do we{" "}
            </tspan>
            <tspan
              x="1503.0480270385742"
              y="1408.5"
              fontFamily="DIN Next, system-ui, sans-serif"
              fontSize="36"
              fontWeight="bold"
            >
              need ML?
            </tspan>
          </text>
        </motion.g>

        {/* Arrow between Measure and Do we need ML? (v4 simplified) */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: baseDelay + stagger * 23, duration: 0.6 }}
        >
          <motion.path
            d="M1282,1372h34c18.77766,0 49.22234,0 68,0l2,0"
            fill="none"
            stroke="#788896"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeWidth="32"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: baseDelay + stagger * 23, duration: 0.4 }}
          />
          <line
            stroke="#788896"
            fill="#788896"
            strokeLinejoin="round"
            y1="1386"
            strokeLinecap="round"
            strokeWidth="4"
            x1="1282"
            y2="1358"
            x2="1282"
          />
          <polygon
            points="1385.63932,1348.48859 1418,1372 1385.63932,1395.51141"
            fill="#788896"
            stroke="#788896"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.g>

        {/* Lenses - Second Row (v4 updated cy positions) */}
        <motion.g
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: baseDelay + stagger * 24, duration: 0.6 }}
        >
          <ellipse cx="1991" cy="1391" rx="95" ry="171" fill="#75D043" />
          <text fill="#FFFFFF">
            <tspan
              x="1918.6400299072266"
              y="1354.75"
              fontFamily="DIN Next, system-ui, sans-serif"
              fontSize="36"
              fontWeight="bold"
            >
              Business{" "}
            </tspan>
            <tspan
              x="1923.2480087280273"
              y="1403.25"
              fontFamily="DIN Next, system-ui, sans-serif"
              fontSize="36"
              fontWeight="bold"
            >
              Strategy{" "}
            </tspan>
            <tspan
              x="1952.5700149536133"
              y="1451.75"
              fontFamily="DIN Next, system-ui, sans-serif"
              fontSize="36"
              fontWeight="bold"
            >
              Lens
            </tspan>
          </text>
          <g transform="translate(1884 1238)">
            <svg width="48" height="48" viewBox="0 0 48 48">
              <path
                fill="#444444"
                d="M45,45H3c-1.10457,0-2-0.89543-2-2V9c0-1.10457,0.89543-2,2-2h42c1.10457,0,2,0.89543,2,2v34 C47,44.10457,46.10457,45,45,45z"
              />
              <path
                fill="#B3B3B3"
                d="M24,40c0,0-4.82016-1.89646-16.99971-1.99594C6.45017,37.99956,6,37.55563,6,37.0055V6c12.91667,0,18,2,18,2 V40z"
              />
              <path
                fill="#B3B3B3"
                d="M24,40c0,0,4.82016-1.89646,16.99971-1.99594C41.54983,37.99956,42,37.55563,42,37.0055V6 C29.08333,6,24,8,24,8V40z"
              />
              <path
                fill="#E6E6E6"
                d="M24,39c0,0-6.72025-3.79496-19.00562-3.99205C4.44716,34.99917,4,34.56,4,34.0127V4.01287 c0-0.55728,0.46262-1.01367,1.01982-1.0045C17.28903,3.21027,24,7,24,7V39z"
              />
              <path
                fill="#D1D1D1"
                d="M24,39c0,0,6.72025-3.79496,19.00562-3.99205C43.55285,34.99917,44,34.56,44,34.0127V4.01287 c0-0.55728-0.46262-1.01367-1.01982-1.0045C30.71097,3.21027,24,7,24,7V39z"
              />
            </svg>
          </g>
          <g transform="translate(2006 1250)">
            <svg width="48" height="48" viewBox="0 0 48 48">
              <defs>
                <linearGradient
                  id="lens3-survey-0"
                  x1="9"
                  y1="2"
                  x2="9"
                  y2="14"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9ED9FA" />
                  <stop offset="1" stopColor="#60BEF6" />
                </linearGradient>
                <linearGradient
                  id="lens3-survey-1"
                  x1="9"
                  y1="34"
                  x2="9"
                  y2="46"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9ED9FA" />
                  <stop offset="1" stopColor="#60BEF6" />
                </linearGradient>
                <linearGradient
                  id="lens3-survey-2"
                  x1="8.98782"
                  y1="18.0121"
                  x2="8.98782"
                  y2="30.0121"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#344EEA" />
                  <stop offset="1" stopColor="#2138BB" />
                </linearGradient>
              </defs>
              <path
                d="M44 7H21C20.448 7 20 7.448 20 8C20 8.552 20.448 9 21 9H44C44.552 9 45 8.552 45 8C45 7.448 44.552 7 44 7Z"
                fill="#CBEAFB"
              />
              <path
                d="M44 23H21C20.448 23 20 23.448 20 24C20 24.552 20.448 25 21 25H44C44.552 25 45 24.552 45 24C45 23.448 44.552 23 44 23Z"
                fill="#344EEA"
              />
              <path
                d="M44 39H21C20.448 39 20 39.448 20 40C20 40.552 20.448 41 21 41H44C44.552 41 45 40.552 45 40C45 39.448 44.552 39 44 39Z"
                fill="#CBEAFB"
              />
              <path
                d="M14 2H4C3.44772 2 3 2.44772 3 3V13C3 13.5523 3.44772 14 4 14H14C14.5523 14 15 13.5523 15 13V3C15 2.44772 14.5523 2 14 2Z"
                fill="url(#lens3-survey-0)"
              />
              <path
                d="M14 34H4C3.44772 34 3 34.4477 3 35V45C3 45.5523 3.44772 46 4 46H14C14.5523 46 15 45.5523 15 45V35C15 34.4477 14.5523 34 14 34Z"
                fill="url(#lens3-survey-1)"
              />
              <path
                d="M10.4139 24L14.7069 19.707C15.0909 19.31 15.0799 18.677 14.6819 18.293C14.2939 17.919 13.6799 17.919 13.2929 18.293L8.99995 22.586L4.70695 18.293C4.30995 17.909 3.67695 17.92 3.29295 18.318C2.91895 18.706 2.91895 19.32 3.29295 19.707L7.58595 24L3.29295 28.293C2.89595 28.677 2.88495 29.31 3.26795 29.707C3.65195 30.104 4.28495 30.115 4.68195 29.732C4.68995 29.724 4.69895 29.716 4.70695 29.707L8.99995 25.414L13.2929 29.707C13.6899 30.091 14.3229 30.08 14.7069 29.682C15.0809 29.294 15.0809 28.68 14.7069 28.293L10.4139 24Z"
                fill="url(#lens3-survey-2)"
              />
            </svg>
          </g>
        </motion.g>

        <motion.g
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: baseDelay + stagger * 24.5, duration: 0.6 }}
        >
          <ellipse cx="2406" cy="1391" rx="95" ry="216" fill="#7242CC" />
          <text fill="#FFFFFF">
            <tspan
              x="2347.1580123901367"
              y="1354.75"
              fontFamily="DIN Next, system-ui, sans-serif"
              fontSize="36"
              fontWeight="bold"
            >
              Prompt
            </tspan>
            <tspan
              x="2351.5680236816406"
              y="1403.25"
              fontFamily="DIN Next, system-ui, sans-serif"
              fontSize="36"
              fontWeight="bold"
            >
              Design{" "}
            </tspan>
            <tspan
              x="2367.5700149536133"
              y="1451.75"
              fontFamily="DIN Next, system-ui, sans-serif"
              fontSize="36"
              fontWeight="bold"
            >
              Lens
            </tspan>
          </text>
          <g transform="translate(2311 1211)">
            <svg width="48" height="48" viewBox="0 0 48 48">
              <path
                fill="#444444"
                d="M45,45H3c-1.10457,0-2-0.89543-2-2V9c0-1.10457,0.89543-2,2-2h42c1.10457,0,2,0.89543,2,2v34 C47,44.10457,46.10457,45,45,45z"
              />
              <path
                fill="#B3B3B3"
                d="M24,40c0,0-4.82016-1.89646-16.99971-1.99594C6.45017,37.99956,6,37.55563,6,37.0055V6c12.91667,0,18,2,18,2 V40z"
              />
              <path
                fill="#B3B3B3"
                d="M24,40c0,0,4.82016-1.89646,16.99971-1.99594C41.54983,37.99956,42,37.55563,42,37.0055V6 C29.08333,6,24,8,24,8V40z"
              />
              <path
                fill="#E6E6E6"
                d="M24,39c0,0-6.72025-3.79496-19.00562-3.99205C4.44716,34.99917,4,34.56,4,34.0127V4.01287 c0-0.55728,0.46262-1.01367,1.01982-1.0045C17.28903,3.21027,24,7,24,7V39z"
              />
              <path
                fill="#D1D1D1"
                d="M24,39c0,0,6.72025-3.79496,19.00562-3.99205C43.55285,34.99917,44,34.56,44,34.0127V4.01287 c0-0.55728-0.46262-1.01367-1.01982-1.0045C30.71097,3.21027,24,7,24,7V39z"
              />
            </svg>
          </g>
          <g transform="translate(2418 1211)">
            <svg width="48" height="48" viewBox="0 0 48 48">
              <defs>
                <linearGradient
                  id="lens4-survey-0"
                  x1="9"
                  y1="2"
                  x2="9"
                  y2="14"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9ED9FA" />
                  <stop offset="1" stopColor="#60BEF6" />
                </linearGradient>
                <linearGradient
                  id="lens4-survey-1"
                  x1="9"
                  y1="34"
                  x2="9"
                  y2="46"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9ED9FA" />
                  <stop offset="1" stopColor="#60BEF6" />
                </linearGradient>
                <linearGradient
                  id="lens4-survey-2"
                  x1="8.98782"
                  y1="18.0121"
                  x2="8.98782"
                  y2="30.0121"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#344EEA" />
                  <stop offset="1" stopColor="#2138BB" />
                </linearGradient>
              </defs>
              <path
                d="M44 7H21C20.448 7 20 7.448 20 8C20 8.552 20.448 9 21 9H44C44.552 9 45 8.552 45 8C45 7.448 44.552 7 44 7Z"
                fill="#CBEAFB"
              />
              <path
                d="M44 23H21C20.448 23 20 23.448 20 24C20 24.552 20.448 25 21 25H44C44.552 25 45 24.552 45 24C45 23.448 44.552 23 44 23Z"
                fill="#344EEA"
              />
              <path
                d="M44 39H21C20.448 39 20 39.448 20 40C20 40.552 20.448 41 21 41H44C44.552 41 45 40.552 45 40C45 39.448 44.552 39 44 39Z"
                fill="#CBEAFB"
              />
              <path
                d="M14 2H4C3.44772 2 3 2.44772 3 3V13C3 13.5523 3.44772 14 4 14H14C14.5523 14 15 13.5523 15 13V3C15 2.44772 14.5523 2 14 2Z"
                fill="url(#lens4-survey-0)"
              />
              <path
                d="M14 34H4C3.44772 34 3 34.4477 3 35V45C3 45.5523 3.44772 46 4 46H14C14.5523 46 15 45.5523 15 45V35C15 34.4477 14.5523 34 14 34Z"
                fill="url(#lens4-survey-1)"
              />
              <path
                d="M10.4139 24L14.7069 19.707C15.0909 19.31 15.0799 18.677 14.6819 18.293C14.2939 17.919 13.6799 17.919 13.2929 18.293L8.99995 22.586L4.70695 18.293C4.30995 17.909 3.67695 17.92 3.29295 18.318C2.91895 18.706 2.91895 19.32 3.29295 19.707L7.58595 24L3.29295 28.293C2.89595 28.677 2.88495 29.31 3.26795 29.707C3.65195 30.104 4.28495 30.115 4.68195 29.732C4.68995 29.724 4.69895 29.716 4.70695 29.707L8.99995 25.414L13.2929 29.707C13.6899 30.091 14.3229 30.08 14.7069 29.682C15.0809 29.294 15.0809 28.68 14.7069 28.293L10.4139 24Z"
                fill="url(#lens4-survey-2)"
              />
            </svg>
          </g>
        </motion.g>

        {/* Arrow between second row lenses (v4 simplified) */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: baseDelay + stagger * 25, duration: 0.6 }}
        >
          <motion.path
            d="M1738,1372h37c20.43451,0 53.56549,0 74,0h5"
            fill="none"
            stroke="#788896"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeWidth="32"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: baseDelay + stagger * 25, duration: 0.4 }}
          />
          <line
            stroke="#788896"
            fill="#788896"
            strokeLinejoin="round"
            y1="1386"
            strokeLinecap="round"
            strokeWidth="4"
            x1="1738.0000000000002"
            y2="1358"
            x2="1738.0000000000002"
          />
          <polygon
            points="1853.63932,1348.48859 1886,1372 1853.63932,1395.51141"
            fill="#788896"
            stroke="#788896"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.g>

        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: baseDelay + stagger * 25.5, duration: 0.6 }}
        >
          <motion.path
            d="M2096,1391h62.5c22.09136,0 57.90864,0 80,0h30.5"
            fill="none"
            stroke="#788896"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeWidth="32"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: baseDelay + stagger * 25.5, duration: 0.4 }}
          />
          <line
            stroke="#788896"
            fill="#788896"
            strokeLinejoin="round"
            y1="1405"
            strokeLinecap="round"
            strokeWidth="4"
            x1="2096"
            y2="1377"
            x2="2096"
          />
          <polygon
            points="2268.63932,1367.48859 2301,1391 2268.63932,1414.51141"
            fill="#788896"
            stroke="#788896"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.g>

        {/* Optional Route arrow (v4 updated) */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: baseDelay + stagger * 26, duration: 0.9 }}
        >
          <motion.path
            d="M2511,1391h89c22.09136,0 40,17.90864 40,40v293c0,22.09136 -17.90864,40 -40,40h-2044.5c-21.81522,0 -39.5,17.68478 -39.5,39.5v7.5"
            fill="none"
            stroke="#788896"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeWidth="32"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: baseDelay + stagger * 26, duration: 1.2 }}
          />
          <rect
            x="1636"
            y="1735.75"
            width="290"
            height="56.5"
            rx="28"
            ry="28"
            fill="#788896"
          />
          <text fill="#FFFFFF">
            <tspan
              x="1664.4860458374023"
              y="1776.25"
              fontFamily="DIN Next, system-ui, sans-serif"
              fontSize="36"
              fontWeight="bold"
            >
              Optional Route
            </tspan>
          </text>
          <line
            stroke="#788896"
            fill="#788896"
            strokeLinejoin="round"
            y1="1405"
            strokeLinecap="round"
            strokeWidth="4"
            x1="2511"
            y2="1377"
            x2="2511"
          />
          <polygon
            points="539.51141,1810.63932 516,1843 492.48859,1810.63932"
            fill="#788896"
            stroke="#788896"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.g>

        {/* Beta Badges */}
        <motion.g
          initial={{ opacity: 0, rotate: -15, scale: 0.8 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ delay: baseDelay + stagger * 27, duration: 0.5 }}
        >
          <polygon
            points="1664.52811,1460.3927 1680,1467.36562 1672.75091,1480.22056 1679.83276,1495.67653 1659.73849,1499.93524 1654.37107,1522.61379 1626.82633,1514.95368 1605.28383,1535.85252 1576.8927,1520.90985 1553.87193,1537 1537.46072,1516.46736 1508.76047,1526.03562 1501.46156,1502.10886 1480.52132,1499.49958 1486.02018,1483.32366 1476,1474.44926 1488.20812,1467.4926 1489.93484,1445.84865 1517.38329,1445.79001 1527.87433,1425.4135 1551.45657,1437.10753 1575.95935,1419 1601.2499,1436.41827 1626.98062,1423.87244 1639.94574,1445.45392 1662.91782,1441.95166 1664.52811,1460.3927"
            fill="#FD6134"
          />
          <text fill="#FFFFFF">
            <tspan
              x="1551.0540161132812"
              y="1487.5"
              fontFamily="DIN Next, system-ui, sans-serif"
              fontSize="27"
              fontWeight="bold"
            >
              Beta
            </tspan>
          </text>
        </motion.g>

        <motion.g
          initial={{ opacity: 0, rotate: -15, scale: 0.8 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ delay: baseDelay + stagger * 27.5, duration: 0.5 }}
        >
          <polygon
            points="781.52811,1849.3927 797,1856.36562 789.75091,1869.22056 796.83276,1884.67653 776.73849,1888.93524 771.37107,1911.61379 743.82633,1903.95368 722.28383,1924.85252 693.8927,1909.90985 670.87193,1926 654.46072,1905.46736 625.76047,1915.03562 618.46156,1891.10886 597.52132,1888.49958 603.02018,1872.32366 593,1863.44926 605.20812,1856.4926 606.93484,1834.84865 634.38329,1834.79001 644.87433,1814.4135 668.45657,1826.10753 692.95935,1808 718.2499,1825.41827 743.98062,1812.87244 756.94574,1834.45392 779.91782,1830.95166 781.52811,1849.3927"
            fill="#FD6134"
          />
          <text fill="#FFFFFF">
            <tspan
              x="668.0540161132812"
              y="1876.5"
              fontFamily="DIN Next, system-ui, sans-serif"
              fontSize="27"
              fontWeight="bold"
            >
              Beta
            </tspan>
          </text>
        </motion.g>

        {/* Small vertical arrows connecting lenses (v4 updated) */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: baseDelay + stagger * 28, duration: 0.5 }}
        >
          <line
            stroke="#788896"
            fill="none"
            strokeLinejoin="round"
            y1="1283.4118574090323"
            strokeLinecap="round"
            strokeWidth="4"
            x1="1913.9999999999998"
            y2="1290.411857409032"
            x2="1913.9999999999998"
          />
          <polygon
            points="1919.54095,1287.31976 1914,1294.41186 1908.45905,1287.31976"
            fill="#788896"
            stroke="#788896"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.g>

        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: baseDelay + stagger * 28.5, duration: 0.5 }}
        >
          <line
            stroke="#788896"
            fill="none"
            strokeLinejoin="round"
            y1="1887.2420102620054"
            strokeLinecap="round"
            strokeWidth="4"
            x1="2335"
            y2="1894.2420102620058"
            x2="2335"
          />
          <polygon
            points="2340.54095,1891.14991 2335,1898.24201 2329.45905,1891.14991"
            fill="#788896"
            stroke="#788896"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.g>

        {/* Decision Diamonds - Third Row */}
        <motion.g
          initial={{ opacity: 0, rotate: -5, scale: 0.9 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ delay: baseDelay + stagger * 29, duration: 0.5 }}
        >
          <path
            d="M1124.35023,2149.13548c-1.29799,1.02974 -3.40247,1.02974 -4.70046,0l-145.29954,-115.27097c-1.29799,-1.02974 -1.29799,-2.69929 0,-3.72903l145.29954,-115.27097c1.29799,-1.02974 3.40247,-1.02974 4.70046,0l145.29954,115.27097c1.29799,1.02974 1.29799,2.69929 0,3.72903z"
            fill="#2359D3"
          />
          <text fill="#FFFFFF">
            <tspan
              x="1064.040023803711"
              y="2020"
              fontFamily="DIN Next, system-ui, sans-serif"
              fontSize="36"
              fontWeight="bold"
            >
              Choose{" "}
            </tspan>
            <tspan
              x="1073.8500137329102"
              y="2068.5"
              fontFamily="DIN Next, system-ui, sans-serif"
              fontSize="36"
              fontWeight="bold"
            >
              Model
            </tspan>
          </text>
        </motion.g>

        <motion.g
          initial={{ opacity: 0, rotate: -5, scale: 0.9 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ delay: baseDelay + stagger * 29.5, duration: 0.5 }}
        >
          <path
            d="M1580.35023,2149.13548c-1.29799,1.02974 -3.40247,1.02974 -4.70046,0l-145.29954,-115.27097c-1.29799,-1.02974 -1.29799,-2.69929 0,-3.72903l145.29954,-115.27097c1.29799,-1.02974 3.40247,-1.02974 4.70046,0l145.29954,115.27097c1.29799,1.02974 1.29799,2.69929 0,3.72903z"
            fill="#2359D3"
          />
          <text fill="#FFFFFF">
            <tspan
              x="1509.3840103149414"
              y="2044.25"
              fontFamily="DIN Next, system-ui, sans-serif"
              fontSize="36"
              fontWeight="bold"
            >
              Evaluate
            </tspan>
          </text>
        </motion.g>

        {/* Arrow between Choose Model and Evaluate (v4 simplified) */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: baseDelay + stagger * 30, duration: 0.6 }}
        >
          <motion.path
            d="M1282,2032h34c18.77766,0 49.22234,0 68,0h2"
            fill="none"
            stroke="#788896"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeWidth="32"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: baseDelay + stagger * 30, duration: 0.4 }}
          />
          <line
            stroke="#788896"
            fill="#788896"
            strokeLinejoin="round"
            y1="2046"
            strokeLinecap="round"
            strokeWidth="4"
            x1="1282"
            y2="2018"
            x2="1282"
          />
          <polygon
            points="1385.63932,2008.48859 1418,2032 1385.63932,2055.51141"
            fill="#788896"
            stroke="#788896"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.g>

        {/* Lenses - Third Row (v4 updated cy for Prompt Design) */}
        <motion.g
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: baseDelay + stagger * 31, duration: 0.6 }}
        >
          <ellipse cx="1991" cy="2060" rx="95" ry="171" fill="#75D043" />
          <text fill="#FFFFFF">
            <tspan
              x="1918.6400299072266"
              y="2023.75"
              fontFamily="DIN Next, system-ui, sans-serif"
              fontSize="36"
              fontWeight="bold"
            >
              Business{" "}
            </tspan>
            <tspan
              x="1923.2480087280273"
              y="2072.25"
              fontFamily="DIN Next, system-ui, sans-serif"
              fontSize="36"
              fontWeight="bold"
            >
              Strategy{" "}
            </tspan>
            <tspan
              x="1952.5700149536133"
              y="2120.75"
              fontFamily="DIN Next, system-ui, sans-serif"
              fontSize="36"
              fontWeight="bold"
            >
              Lens
            </tspan>
          </text>
          <g transform="translate(1884 1919)">
            <svg width="48" height="48" viewBox="0 0 48 48">
              <path
                fill="#444444"
                d="M45,45H3c-1.10457,0-2-0.89543-2-2V9c0-1.10457,0.89543-2,2-2h42c1.10457,0,2,0.89543,2,2v34 C47,44.10457,46.10457,45,45,45z"
              />
              <path
                fill="#B3B3B3"
                d="M24,40c0,0-4.82016-1.89646-16.99971-1.99594C6.45017,37.99956,6,37.55563,6,37.0055V6c12.91667,0,18,2,18,2 V40z"
              />
              <path
                fill="#B3B3B3"
                d="M24,40c0,0,4.82016-1.89646,16.99971-1.99594C41.54983,37.99956,42,37.55563,42,37.0055V6 C29.08333,6,24,8,24,8V40z"
              />
              <path
                fill="#E6E6E6"
                d="M24,39c0,0-6.72025-3.79496-19.00562-3.99205C4.44716,34.99917,4,34.56,4,34.0127V4.01287 c0-0.55728,0.46262-1.01367,1.01982-1.0045C17.28903,3.21027,24,7,24,7V39z"
              />
              <path
                fill="#D1D1D1"
                d="M24,39c0,0,6.72025-3.79496,19.00562-3.99205C43.55285,34.99917,44,34.56,44,34.0127V4.01287 c0-0.55728-0.46262-1.01367-1.01982-1.0045C30.71097,3.21027,24,7,24,7V39z"
              />
            </svg>
          </g>
          <g transform="translate(2006 1919)">
            <svg width="48" height="48" viewBox="0 0 48 48">
              <defs>
                <linearGradient
                  id="lens5-survey-0"
                  x1="9"
                  y1="2"
                  x2="9"
                  y2="14"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9ED9FA" />
                  <stop offset="1" stopColor="#60BEF6" />
                </linearGradient>
                <linearGradient
                  id="lens5-survey-1"
                  x1="9"
                  y1="34"
                  x2="9"
                  y2="46"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9ED9FA" />
                  <stop offset="1" stopColor="#60BEF6" />
                </linearGradient>
                <linearGradient
                  id="lens5-survey-2"
                  x1="8.98782"
                  y1="18.0121"
                  x2="8.98782"
                  y2="30.0121"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#344EEA" />
                  <stop offset="1" stopColor="#2138BB" />
                </linearGradient>
              </defs>
              <path
                d="M44 7H21C20.448 7 20 7.448 20 8C20 8.552 20.448 9 21 9H44C44.552 9 45 8.552 45 8C45 7.448 44.552 7 44 7Z"
                fill="#CBEAFB"
              />
              <path
                d="M44 23H21C20.448 23 20 23.448 20 24C20 24.552 20.448 25 21 25H44C44.552 25 45 24.552 45 24C45 23.448 44.552 23 44 23Z"
                fill="#344EEA"
              />
              <path
                d="M44 39H21C20.448 39 20 39.448 20 40C20 40.552 20.448 41 21 41H44C44.552 41 45 40.552 45 40C45 39.448 44.552 39 44 39Z"
                fill="#CBEAFB"
              />
              <path
                d="M14 2H4C3.44772 2 3 2.44772 3 3V13C3 13.5523 3.44772 14 4 14H14C14.5523 14 15 13.5523 15 13V3C15 2.44772 14.5523 2 14 2Z"
                fill="url(#lens5-survey-0)"
              />
              <path
                d="M14 34H4C3.44772 34 3 34.4477 3 35V45C3 45.5523 3.44772 46 4 46H14C14.5523 46 15 45.5523 15 45V35C15 34.4477 14.5523 34 14 34Z"
                fill="url(#lens5-survey-1)"
              />
              <path
                d="M10.4139 24L14.7069 19.707C15.0909 19.31 15.0799 18.677 14.6819 18.293C14.2939 17.919 13.6799 17.919 13.2929 18.293L8.99995 22.586L4.70695 18.293C4.30995 17.909 3.67695 17.92 3.29295 18.318C2.91895 18.706 2.91895 19.32 3.29295 19.707L7.58595 24L3.29295 28.293C2.89595 28.677 2.88495 29.31 3.26795 29.707C3.65195 30.104 4.28495 30.115 4.68195 29.732C4.68995 29.724 4.69895 29.716 4.70695 29.707L8.99995 25.414L13.2929 29.707C13.6899 30.091 14.3229 30.08 14.7069 29.682C15.0809 29.294 15.0809 28.68 14.7069 28.293L10.4139 24Z"
                fill="url(#lens5-survey-2)"
              />
            </svg>
          </g>
        </motion.g>

        <motion.g
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: baseDelay + stagger * 31.5, duration: 0.6 }}
        >
          <ellipse cx="2406" cy="2036" rx="95" ry="216" fill="#7242CC" />
          <text fill="#FFFFFF">
            <tspan
              x="2347.1580123901367"
              y="1999.75"
              fontFamily="DIN Next, system-ui, sans-serif"
              fontSize="36"
              fontWeight="bold"
            >
              Prompt
            </tspan>
            <tspan
              x="2351.5680236816406"
              y="2048.25"
              fontFamily="DIN Next, system-ui, sans-serif"
              fontSize="36"
              fontWeight="bold"
            >
              Design{" "}
            </tspan>
            <tspan
              x="2367.5700149536133"
              y="2096.75"
              fontFamily="DIN Next, system-ui, sans-serif"
              fontSize="36"
              fontWeight="bold"
            >
              Lens
            </tspan>
          </text>
          <g transform="translate(2311 1844)">
            <svg width="48" height="48" viewBox="0 0 48 48">
              <path
                fill="#444444"
                d="M45,45H3c-1.10457,0-2-0.89543-2-2V9c0-1.10457,0.89543-2,2-2h42c1.10457,0,2,0.89543,2,2v34 C47,44.10457,46.10457,45,45,45z"
              />
              <path
                fill="#B3B3B3"
                d="M24,40c0,0-4.82016-1.89646-16.99971-1.99594C6.45017,37.99956,6,37.55563,6,37.0055V6c12.91667,0,18,2,18,2 V40z"
              />
              <path
                fill="#B3B3B3"
                d="M24,40c0,0,4.82016-1.89646,16.99971-1.99594C41.54983,37.99956,42,37.55563,42,37.0055V6 C29.08333,6,24,8,24,8V40z"
              />
              <path
                fill="#E6E6E6"
                d="M24,39c0,0-6.72025-3.79496-19.00562-3.99205C4.44716,34.99917,4,34.56,4,34.0127V4.01287 c0-0.55728,0.46262-1.01367,1.01982-1.0045C17.28903,3.21027,24,7,24,7V39z"
              />
              <path
                fill="#D1D1D1"
                d="M24,39c0,0,6.72025-3.79496,19.00562-3.99205C43.55285,34.99917,44,34.56,44,34.0127V4.01287 c0-0.55728-0.46262-1.01367-1.01982-1.0045C30.71097,3.21027,24,7,24,7V39z"
              />
            </svg>
          </g>
          <g transform="translate(2418 1856)">
            <svg width="48" height="48" viewBox="0 0 48 48">
              <defs>
                <linearGradient
                  id="lens6-survey-0"
                  x1="9"
                  y1="2"
                  x2="9"
                  y2="14"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9ED9FA" />
                  <stop offset="1" stopColor="#60BEF6" />
                </linearGradient>
                <linearGradient
                  id="lens6-survey-1"
                  x1="9"
                  y1="34"
                  x2="9"
                  y2="46"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9ED9FA" />
                  <stop offset="1" stopColor="#60BEF6" />
                </linearGradient>
                <linearGradient
                  id="lens6-survey-2"
                  x1="8.98782"
                  y1="18.0121"
                  x2="8.98782"
                  y2="30.0121"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#344EEA" />
                  <stop offset="1" stopColor="#2138BB" />
                </linearGradient>
              </defs>
              <path
                d="M44 7H21C20.448 7 20 7.448 20 8C20 8.552 20.448 9 21 9H44C44.552 9 45 8.552 45 8C45 7.448 44.552 7 44 7Z"
                fill="#CBEAFB"
              />
              <path
                d="M44 23H21C20.448 23 20 23.448 20 24C20 24.552 20.448 25 21 25H44C44.552 25 45 24.552 45 24C45 23.448 44.552 23 44 23Z"
                fill="#344EEA"
              />
              <path
                d="M44 39H21C20.448 39 20 39.448 20 40C20 40.552 20.448 41 21 41H44C44.552 41 45 40.552 45 40C45 39.448 44.552 39 44 39Z"
                fill="#CBEAFB"
              />
              <path
                d="M14 2H4C3.44772 2 3 2.44772 3 3V13C3 13.5523 3.44772 14 4 14H14C14.5523 14 15 13.5523 15 13V3C15 2.44772 14.5523 2 14 2Z"
                fill="url(#lens6-survey-0)"
              />
              <path
                d="M14 34H4C3.44772 34 3 34.4477 3 35V45C3 45.5523 3.44772 46 4 46H14C14.5523 46 15 45.5523 15 45V35C15 34.4477 14.5523 34 14 34Z"
                fill="url(#lens6-survey-1)"
              />
              <path
                d="M10.4139 24L14.7069 19.707C15.0909 19.31 15.0799 18.677 14.6819 18.293C14.2939 17.919 13.6799 17.919 13.2929 18.293L8.99995 22.586L4.70695 18.293C4.30995 17.909 3.67695 17.92 3.29295 18.318C2.91895 18.706 2.91895 19.32 3.29295 19.707L7.58595 24L3.29295 28.293C2.89595 28.677 2.88495 29.31 3.26795 29.707C3.65195 30.104 4.28495 30.115 4.68195 29.732C4.68995 29.724 4.69895 29.716 4.70695 29.707L8.99995 25.414L13.2929 29.707C13.6899 30.091 14.3229 30.08 14.7069 29.682C15.0809 29.294 15.0809 28.68 14.7069 28.293L10.4139 24Z"
                fill="url(#lens6-survey-2)"
              />
            </svg>
          </g>
        </motion.g>

        {/* Arrow between third row lenses (v4 simplified) */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: baseDelay + stagger * 32, duration: 0.6 }}
        >
          <motion.path
            d="M1738,2032h37c20.43451,0 53.56549,0 74,0h6.26733"
            fill="none"
            stroke="#788896"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeWidth="32"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: baseDelay + stagger * 32, duration: 0.4 }}
          />
          <line
            stroke="#788896"
            fill="#788896"
            strokeLinejoin="round"
            y1="2046"
            strokeLinecap="round"
            strokeWidth="4"
            x1="1738.0000000000002"
            y2="2018"
            x2="1738.0000000000002"
          />
          <polygon
            points="1854.90665,2008.48859 1887.26733,2032 1854.90665,2055.51141"
            fill="#788896"
            stroke="#788896"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.g>

        {/* Arrow to User Learns (v4 simplified) */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: baseDelay + stagger * 33, duration: 0.6 }}
        >
          <motion.path
            d="M2096,2060h62.5c22.09136,0 57.90864,0 80,0h31.0798"
            fill="none"
            stroke="#788896"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeWidth="32"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: baseDelay + stagger * 33, duration: 0.5 }}
          />
          <line
            stroke="#788896"
            fill="#788896"
            strokeLinejoin="round"
            y1="2074"
            strokeLinecap="round"
            strokeWidth="4"
            x1="2096"
            y2="2046"
            x2="2096"
          />
          <polygon
            points="2269.21912,2036.48859 2301.5798,2060 2269.21912,2083.51141"
            fill="#788896"
            stroke="#788896"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.g>

        {/* Lesson and Quiz Output arrows (v4 updated) */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: baseDelay + stagger * 34, duration: 0.8 }}
        >
          <motion.path
            d="M2511,2036h65c22.09136,0 40,-17.90864 40,-40v-122c0,-22.09136 17.90864,-40 40,-40h182"
            fill="none"
            stroke="#788896"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeWidth="32"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: baseDelay + stagger * 34, duration: 0.7 }}
          />
          <rect
            x="2524.5"
            y="1805.75"
            width="285"
            height="56.5"
            rx="28"
            ry="28"
            fill="#788896"
          />
          <text fill="#FFFFFF">
            <tspan
              x="2552.7900466918945"
              y="1846.25"
              fontFamily="DIN Next, system-ui, sans-serif"
              fontSize="36"
              fontWeight="bold"
            >
              Lesson Output
            </tspan>
          </text>
          <line
            stroke="#788896"
            fill="#788896"
            strokeLinejoin="round"
            y1="2050"
            strokeLinecap="round"
            strokeWidth="4"
            x1="2511"
            y2="2022"
            x2="2511"
          />
          <polygon
            points="2837.63932,1810.48859 2870,1834 2837.63932,1857.51141"
            fill="#788896"
            stroke="#788896"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.g>

        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: baseDelay + stagger * 34.5, duration: 0.8 }}
        >
          <motion.path
            d="M2511,2036h65c22.09136,0 40,17.90864 40,40v127c0,22.09136 17.90864,40 40,40h182"
            fill="none"
            stroke="#788896"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeWidth="32"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: baseDelay + stagger * 34.5, duration: 0.7 }}
          />
          <rect
            x="2569"
            y="2214.75"
            width="240"
            height="56.5"
            rx="28"
            ry="28"
            fill="#788896"
          />
          <text fill="#FFFFFF">
            <tspan
              x="2597.056037902832"
              y="2255.25"
              fontFamily="DIN Next, system-ui, sans-serif"
              fontSize="36"
              fontWeight="bold"
            >
              Quiz Output
            </tspan>
          </text>
          <line
            stroke="#788896"
            fill="#788896"
            strokeLinejoin="round"
            y1="2050"
            strokeLinecap="round"
            strokeWidth="4"
            x1="2511"
            y2="2022"
            x2="2511"
          />
          <polygon
            points="2837.63932,2219.48859 2870,2243 2837.63932,2266.51141"
            fill="#788896"
            stroke="#788896"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.g>

        {/* User Learns Cloud with complete icon SVGs */}
        <motion.g
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: baseDelay + stagger * 35, duration: 0.8 }}
        >
          <path
            d="M3477.32972,2006.9147c7.32608,4.31478 12.45737,11.14169 14.24462,18.95176c1.78726,7.81007 0.08115,15.95065 -4.73623,22.59856c3.77695,8.41984 3.19784,17.95284 -1.57561,25.93658c-4.77345,7.98374 -13.22964,13.56258 -23.0069,15.17843c-5.64429,18.83053 -26.86822,29.91299 -47.42604,24.76437c-4.82888,9.55301 -14.70004,16.14324 -26.10398,17.42768c-11.40394,1.28444 -22.72309,-2.9191 -29.93317,-11.11614c-10.28317,9.30622 -25.27086,12.76117 -39.13594,9.02159c-13.86508,-3.73958 -24.4199,-14.08365 -27.5608,-27.01051c-8.30776,2.10631 -17.21372,0.14222 -23.56571,-5.19709c-6.35199,-5.33931 -9.25377,-13.3005 -7.67828,-21.06578c-9.7556,-2.4828 -17.33813,-9.52621 -19.91416,-18.49825c-2.57603,-8.97204 0.24209,-18.52261 7.40127,-25.08287c-4.98814,-6.59142 -5.85287,-15.09256 -2.28004,-22.4151c3.57282,-7.32254 11.06331,-12.40097 19.75029,-13.39037c1.34841,-10.25002 7.49492,-19.45607 16.84053,-25.22322c9.34561,-5.76715 20.9664,-7.52525 31.83925,-4.81693c7.04319,-11.86858 19.99118,-19.81736 34.6495,-21.27133c14.65832,-1.45397 29.16279,3.77176 38.81472,13.98434c7.54849,-6.74791 18.50835,-9.19396 28.59795,-6.38257c10.0896,2.81139 17.70782,10.43408 19.8785,19.89017c10.47761,-1.20446 21.00937,1.82212 28.85962,8.29358c7.85025,6.47147 12.24424,15.74913 12.04061,25.4231z"
            fill="#2359D3"
          />
          <text fill="#FFFFFF">
            <tspan
              x="3268.429369099935"
              y="2050.9832437731466"
              fontFamily="DIN Next, system-ui, sans-serif"
              fontSize="36"
              fontWeight="bold"
            >
              User Learns
            </tspan>
          </text>
          {/* Artificial Brain Icon */}
          <g transform="translate(3457.866666666667 1915.6998692905383)">
            <svg width="126" height="126" viewBox="0 0 48 48">
              <path
                d="M19,1a6.786,6.786,0,0,0-6.282,4A10.879,10.879,0,0,0,2,16a11.077,11.077,0,0,0,2.331,6.852A6.838,6.838,0,0,0,2,28a6.63,6.63,0,0,0,2.412,5.178A10.183,10.183,0,0,0,4,36,10.883,10.883,0,0,0,15,47,10.883,10.883,0,0,0,26,36V8A6.926,6.926,0,0,0,19,1Zm5,35a8.9,8.9,0,0,1-9,9,8.9,8.9,0,0,1-9-9,8.031,8.031,0,0,1,.528-2.829,1,1,0,0,0-.4-1.219A4.606,4.606,0,0,1,4,28a4.853,4.853,0,0,1,1.735-3.711,11.3,11.3,0,0,0,6.337,2.664,6.754,6.754,0,0,0,4.612,5.6,1,1,0,0,0,.632-1.9A4.819,4.819,0,0,1,14,26a4.751,4.751,0,0,1,1.64-3.632,1,1,0,1,0-1.28-1.537,6.7,6.7,0,0,0-2.27,4.122,9.287,9.287,0,0,1-5.583-2.66A9.046,9.046,0,0,1,4,16a8.9,8.9,0,0,1,9-9h.4a1,1,0,0,0,.949-.684A4.819,4.819,0,0,1,19,3a4.89,4.89,0,0,1,5,5Z"
                fill="#cc9875"
              />
              <path
                d="M24,36a8.9,8.9,0,0,1-9,9,8.9,8.9,0,0,1-9-9,8.031,8.031,0,0,1,.528-2.829,1,1,0,0,0-.4-1.219A4.606,4.606,0,0,1,4,28a4.853,4.853,0,0,1,1.735-3.711,11.3,11.3,0,0,0,6.337,2.664,6.754,6.754,0,0,0,4.612,5.6,1,1,0,0,0,.632-1.9A4.819,4.819,0,0,1,14,26a4.751,4.751,0,0,1,1.64-3.632,1,1,0,1,0-1.28-1.537,6.7,6.7,0,0,0-2.27,4.122,9.287,9.287,0,0,1-5.583-2.66A9.046,9.046,0,0,1,4,16a8.9,8.9,0,0,1,9-9h.4a1,1,0,0,0,.949-.684A4.819,4.819,0,0,1,19,3a4.89,4.89,0,0,1,5,5Z"
                fill="#eebc99"
              />
              <path
                d="M39.216,38.114a2.9,2.9,0,0,0-2.12.2.91.91,0,0,0-.1-.145l-3.879-3.879A1,1,0,0,0,32.414,34H21a1,1,0,0,0-1,1h0a1,1,0,0,0,1,1H32l3.586,3.586a.91.91,0,0,0,.145.1,2.9,2.9,0,0,0-.2,2.12,3.037,3.037,0,0,0,2.408,2.161,3,3,0,0,0,3.441-3.441A3.037,3.037,0,0,0,39.216,38.114Z"
                fill="#5a7a84"
              />
              <path
                d="M42,17.056a2.99,2.99,0,0,0-3.416,1.979A.915.915,0,0,0,38.414,19H21a1,1,0,0,0-1,1h0a1,1,0,0,0,1,1H38.414a.915.915,0,0,0,.173-.035A2.995,2.995,0,1,0,42,17.056Z"
                fill="#5a7a84"
              />
              <path
                d="M37.414,25a2.989,2.989,0,0,0-2.827,2.035A.915.915,0,0,0,34.414,27H26v2h8.414a.915.915,0,0,0,.173-.035A2.994,2.994,0,1,0,37.414,25Z"
                fill="#223e49"
              />
              <path
                d="M38.414,4a2.98,2.98,0,0,0-2.683,4.318.91.91,0,0,0-.145.1L32,12H26v2h6.414a1,1,0,0,0,.707-.293L37,9.828a.91.91,0,0,0,.1-.145A3,3,0,1,0,38.414,4Z"
                fill="#223e49"
              />
            </svg>
          </g>
          {/* Reading Person Icon */}
          <g transform="translate(3366.133333333333 1913.9716941398592)">
            <svg width="92" height="92" viewBox="0 0 48 48">
              <path
                d="M45.762,36.436,38.3,20.584A4.517,4.517,0,0,0,34.23,18H13.77A4.517,4.517,0,0,0,9.7,20.584L2.238,36.436a2.5,2.5,0,0,0,2.785,3.508L12,38.449V47H36V38.449l6.977,1.5a2.5,2.5,0,0,0,2.785-3.508ZM8.911,34,12,27.435v5.9ZM36,33.336v-5.9L39.089,34Z"
                fill="#335262"
              />
              <polygon
                points="33 41.091 24 43 15 41 15 25 24 27 33 25 33 41.091"
                fill="#ddbe99"
              />
              <path
                d="M24,16h0a7.5,7.5,0,0,1-7.5-7.5h0A7.5,7.5,0,0,1,24,1h0a7.5,7.5,0,0,1,7.5,7.5h0A7.5,7.5,0,0,1,24,16Z"
                fill="#5a7a84"
              />
              <path
                d="M17.977,32.056l-3.539.756v5.126l4.585-.994a2.5,2.5,0,1,0-1.046-4.888Z"
                fill="#335262"
              />
              <path
                d="M33.458,32.792l-3.435-.736a2.5,2.5,0,1,0-1.046,4.888l4.481.994Z"
                fill="#335262"
              />
            </svg>
          </g>
          {/* Lightbulb Icon */}
          <g transform="translate(3400.5333333333333 1853.7995933483407)">
            <svg width="92" height="92" viewBox="0 0 48 48">
              <path
                fill="#43A6DD"
                d="M6,25H2c-0.55225,0-1-0.44727-1-1s0.44775-1,1-1h4c0.55225,0,1,0.44727,1,1S6.55225,25,6,25z"
              />
              <path
                fill="#43A6DD"
                d="M11.27197,12.27246c-0.25586,0-0.51172-0.09766-0.70703-0.29297l-2.82812-2.8291 c-0.39062-0.39062-0.39062-1.02344,0-1.41406s1.02344-0.39062,1.41406,0l2.82812,2.8291c0.39062,0.39062,0.39062,1.02344,0,1.41406 C11.78369,12.1748,11.52783,12.27246,11.27197,12.27246z"
              />
              <path
                fill="#43A6DD"
                d="M24,7c-0.55225,0-1-0.44727-1-1V2c0-0.55273,0.44775-1,1-1s1,0.44727,1,1v4C25,6.55273,24.55225,7,24,7z"
              />
              <path
                fill="#43A6DD"
                d="M36.72803,12.27246c-0.25586,0-0.51172-0.09766-0.70703-0.29297c-0.39062-0.39062-0.39062-1.02344,0-1.41406 l2.82812-2.8291c0.38965-0.39062,1.02344-0.39062,1.41406,0s0.39062,1.02344,0,1.41406l-2.82812,2.8291 C37.24023,12.1748,36.98389,12.27246,36.72803,12.27246z"
              />
              <path
                fill="#43A6DD"
                d="M46,25h-4c-0.55225,0-1-0.44727-1-1s0.44775-1,1-1h4c0.55225,0,1,0.44727,1,1S46.55225,25,46,25z"
              />
              <path
                fill="#EFD358"
                d="M29,41H19v-5.01172c-5.33776-2.22651-8.67485-7.80107-7.88457-13.71942 c0.85052-6.36943,6.45305-11.26616,12.87902-11.26886C31.16545,10.997,37,16.83019,37,24c0,5.25-3.18652,9.98047-8,11.98828V41z"
              />
              <path
                fill="#E6E6E6"
                d="M24.00001,47h-0.00001C21.23857,47,19,44.76143,19,42v-3h10v3C29,44.76143,26.76143,47,24.00001,47z"
              />
              <rect x="19" y="39" fill="#B3B3B3" width="10" height="2" />
            </svg>
          </g>
        </motion.g>

        {/* Output Icons (larger) */}
        <motion.g
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: baseDelay + stagger * 36, duration: 0.5 }}
        >
          <g transform="translate(2880 1769)">
            <svg width="144" height="144" viewBox="0 0 48 48">
              <path
                fill="#444444"
                d="M45,45H3c-1.10457,0-2-0.89543-2-2V9c0-1.10457,0.89543-2,2-2h42c1.10457,0,2,0.89543,2,2v34 C47,44.10457,46.10457,45,45,45z"
              />
              <path
                fill="#B3B3B3"
                d="M24,40c0,0-4.82016-1.89646-16.99971-1.99594C6.45017,37.99956,6,37.55563,6,37.0055V6c12.91667,0,18,2,18,2 V40z"
              />
              <path
                fill="#B3B3B3"
                d="M24,40c0,0,4.82016-1.89646,16.99971-1.99594C41.54983,37.99956,42,37.55563,42,37.0055V6 C29.08333,6,24,8,24,8V40z"
              />
              <path
                fill="#E6E6E6"
                d="M24,39c0,0-6.72025-3.79496-19.00562-3.99205C4.44716,34.99917,4,34.56,4,34.0127V4.01287 c0-0.55728,0.46262-1.01367,1.01982-1.0045C17.28903,3.21027,24,7,24,7V39z"
              />
              <path
                fill="#D1D1D1"
                d="M24,39c0,0,6.72025-3.79496,19.00562-3.99205C43.55285,34.99917,44,34.56,44,34.0127V4.01287 c0-0.55728-0.46262-1.01367-1.01982-1.0045C30.71097,3.21027,24,7,24,7V39z"
              />
            </svg>
          </g>
          <g transform="translate(2880 2151)">
            <svg width="144" height="144" viewBox="0 0 48 48">
              <defs>
                <linearGradient
                  id="output-survey-0"
                  x1="9"
                  y1="2"
                  x2="9"
                  y2="14"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9ED9FA" />
                  <stop offset="1" stopColor="#60BEF6" />
                </linearGradient>
                <linearGradient
                  id="output-survey-1"
                  x1="9"
                  y1="34"
                  x2="9"
                  y2="46"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9ED9FA" />
                  <stop offset="1" stopColor="#60BEF6" />
                </linearGradient>
                <linearGradient
                  id="output-survey-2"
                  x1="8.98782"
                  y1="18.0121"
                  x2="8.98782"
                  y2="30.0121"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#344EEA" />
                  <stop offset="1" stopColor="#2138BB" />
                </linearGradient>
              </defs>
              <path
                d="M44 7H21C20.448 7 20 7.448 20 8C20 8.552 20.448 9 21 9H44C44.552 9 45 8.552 45 8C45 7.448 44.552 7 44 7Z"
                fill="#CBEAFB"
              />
              <path
                d="M44 23H21C20.448 23 20 23.448 20 24C20 24.552 20.448 25 21 25H44C44.552 25 45 24.552 45 24C45 23.448 44.552 23 44 23Z"
                fill="#344EEA"
              />
              <path
                d="M44 39H21C20.448 39 20 39.448 20 40C20 40.552 20.448 41 21 41H44C44.552 41 45 40.552 45 40C45 39.448 44.552 39 44 39Z"
                fill="#CBEAFB"
              />
              <path
                d="M14 2H4C3.44772 2 3 2.44772 3 3V13C3 13.5523 3.44772 14 4 14H14C14.5523 14 15 13.5523 15 13V3C15 2.44772 14.5523 2 14 2Z"
                fill="url(#output-survey-0)"
              />
              <path
                d="M14 34H4C3.44772 34 3 34.4477 3 35V45C3 45.5523 3.44772 46 4 46H14C14.5523 46 15 45.5523 15 45V35C15 34.4477 14.5523 34 14 34Z"
                fill="url(#output-survey-1)"
              />
              <path
                d="M10.4139 24L14.7069 19.707C15.0909 19.31 15.0799 18.677 14.6819 18.293C14.2939 17.919 13.6799 17.919 13.2929 18.293L8.99995 22.586L4.70695 18.293C4.30995 17.909 3.67695 17.92 3.29295 18.318C2.91895 18.706 2.91895 19.32 3.29295 19.707L7.58595 24L3.29295 28.293C2.89595 28.677 2.88495 29.31 3.26795 29.707C3.65195 30.104 4.28495 30.115 4.68195 29.732C4.68995 29.724 4.69895 29.716 4.70695 29.707L8.99995 25.414L13.2929 29.707C13.6899 30.091 14.3229 30.08 14.7069 29.682C15.0809 29.294 15.0809 28.68 14.7069 28.293L10.4139 24Z"
                fill="url(#output-survey-2)"
              />
            </svg>
          </g>
        </motion.g>

        {/* Iterate return arrow */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: baseDelay + stagger * 37, duration: 1 }}
        >
          <motion.path
            d="M3408,2133.23706v382.76294c0,22.09136 -17.90864,40 -40,40h-3551c-22.09136,0 -40,-17.90864 -40,-40v-1838"
            fill="none"
            stroke="#788896"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeWidth="32"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: baseDelay + stagger * 37, duration: 1.5 }}
          />
          <rect
            x="3203.5"
            y="2295.75"
            width="409"
            height="56.5"
            rx="28"
            ry="28"
            fill="#788896"
          />
          <text fill="#FFFFFF">
            <tspan
              x="3231.8340606689453"
              y="2336.25"
              fontFamily="DIN Next, system-ui, sans-serif"
              fontSize="36"
              fontWeight="bold"
            >
              Iterate: new question?
            </tspan>
          </text>
          <line
            stroke="#788896"
            fill="#788896"
            strokeLinejoin="round"
            y1="2133.237063059336"
            strokeLinecap="round"
            strokeWidth="4"
            x1="3394"
            y2="2133.237063059336"
            x2="3422"
          />
          <polygon
            points="-246.51141,678.36068 -223,646 -199.48859,678.36068"
            fill="#788896"
            stroke="#788896"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.g>

        {/* Arrows from User Learns back to other learning flows */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: baseDelay + stagger * 38, duration: 0.8 }}
        >
          <motion.path
            d="M3034,2223h292c22.09136,0 40,-17.90864 40,-40v-9"
            fill="none"
            stroke="#788896"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeWidth="32"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: baseDelay + stagger * 38, duration: 0.6 }}
          />
          <line
            stroke="#788896"
            fill="#788896"
            strokeLinejoin="round"
            y1="2237"
            strokeLinecap="round"
            strokeWidth="4"
            x1="3034.0000000000005"
            y2="2209"
            x2="3034.0000000000005"
          />
          <polygon
            points="3342.48859,2174.36068 3366,2142 3389.51141,2174.36068"
            fill="#788896"
            stroke="#788896"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.g>

        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: baseDelay + stagger * 38.5, duration: 0.8 }}
        >
          <motion.path
            d="M3034,1841l292,0c22.09136,0 40,17.90864 40,40v22"
            fill="none"
            stroke="#788896"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeWidth="32"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: baseDelay + stagger * 38.5, duration: 0.6 }}
          />
          <line
            stroke="#788896"
            fill="#788896"
            strokeLinejoin="round"
            y1="1855.0000000000005"
            strokeLinecap="round"
            strokeWidth="4"
            x1="3034.0000000000005"
            y2="1827.0000000000005"
            x2="3034.0000000000005"
          />
          <polygon
            points="3389.51141,1902.63932 3366,1935 3342.48859,1902.63932"
            fill="#788896"
            stroke="#788896"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.g>

        {/* Glowing trail effect for the active path */}
        {isAnimating && currentPath > 0 && (
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
          >
            {/* Glow filter definition */}
            <defs>
              <filter
                id="pathGlow"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
              >
                <feGaussianBlur stdDeviation="8" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <radialGradient id="trailGradient">
                <stop offset="0%" stopColor="#FFD700" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#FFA500" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#FF8C00" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Pulsing glow circle at marker position */}
            <motion.circle
              cx={markerPosition.x}
              cy={markerPosition.y}
              r="60"
              fill="url(#trailGradient)"
              filter="url(#pathGlow)"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.g>
        )}

        {/* Animated Question Marker - travels through the decision paths */}
        {isAnimating && (
          <motion.g
            animate={{
              x: markerPosition.x,
              y: markerPosition.y
            }}
            transition={{
              duration: 0.8,
              ease: "linear"
            }}
          >
            <QuestionMarker
              x={0}
              y={0}
              showAha={showAha}
              isFinalCelebration={isFinalCelebration}
            />
          </motion.g>
        )}

        {/* Highlight overlay for active elements */}
        {highlightedElements.length > 0 && (
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
          >
            {/* Add subtle highlight glow to show the active path */}
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
          </motion.g>
        )}
      </HeroDiagram>
    </div>
  );
}

export default NovAInPlatformDiagram;
