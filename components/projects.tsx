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
      <p className="text-center my-4 max-w-[50rem] mx-auto">
        Working on GSAP projects, animations, and more. <br />
        <br />
      </p>
      <p className="text-center my-4 max-w-[40rem] mx-auto">
        {" "}
        And ofcourse, im trying to make my own AI crypto buddy bot... currently
        paper trading and backtesting it....
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
