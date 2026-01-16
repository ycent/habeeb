import { motion } from "framer-motion";
import heroVideo from "@/assets/hero-speaking.mp4";

export const HeroVideo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1.0, ease: "easeOut" }}
      className="relative group"
    >
      {/* Soft gradient edges to blend into background */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background opacity-40" />
      </div>
      
      {/* Video container */}
      <div className="relative rounded-2xl overflow-hidden media-frame">
        {/* Subtle grain overlay */}
        <div 
          className="absolute inset-0 z-20 pointer-events-none opacity-20 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
        
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-center transition-all duration-500 group-hover:brightness-105"
          style={{ 
            width: "380px",
            height: "420px",
          }}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>
      
      {/* Subtle ambient glow */}
      <div className="absolute -inset-4 rounded-3xl bg-primary/3 opacity-50 -z-10 blur-2xl" />
    </motion.div>
  );
};
