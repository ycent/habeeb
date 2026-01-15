import { motion } from "framer-motion";

export const Quote = () => {
  return (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto text-center">
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-2xl md:text-3xl lg:text-4xl text-foreground/90 leading-relaxed"
        >
          "I don't chase perfection. I chase clarity."
        </motion.blockquote>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 font-body text-sm text-subtle tracking-wide"
        >
          Babcock Innovation Challenge — Winner (2025)
        </motion.p>
      </div>
    </section>
  );
};
