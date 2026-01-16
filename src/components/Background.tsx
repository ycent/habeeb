import { motion } from "framer-motion";
import portraitImage from "@/assets/portrait-speaking.jpg";

export const Background = () => {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        {/* About Me Header with Inline Portrait */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex flex-col md:flex-row md:items-start md:gap-12 lg:gap-16">
            {/* Text Content - Left */}
            <div className="flex-1 mb-8 md:mb-0">
              <h2 className="font-display text-4xl md:text-5xl mb-6">
                About Me
              </h2>
              <p className="font-body text-body text-lg leading-relaxed mb-4">
                I'm a founder-level Product and Program Manager with experience leading cross-functional teams 
                to deliver web and mobile products from concept to pre-launch.
              </p>
              <p className="font-body text-body text-lg leading-relaxed">
                I have a strong track record in structuring execution, translating business goals into technical plans, 
                and driving delivery across designers, engineers, and community contributors in early-stage environments.
              </p>
            </div>
            
            {/* Portrait - Right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-shrink-0"
            >
              <div className="relative">
                <img
                  src={portraitImage}
                  alt="Habeeb"
                  className="w-56 md:w-64 lg:w-72 h-auto media-frame"
                  style={{
                    filter: "grayscale(100%) contrast(1.05)",
                  }}
                />
                {/* Subtle grain overlay */}
                <div 
                  className="absolute inset-0 rounded-xl pointer-events-none opacity-25 mix-blend-overlay media-frame"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                  }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <h3 className="font-display text-2xl md:text-3xl mb-6 text-foreground/90">
            Education
          </h3>
          <div className="space-y-4">
            <p className="font-body text-body text-lg leading-relaxed">
              I'm currently in my final semester studying Computer Science at Babcock University, 
              where I've combined technical foundations with hands-on product and project work.
            </p>
            <p className="font-body text-body text-lg leading-relaxed">
              My academic background gives me a solid understanding of web technologies and system fundamentals, 
              allowing me to work effectively with engineers and contribute meaningfully to technical discussions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
