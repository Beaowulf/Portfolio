"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem]  leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.275 }}
      id="about"
    >
      <SectionHeading>
        {" "}
        <span className="text-center w-full block">About Me</span>{" "}
      </SectionHeading>

      <p className="mb-4">
        I have a background in psychology and a passion for tech. One of my
        goals is to create tools that help kids with learning disabilities.
      </p>

      <ul className=" pl-5">
        <li className="mb-2">
          <strong>🔹Front-end Expertise:</strong> Proficient in React (Next.js)
          and TypeScript, ensuring sleek and responsive designs. Through ES6
          JavaScript, I embed dynamic functionalities for an enriched user
          experience.
        </li>
        <li className="mb-2">
          <strong>🔹UI/UX Design:</strong> With a keen eye for design and user
          experience, I prioritize creating intuitive and engaging interfaces.
          My psychology background adds a unique layer in understanding user
          behavior, leading to designs that genuinely resonate.
        </li>
        <li className="mb-2">
          <strong>🔹Animations & Interactivity:</strong> Adept at using GSAP and
          Three.js to craft engaging and interactive web experiences that stand
          out.
        </li>
        <li className="mb-2">
          <strong>🔹Educational & Professional Journey:</strong> Started with
          rigorous self-learning, further advanced my skills at two
          comprehensive bootcamps, and benefited immensely from hands-on
          guidance by seasoned developers.
        </li>
        <li className="mb-2">
          <strong>🔹Back-end & Integrations:</strong> Beyond crafting
          front-ends, I'm versed in backend nuances, especially with Prisma.
          I've consistently showcased my skill in integrating APIs, ensuring
          smooth data interactivity.
        </li>
        <li className="mb-2">
          <strong>🔹Additional Proficiencies:</strong> I've tapped into
          WordPress's versatility for varied content needs and employed Tailwind
          CSS's efficiency for modern, utility-first designs.
        </li>
      </ul>

      <p className="mt-4">
        Outside of coding, I dabble in game design with Unreal, play the guitar,
        and hit the gym regularly. Eager to join a team that values innovation
        and user experience. Let's collaborate!
      </p>
    </motion.section>
  );
}
