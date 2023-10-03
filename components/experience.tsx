"use client";
import React from "react";

import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import useSectionInView from "@/lib/hook";
import { experiencesData } from "@/lib/data";
import { useInView } from "react-intersection-observer";
import { useTheme } from "@/context/theme-context";

function Experience() {
  const sectionRef = useSectionInView("Experience");
  const { ref, inView } = useInView();
  const { theme } = useTheme();
  return (
    <section
      ref={sectionRef}
      id="experience"
      className=" scroll-mt-28 mb-28 sm:mb-40"
    >
      <SectionHeading>My Experiences</SectionHeading>
      <div ref={ref}>
        <VerticalTimeline animate={false} lineColor="">
          {experiencesData.map((item, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                date={item.date}
                icon={item.icon}
                iconStyle={{
                  background:
                    theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                  fontSize: "1.5rem",
                }}
                visible={inView}
                contentStyle={{
                  background:
                    theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                  boxShadow: "none",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                }}
                contentArrowStyle={{
                  borderRight:
                    theme === "light"
                      ? "0.4rem solid #9ca3af"
                      : "0.4rem solid rgba(255, 255, 255, 0.5)",
                }}
              >
                <h2 className=" !font-semibold capitalize dark:text-white/95">
                  {item.title}
                </h2>
                <p className=" font-normal !mt-0">{item.location}</p>
                <p className=" !font-normal !mt-1 text-gray-700 dark:text-white/75">
                  {item.description}
                </p>
              </VerticalTimelineElement>
            </React.Fragment>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}

export default Experience;
