"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutCard: React.FC<{ title: string; description: String }> = ({
  title,
  description,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger animation when 20% of the card is visible
    triggerOnce: true, // Only trigger animation once
  });

  if (inView && !isVisible) {
    setIsVisible(true);
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-md p-4 text-center"
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </motion.div>
  );
};

export default AboutCard;
