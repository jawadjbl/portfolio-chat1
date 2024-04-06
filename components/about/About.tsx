"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AboutCard from "../cards/AboutCard";

const AboutSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger animation when 20% of the section is visible
    triggerOnce: true, // Only trigger animation once
  });

  if (inView && !isVisible) {
    setIsVisible(true);
  }

  return (
    <section ref={ref} id="about" className="py-16 px-4 sm:px-0 bg-gray-100">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-3xl mt-10 md:text-5xl font-bold mb-8 text-center text-gray-800"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-lg sm:my-20 md:text-xl max-w-2xl text-center text-gray-700 mb-12"
        >
          Hi there! I'm [Your Name], a passionate and creative [Your
          Profession/Title] with a love for building beautiful and functional
          websites. I have [X] years of experience in the field and specialize
          in [specific skills or technologies]. My goal is to deliver
          high-quality solutions that exceed expectations and bring value to
          every project I work on.
        </motion.p>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="bg-blue-900 text-white px-8 py-3 rounded-full text-lg font-bold hover:bg-blue-800"
        >
          Contact Me
        </motion.button>
      </div>
    </section>
  );
};

export default AboutSection;
