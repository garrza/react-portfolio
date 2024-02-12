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
  python,
  tailwind,
  nodejs,
  r,
  git,
  figma,
  docker,
  frontec,
  makers,
  microsoft,
  uber,
  legalaid,
  dropnot,
  emergencia_temp,
  threejs,
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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Fullstack Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
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
    name: "python Toolkit",
    icon: python,
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
    name: "r",
    icon: r,
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
    title: "SWE Career Prep Fellow",
    company_name: "Uber",
    icon: uber,
    iconBg: "#383E56",
    date: "Feb 2024 - Present",
    points: [
      "Selected as a fellow for the 2024 cohort, with a 4% acceptance rate.",
      "Collaborating with industry mentors, gaining insights and guidance tailored to achieving professional milestones and enhancing technical competencies.",
      "Actively engaging in workshops focused on enhancing technical knowledge, professional skills, and industry insight.",
    ],
  },
  {
    title: "Microsoft Learn Student Ambassador",
    company_name: "Microsoft",
    icon: microsoft,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Present",
    points: [
      "Represented Microsoft as a Student Ambassador, promoting Microsoft products and technologies within the university community, underwent training on AI and machine learning path.",
      "Currently organizing workshops and other events to promote Microsoft technologies and products.",
      "Collaborating with other ambassadors to create and execute events and initiatives.",
    ],
  },
  {
    title: "President / Founder",
    company_name: "Frontec",
    icon: frontec,
    iconBg: "#383E56",
    date: "Nov 2022 - Present",
    points: [
      "Founded a student council focused on front-end web development.",
      "Developed, conducted, and promoted a variety of extracurricular programs for students and campus teachers.",
      "Established and maintained a conducive environment for student learning and integration with different careers.",
      "Currently developing a learning hub with a group of 5 students to ensure consistent growth with CSSBattles and create a roadmap for students to follow and log.",
    ],
  },
  {
    title: "Makers Fellow",
    company_name: "makers",
    icon: makers,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Present",
    points: [
      "Selected as a fellow for a program for Latin America's next top entrepreneurs, founded by Andres Bilbao, co-founder of Rappi.",
      "Undergoing workshops and training to enhance technical and behaivioral skills and knowledge.",
      "Collaborating with industry mentors to gain insights and guidance tailored to achieving professional milestones.",
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
    name: "Legal AId",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "r",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: legalaid,
    source_code_link: "https://devpost.com/software/legalaid",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: dropnot,
    source_code_link: "https://devpost.com/software/dropnot",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: emergencia_temp,
    source_code_link: "https://devpost.com/software/emergencia-mr4ed8",
  },
];

export { services, technologies, experiences, testimonials, projects };
