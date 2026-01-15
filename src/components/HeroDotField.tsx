import { motion, useSpring } from "framer-motion";
import { useCursorPosition } from "@/hooks/useCursorPosition";
import { useEffect, useState } from "react";

export const HeroDotField = ({ activeIndex }: { activeIndex: number }) => {
  const cursor = useCursorPosition();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Smooth spring for cursor-reactive parallax
  const offsetX = useSpring(cursor.normalizedX * 20, { stiffness: 30, damping: 40 });
  const offsetY = useSpring(cursor.normalizedY * 20, { stiffness: 30, damping: 40 });

  // Shift based on active statement index for "connected soul" effect
  const indexShiftX = useSpring(activeIndex * 8, { stiffness: 40, damping: 30 });
  const indexShiftY = useSpring(activeIndex * 4, { stiffness: 40, damping: 30 });

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Main dot field layer */}
      <motion.div
        className="absolute inset-[-50px]"
        style={{
          x: offsetX,
          y: offsetY,
        }}
      >
        <motion.div
          style={{
            x: indexShiftX,
            y: indexShiftY,
          }}
          animate={{
            opacity: [0.12, 0.18, 0.12],
          }}
          transition={{
            opacity: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <svg
            className="w-[calc(100%+100px)] h-[calc(100%+100px)]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="dotPattern"
                x="0"
                y="0"
                width="28"
                height="28"
                patternUnits="userSpaceOnUse"
              >
                <circle
                  cx="2"
                  cy="2"
                  r="1.2"
                  className="fill-foreground/40"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dotPattern)" />
          </svg>
        </motion.div>
      </motion.div>
      
      {/* Radial gradient overlay for depth - vignette effect */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 0%, hsl(var(--background) / 0.6) 50%, hsl(var(--background)) 80%)',
        }}
      />
    </div>
  );
};
