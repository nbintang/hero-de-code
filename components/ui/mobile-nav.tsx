import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Nav = () => {
  const navContainer = {
    open: {
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        type: "spring",
        damping: 20,
      },
    },
    closed: {
      y: -1000,
      transition: {
        when: "afterChildren",
        type: "spring",
        damping: 20,
      },
    },
  };
  const navItem = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
      },
    },
    closed: {
      y: 100,
      opacity: 0,
    },
  };

  return (
    <motion.ul
      className="w-full bg-red-500 p-5 text-white list-none z-10"
      variants={navContainer}
      initial="closed"
      animate="open"
      exit="closed"
    >
      <motion.li className="leading-[6rem]" variants={navItem}>
        Home
      </motion.li>
      <motion.li className="leading-[6rem]" variants={navItem}>
        About
      </motion.li>
      <motion.li className="leading-[6rem]" variants={navItem}>
        Careers
      </motion.li>
    </motion.ul>
  );
};


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);

  return (
    <>
      <header className="w-screen h-20 bg-green-500 flex justify-end relative z-50">
        <motion.button
          className="w-20 h-20 flex items-center justify-center bg-transparent border-none cursor-pointer"
          onClick={handleClick}
          whileHover={{ scale: 1.2 }}
          animate={{
            rotate: isOpen ? 135 : 0,
          }}
        >
          X
        </motion.button>
      </header>
      <AnimatePresence initial={false}>{isOpen && <Nav />}</AnimatePresence>
    </>
  );
};

export default Header;

