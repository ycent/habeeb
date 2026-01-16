import { motion } from "framer-motion";
import { Mail, Linkedin, Download } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contact" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-surface-warm">
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
            href="mailto:habeebabayomi6@gmail.com"
            className="group inline-flex items-center gap-3 font-body text-foreground/80 hover:text-primary transition-colors duration-300"
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
            href="https://www.linkedin.com/in/habeeb-muhammed-44715a309"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 font-body text-foreground/80 hover:text-primary transition-colors duration-300"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            <Linkedin className="w-5 h-5" />
            <span className="relative">
              LinkedIn
              <span className="absolute left-0 bottom-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
            </span>
          </motion.a>

          <motion.a
            href="/Habeeb-Muhammed-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 font-body text-foreground/60 hover:text-foreground/80 transition-colors duration-300 border border-border/50 px-4 py-2 rounded-sm hover:border-border"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            <Download className="w-4 h-4" />
            <span className="relative text-sm">
              Download CV
            </span>
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-24 pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
            <p className="font-body text-muted-foreground text-sm">
              © {new Date().getFullYear()} Habeeb Muhammed
            </p>
            
            {/* Social links - whisper quiet */}
            <div className="flex items-center gap-4">
              <motion.a
                href="https://www.instagram.com/uncle_ola234?igsh=b241Z3BhazRkcXVr&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-xs text-muted-foreground/50 hover:text-muted-foreground transition-colors duration-300"
                whileHover={{ y: -1 }}
              >
                Instagram
              </motion.a>
              <motion.a
                href="https://www.tiktok.com/@centz.png?_r=1&_t=ZS-936cwRgyrUS"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-xs text-muted-foreground/50 hover:text-muted-foreground transition-colors duration-300"
                whileHover={{ y: -1 }}
              >
                TikTok
              </motion.a>
              <motion.a
                href="https://x.com/ycent003?s=21"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-xs text-muted-foreground/50 hover:text-muted-foreground transition-colors duration-300"
                whileHover={{ y: -1 }}
              >
                X
              </motion.a>
            </div>
          </div>
          
          {/* Easter egg - subtle human touch */}
          <motion.p 
            className="font-body text-muted-foreground/30 text-xs italic"
            whileHover={{ color: "hsl(var(--muted-foreground))" }}
            transition={{ duration: 0.3 }}
          >
            built slowly, with intention.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};
