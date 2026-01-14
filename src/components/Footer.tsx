import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-warm">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
            I like building things that{" "}
            <motion.span
              className="relative inline-block"
              whileHover={{ color: "hsl(var(--primary))" }}
              transition={{ duration: 0.3 }}
            >
              reduce friction
              <motion.span
                className="absolute left-0 bottom-0 h-[2px] bg-primary origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
              />
            </motion.span>{" "}
            and confusion.
          </h2>
          <p className="font-body text-body text-xl leading-relaxed max-w-2xl">
            If you're working on something early-stage and real, we'll probably get along.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <motion.a
            href="mailto:hello@habeeb.dev"
            className="group inline-flex items-center gap-3 font-body text-heading hover:text-primary transition-colors duration-300"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            <Mail className="w-5 h-5" />
            <span className="relative">
              Email
              <span className="absolute left-0 bottom-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
            </span>
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/habeebmuhammed"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 font-body text-heading hover:text-primary transition-colors duration-300"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            <Linkedin className="w-5 h-5" />
            <span className="relative">
              LinkedIn
              <span className="absolute left-0 bottom-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
            </span>
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-24 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
        >
          <p className="font-body text-subtle text-sm">
            © {new Date().getFullYear()} Habeeb Muhammed
          </p>
          
          {/* Easter egg - subtle human touch */}
          <motion.p 
            className="font-body text-subtle/50 text-xs italic"
            whileHover={{ color: "hsl(var(--text-subtle))" }}
            transition={{ duration: 0.3 }}
          >
            built slowly, with intention.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};
