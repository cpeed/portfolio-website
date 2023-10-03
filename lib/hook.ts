import {
  SectionName,
  useActiveSectionContext,
} from "@/context/active-section-context";
import React from "react";
import { useInView } from "react-intersection-observer";
export default function useSectionInView(section: SectionName) {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  React.useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(section);
    }
  }, [inView, setActiveSection, section, timeOfLastClick]);

  return ref;
}
