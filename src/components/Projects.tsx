import { motion } from "framer-motion";
import { ExternalLink, GitBranch } from "lucide-react";
import { projects } from "../data/portfolio";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const card = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-electric-blue font-mono text-sm tracking-widest uppercase"
        >
          Projects
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={container}
          className="mt-10 grid gap-6 md:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={card}
              className="group border-gray-subtle bg-dark-card hover:border-electric-blue/30 relative overflow-hidden rounded-xl border transition-all hover:shadow-[0_0_30px_-12px_#00d4ff]"
            >
              {/* Thumbnail placeholder */}
              <div className="from-gray-subtle/50 to-dark-card flex h-48 items-center justify-center bg-gradient-to-br">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-off-white group-hover:text-electric-blue text-lg font-semibold transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-light mt-2 text-base leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border-gray-subtle bg-near-black text-gray-muted hover:border-electric-blue/30 hover:text-electric-blue rounded-full border px-3 py-1 font-mono text-sm transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-4 flex items-center gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-light hover:text-electric-blue inline-flex items-center gap-1.5 text-sm font-medium transition-all"
                      aria-label={`View live demo of ${project.title}`}
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-light hover:text-electric-blue inline-flex items-center gap-1.5 text-sm font-medium transition-all"
                    aria-label={`View source code of ${project.title}`}
                  >
                    <GitBranch size={14} />
                    Source
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
