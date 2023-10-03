"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import useSectionInView from "@/lib/hook";
import { motion } from "framer-motion";

function Skills() {
  const ref = useSectionInView("Skills");
  return (
    <section
      ref={ref}
      id="skills"
      className=" mb-28 max-w-[53rem] text-center scroll-mt-28 sm:mb-40  "
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className=" flex flex-wrap justify-center  gap-2 text-lg text-gray-800 ">
        {skillsData.map((skill, index) => (
          <motion.li
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.05 * index },
            }}
            viewport={{ once: true }}
            className=" bg-white border border-black/[0.1] rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
