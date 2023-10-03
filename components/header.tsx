"use client";
import { links } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";
import { clsx } from "clsx";

import React from "react";
import { useActiveSectionContext } from "@/context/active-section-context";

function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className=" z-50 relative">
      <motion.div
        className=" fixed top-0 left-1/2 bg-white bg-opacity-80  shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] h-[4.5rem] w-full rounded-none border border-white border-opacity-40 sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      <nav className=" fixed top-[0.15rem] left-1/2 h-12 py-2 -translate-x-1/2 sm:top-[1.7rem] sm:h-[initial] sm:py:0">
        <ul className=" flex w-[18rem] gap-y-1 flex-wrap text-[0.9rem] text-gray-500 font-medium justify-center items-center sm:w-[initial] sm:flex-nowrap  sm:gap-2">
          {links.map((link) => (
            <motion.li
              className=" h-3/4 px-3 flex justify-center items-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
                className={clsx(
                  " flex p-1 w-full justify-center items-center hover:text-gray-950 transition text-gray-500 dark:hover:text-gray-300",
                  {
                    "text-gray-950 dark:text-gray-300 ":
                      activeSection === link.name,
                  },
                )}
                href={link.hash}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    layoutId="activeSession"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                    className=" bg-gray-100 rounded-full inset-0 absolute -z-10 dark:bg-gray-800"
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
