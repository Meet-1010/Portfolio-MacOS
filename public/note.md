
/**
 * @file: profile.config.ts
 * @author: Meet Chauhan
 * @summary: Full-Stack Developer
 */

// --------------------------------------------------
// 1. BASIC INFO
// --------------------------------------------------

const PROFILE = {
  name: "Meet Chauhan",
  email: "meetsc04@gmail.com",
  phone: "+91 9173481350",
  github: "https://github.com/Meet-1010",
  linkedin: "https://linkedin.com/in/meet-chauhan-5574a4264/",
};

// --------------------------------------------------
// 2. SUMMARY
// --------------------------------------------------

const SUMMARY = `
Motivated full-stack developer with hands-on experience building scalable
web applications using JavaScript, Node.js, Express, React, and modern databases.
Strong problem-solver with a solid understanding of system design, clean
architecture, and user-centric development. Passionate about delivering
reliable digital solutions and continuously improving technical skills.
`;

// --------------------------------------------------
// 3. PROJECTS
// --------------------------------------------------

interface Project {
  name: string;
  description: string[];
  techStack: string[];
}

const PROJECTS: Project[] = [
  {
    name: "Movieflix",
    description: [
      "Built a full-stack movie browsing platform with dynamic search and views",
      "Designed responsive UI for seamless cross-device experience",
      "Implemented modular UI components and detail-rich movie pages",
    ],
    techStack: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    name: "UdhyogUnity",
    description: [
      "Developed a platform connecting consumers to local service vendors",
      "Implemented proximity-based search and booking system",
      "Built modular architecture for listings, bookings, and authentication",
      "Designed intuitive and mobile-responsive UI",
    ],
    techStack: ["Node.js", "Express", "MongoDB", "HTML5", "CSS3"],
  },
  {
    name: "Real-Estate App",
    description: [
      "Built a platform to add, search, and manage property listings",
      "Created reusable UI components and optimized routing structure",
      "Designed responsive pages for mobile and desktop consistency",
    ],
    techStack: ["HTML5", "CSS3", "JavaScript"],
  },
];

// --------------------------------------------------
// 4. EDUCATION
// --------------------------------------------------

const EDUCATION = [
  {
    institute: "Parul Institute of Engineering & Technology",
    degree: "B.Tech – Computer Science and Engineering",
    period: "Sept 2023 – June 2026",
    cgpa: "8.31 / 10",
  },
  {
    institute: "MSU Polytechnic",
    degree: "Diploma – Electrical Engineering",
    period: "2020 – 2023",
    result: "57.96%",
  },
  {
    institute: "Bright Day School (GSEB)",
    degree: "SSC",
    result: "58.50%",
  },
];

// --------------------------------------------------
// 5. TECHNICAL SKILLS
// --------------------------------------------------

const SKILLS = {
  languages: ["HTML", "CSS", "JavaScript", "React", "Python", "Java"],
  databases: ["SQL", "MySQL", "MongoDB"],
  frameworks: ["Node.js", "Express.js", "Angular", "Bootstrap"],
};

// --------------------------------------------------
// 6. ACHIEVEMENTS & CERTIFICATIONS
// --------------------------------------------------

const ACHIEVEMENTS = [
  "Authored research paper: UdhyogUnity - A Digital Platform for Local Home Businesses (September 2025)",
  "Introduction to Internet of Things – NPTEL (80/100)",
  "Computer Network and Internet Protocol – NPTEL (78/100)",
  "Meta Frontend Development Certificate – Coursera",
  "Full Stack MERN Training – Coding Blocks",
  "Java Programming & Java Fundamentals – Infobytes",
  "Data Structures and Algorithms – EDYODA",
];

export {
  PROFILE,
  SUMMARY,
  PROJECTS,
  EDUCATION,
  SKILLS,
  ACHIEVEMENTS,
};
