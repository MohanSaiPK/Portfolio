import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCode,
  FaHtml5,
  FaCss3Alt,
  FaJava,
} from "react-icons/fa"; // Example icons
import {
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiPostman,
  SiDjango,
  SiPython,
} from "react-icons/si"; // More specific tech icons

export const personalInfo = {
  name: "Mohan Sai PK",
  title: "Full Stack Developer",
  email: "sai17niki@gmail.com",
  linkedin: "https://linkedin.com/in/MohanSaiPK",
  github: "https://github.com/MohanSaiPK",
  resumeLink: "/MsResume2025.pdf", // Make sure your resume is in public/
  bio: "Driven Full Stack Developer with a passion for building seamless, user-focused web applications. Committed to leveraging modern technologies to solve real-world challenges and contribute effectively within collaborative, fast-paced teams.",
  shortBio: "I build things for the web.", // For Hero section
};
export const workExperience = [
  {
    company: "Virtusa",
    position: "Full Stack Developer Intern",
    duration: "May 2023 – Aug 2023",
    description:
      "Developed a full-stack task management application enabling real-time collaboration and progress tracking. Built secure, responsive UIs with React.js, and implemented JWT-based role-based access using Spring Boot and Django REST APIs. Employed JUnit and Maven for testing and build automation, ensuring reliable code and efficient delivery.",
  },
  {
    company: "Wrexa Technologies",
    position: "SDE-1",
    duration: "March 2024 – Feb 2025",
    description:
      "Built scalable, responsive interfaces using React.js, JavaScript, and Tailwind CSS, integrating seamlessly with RESTful APIs. Delivered full-stack features including dynamic dashboards, filtering, real-time updates, and secure JWT authentication. Contributed to CI/CD pipelines, participated in agile teams, and maintained high-quality, reusable code across deployments.",
  },
];

export const education = [
  {
    institution: "Rajalakshmi Engineering College",
    degree: "Bachelor of Engineering in Computer Science",
    duration: "Aug 2019 – May 2023",
    score: "CGPA: 8.62/10",
  },
  {
    institution: "Sri Chaitanya Junior College",
    degree: "Grade 12th",
    duration: "Aug 2017 – 2019",
    score: "Percentage: 80.2%",
  },
  {
    institution: "Sri Bala Vidyalaya",
    degree: "Grade 10th",
    duration: "Aug 2008 – 2017",
    score: "CGPA: 9.2/10",
  },
];

export const projects = [
  {
    title: "CeeTowers",
    tech: ["React JS", "Node.js", "Express.js", "MongoDB"],
    description:
      "A modern, full-featured community management platform for residential societies. The Society helps residents, guards, service providers, and society admins stay connected and efficient by offering role-based dashboards for communication, service booking, complaint resolution, visitor management, and emergencies. All in one place.",
    date: "March 2025 – Present",
    githubLink: "https://github.com/MohanSaiPK/the-society", // Replace with actual link
    liveLink: "https://cee-towers.netlify.app/", // Replace with actual link if available
    category: "Full Stack",
    icon: <FaReact size={24} className="text-accent-1" />,
  },
  {
    title: "TheWay",
    tech: ["React JS", "Django", "Rest", "PostGreSQL"],
    description:
      "A full-stack e-commerce platform for gym supplements and fitness products. Built with React, Tailwind, and Django REST, it features user authentication, product browsing, wishlist/cart management, mock checkout, and an admin dashboard for uploads. All in a responsive, real-world shopping experience.",
    date: "March 2025 – Present",
    githubLink: "https://github.com/MohanSaiPK/The-Way", // Replace with actual link
    liveLink: "https://the-healthy-way.netlify.app/",
    category: "Full Stack",
    icon: <FaReact size={24} className="text-accent-1" />,
  },
];

export const skills = {
  languages: [
    { name: "Java", icon: <FaJava /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    // { name: "TypeScript", icon: <SiTypescript /> }, // Add if you use it
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "SQL", icon: <FaDatabase /> },
  ],
  frameworksAndLibraries: [
    { name: "React JS", icon: <FaReact /> },
    { name: "Node JS", icon: <FaNodeJs /> },
    { name: "Express JS", icon: <SiExpress /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> }, // You are using it!
    { name: "Django Rest Framework", icon: <SiDjango /> },
  ],
  toolsAndPlatforms: [
    { name: "MongoDB", icon: <SiMongodb /> },

    { name: "Git & GitHub", icon: <FaGithub /> },
    { name: "VS Code", icon: <FaCode /> }, // Or a more specific icon
    { name: "Postman", icon: <SiPostman /> }, // Placeholder
  ],
  coreCompetencies: [
    "Problem Solving",
    "Presentations",
    "Oratory",
    "Team Leadership",
    "Event Hosting",
    "Agile Methodologies",
  ],
};

export const socialLinks = {
  linkedin: { url: personalInfo.linkedin, icon: <FaLinkedin size={24} /> },
  github: { url: personalInfo.github, icon: <FaGithub size={24} /> },
  email: {
    url: `mailto:${personalInfo.email}`,
    icon: <FaEnvelope size={24} />,
  },
  // phone: { url: `tel:${personalInfo.phone}`, icon: <FaPhone size={24} /> }, // Optional
};
