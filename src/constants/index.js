import {
  mobile,
  backend,
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
    name: "python",
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
      "I highly recommend Ramiro as a software engineer. His attention to detail and proactive problem-solving approach significantly contributed to his success.",
    name: "Aaron García",
    designation: "Software Engineer",
    company: "Google",
    image:
      "https://media.licdn.com/dms/image/C4E03AQH0YMBLONnelA/profile-displayphoto-shrink_800_800/0/1545177831736?e=1713398400&v=beta&t=aCCPWYT0DP60i2crGE54gyAkuJXh4OSk_5srBpFz79Q",
  },
  {
    testimonial:
      "Working with Ramiro was a game-changer for our project. Their leadership and growth mindset were evident throughout, inspiring the team to push boundaries and embrace new challenges. Ramiro fosters a culture of continuous learning and innovation, making them an invaluable asset to any team.",
    name: "Alberto Tamez",
    designation: "Former Intern",
    company: "Microsoft",
    image:
      "https://media.licdn.com/dms/image/D5603AQEsx9ITRgtmZg/profile-displayphoto-shrink_400_400/0/1692590789982?e=1713398400&v=beta&t=5aCIRJ6cb5V4cSHkSKRt2bNmLqbrnCpXJOCozjZA3iY",
  },
  {
    testimonial:
      "Teaming up with Ramiro on our project was a game-changer. Their leadership and growth mindset were pivotal in propelling our team forward. Ramiro impulsed collaboration and innovation, inspiring us to excel. Their adaptability and problem-solving skills were key to our success.",
    name: "Adolfo Gonzalez",
    designation: "Fellow",
    company: "Makers",
    image:
      "https://media.licdn.com/dms/image/D4E03AQE4k9D5-Hf_HA/profile-displayphoto-shrink_800_800/0/1693524253055?e=1713398400&v=beta&t=0PgIBa4QaltcJGkGd3gMh5Z1NnOV58vUhGQgabmO-YM",
  },
];

const projects = [
  {
    name: "Legal AId - MLH Hackathon Winner (HackHarvard 2023)",
    description:
      "Engineered a customized Google Cloud PaLM model for legal assistance, integrated Kubernetes Vector Search for fast legal information retrieval, using Python and Flask for backend infrastructure.",
    tags: [
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "googlecloud",
        color: "pink-text-gradient",
      },
    ],
    image: legalaid,
    source_code_link: "https://devpost.com/software/legalaid",
  },
  {
    name: "EmergencIA - MLH Hackathon Winner (HackMTY 2023, 2nd Place)",
    description:
      "Engineered and automated an emergency call system utilizing natural language understanding and analysis to redirect 911 calls during operator busy periods, efficiently answering, interpreting, and providing authorities a dynamic visualization of current cases, developing 100% of the project’s back-end.",
    tags: [
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "NLP",
        color: "pink-text-gradient",
      },
    ],
    image: emergencia_temp,
    source_code_link: "https://devpost.com/software/emergencia-mr4ed8",
  },
  {
    name: "DropNot - MLH Hackathon Winner (HackMTY 2022, 1st Place)",
    description:
      "Designed and developed a mobile application with React Native Expo with the purpose of creating a measurable and conscious use of water services.",
    tags: [
      {
        name: "iot",
        color: "blue-text-gradient",
      },
      {
        name: "reactnative",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: dropnot,
    source_code_link: "https://devpost.com/software/dropnot",
  },
];

export { services, technologies, experiences, testimonials, projects };
