import React from "react";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-3xl font-medium text-center capitalize mb-8">{children}</h2>;
}

export default SectionHeading;
