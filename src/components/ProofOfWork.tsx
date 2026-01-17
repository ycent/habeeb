import { motion } from "framer-motion";
import nexspotGithub from "@/assets/nexspot-github.png";

export const ProofOfWork = () => {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className="max-w-4xl mx-auto"
      >
        <img
          src={nexspotGithub}
          alt=""
          aria-hidden="true"
          className="w-full rounded-lg media-frame grayscale-[25%] contrast-[0.95] opacity-85"
        />
      </motion.div>
    </section>
  );
};
