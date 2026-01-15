import { motion } from "framer-motion";

export const Background = () => {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl mb-8">
            About Me
          </h2>
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

        {/* Professional Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="font-display text-2xl md:text-3xl mb-6 text-foreground/90">
            Professional Summary
          </h3>
          <div className="space-y-4">
            <p className="font-body text-body text-lg leading-relaxed">
              I'm a founder-level Product and Program Manager with experience leading cross-functional teams 
              to deliver web and mobile products from concept to pre-launch.
            </p>
            <p className="font-body text-body text-lg leading-relaxed">
              I have a strong track record in structuring execution, translating business goals into technical plans, 
              and driving delivery across designers, engineers, and community contributors in early-stage environments.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
