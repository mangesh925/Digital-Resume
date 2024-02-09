import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Mangesh Ahirrao",
  initials: "MA",
  location: "Ames, IA, USA",
  locationLink:
    "https://www.google.com/maps/place/Ames,+IA/@42.0259777,-93.7911813,11z/data=!3m1!4b1!4m6!3m5!1s0x87ee70624634a06b:0x273156083cc75200!8m2!3d42.0307812!4d-93.6319131!16zL20vMG5tag?entry=ttu",
  about: "Full Stack Engineer with 4 years of experience",
  summary:
    "Recently graduated (2023) in Math and Econ, I'm a budding Full-Stack Engineer skilled in JavaScript, TypeScript, Java, React, and Node.js. During my academic journey, I honed my craft through various internships, contributing to diverse projects and gaining valuable remote work experience with global teams.",
  avatarUrl: "https://avatars.githubusercontent.com/u/139425758?v=4",
  personalWebsiteUrl: "https://mangeshahirrao.vercel.app/",
  contact: {
    email: "mahirrao925@gmail.com",
    tel: "+1-515-817-3053",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/mangesh925",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mangesh925/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/itsmaangesh",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Iowa State University",
      degree: "BS in Mathematics and Economics , Minor in CS",
      start: "2018",
      end: "2023",
    },
  ],
  work: [
    {
      company: "GlobalBees",
      link: "",
      badges: ["Remote"],
      title: "Software Engineer Intern",
      start: "Jan 2023",
      end: "July 2023",
      description: [
        "Developed an admin dashboard with React, implementing RESTful API integration for real-time data visualization, leading to a 20% boost in data accessibility and decision-making speed. ",
        "Collaborated on UIs for dashboard and CMS using React Hooks, enhancing user interaction and contributing to a 15% rise in daily active users. ",
        "Improved system performance by refining SQL queries and implementing Redis caching, reducing load times by 25% and enhancing system responsiveness.",
      ],
    },
    {
      company: "Information Technology Services (ITS), ISU",
      link: "",
      badges: ["Ames, IA"],
      title: "Software Application Developer",

      start: "May 2022 ",
      end: "Dec 2022",
      description: [
        "Coordinated a 5-member team to upgrade web applications leveraging React and Node.js to enhance admin and academic workflows, significantly improving key business workflows by 30%. ",
        "Enhanced security vulnerabilities and performance output by transitioning the project from JavaScript to TypeScript. ",
        "Assisted in optimizing a 90% acceleration in deployment process with Jenkins, enhancing CI/CD efficiency for front-end updates and improving site reliability. ",
      ],
    },
    {
      company: "Thielen Health Center, ISU",
      link: "",
      badges: ["Ames, IA"],
      title: "Front-End Developer",
      start: "Aug 2020",
      end: "May 2021",
      description: [
        "Built the RT-PCR test booking portal at Thielen Health Center using Java, Spring Boot, and React, improving UI. ",
        "Implemented a Java-based RESTful API for online scheduling, reducing phone appointments by 50%. ",
        "Created a responsive, ADA-compliant user interface, boosting portal usage by 40%.",
      ],
    },
  ],
  skills: [
    "Java",
    "JavaScript",
    "TypeScript",
    "Python",
    "HTML/CSS",
    "PostgreSQL",
    "React.js",
    "Node.js",
    "Spring Boot",
    "Next.js",
    "MongoDB",
    "Express.js",
    "Bootstrap",
    "Tailwind CSS",
    "Git/GitHub",
    "Jenkins",
    "VSCode",
  ],
  projects: [
    {
      title: "DocuChatter-AI",
      techStack: [
        "Next.js 13",
        "TypeScript",
        "LangChain",
        "Pinecone",
        "Stripe",
        "shadcn-ui",
      ],
      description: [
        "Developed a SaaS platform using Next.js 13, TypeScript, and OpenAI’s GPT-3.5 Turbo API, enabling interactive AI conversations with uploaded PDFs, resulting in a 40% increase in user interaction with documents. Implemented tRPC and Zod for data fetching, LangChain for AI memory, and Pinecone for vector storage. Streamlined subscription processes with Stripe and crafted a user-friendly interface using shadcn-ui.",
      ],
      link: {
        label: "DocuChatter-AI",
        href: "https://docuchatter.vercel.app/",
      },
    },
    {
      title: "Collab",
      techStack: [
        "Next.js 14",
        "TypeScript",
        "Tailwind CSS",
        "React.js",
        "Clerk-Auth",
        "Convex",
      ],
      description: [
        "Built a collaborative whiteboarding tool with Next.js 14, Tailwind CSS, and React to enhance remote teamwork. Integrated Clerk for authentication and Convex for real-time functionality, ensuring a secure user experience. Implemented a feature-rich toolset (text, shapes, sticky notes), boosting dynamic remote collaboration.",
      ],
      link: {
        label: "Collab",
        href: "https://collab-app-kappa.vercel.app/",
      },
    },
    {
      title: "TastMate",
      techStack: [
        "Next.js 13",
        "TypeScript",
        "Firebase",
        "React.js",
        "DALL·E",
        "Drizzle ORM",
      ],
      description: [
        "Developed an AI-powered note-taking app with Next.js 13 and TypeScript, integrating OpenAI’s GPT-3.5 Turbo API for advanced language processing. Implemented DALL·E API for image generation, storing results in Firebase for efficient data management. Utilized Drizzle ORM for efficient database interactions and Tailwind CSS for UI design.",
      ],
      link: {
        label: "TaskMate",
        href: "https://taskmate-ai.vercel.app/",
      },
    },
    {
      title: "StudyMigo",
      techStack: [
        "Next.js 13",
        "TypeScript",
        "React.js",
        "Mux",
        "Prisma",
        "MySQL",
      ],
      description: [
        "Engineered a Learning Management System (LMS) with TypeScript, Next.js 13, and React, featuring course creation, student dashboards, and Stripe integration for payments. Implemented Mux for video processing, rich text editing for chapters, and Clerk for authentication. Utilized Prisma with MySQL for robust data management, ensuring a scalable and interactive learning experience.",
      ],
      link: {
        label: "StudyMigo",
        href: "https://studymigo.vercel.app/",
      },
    },
  ],
} as const;
