import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import l3arnImg from "@/public/images/l3arn.png";
import deltaPrimeImg from "@/public/images/deltaprime.png";
import kakushinImg from "@/public/images/kakushin.png";
import stavrosTheoFitness from "@/public/images/stavrostheoftiness.png";
import urbanImg from "@/public/images/urbanImg.png";
import gameSiteDesignImg from "@/public/images/gameSiteDesignGsap.png";
import degenPrimeImg from "@/public/images/degenprime.png";
import readMyCupImg from "@/public/images/readmycup.png";
import dinabiteImg from "@/public/images/dinabite.png";
import firstGameImg from "@/public/images/firstGameImg.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Fullstack Web Dev and Project Management  | Kakushin",
    location: "Remote, Cyprus",
    description:
      "As a freelance developer, my main focus was on React-based projects. I specialized in enhancing user experiences, optimizing front-end code, and incorporating animations with React Spring. I utilized technologies such as NextJS, TypeScript, and Tailwind CSS. Additionally, I integrated third-party APIs to enrich project functionality and conducted code refinements for improved performance and maintainability. My involvement in UI/UX design further bolstered my expertise in web development and full-stack solutions.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
  {
    title: "Fullstack Web Developer  | Ernest Young - Tech Department",
    location: "Remote, Cyprus",
    description:
      "Getting hired in Ernest Young, was to work to re-design a huge React based project with a .Net backend. Here I worked closely with a team in Greece in order to resturcture the folder structure of the project, as well as refactor alot of the reusable components. I worked both on the front end side as well as on the backend where some of the functionality had to be integrated with new tasks and or refactored.",
    icon: React.createElement(FaReact),
    date: "Contract Work (2024)",
  },
  {
    title: "Front-End Developer and UI/UX assistance  | Swotknot",
    location: "Remote, Cyprus",
    description:
      "As a freelance developer, my main focus was on React-based projects. I specialized in enhancing user experiences, optimizing front-end code, and incorporating animations with React Spring. I utilized technologies such as React, TypeScript, and Tailwind CSS. Additionally, I integrated third-party APIs to enrich project functionality and conducted code refinements for improved performance and maintainability. My involvement in UI/UX design further bolstered my expertise in web development and full-stack solutions.",
    icon: React.createElement(FaReact),
    date: "2021 - 2023",
  },
  {
    title: "Graduated bootcamp | Udemy",
    location: "Remote, Cyprus",
    description:
      "I took a significant step into the world of front-end development by enrolling in a rigorous six-month Udemy bootcamp course. Alongside the structured curriculum, I delved into technical documentation to enhance my understanding of the field. Notably, a substantial part of my learning was driven by my own self-guided exploration. This self-taught journey allowed me to establish a strong foundation in front-end development. Following the successful completion of my studies, I quickly transitioned into the professional arena, securing a role as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2020-2021",
  },
  {
    title: "Business Analyst and QA Support | Exelia",
    location: "Cyprus, Nicosia",
    description:
      "In my role as a business analyst with a QA focus, I was involved in application development, working closely with development teams to understand requirements and translate them into effective solutions. This experience also exposed me to quality assurance (QA) practices, ensuring that applications met quality standards. This background has been valuable in my current position as a front-end developer, providing a holistic perspective on web development ( focus on UI/UX) that includes business and QA aspects.",
    icon: React.createElement(CgWorkAlt),
    date: "2018 - 2021",
  },
  {
    title: "Bachelors in Psychology | University of Nicosia",
    location: "Cyprus, Nicosia",
    description:
      "My academic journey in psychology at the University of Nicosia laid the foundation for my work in web development. It equipped me with a deep understanding of user behavior, essential for crafting exceptional UI/UX. Additionally, my communication skills developed in this academic environment have proven invaluable in my role as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "SCSS/SASS",
  "JavaScript",
  "TypeScript",
  "React",
  "API's",
  "Next.js",
  "Node.js",
  "WordPress",
  "Sendgrid",
  "Git",
  "Figma",
  "Webflow",
  "Firebase",
  "UI/UX",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "React Email",
  "Resend",
  "NoSQL",
  "Threejs",
  "GraphQL",
  "Framer Motion",
  "FlutterFlow",
] as const;

export const projectsData = [
  {
    title: "Game Site Design (GSAP)",
    description:
      "A fully animated concept gaming site created with GSAP and React. Demonstrates dynamic UI transitions, animated layouts, and smooth Vite build performance.",
    tags: ["GSAP", "React", "Animations", "Tailwind", "Vite"],
    imageUrl: gameSiteDesignImg,
    link: "https://game-site-version-1.vercel.app/",
  },
  {
    title: "DegenPrime",
    description:
      "A Next.js-based web experience with fast load times, built-in animations, and complete SEO optimization tailored for crypto and web3 communities.",
    tags: ["NextJS", "SEO", "Animations", "Tailwind CSS"],
    imageUrl: degenPrimeImg,
    link: "https://www.degenprime.io/",
  },
  {
    title: "DeltaPrime",
    description:
      "DeltaPrime is a passion project built with Next.js 14, Tailwind, and Contentful, integrating Figma designs. It's growing with more complex features, backend work, and upcoming Three.js animations.",
    tags: ["NextJS(14)", "Tailwind CSS", "Contentful", "ThreeJS", "API"],
    imageUrl: deltaPrimeImg,
    link: "https://deltaprime.io/",
  },
  {
    title: "ReadMyCup",
    description:
      "A fun AI-powered project that reads your coffee cup and gives you fortune-style feedback. Built with OpenAI, integrated with Stripe for premium access.",
    tags: ["NextJS", "AI", "OpenAI", "Stripe"],
    imageUrl: readMyCupImg,
    link: "https://www.readmycup.com/",
  },
  {
    title: "Dinabite",
    description:
      "A SaaS platform built for social media automation and analytics. React frontend, NestJS backend, AWS deployment, and modular API design.",
    tags: ["React", "AWS", "NestJS", "APIs", "Modular Design", "Automation"],
    imageUrl: dinabiteImg,
    link: "https://www.dinabite.ai/",
  },
  {
    title: "L3arn",
    description:
      "I worked as a frontend developer on this startup project for 2(ish) years. Tutors can create and teach their courses and students can sign up to learn from the tutors! or use AI.",
    tags: ["React", "Tailwind CSS", "Firebase", "React-Spring", "AI"],
    imageUrl: l3arnImg,
    link: "https://l3arn.org/",
  },
  {
    title: "Urban",
    description:
      "First serious client I had. I worked on the frontend of the website using a template which then was re-designed.",
    tags: ["Firebase", "Carousel", "Javascript", "HTML", "CSS"],
    imageUrl: urbanImg,
    link: "https://urban-fbf6d.web.app/",
  },
  {
    title: "Kakushin",
    description:
      "Started adding a few more features to the website and also added a few animations to make it more appealing. Custom domain from porkbun into firebase",
    tags: ["EMAILJS", "Javascript", "HTML", "CSS", "Porkbun"],
    imageUrl: kakushinImg,
    link: "https://kakushin.io/",
  },
  {
    title: "Stavros Fitness",
    description: "First public fitness website I created for a friend of mine!",
    tags: ["HTML", "CSS", "JAVASCRIPT", "EJS6", "EMAILJS"],
    imageUrl: stavrosTheoFitness,
    link: "https://stavrostheofitness.com/",
  },
] as const;

export const funProjectsData = [
  {
    title: "First Game in UE5.1",
    description:
      "Using Bluent and C++ to create a simple game in Unreal Engine 5.1.",
    tags: ["UE5", "C++", "Blender", "Game Development"],
    imageUrl: firstGameImg,
    link: "",
    videoSrc: "/videos/FirstGameDemo.mp4",
  },
] as const;
