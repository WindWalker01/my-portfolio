import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { certifications } from "../data/portfolio";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

export default function Certifications() {
  return (
    <section id="certifications" className="relative z-10 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-electric-blue font-mono text-sm tracking-widest uppercase"
        >
          Certifications
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={container}
          className="mt-10 grid gap-4 md:grid-cols-3"
        >
          {certifications.map((cert) => (
            <motion.a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={item}
              className="group border-gray-subtle bg-dark-card hover:border-electric-blue/30 rounded-xl border p-5 transition-all hover:shadow-[0_0_20px_-8px_#00d4ff]"
              aria-label={`View ${cert.title} certification`}
            >
              <div className="flex items-start gap-4">
                <div className="bg-electric-blue/10 group-hover:bg-electric-blue/20 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-all">
                  <Award size={20} className="text-electric-blue" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-off-white group-hover:text-electric-blue text-sm font-semibold transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-gray-muted mt-1 text-xs">{cert.issuer}</p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-gray-muted font-mono text-[10px]">
                      {cert.date}
                    </span>
                    <ExternalLink
                      size={12}
                      className="text-gray-muted group-hover:text-electric-blue transition-colors"
                    />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
