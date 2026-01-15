import { motion, useScroll, useTransform } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

export const Header = () => {
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [0, 1]);
  const headerBlur = useTransform(scrollY, [0, 100], [0, 8]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-24 py-6"
    >
      {/* Background that fades in on scroll */}
      <motion.div
        className="absolute inset-0 bg-background/80 -z-10"
        style={{ 
          opacity: headerOpacity,
          backdropFilter: `blur(${headerBlur}px)`,
        }}
      />
      
      <nav className="flex items-center justify-between">
        <motion.a 
          href="#" 
          className="font-display text-lg text-foreground hover:text-primary transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          HM
        </motion.a>
        
        <div className="flex items-center gap-6">
          <motion.a 
            href="#work" 
            className="group font-body text-sm text-body hover:text-foreground transition-colors duration-300 relative"
            whileHover={{ y: -1 }}
            transition={{ duration: 0.2 }}
          >
            Work
            <span className="absolute left-0 bottom-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
          </motion.a>
          <motion.a 
            href="#contact" 
            className="group font-body text-sm text-body hover:text-foreground transition-colors duration-300 relative"
            whileHover={{ y: -1 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Contact
            <span className="absolute left-0 bottom-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
          </motion.a>
          <ThemeToggle />
        </div>
      </nav>
    </motion.header>
  );
};
