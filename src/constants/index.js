import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. Through hands-on project experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full-stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const CERTIFICATIONS = [
  {
    year: "2020 - 2021",
    role: "Cybersecurity Roles, Processes & Operating System Security",
    company: "Coursera",
    description: `This certification provides an in-depth understanding of the various roles within cybersecurity, from security analyst to 
    systems administrator. It covers foundational processes essential for managing security within organizations and explores best practices
     for securing operating systems against threats, vulnerabilities, and attacks. .`,
  },
  {
    year: "2022 - 2023",
    role: "Oracle Database Foundations",
    company: "Oracle",
    description: `This course delves into the essential concepts and principles of database management with a focus on Oracle Database technology.`,
  },
  {
    year: "2022 - 2023",
    role: "Red Hat System Administration II (RH134)",
    company: "Red hat",
    description: `Building on RH124, this certification focuses on advanced Linux administration tasks.`,
  },
  {
    year: "2022 - 2023",
    role: "Red Hat System Administration I (RH124)",
    company: "Red Hat",
    description: `Focused on essential Linux skills, this course introduces the core concepts of Red Hat Enterprise Linux system administration.`,
  },
  {
    year: "2022 - 2023",
    role: "PCAP: Programming Essentials in Python: Cisco Networking Academy",
    company: "Cisco Networking Academy",
    description: `This certification covers programming fundamentals in Python, designed to build proficiency in one of the most popular and versatile programming languages.`,
  },
  {
    year: "2022 - 2023",
    role: "Web development Full stack ",
    company: "Udemy",
    description: `This comprehensive course covers both front-end and back-end web development, 
    offering a deep dive into the essential tools and technologies required to build modern, scalable web applications.`,
  },
];

export const PROJECTS = [
  {
    title: "BlogVerse",
    image: project1,
    description:
      "A fully functional blog website inspired by Medium, built to provide a platform for users to create, share, and manage their blog posts seamlessly. This project features user authentication for signup and login, allowing authors to have personalized accounts. Users can write, edit, and delete their blog entries, enhancing the content management experience.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "TypeScript",
      "Hono",
      "Prisma",
      "PostgreSQL",
      "Cloudflare Workers",
    ],
  },
  {
    title: "Invoicing App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["Clerk", "Xata", "NextJs", "DrizzzleORM", "Shadcn/ui"],
  },

  {
    title: "Store it",
    image: project3,
    description:
      "A professional, production-ready Storage Management Platform inspired by solutions like Google Drive, Dropbox, and OneDrive. Designed to handle large-scale file storage, sharing, and collaboration with an intuitive user interface and robust data security, delivering a reliable and efficient storage solution tailored for both personal and enterprise needs.",
    technologies: ["InProgress"],
  },
];

export const CONTACT = {
  address: "Uttar Pradesh, India ",
  phoneNo: "+91 123456789 ",
  email: "anubhav.000x@gmail.com",
};
