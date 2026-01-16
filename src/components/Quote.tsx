import { motion } from "framer-motion";
import bicWinImage from "@/assets/bic-win.jpg";

export const Quote = () => {
  return (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto text-center">
        {/* BIC Win Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <img
            src={bicWinImage}
            alt="Babcock Innovation Challenge Winner"
            className="w-full max-w-xl mx-auto media-frame"
            style={{
              filter: "grayscale(30%) contrast(0.95) sepia(5%)",
            }}
          />
        </motion.div>
        
        {/* Attribution */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 font-body text-xs text-subtle/70 tracking-wide"
        >
          Babcock Innovation Challenge — Winner (2025)
        </motion.p>
        
        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display text-2xl md:text-3xl lg:text-4xl text-foreground/90 leading-relaxed"
        >
          "I don't chase perfection. I chase clarity."
        </motion.blockquote>
      </div>
    </section>
  );
};
