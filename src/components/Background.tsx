import { motion } from "framer-motion";

export const Background = () => {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 md:gap-16"
        >
          <div>
            <h2 className="font-display text-4xl md:text-5xl mb-6">
              Background
            </h2>
            <p className="font-body text-body text-lg leading-relaxed">
              Computer Science student who understands the technical side well enough 
              to lead technical teams—and knows when to trust the experts.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="font-body text-body">Computer Science</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-2 h-2 rounded-full bg-primary/60" />
                <span className="font-body text-body">Product Development</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-2 h-2 rounded-full bg-primary/30" />
                <span className="font-body text-body">Team Leadership</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
