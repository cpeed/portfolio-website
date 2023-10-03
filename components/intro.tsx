"use client";
import { useActiveSectionContext } from "@/context/active-section-context";
import useSectionInView from "@/lib/hook";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
function Intro() {
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const ref = useSectionInView("Home");
  return (
    <section
      ref={ref}
      id="home"
      className=" mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-56"
    >
      <div className=" flex justify-center items-center">
        <div className=" relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              alt="Cpeed Portrait"
              src={"https://avatars.githubusercontent.com/u/77393185?s=96&v=4"}
              width={192}
              height={192}
              priority={true}
              quality={95}
              className=" h-24 w-24 rounded-full border-[0.35rem] object-cover border-white dark:border-gray-800 shadow-xl"
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.2,
              duration: 0.7,
            }}
            className=" text-4xl absolute bottom-0 right-0"
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.p
        className=" mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Cpeed.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">8 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.p>

      <motion.div
        className=" flex flex-col justify-center items-center text-lg gap-2 px-4 font-medium sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
          className=" group bg-gray-900 rounded-full flex items-center px-7 py-3 gap-2 text-white outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition dark:text-gray-200"
          href="#contact"
        >
          Contact me here{" "}
          <BsArrowRight className=" opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          href="/CV.pdf"
          download
          className=" group flex bg-white text-gray-950 px-7 py-3 rounded-full gap-2 items-center outline-none focus:scale-110 hover:scale-110  active:scale-105 transition border border-black/10 dark:bg-white/10 dark:text-gray-200"
        >
          Download CV
          <HiDownload className=" opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          aria-label="LinkedIn"
          href="https://www.linkedin.com/in/areeb-ahmed-5b3872157/"
          target="_blank"
          className="flex bg-white text-gray-700 p-4 rounded-full items-center outline-none focus:scale-[1.15] hover:scale-[1.15]  active:scale-110 transition border border-black/10 hover:text-gray-950 dark:bg-white/10 dark:text-white/60"
        >
          <FaLinkedin />
        </a>
        <a
          aria-label="GitHub"
          href="https://github.com/cpeed"
          target="_blank"
          className="flex bg-white text-gray-700 p-4 rounded-full items-center outline-none focus:scale-[1.15] hover:scale-[1.15]  active:scale-110 transition border border-black/10 hover:text-gray-950 dark:bg-white/10 dark:text-white/60"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}

export default Intro;
