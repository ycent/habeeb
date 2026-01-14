import { motion } from "framer-motion";

interface RoleProps {
  organization: string;
  description: string;
  index: number;
}

const Role = ({ organization, description, index }: RoleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group flex flex-col md:flex-row md:items-start gap-4 md:gap-8 py-8 border-b border-border last:border-b-0"
    >
      <h3 className="font-display text-xl md:text-2xl md:w-1/3 group-hover:text-primary transition-colors duration-300">
        {organization}
      </h3>
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
    },
    {
      organization: "New Horizon Tech-Hub",
      description: "Directed student projects from idea to execution. Created frameworks for team collaboration that turned first-time builders into confident shippers.",
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
