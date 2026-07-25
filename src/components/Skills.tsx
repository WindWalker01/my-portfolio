import { motion } from "framer-motion";
import { skills } from "../data/portfolio";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-electric-blue font-mono text-sm tracking-widest uppercase"
        >
          Skills
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={container}
          className="mt-10 grid gap-8 md:grid-cols-2"
        >
          {skills.map((group) => (
            <motion.div
              key={group.category}
              variants={item}
              className="border-gray-subtle bg-dark-card hover:border-electric-blue/20 rounded-xl border p-6 transition-all"
            >
              <h3 className="text-electric-blue mb-4 font-mono text-sm font-medium">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="border-gray-subtle bg-near-black text-gray-light hover:border-electric-blue/40 hover:text-electric-blue inline-block rounded-full border px-3 py-1.5 font-mono text-xs transition-all hover:shadow-[0_0_12px_-4px_#00d4ff]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
