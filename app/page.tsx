import About from "@/components/about";
import Contacts from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
export default function Home() {
  return (
    <main className=" flex justify-center items-center flex-col px-8 sm:px-4 ">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />

      <Skills />
      <Experience />
      <Contacts />
    </main>
  );
}
