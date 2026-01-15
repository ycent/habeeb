import { motion, useSpring, useScroll, useTransform } from "framer-motion";
import { useCursorPosition } from "@/hooks/useCursorPosition";
import { useEffect, useState, useRef } from "react";

export const HeroDotField = ({ activeIndex }: { activeIndex: number }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cursor = useCursorPosition();
  const [mounted, setMounted] = useState(false);
  
  const { scrollYProgress } = useScroll();
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Cursor-reactive parallax
  const cursorOffsetX = useSpring(cursor.normalizedX * 25, { stiffness: 30, damping: 40 });
  const cursorOffsetY = useSpring(cursor.normalizedY * 25, { stiffness: 30, damping: 40 });

  // Scroll-based depth parallax - dots move faster than grid for depth
  const scrollY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const scrollYGrid = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const scrollScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.15]);
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0.3]);

  // Statement index shift for connected feel
  const indexShiftX = useSpring(activeIndex * 12, { stiffness: 40, damping: 30 });
  const indexShiftY = useSpring(activeIndex * 6, { stiffness: 40, damping: 30 });

  if (!mounted) return null;

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid layer - slower parallax, architectural feel */}
      <motion.div
        className="absolute inset-[-100px]"
        style={{
          y: scrollYGrid,
          opacity: scrollOpacity,
        }}
      >
        <div 
          className="w-[calc(100%+200px)] h-[calc(100%+200px)]"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--foreground) / 0.06) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--foreground) / 0.06) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      </motion.div>

      {/* Dot field layer - faster parallax for depth */}
      <motion.div
        className="absolute inset-[-80px]"
        style={{
          x: cursorOffsetX,
          y: cursorOffsetY,
          scale: scrollScale,
        }}
      >
        <motion.div
          style={{
            x: indexShiftX,
            y: indexShiftY,
          }}
        >
          <motion.div
            style={{ y: scrollY, opacity: scrollOpacity }}
            animate={{
              opacity: [0.08, 0.14, 0.08],
            }}
            transition={{
              opacity: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            <div 
              className="w-[calc(100%+160px)] h-[calc(100%+160px)]"
              style={{
                backgroundImage: `radial-gradient(circle, hsl(var(--foreground) / 0.25) 1px, transparent 1px)`,
                backgroundSize: '20px 20px',
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Radial vignette for depth focus */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 50%, transparent 0%, hsl(var(--background) / 0.5) 45%, hsl(var(--background)) 75%)',
        }}
      />
    </div>
  );
};
