// ── Placeholder data ── swap these with your real info

export const personal = {
  name: "Alex Chen",
  title: "Full-Stack Developer",
  tagline:
    "Building digital experiences that live at the intersection of code, design, and imagination.",
  email: "alex@example.com",
  location: "San Francisco, CA",
  yearsOfExperience: 6,
  resumePath: "/resume.pdf",
  social: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  bio: [
    "I'm a full-stack developer with a passion for crafting immersive, performant web experiences. From pixel-perfect UIs to robust backend systems, I thrive at every layer of the stack.",
    "When I'm not shipping code, you'll find me exploring generative art, contributing to open-source projects, or tinkering with WebGL and 3D graphics.",
  ],
};

export const skills = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Go", "Rust"],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "Docker", "AWS", "Vercel", "PostgreSQL", "Redis"],
  },
  {
    category: "Design & 3D",
    items: ["Figma", "Blender", "Three.js", "R3F", "GLSL"],
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
}

export const certifications: Certification[] = [
  {
    title: "AWS Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    date: "2025",
    link: "https://aws.amazon.com/certification/",
    badge: "AWS",
  },
  {
    title: "Meta Front-End Developer",
    issuer: "Meta (Coursera)",
    date: "2024",
    link: "https://www.coursera.org/meta",
    badge: "Meta",
  },
  {
    title: "Google UX Design",
    issuer: "Google (Coursera)",
    date: "2023",
    link: "https://www.coursera.org/google",
    badge: "Google",
  },
];
