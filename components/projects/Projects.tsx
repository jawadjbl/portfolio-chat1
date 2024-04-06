"use client";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

interface Project {
  title: string;
  imageUrl: string;
  projectUrl: string;
}

const projects: Project[] = [
  {
    title: "Project 1",
    imageUrl: "/projects/p3.png",
    projectUrl: "https://example.com/project1",
  },
  {
    title: "Project 2",
    imageUrl: "/projects/p3.png",
    projectUrl: "https://example.com/project2",
  },
  {
    title: "Project 1",
    imageUrl: "/projects/p3.png",
    projectUrl: "https://example.com/project1",
  },
  {
    title: "Project 2",
    imageUrl: "/projects/p3.png",
    projectUrl: "https://example.com/project2",
  },
  {
    title: "Project 1",
    imageUrl: "/projects/p3.png",
    projectUrl: "https://example.com/project1",
  },
  {
    title: "Project 2",
    imageUrl: "/projects/p3.png",
    projectUrl: "https://example.com/project2",
  },
  // Add more projects as needed
];

const ProjectsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger animation when 20% of the section is visible
    triggerOnce: true, // Only trigger animation once
  });

  if (inView && !isVisible) {
    setIsVisible(true);
  }
  return (
    <motion.section
      className="py-16 container mx-auto   sm:px-0"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      ref={ref}
      id="projects"
    >
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-3xl mt-10 md:text-5xl font-bold mb-8 text-center text-gray-800"
      >
        Projects
      </motion.h2>
      <div className="container mx-auto px-4  sm:my-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">
                  Project description goes here.
                </p>
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-900 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-800"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
