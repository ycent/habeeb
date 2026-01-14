import { motion } from "framer-motion";
import { useState } from "react";

interface CardProps {
  title: string;
  description: string;
  expanded: string;
  index: number;
}

const Card = ({ title, description, expanded, index }: CardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative p-8 md:p-10 bg-warm rounded-2xl cursor-pointer transition-all duration-500 hover:bg-warm-hover"
    >
      <div className="relative z-10">
        <span className="font-body text-xs tracking-widest uppercase text-subtle mb-4 block">
          0{index + 1}
        </span>
        <h3 className="font-display text-2xl md:text-3xl mb-4 transition-colors duration-300">
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
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="overflow-hidden"
        >
          <p className="font-body text-sm text-subtle leading-relaxed pt-4 border-t border-border">
            {expanded}
          </p>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
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
      expanded: "I've spent years translating stakeholder chaos into clear roadmaps. The skill isn't just understanding what to build—it's knowing what not to build.",
    },
    {
      title: "Leading small teams",
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
