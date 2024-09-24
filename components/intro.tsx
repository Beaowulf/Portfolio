"use client";

import Image from "next/image";
import React from "react";
import self_portrait from "@/public/self_portrait.png";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center ">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src={self_portrait}
              alt="Gerasimos Portrait"
              quality="95"
              priority={true}
              className="h-32 w-32 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            />
          </motion.div>
          <motion.span
            className="text-4xl absolute bottom-0 right-0 "
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stifness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-14 mt-8 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hey there, I'm Gerasimos.</span> I've been a{" "}
        <span className="font-bold"> Fullstack Developer</span> for about
        <span className="font-bold"> 4 years</span>. I'm dedicated to crafting{" "}
        <span className="font-bold">seamless UI/UX</span> through building and
        coding{" "}
        <span className="italic">
          front-end <span className="underline">sites</span> and{" "}
          <span className="underline">apps</span>{" "}
        </span>
        . Primarily skilled in <span className="font-bold">React</span>{" "}
        <span className="underline"> (Next.js)</span>. Also proficient in{" "}
        <span className="font-bold">
          <Link
            href="#skills"
            className=""
            onClick={() => {
              setActiveSection("Skills");
              setTimeOfLastClick(Date.now());
            }}
          >
            other frameworks{" "}
          </Link>
        </span>
        .
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full shadow-md outline-none focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950  transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          href="/CV.pdf"
          download
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full shadow-md outline-none focus:scale-110 hover:scale-110  active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition-all" />
        </a>

        <a
          href="https://www.linkedin.com/in/gerasimos-trakakis/"
          target="_blank"
          className="bg-white text-gray-700 hover:text-gray-950 p-4 flex items-center gap-2 rounded-full shadow-md focus:scale-110 hover:scale-[1.15] active:scale-[1.15] transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/70"
        >
          <BsLinkedin />
        </a>

        <a
          href="https://github.com/Beaowulf"
          target="_blank"
          className="bg-white text-gray-700 hover:text-gray-950 p-4 flex items-center gap-2 rounded-full shadow-md focus:scale-110 hover:scale-[1.15]  active:scale-[1.15] transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/70"
        >
          <BsGithub />
        </a>
      </motion.div>
    </section>
  );
}
function iseActiveSectionContext() {
  throw new Error("Function not implemented.");
}
