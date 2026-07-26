import { motion } from "framer-motion";
import { MapPin, Briefcase, Code2 } from "lucide-react";
import { personal } from "../data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const stats = [
  { icon: MapPin, label: "Location", value: personal.location },
  {
    icon: Briefcase,
    label: "Experience",
    value: `${personal.yearsOfExperience}+ years`,
  },
  { icon: Code2, label: "Focus", value: "Full-Stack Developer" },
];

export default function About() {
  return (
    <section id="about" className="relative z-10 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-electric-blue font-mono text-sm tracking-widest uppercase"
        >
          About
        </motion.h2>

        <div className="mt-10 grid gap-12 md:grid-cols-[1fr_1.5fr]">
          {/* Avatar / visual placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <div className="group border-gray-subtle bg-dark-card relative h-64 w-64 overflow-hidden rounded-2xl border md:h-80 md:w-80">
              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  <div className="bg-electric-blue/10 text-electric-blue mx-auto flex h-24 w-24 items-center justify-center rounded-full text-4xl font-bold">
                    {personal.name.charAt(0)}
                  </div>
                  <img src="src/assets/profile.jpg" alt="Profile" />
                  <p className="text-gray-muted mt-3 text-base">
                    Your photo here
                  </p>
                </div>
              </div>
              {/* Hover glow */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="from-electric-blue/5 absolute inset-0 bg-gradient-to-tr via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Bio + stats */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {personal.bio.map((paragraph, i) => (
                <motion.p
                  key={i}
                  custom={i}
                  variants={fadeUp}
                  className="text-gray-light text-base leading-relaxed md:text-lg"
                >
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  custom={i + 2}
                  variants={fadeUp}
                  className="border-gray-subtle bg-dark-card hover:border-electric-blue/30 flex items-center gap-3 rounded-xl border p-4 transition-all hover:shadow-[0_0_15px_-6px_#00d4ff]"
                >
                  <stat.icon
                    size={20}
                    className="text-electric-blue shrink-0"
                  />
                  <div>
                    <p className="text-gray-muted text-sm">{stat.label}</p>
                    <p className="text-off-white text-base font-medium">
                      {stat.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
