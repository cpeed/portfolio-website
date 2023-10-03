"use client";
import React from "react";
import SectionHeading from "./section-heading";

import { motion } from "framer-motion";
import useSectionInView from "@/lib/hook";
import { sendEmail } from "@/actions/sendEmail";
import SubmitButton from "./submit-btn";
import toast from "react-hot-toast";
function Contacts() {
  const contactsRef = useSectionInView("Contact");
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      ref={contactsRef}
      id="contact"
      className=" scroll-mt-28 mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className=" text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className=" underline" href="mailto:aareeb1999@gmail.com">
          aareeb1999@gmail.com
        </a>{" "}
        or through this forum
      </p>
      <form
        className="  mt-10 flex flex-col dark:text-black"
        action={async (forumData) => {
          const { data, error } = await sendEmail(forumData);
          if (error) {
            toast.error("Something went wrong");
            return;
          } else {
            toast.success("Message sent");
          }
        }}
      >
        <input
          className=" h-14 rounded-lg border border-black/10 p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your Email"
        />
        <textarea
          className=" rounded-lg my-3 h-52 border border-black/10 dark:bg-white p-4 dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all "
          name="message"
          required
          maxLength={5000}
          placeholder="Your Message"
        ></textarea>
        <SubmitButton />
      </form>
    </motion.section>
  );
}

export default Contacts;
