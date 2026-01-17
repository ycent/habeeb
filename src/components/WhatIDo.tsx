import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useRef } from "react";

interface CardProps {
  title: string;
  description: string;
  expanded: string;
  index: number;
}

const Card = ({ title, description, expanded, index }: CardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  // Tilt effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4, 4]), { stiffness: 150, damping: 20 });
  const scale = useSpring(isHovered ? 1.02 : 1, { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ 
        rotateX,
        rotateY,
        scale,
        transformPerspective: 800,
      }}
      className="group relative p-8 md:p-10 bg-warm rounded-2xl cursor-pointer will-change-transform"
    >
      {/* Subtle shadow on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl -z-10"
        animate={{
          boxShadow: isHovered 
            ? "0 20px 40px -15px hsl(var(--primary) / 0.1), 0 8px 16px -8px hsl(var(--primary) / 0.05)"
            : "0 0 0 0 transparent",
        }}
        transition={{ duration: 0.4 }}
      />
      
      <div className="relative z-10">
        <motion.span 
          className="font-body text-xs tracking-widest uppercase text-subtle mb-4 block"
          animate={{ letterSpacing: isHovered ? "0.15em" : "0.1em" }}
          transition={{ duration: 0.3 }}
        >
          0{index + 1}
        </motion.span>
        <h3 className="font-display text-2xl md:text-3xl mb-4 transition-colors duration-300 group-hover:text-primary">
          {title}
        </h3>
        <p className="font-body text-body leading-relaxed mb-4">
          {description}
        </p>
        
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isHovered ? "auto" : 0,
            opacity: isHovered ? 1 : 0
          }}
          transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="overflow-hidden"
        >
          <p className="font-body text-sm text-subtle leading-relaxed pt-4 border-t border-border">
            {expanded}
          </p>
        </motion.div>
      </div>
      
      {/* Animated dot indicator */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: isHovered ? 1 : 0,
          opacity: isHovered ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "backOut" }}
        className="absolute top-6 right-6 w-2 h-2 rounded-full bg-primary"
      />
    </motion.div>
  );
};

export const WhatIDo = () => {
  const cards = [
    {
      title: "From unclear to clear",
      description: "Taking ambiguous problems and turning them into structured product plans that teams can actually execute.",
      expanded: "I've spent years translating stakeholder chaos into clear roadmaps. The skill isn't just understanding what to build, it's knowing what not to build.",
    },
    {
      title: "Leading small & Large teams",
      description: "Coordinating across design, engineering, and business to ship products that actually work.",
      expanded: "Real ownership means being accountable for outcomes, not just tasks. I've led cross-functional teams where everyone knows their role and the north star.",
    },
    {
      title: "Concept to pre-launch",
      description: "Owning the full journey from first sketch to something people can use.",
      expanded: "The gap between idea and execution is where most products die. I've learned to bridge it by staying close to both the vision and the details.",
    },
  ];

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-xl mb-16"
      >
        <h2 className="font-display text-4xl md:text-5xl mb-6">
          What I do
        </h2>
        <p className="font-body text-body text-lg leading-relaxed">
          I work at the intersection of product thinking and execution. 
          Here's what that actually looks like.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <Card key={card.title} {...card} index={index} />
        ))}
      </div>
    </section>
  );
};
