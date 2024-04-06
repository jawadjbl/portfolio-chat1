"use client";
import { motion } from "framer-motion";

const SkillCard: React.FC<{ title: string; description: String }> = ({
  title,
  description,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-md p-4 text-center"
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </motion.div>
  );
};

export default SkillCard;
