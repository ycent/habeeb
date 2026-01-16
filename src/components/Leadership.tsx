import { motion } from "framer-motion";
import { useState } from "react";

interface RoleProps {
  organization: string;
  description: string;
  stats: string;
  index: number;
}

const Role = ({ organization, description, stats, index, link }: RoleProps & { link?: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  const TitleWrapper = link ? 'a' : 'span';
  const titleProps = link ? { 
    href: link, 
    target: "_blank", 
    rel: "noopener noreferrer" 
  } : {};

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group flex flex-col md:flex-row md:items-start gap-4 md:gap-8 py-8 border-b border-border last:border-b-0 cursor-default"
    >
      <div className="md:w-1/3">
        <TitleWrapper {...titleProps}>
          <motion.h3 
            className={`font-display text-xl md:text-2xl group-hover:text-primary transition-colors duration-300 ${link ? 'cursor-pointer' : ''}`}
            animate={{ x: isHovered ? 4 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {organization}
          </motion.h3>
        </TitleWrapper>
        
        {/* Progressive disclosure - stats appear on hover */}
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            height: isHovered ? "auto" : 0,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="font-body text-xs text-primary mt-2 overflow-hidden"
        >
          {stats}
        </motion.p>
      </div>
      <p className="font-body text-body leading-relaxed md:w-2/3">
        {description}
      </p>
    </motion.div>
  );
};

export const Leadership = () => {
  const roles = [
    {
      organization: "Google Developer Groups",
      description: "Led community initiatives at scale. Coordinated events, managed volunteers, and built systems that kept hundreds of developers connected and engaged.",
      stats: "500+ developers • 20+ events",
      link: "https://gdgbabcock.com",
    },
    {
      organization: "New Horizon Tech-Hub",
      description: "Directed student projects from idea to execution. Created frameworks for team collaboration that turned first-time builders into confident shippers.",
      stats: "15+ projects shipped • 40+ students mentored",
    },
  ];

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-warm">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            Community & Leadership
          </h2>
          <p className="font-body text-body text-lg leading-relaxed max-w-xl">
            I've managed people before managing products. 
            These experiences taught me how teams actually work.
          </p>
        </motion.div>

        <div className="divide-y divide-border">
          {roles.map((role, index) => (
            <Role key={role.organization} {...role} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
