import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { personal } from "../data/portfolio";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";

const SpaceStationScene = lazy(() => import("./SpaceStationScene"));

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Hero() {
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* 3D Canvas */}
      <div className="absolute inset-0 z-0">
        <Suspense
          fallback={
            <div className="flex h-full items-center justify-center">
              <div className="border-electric-blue/30 bg-electric-blue/5 h-16 w-16 animate-pulse rounded-full border-2" />
            </div>
          }
        >
          <SpaceStationScene reducedMotion={prefersReducedMotion} />
        </Suspense>
      </div>

      {/* Gradient glow overlay — darker at edges and center to frame text */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(10,10,10,0.30) 0%, rgba(10,10,10,0.55) 50%, rgba(10,10,10,0.80) 100%)",
        }}
      />

      {/* Content overlay */}
      <motion.div
        className="relative z-10 mx-auto max-w-3xl px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Dark backdrop card for readability */}
        <div className="bg-near-black/40 -m-4 rounded-2xl p-4 backdrop-blur-sm sm:-m-6 sm:p-6 md:-m-8 md:p-8">
          <motion.p
            variants={itemVariants}
            className="text-electric-blue font-mono text-base tracking-widest uppercase"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="mt-2 text-5xl leading-tight font-bold tracking-tight md:text-7xl"
          >
            {personal.name}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-electric-blue mt-2 text-xl font-medium md:text-2xl"
          >
            {personal.title}
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-gray-light mx-auto mt-2 max-w-xl text-sm leading-relaxed md:text-sm"
          >
            {/* <stat.icon size={20} className="text-electric-blue shrink-0" /> */}
            <FiMapPin size={16} className="text-electric-blue mr-1 inline" />
            {personal.location}
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-gray-light mx-auto mt-4 max-w-xl text-base leading-relaxed md:text-lg"
          >
            {personal.tagline}
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap items-center justify-center gap-8"
          >
            {/* Github */}
            <a
              href={`${personal.social.github}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                size={32}
                className="text-gray-light hover:text-electric-blue"
              />
            </a>

            {/* Linkedin */}
            <a
              href={`${personal.social.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={32}
                className="text-gray-light hover:text-electric-blue"
              />
            </a>

            {/* Facebook */}
            <a
              href={`${personal.social.facebook}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook
                size={32}
                className="text-gray-light hover:text-electric-blue"
              />
            </a>

            {/* Email */}
            <a
              href={`mailto:${personal.email}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdEmail
                size={32}
                className="text-gray-light hover:text-electric-blue"
              />
            </a>

            {/* Resume */}
            <a
              href={personal.resumePath}
              download
              className="group border-gray-subtle text-gray-light hover:border-electric-blue/40 hover:text-electric-blue inline-flex items-center gap-2 rounded-full border px-6 py-3 font-medium transition-all hover:shadow-[0_0_20px_-4px_#00d4ff] active:scale-95"
            >
              <Download size={16} />
              Resume
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1.5, duration: 0.6 },
          y: { delay: 1.5, duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <ArrowDown size={24} className="text-gray-muted" />
      </motion.div>
    </section>
  );
}
