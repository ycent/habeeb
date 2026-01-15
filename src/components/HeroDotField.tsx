import { motion, useSpring } from "framer-motion";
import { useCursorPosition } from "@/hooks/useCursorPosition";

export const HeroDotField = ({ activeIndex }: { activeIndex: number }) => {
  const cursor = useCursorPosition();
  
  // Smooth spring for cursor-reactive parallax
  const offsetX = useSpring(cursor.normalizedX * 15, { stiffness: 30, damping: 40 });
  const offsetY = useSpring(cursor.normalizedY * 15, { stiffness: 30, damping: 40 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute inset-0"
        style={{
          x: offsetX,
          y: offsetY,
        }}
        animate={{
          opacity: [0.03, 0.05, 0.03],
        }}
        transition={{
          opacity: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="dotPattern"
              x="0"
              y="0"
              width="32"
              height="32"
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="2"
                cy="2"
                r="1"
                fill="currentColor"
                className="text-foreground"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotPattern)" />
        </svg>
      </motion.div>
      
      {/* Radial gradient overlay for depth */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, hsl(var(--background)) 70%)',
        }}
      />
    </div>
  );
};
