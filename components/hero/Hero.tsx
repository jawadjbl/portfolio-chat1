"use client";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative text-white py-16 w-full h-[100vh] flex items-center justify-center "
    >
      <div className="container mx-auto mt-10 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center mb-8 flex flex-col gap-5"
        >
          <h1 className="text-4xl md:text-6xl font-bold">
            Hi I'am Jaouad Ben Lhaj A Web Developer
          </h1>
          <p className="text-lg md:text-xl">
            Showcase your work and skills with style
          </p>
        </motion.div>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="bg-white text-blue-900 px-8 py-3 rounded-full text-lg font-bold hover:bg-blue-100"
        >
          Get Started
        </motion.button>
      </div>
      <img
        src="/pexels-filippo-bergamaschi-986774.jpg" // Replace this with the path to your image
        alt="Hero Image"
        className="-z-10 absolute top-0 left-0 w-full h-full bg-top object-cover opacity-95"
      />
    </section>
  );
};

export default HeroSection;
