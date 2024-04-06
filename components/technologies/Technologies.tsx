"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TechnologyCard from "../cards/TechnologyCard";

const TechnologiesSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger animation when 20% of the section is visible
    triggerOnce: true, // Only trigger animation once
  });

  if (inView && !isVisible) {
    setIsVisible(true);
  }

  return (
    <section ref={ref} id="technologies" className="py-16 px-2 sm:px-0">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-3xl mt-10 md:text-5xl font-bold mb-8 text-center text-gray-800"
        >
          Technologies I Use
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-2 sm:my-20 md:grid-cols-4 gap-8"
        >
          <TechnologyCard
            name="HTML"
            description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia
        consequat lacus, et scelerisque lacus commodo ac."
          />
          <TechnologyCard
            name="CSS"
            description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia
        consequat lacus, et scelerisque lacus commodo ac."
          />
          <TechnologyCard
            name="JavaScript"
            description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia
        consequat lacus, et scelerisque lacus commodo ac."
          />
          <TechnologyCard
            name="React"
            description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia
        consequat lacus, et scelerisque lacus commodo ac."
          />
          <TechnologyCard
            name="Next.js"
            description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia
        consequat lacus, et scelerisque lacus commodo ac."
          />
          <TechnologyCard
            name="GitHub"
            description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia
        consequat lacus, et scelerisque lacus commodo ac."
          />
          <TechnologyCard
            name="MongoDB"
            description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia
        consequat lacus, et scelerisque lacus commodo ac."
          />
          <TechnologyCard
            name="Strapi"
            description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia
        consequat lacus, et scelerisque lacus commodo ac."
          />
          <TechnologyCard
            name="Tailwind CSS"
            description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia
        consequat lacus, et scelerisque lacus commodo ac."
          />
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
