// ── Placeholder data ── swap these with your real info

export const personal = {
  name: "Ruzzel Mendoza",
  title: "Full-Stack Developer",
  tagline:
    "Building digital experiences that live at the intersection of code, design, and imagination.",
  email: "ruzzelmendozedev@gmail.com",
  location: "Balanga City, Bataan, Philippines",
  yearsOfExperience: 1,
  resumePath: "/resume.pdf",
  social: {
    github: "https://github.com/WindWalker01",
    linkedin: "https://linkedin.com/in/ruzzel-mendoza",
    twitter: "https://www.facebook.com/ruzzel.policarpio.mendoza/",
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
    title: "Nebula Dashboard",
    description:
      "Real-time analytics dashboard for cloud infrastructure with interactive data visualizations and collaborative features.",
    tags: ["React", "D3.js", "WebSocket", "Tailwind"],
    image: "",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
  {
    title: "Voxel Forge",
    description:
      "Browser-based voxel editor with WebGL rendering, undo/redo, and export-to-GLB capabilities.",
    tags: ["Three.js", "R3F", "TypeScript", "Zustand"],
    image: "",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
  {
    title: "Synthwave CLI",
    description:
      "Aesthetic terminal emulator with retro-wave theming, GPU-accelerated rendering, and plugin system.",
    tags: ["Rust", "WebGPU", "TUI", "WASM"],
    image: "",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
  {
    title: "Orbit Social",
    description:
      "Decentralized social platform with end-to-end encryption, built on ActivityPub and IPFS.",
    tags: ["Next.js", "Solidity", "IPFS", "Prisma"],
    image: "",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
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
  employmentType: "Full-time" | "Contract" | "Internship" | "Part-time";
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
    company: "Nebula Labs",
    monogram: "NL",
    title: "Senior Frontend Engineer",
    employmentType: "Full-time",
    startDate: "Jan 2023",
    endDate: "Present",
    duration: "1 yr 7 mos",
    location: "San Francisco, CA",
    workMode: "Remote",
    highlights: [
      "Architected a component library used across 4 product teams, reducing development time by 40%",
      "Led migration from REST to GraphQL, cutting API payload size by 60%",
      "Mentored 3 junior engineers through structured code reviews and pair programming sessions",
      "Improved Lighthouse performance score from 68 to 94 with code-splitting and lazy-loading strategies",
    ],
    tags: ["React", "TypeScript", "GraphQL", "Tailwind", "Storybook"],
    link: "https://example.com",
  },
  {
    company: "Quantum Byte",
    monogram: "QB",
    title: "Full-Stack Developer",
    employmentType: "Contract",
    startDate: "Jun 2022",
    endDate: "Dec 2022",
    duration: "7 mos",
    location: "New York, NY",
    workMode: "Hybrid",
    highlights: [
      "Built a real-time collaborative whiteboard app using WebSockets and Canvas API, serving 10K+ concurrent users",
      "Designed and implemented a microservices architecture with Docker and Kubernetes, improving deployment frequency by 3x",
      "Reduced API response times by 45% through database query optimization and Redis caching",
    ],
    tags: ["Next.js", "Node.js", "WebSocket", "Docker", "Redis", "PostgreSQL"],
    link: "https://example.com",
  },
  {
    company: "Stellar Apps",
    monogram: "SA",
    title: "Frontend Developer",
    employmentType: "Full-time",
    startDate: "Sep 2021",
    endDate: "May 2022",
    duration: "9 mos",
    location: "Austin, TX",
    workMode: "On-site",
    highlights: [
      "Developed 12+ responsive landing pages with 99+ Lighthouse accessibility scores",
      "Introduced automated visual regression testing with Playwright, catching 30+ UI bugs pre-production",
      "Reduced bundle size by 35% by migrating from Moment.js to date-fns and tree-shaking unused dependencies",
    ],
    tags: ["React", "TypeScript", "SCSS", "Playwright", "Figma"],
  },
  {
    company: "Pixel Forge",
    monogram: "PF",
    title: "Frontend Intern",
    employmentType: "Internship",
    startDate: "Jun 2021",
    endDate: "Aug 2021",
    duration: "3 mos",
    location: "Los Angeles, CA",
    workMode: "Remote",
    highlights: [
      "Contributed to an internal design system with 20+ reusable React components",
      "Wrote unit tests achieving 85% code coverage for the dashboard module",
      "Created interactive data visualizations with D3.js for a client-facing analytics portal",
    ],
    tags: ["React", "JavaScript", "D3.js", "Jest", "CSS Modules"],
  },
];
