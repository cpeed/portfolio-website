"use client";
import { motion } from "framer-motion";

import React from "react";

function SectionDivider() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
      className=" bg-gray-200 h-16  rounded-full hidden w-1 my-24 sm:block dark:bg-opacity-20"
    ></motion.div>
  );
}

export default SectionDivider;
