import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useCursorPosition } from "@/hooks/useCursorPosition";
import { useRef } from "react";

const phrases = [
  "I turn vague ideas into shipped products.",
  "I help teams move from chaos to clarity.",
  "I build things that reduce friction.",
  "I lead small teams to ship real things.",
];

export const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const cursor = useCursorPosition();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Smooth spring for cursor parallax
  const cursorX = useSpring(cursor.normalizedX * 8, { stiffness: 50, damping: 30 });
  const cursorY = useSpring(cursor.normalizedY * 8, { stiffness: 50, damping: 30 });

  // Scroll-based transforms
  const heroOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.4], [0, -50]);
  const subtitleIndex = useTransform(scrollYProgress, [0, 0.05, 0.1], [0, 1, 2]);

  return (
    <motion.section 
      ref={containerRef}
      style={{ opacity: heroOpacity }}
      className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 relative overflow-hidden"
    >
      <motion.div 
        className="max-w-4xl"
        style={{ y: heroY }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-subtle font-body text-sm tracking-widest uppercase mb-6"
        >
          Product Builder
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ 
            x: cursorX,
            y: cursorY,
          }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-8 text-foreground will-change-transform"
        >
          Hi, I'm Habeeb.
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="h-16 overflow-hidden relative"
        >
          <div className="animate-text-slide">
            {[...phrases, phrases[0]].map((phrase, index) => (
              <p
                key={index}
                className="font-body text-xl md:text-2xl text-body h-16 flex items-center"
              >
                {phrase}
              </p>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-subtle"
        >
          <span className="text-xs font-body tracking-wider uppercase">Scroll</span>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
