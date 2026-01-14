import { motion } from "framer-motion";
import { useState } from "react";

interface PrincipleProps {
  label: string;
  description: string;
  index: number;
}

const Principle = ({ label, description, index }: PrincipleProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group cursor-default"
    >
      <div className="flex items-start gap-4">
        <motion.span 
          className="font-display text-4xl md:text-5xl text-muted-foreground/20 font-light"
          animate={{ 
            color: isHovered ? "hsl(var(--primary) / 0.3)" : "hsl(var(--muted-foreground) / 0.2)",
          }}
          transition={{ duration: 0.4 }}
        >
          {String(index + 1).padStart(2, '0')}
        </motion.span>
        <div className="pt-2">
          <motion.h3 
            className="font-display text-xl md:text-2xl mb-2 transition-colors duration-300 group-hover:text-primary"
            animate={{ x: isHovered ? 4 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {label}
          </motion.h3>
          <p className="font-body text-body text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const principles = [
  { label: "Clarity over chaos", description: "If it can't be explained simply, it's not ready to build." },
  { label: "Small teams, real ownership", description: "The best work happens when everyone feels accountable." },
  { label: "Execution > noise", description: "Plans are cheap. Shipped products are expensive." },
  { label: "Calm systems scale", description: "Sustainable pace beats heroic sprints." },
];

export const Principles = () => {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            How I work
          </h2>
          <p className="font-body text-body text-lg leading-relaxed max-w-xl">
            Not a skills list. Just the principles that guide how I think about building things.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {principles.map((principle, index) => (
            <Principle key={principle.label} {...principle} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
