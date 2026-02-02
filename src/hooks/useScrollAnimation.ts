import { useEffect, useRef, useState } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

/**
 * Hook to detect when an element enters the viewport and trigger animations
 * Returns: [ref to attach to element, isInView state, hasAnimated state]
 */
export function useScrollAnimation<T extends HTMLElement>({
  threshold = 0.3,
  rootMargin = "0px",
  triggerOnce = false
}: UseScrollAnimationOptions = {}) {
  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // If triggerOnce and already animated, don't observe
    if (triggerOnce && hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting;

        if (isVisible) {
          setIsInView(true);
          if (triggerOnce) {
            setHasAnimated(true);
          }
        } else {
          // Reset when leaving viewport (for repeat animations)
          if (!triggerOnce) {
            setIsInView(false);
          }
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce, hasAnimated]);

  return { ref, isInView, hasAnimated };
}
