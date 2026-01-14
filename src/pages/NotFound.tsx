import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center px-6"
      >
        <h1 className="font-display text-6xl md:text-8xl mb-4 text-foreground">404</h1>
        <p className="font-body text-xl text-body mb-8">This page doesn't exist.</p>
        <Link 
          to="/" 
          className="font-body text-primary hover:text-primary/80 transition-colors duration-300 underline underline-offset-4"
        >
          Return to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
