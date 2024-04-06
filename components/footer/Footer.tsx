"use client";
import React from "react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  return (
    <motion.footer
      className="py-8 bg-gray-900 text-white text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div className="container mx-auto">
        <p className="text-lg">© 2024 Your Company. All rights reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
