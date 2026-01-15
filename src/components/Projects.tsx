import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef, useState } from "react";

interface ProjectProps {
  name: string;
  tagline: string;
  problem: string;
  role: string;
  outcome: string;
  microcopy: string;
  color: string;
  index: number;
}

const ProjectCard = ({ name, tagline, problem, role, outcome, microcopy, color, index }: ProjectProps) => {
  const ref = useRef<HTMLElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Cursor tilt effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [3, -3]), { stiffness: 120, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-3, 3]), { stiffness: 120, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
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
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ 
        rotateX,
        rotateY,
        transformPerspective: 1200,
      }}
      className="group relative will-change-transform"
    >
      {/* Project Image Card with Hover Effect */}
      <div className="relative overflow-hidden rounded-2xl mb-6 cursor-pointer">
        {/* Placeholder Image Background */}
        <motion.div 
          className={`aspect-[16/10] ${color} relative`}
          animate={{ scale: isHovered ? 1.03 : 1 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        >
          {/* Abstract pattern overlay */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id={`grid-${index}`} width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-foreground/20" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill={`url(#grid-${index})`} />
            </svg>
          </div>
          
          {/* Project name watermark */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-6xl md:text-8xl text-foreground/5 select-none">
              {name}
            </span>
          </div>
        </motion.div>
        
        {/* Hover Overlay with Details */}
        <motion.div 
          className="absolute inset-0 bg-background/90 backdrop-blur-sm flex flex-col justify-end p-6 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {/* Quick stats on hover */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="space-y-4"
          >
            <div>
              <h4 className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2">
                The Problem
              </h4>
              <p className="font-body text-sm text-body leading-relaxed line-clamp-2">
                {problem}
              </p>
            </div>
            
            <div>
              <h4 className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2">
                My Role
              </h4>
              <p className="font-body text-sm text-body leading-relaxed line-clamp-2">
                {role}
              </p>
            </div>
            
            <div>
              <h4 className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2">
                Outcome
              </h4>
              <p className="font-body text-sm text-body leading-relaxed line-clamp-2">
                {outcome}
              </p>
            </div>
          </motion.div>
          
          {/* Microcopy */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.25 }}
            className="font-body text-xs text-primary mt-4"
          >
            {microcopy}
          </motion.p>
        </motion.div>
        
        {/* Corner arrow indicator */}
        <motion.div 
          className="absolute top-4 right-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: isHovered ? 1 : 0, 
            scale: isHovered ? 1 : 0.8,
            x: isHovered ? 0 : -4,
            y: isHovered ? 0 : 4
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
          </div>
        </motion.div>
      </div>
      
      {/* Project Info Below Card */}
      <div className="px-1">
        <motion.h3 
          className="font-display text-2xl md:text-3xl mb-2 group-hover:text-primary transition-colors duration-400"
        >
          {name}
        </motion.h3>
        <p className="font-body text-body text-sm md:text-base leading-relaxed">
          {tagline}
        </p>
      </div>
    </motion.article>
  );
};

export const Projects = () => {
  const projects = [
    {
      name: "Glass",
      tagline: "Communities hate chasing payments. Glass makes it boring.",
      problem: "Community managers spend hours manually tracking who paid, sending reminders, and reconciling payments. It's friction that kills momentum.",
      role: "Led product from concept through pre-launch. Owned the roadmap, coordinated with a small team of 3, and made the hard calls about what to cut and what to ship.",
      outcome: "Transformed payment collection from a weekly headache into a background process. The product handles what used to take hours.",
      microcopy: "The one I'm most proud of →",
      color: "bg-gradient-to-br from-accent-warm/20 to-accent-warm/5",
    },
    {
      name: "Threadbase",
      tagline: "When the brief was vague, the execution couldn't be.",
      problem: "The team had ideas but no clear direction. Features were being discussed but nothing was moving from concept to reality.",
      role: "Stepped in as the delivery-focused PM. Translated scattered requirements into actionable specs, coordinated across design and engineering, and kept everyone aligned on weekly milestones.",
      outcome: "Shipped the first usable version in 6 weeks. Created a repeatable process the team still uses.",
      microcopy: "Where I learned to ship fast →",
      color: "bg-gradient-to-br from-accent-calm/20 to-accent-calm/5",
    },
    {
      name: "EventNav / Nexspot",
      tagline: "Building the tools I wished existed.",
      problem: "Event discovery and planning felt fragmented. No single tool connected the dots between finding events, coordinating with friends, and actually attending.",
      role: "Founded and led product direction. Made decisions on feature priority, user experience, and technical architecture. This was the 'do everything' founder role.",
      outcome: "Built a working product and learned more about execution, constraints, and what it means to own something end-to-end.",
      microcopy: "The founder chapter →",
      color: "bg-gradient-to-br from-accent-soft/20 to-accent-soft/5",
    },
  ];

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-xl mb-12"
      >
        <h2 className="font-display text-4xl md:text-5xl mb-6">
          Selected work
        </h2>
        <p className="font-body text-body text-lg leading-relaxed">
          Stories, not case studies. Here's what I've built and what I learned building it.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} {...project} index={index} />
        ))}
      </div>
    </section>
  );
};
