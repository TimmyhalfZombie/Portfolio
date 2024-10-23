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
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web 3 Enthusiast",
    icon: web,
  },
  {
    title: "Airdrop Fanatic",
    icon: mobile,
  },
  {
    title: "Fullstack Developer",
    icon: backend,
  },
  {
    title: "Cybersecurity Analyst",
    icon: creator,
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
    name: "Redux Toolkit",
    icon: redux,
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
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Elementary",
    company_name: "Los Angeles Elementary School",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "2008 - 2014",
    points: [
      "Musician of the year",
      "Academic Achiever"
    ],
  },
  {
    title: "High School",
    company_name: "Danawan National High School",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "2014-2018",
    points: [
      "Athlete (Sepak Takraw)",
      "Competed at Regional Division"
    ],
  },
  {
    title: "Senior High School",
    company_name: "Cuyo National High School",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "2018 - 2020",
    points: [
      "Leader",
      "STEM President"
    ],
  },
  {
    title: "College",
    company_name: "Western Institute of Technology",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "2020 - Present",
    points: [
     "Bachelor of Science in Information Technology"
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
    name: "Todo App",
    description:
      "A streamlined task management platform that empowers users to organize, prioritize, and track daily activities with ease. It provides seamless task creation, scheduling, and reminders to boost productivity, making it an essential tool for personal and professional use.",
    tags: [
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
      {
        name: "Node.js",
        color: "red-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/TimmyhalfZombie/awesometodoapp.git",
    live_demo_link: "https://todo-app-ni-tim.onrender.com"
  },
  {
    name: "Dracarys",
    description:
      "An immersive visual experience that brings dragons to life through stunning 3D animations and interactions. Explore the majestic world of dragons, learning about their lore, characteristics, and behaviors in a dynamic, interactive environment, perfect for fantasy lovers and enthusiasts of mythical creatures.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "WebGL",
        color: "green-text-gradient",
      },
      {
        name: "Three.js",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/TimmyhalfZombie/awesometodoapp.git",
    live_demo_link: "https://dracarys.robertborghesi.is/"
  },
  {
    name: "Animal Future",
    description:
      "A visionary platform that invites users to imagine a future focused on animal welfare through interactive storytelling and gameplay. Envisioning a world where all animals thrive, while discovering the importance of conservation and empathy in our society.",
    tags: [
      {
        name: "Vue",
        color: "blue-text-gradient",
      },
      {
        name: "WebGL",
        color: "green-text-gradient",
      },
      {
        name: "FramerMotion",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/TimmyhalfZombie/awesometodoapp.git",
    live_demo_link: "https://www.rspca.org.uk/webContent/animalfutures/?utm_source=Unseen&utm_medium=Referral&utm_campaign=AnimalFutures&utm_content=Game"
  },
];

export { services, technologies, experiences, testimonials, projects };
