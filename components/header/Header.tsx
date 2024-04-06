"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      id="home"
      className="z-[1000] fixed top-0 left-0 w-full bg-gray-900 text-white p-4 flex justify-between md:justify-around items-center shadow-md"
    >
      <div className="text-xl font-bold">JBL Jaouad</div>
      <nav className="hidden md:block">
        <ul className="flex space-x-10">
          <li>
            <a href="#" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-gray-300">
              Skills
            </a>
          </li>
          <li>
            <a href="#technologies" className="hover:text-gray-300">
              Technologies
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-gray-300">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <button className="md:hidden" onClick={toggleNavbar}>
        {/* Hamburger menu icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            ref={navbarRef}
            className="md:hidden absolute top-full left-0 right-0 bg-gray-900 text-white p-4"
          >
            <ul className="flex flex-col space-y-4">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-gray-300">
                  About
                </a>
              </li>

              <li>
                <a href="#skills" className="hover:text-gray-300">
                  Skills
                </a>
              </li>

              <li>
                <a href="#technologies" className="hover:text-gray-300">
                  Technologies
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-gray-300">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-300">
                  Contact
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
