"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";

import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.8);

  return (
    <section ref={ref} id="projects" className="mb-28 scroll-mt-28">
      <SectionHeading>My Projects</SectionHeading>
      <SectionHeading>More GSAP projects to come!!!</SectionHeading>
      <p className="text-center mb-2">
        Few of my projects, more to be added{" "}
        <span className="text-xs text-gray-400">
          (need funding for hosting...)
        </span>
      </p>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
