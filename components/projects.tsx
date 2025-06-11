"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { projectsData, funProjectsData } from "@/lib/data";
import Project from "./project";

import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.8);
  const [showFunProjects, setShowFunProjects] = useState(false);

  const currentProjects = showFunProjects ? funProjectsData : projectsData;
  const currentTitle = showFunProjects ? "Fun Projects" : "My Projects";

  return (
    <section ref={ref} id="projects" className="mb-28 scroll-mt-28">
      <SectionHeading>{currentTitle}</SectionHeading>

      {/* Toggle Switch */}
      <div className="flex justify-center mb-8">
        <div className="relative inline-flex items-center bg-gray-200 dark:bg-gray-700 rounded-full p-1">
          <button
            onClick={() => setShowFunProjects(false)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              !showFunProjects
                ? "bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm"
                : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            Professional
          </button>
          <button
            onClick={() => setShowFunProjects(true)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              showFunProjects
                ? "bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm"
                : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            Fun Projects
          </button>
        </div>
      </div>

      <p className="text-center my-4 max-w-[50rem] mx-auto">
        {showFunProjects ? (
          <>
            Exploring creative coding, experimental projects, and personal
            challenges. <br />
            <br />
          </>
        ) : (
          <>
            Working on GSAP projects, animations, and more. <br />
            <br />
          </>
        )}
      </p>

      {!showFunProjects && (
        <p className="text-center my-4 max-w-[40rem] mx-auto">
          And ofcourse, im trying to make my own AI crypto buddy bot...
          currently paper trading and backtesting it....
        </p>
      )}

      <div>
        {currentProjects.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
