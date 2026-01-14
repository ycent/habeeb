import { motion } from "framer-motion";

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
            <motion.div
              key={principle.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="flex items-start gap-4">
                <span className="font-display text-4xl md:text-5xl text-muted-foreground/20 font-light">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="pt-2">
                  <h3 className="font-display text-xl md:text-2xl mb-2 group-hover:text-primary transition-colors duration-300">
                    {principle.label}
                  </h3>
                  <p className="font-body text-body text-sm leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
