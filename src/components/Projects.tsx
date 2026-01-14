import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ProjectProps {
  name: string;
  tagline: string;
  problem: string;
  role: string;
  outcome: string;
  index: number;
}

const Project = ({ name, tagline, problem, role, outcome, index }: ProjectProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group relative py-16 md:py-24 border-b border-border last:border-b-0"
    >
      <div className="grid md:grid-cols-12 gap-8 md:gap-12">
        {/* Project Header */}
        <div className="md:col-span-4">
          <div className="sticky top-24">
            <span className="font-body text-xs tracking-widest uppercase text-subtle mb-4 block">
              Project
            </span>
            <h3 className="font-display text-3xl md:text-4xl mb-3 group-hover:text-primary transition-colors duration-300">
              {name}
            </h3>
            <p className="font-display text-lg italic text-body">
              {tagline}
            </p>
          </div>
        </div>

        {/* Project Details */}
        <div className="md:col-span-8 space-y-8">
          <div>
            <h4 className="font-body text-xs tracking-widest uppercase text-subtle mb-3">
              The Problem
            </h4>
            <p className="font-body text-lg text-body leading-relaxed">
              {problem}
            </p>
          </div>

          <div>
            <h4 className="font-body text-xs tracking-widest uppercase text-subtle mb-3">
              My Role
            </h4>
            <p className="font-body text-body leading-relaxed">
              {role}
            </p>
          </div>

          <div>
            <h4 className="font-body text-xs tracking-widest uppercase text-subtle mb-3">
              What Changed
            </h4>
            <p className="font-body text-body leading-relaxed">
              {outcome}
            </p>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="absolute right-0 top-16 md:top-24 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <ArrowUpRight className="w-6 h-6 text-primary" />
      </motion.div>
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
    },
    {
      name: "Threadbase",
      tagline: "When the brief was vague, the execution couldn't be.",
      problem: "The team had ideas but no clear direction. Features were being discussed but nothing was moving from concept to reality.",
      role: "Stepped in as the delivery-focused PM. Translated scattered requirements into actionable specs, coordinated across design and engineering, and kept everyone aligned on weekly milestones.",
      outcome: "Shipped the first usable version in 6 weeks. Created a repeatable process the team still uses.",
    },
    {
      name: "EventNav / Nexspot",
      tagline: "Building the tools I wished existed.",
      problem: "Event discovery and planning felt fragmented. No single tool connected the dots between finding events, coordinating with friends, and actually attending.",
      role: "Founded and led product direction. Made decisions on feature priority, user experience, and technical architecture. This was the 'do everything' founder role.",
      outcome: "Built a working product and learned more about execution, constraints, and what it means to own something end-to-end.",
    },
  ];

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-xl mb-8"
      >
        <h2 className="font-display text-4xl md:text-5xl mb-6">
          Selected work
        </h2>
        <p className="font-body text-body text-lg leading-relaxed">
          Stories, not case studies. Here's what I've built and what I learned building it.
        </p>
      </motion.div>

      <div className="divide-y divide-border">
        {projects.map((project, index) => (
          <Project key={project.name} {...project} index={index} />
        ))}
      </div>
    </section>
  );
};
