import { motion } from "framer-motion";
import heroVideo from "@/assets/hero-speaking.mp4";

export const HeroVideo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
      className="relative group"
    >
      {/* Video container with subtle depth */}
      <div className="relative rounded-xl overflow-hidden shadow-lg shadow-black/20 ring-1 ring-white/5">
        {/* Subtle grain overlay to match site texture */}
        <div 
          className="absolute inset-0 z-10 pointer-events-none opacity-30 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
        
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-105"
          style={{ 
            aspectRatio: "16/9",
            maxWidth: "320px",
          }}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>
      
      {/* Subtle glow on hover */}
      <div className="absolute -inset-1 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
    </motion.div>
  );
};
