import { motion, useSpring } from "framer-motion";
import { useCursorPosition } from "@/hooks/useCursorPosition";
import { useEffect, useState } from "react";

export const CursorSpotlight = () => {
  const cursor = useCursorPosition();
  const [isVisible, setIsVisible] = useState(false);
  
  // Smooth spring animation for cursor following
  const x = useSpring(0, { stiffness: 150, damping: 25 });
  const y = useSpring(0, { stiffness: 150, damping: 25 });
  
  useEffect(() => {
    x.set(cursor.x);
    y.set(cursor.y);
    
    // Show spotlight after first mouse movement
    if (cursor.x !== 0 || cursor.y !== 0) {
      setIsVisible(true);
    }
  }, [cursor.x, cursor.y, x, y]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-[1] overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="absolute w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          x,
          y,
          background: "radial-gradient(circle, hsl(var(--foreground) / 0.03) 0%, transparent 70%)",
        }}
      />
    </motion.div>
  );
};
