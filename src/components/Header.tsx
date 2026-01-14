import { motion } from "framer-motion";

export const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-24 py-6"
    >
      <nav className="flex items-center justify-between">
        <a 
          href="#" 
          className="font-display text-lg text-foreground hover:text-primary transition-colors duration-300"
        >
          HM
        </a>
        
        <div className="flex items-center gap-8">
          <a 
            href="#work" 
            className="font-body text-sm text-body hover:text-foreground transition-colors duration-300"
          >
            Work
          </a>
          <a 
            href="mailto:hello@habeeb.dev" 
            className="font-body text-sm text-body hover:text-foreground transition-colors duration-300"
          >
            Contact
          </a>
        </div>
      </nav>
    </motion.header>
  );
};
