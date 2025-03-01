import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  MCQ,
  Nexus
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Hexascal",
    icon: reactjs,
    iconBg: "#383E56",
    date: "May 2024 - June 2024",
    points: [
      "Worked on HRMS (Human Resource Management System) to simplify employee and HR operations with a role-based access system.",
      "Built key features for Admin, HR, and Employee roles to manage workflows efficiently.",
      "Developed the application using React.js, Node.js, Tailwind CSS, MongoDB, and JWT authentication.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Nexus ChatApp",
    description:
      " A real-time messaging app that supports text, images, document sharing, voice, and video calls. Built for seamless communication, it ensures a smooth user experience with secure and efficient data handling. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "black-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Nexus,
    source_code_link: "https://github.com/Hemanshudhaduk/Nexus-ChatApp",
  },
  {
    name: "MCQ Generator using LLM",
    description:
      " An AI-powered tool that generates multiple-choice questions (MCQs) based on user input, including subject, document, and tone, using LLM (Large Language Model). It provides MCQs with answers and allows users to download them as PDFs for easy access",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "custom LLM ",
        color: "green-text-gradient",
      },
      {
        name: "Langchain",
        color: "pink-text-gradient",
      },
      {
        name: "Streamlt",
        color: "red-text-gradient",
      },
    ],
    image: MCQ,
    source_code_link: "https://github.com/Hemanshudhaduk/MCQGENRATOR",
  },
];

export { services, technologies, experiences, testimonials, projects };
