export const personal = {
  name: "Ruzzel Mendoza",
  title: "Full-Stack Developer",
  tagline:
    "Building digital experiences that live at the intersection of code, design, and imagination.",
  email: "ruzzelmendozedev@gmail.com",
  location: "Balanga City, Bataan, Philippines",
  yearsOfExperience: 1,
  resumePath: "ruzzel_mendoza_resume.pdf",
  social: {
    github: "https://github.com/WindWalker01",
    linkedin: "https://linkedin.com/in/ruzzel-mendoza",
    facebook: "https://www.facebook.com/ruzzel.policarpio.mendoza/",
  },
  bio: [
    "I am a full-stack software developer and Computer Science student specializing in Software Development, with an expected graduation in 2027. I build scalable, secure applications using modern frameworks like Next.js, React, Laravel, and FastAPI.",
    "",
  ],
};

export interface SkillGroup {
  category: string;
  items: string[];
  simpleIcons: string[];
}

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: [
      "TypeScript",
      "JavaScript",
      "Python",
      "Go",
      "Odin",
      "C++",
      "C#",
      "Java",
      "php",
    ],
    simpleIcons: [
      "typescript",
      "javascript",
      "python",
      "go",
      "odin",
      "cplusplus",
      "dotnet",
      "java",
      "php",
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      "React",
      "Next.js",
      "Node.js",
      "Laravel",
      "Express",
      "FastAPI",
      "Tailwind CSS",
      "Framer Motion",
    ],
    simpleIcons: [
      "react",
      "nextdotjs",
      "nodedotjs",
      "laravel",
      "express",
      "fastapi",
      "tailwindcss",
      "framer",
    ],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "Docker", "Vercel", "PostgreSQL", "Redis"],
    simpleIcons: ["git", "docker", "vercel", "postgresql", "redis"],
  },
  {
    category: "Design & 3D",
    items: ["Figma", "Blender"],
    simpleIcons: ["figma", "blender"],
  },
];

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl: string;
  repoUrl: string;
}

export const projects: Project[] = [
  {
    title: "ArtForgeLab",
    description:
      "A full-stack Next.js and Supabase application that lets digital artists register and protect their work using blockchain-based proof-of-ownership, AI-powered plagiarism detection, and automated certificate generation. Built as a thesis project, it includes a complete DMCA-style reporting system and admin dashboard, demonstrating end-to-end product thinking from smart contracts to user-facing security features.",
    tags: ["Three.js", "R3F", "TypeScript", "Zustand"],
    image: "artforgelab-banner.png",
    liveUrl: "artforgelab.vercel.app",
    repoUrl: "https://github.com/WindWalker01/ArtForgeLab",
  },
  {
    title: "BPSU Bulletin",
    description:
      "A content and announcement platform built for Bataan Peninsula State University, developed with PHP, MySQL, and Tailwind CSS as part of a student team project. It gives the university community a modern way to publish and engage with posts—complete with rich-text editing, Google login, comments, and admin moderation tools.",
    tags: ["React", "D3.js", "WebSocket", "Tailwind"],
    image: "bpsu-bulletin-banner.png",
    liveUrl: "",
    repoUrl: "https://github.com/WindWalker01/BPSU-Bulletin",
  },
  {
    title: "Plantanim",
    description:
      "A React Native mobile app built as freelance work, designed to help small-scale farmers in Abucay, Bataan make better planting decisions through localized weather forecasts and farming recommendations. The app was developed to support the client's academic research, with a focus on making it genuinely usable for farmers with limited digital literacy.",
    tags: ["Rust", "WebGPU", "TUI", "WASM"],
    image: "plantanim-banner.png",
    liveUrl: "",
    repoUrl: "https://github.com/WindWalker01/Plantanim",
  },
];

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  link: string;
  badge: string;
  pdfPath: string;
}

export const certifications: Certification[] = [
  {
    title: "Web Development v3",
    issuer: "Bataan Peninsula State University",
    date: "2025",
    link: "/certificates/web-development-v3.pdf",
    badge: "WebDev",
    pdfPath: "/certificates/web-development-v3.pdf",
  },
  {
    title: "Cyber Threat Management",
    issuer: "Bataan Peninsula State University",
    date: "2025",
    link: "/certificates/Cyber_Threat_Management_certificate_rupmendoza23-bpsu-edu-ph_8c33ec62-036d-4a7f-9823-a4b52f5a45d4.pdf",
    badge: "CyberSec",
    pdfPath:
      "/certificates/Cyber_Threat_Management_certificate_rupmendoza23-bpsu-edu-ph_8c33ec62-036d-4a7f-9823-a4b52f5a45d4.pdf",
  },
  {
    title: "Certification 1",
    issuer: "Professional Certification",
    date: "2025",
    link: "/certificates/Cert182215649596.pdf",
    badge: "Cert1",
    pdfPath: "/certificates/Cert182215649596.pdf",
  },
  {
    title: "Certification 2",
    issuer: "Professional Certification",
    date: "2025",
    link: "/certificates/Cert247215647131.pdf",
    badge: "Cert2",
    pdfPath: "/certificates/Cert247215647131.pdf",
  },
  {
    title: "Certification 3",
    issuer: "Professional Certification",
    date: "2025",
    link: "/certificates/Cert582215648928.pdf",
    badge: "Cert3",
    pdfPath: "/certificates/Cert582215648928.pdf",
  },
  {
    title: "Certification 4",
    issuer: "Professional Certification",
    date: "2025",
    link: "/certificates/Cert628215650306.pdf",
    badge: "Cert4",
    pdfPath: "/certificates/Cert628215650306.pdf",
  },
  {
    title: "Certification 5",
    issuer: "Professional Certification",
    date: "2025",
    link: "/certificates/Cert951215648322.pdf",
    badge: "Cert5",
    pdfPath: "/certificates/Cert951215648322.pdf",
  },
];

// ── Experience data (placeholders) ──

export interface Experience {
  company: string;
  monogram: string;
  title: string;
  employmentType:
    | "Full-time"
    | "Contract"
    | "Internship"
    | "Part-time"
    | "Scholarship"
    | "Competition"
    | "Volunteer";
  startDate: string;
  endDate: string | "Present";
  duration: string;
  location: string;
  workMode: "Remote" | "Hybrid" | "On-site";
  highlights: string[];
  tags: string[];
  link?: string;
}

export const experiences: Experience[] = [
  {
    company: "Freelance",
    monogram: "FL",
    title: "Freelance Software Developer",
    employmentType: "Contract",
    startDate: "2026",
    endDate: "2026",
    duration: "Project-based",
    location: "Philippines",
    workMode: "Remote",
    highlights: [
      "Designed and developed a custom mobile application tailored to the client's business requirements.",
      "Collaborated directly with the client to gather requirements, iterate on feedback, and deliver requested features.",
      "Implemented responsive user interfaces and application logic while maintaining code quality and performance.",
      "Delivered the completed application within the agreed project scope and timeline.",
    ],
    tags: ["Mobile Development", "React Native", "Expo", "TypeScript"],
  },
  {
    company: "Yoonet Launchpad",
    monogram: "YL",
    title: "Launchpad Scholar",
    employmentType: "Scholarship",
    startDate: "2025",
    endDate: "Present",
    duration: "Current",
    location: "Philippines",
    workMode: "Hybrid",
    highlights: [
      "Selected as a Yoonet Launchpad Scholar based on academic performance and technical potential.",
      "Participated in technical workshops, career development programs, and collaborative learning activities.",
      "Strengthened practical software engineering skills through mentorship and hands-on projects.",
    ],
    tags: ["Software Engineering", "Professional Development", "Mentorship"],
  },

  {
    company: "Home Credit × KadaKareer",
    monogram: "HC",
    title: "AI in UX Hackathon Finalist",
    employmentType: "Competition",
    startDate: "2025",
    endDate: "2025",
    duration: "Hackathon",
    location: "Philippines",
    workMode: "Hybrid",
    highlights: [
      "Advanced to the Top 10 finalist teams in the AI in UX Hackathon.",
      "Collaborated with a multidisciplinary team to design and prototype an AI-powered user experience solution.",
      "Presented the solution to industry professionals and received feedback from judges and mentors.",
      "Applied rapid prototyping, user-centered design, and agile collaboration under strict time constraints.",
    ],
    tags: ["AI", "UX Design", "Rapid Prototyping", "Teamwork"],
  },

  {
    company: "ArchWizards",
    monogram: "AW",
    title: "Programming Workshop Volunteer",
    employmentType: "Volunteer",
    startDate: "2024",
    endDate: "2024",
    duration: "Event",
    location: "Bataan Peninsula State University",
    workMode: "On-site",
    highlights: [
      "Helped organize a programming workshop for first-year Computer Science students.",
      "Guided participants through programming fundamentals and hands-on coding exercises.",
      "Assisted in preparing learning materials and coordinating workshop activities.",
      "Supported fellow volunteers to ensure a smooth and engaging learning experience.",
    ],
    tags: ["Mentoring", "Teaching", "Leadership", "Community"],
  },
];
