import { useState, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  MapPin,
  Briefcase,
  Calendar,
  ExternalLink,
  List,
  Columns,
} from "lucide-react";
import { experiences } from "../data/portfolio";

/* ── helpers ── */

function computeDurationClass(duration: string) {
  const colors: Record<string, string> = {
    "Full-time": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    Contract: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    Internship: "bg-sky-500/10 text-sky-400 border-sky-500/20",
    "Part-time": "bg-violet-500/10 text-violet-400 border-violet-500/20",
  };
  return colors[duration] ?? "bg-gray-500/10 text-gray-400 border-gray-500/20";
}

function workModeColor(mode: string) {
  const colors: Record<string, string> = {
    Remote: "text-emerald-400",
    Hybrid: "text-amber-400",
    "On-site": "text-sky-400",
  };
  return colors[mode] ?? "text-gray-light";
}

/* ── sub-components ── */

function ExperienceTag({ tag }: { tag: string }) {
  return (
    <span className="border-gray-subtle bg-near-black text-gray-muted hover:border-electric-blue/30 hover:text-electric-blue rounded-full border px-3 py-1 font-mono text-sm transition-all">
      {tag}
    </span>
  );
}

function ExperienceNode({
  exp,
  index,
}: {
  exp: (typeof experiences)[number];
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isPresent = exp.endDate === "Present";

  return (
    <li className="relative mb-12 last:mb-0">
      {/* Card */}
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 40, x: index % 2 === 0 ? -20 : 20 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
        className={`group relative ml-8 md:ml-0 md:w-[calc(50%-1.5rem)] ${
          index % 2 === 0 ? "md:mr-auto md:pr-6" : "md:ml-auto md:pl-6"
        }`}
      >
        <div
          className="border-gray-subtle bg-dark-card hover:border-electric-blue/30 relative cursor-pointer rounded-xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_-12px_#00d4ff]"
          onClick={() => setExpanded(!expanded)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setExpanded(!expanded);
            }
          }}
          role="button"
          tabIndex={0}
          aria-expanded={expanded}
          aria-controls={`exp-details-${index}`}
        >
          {/* Header row */}
          <div className="flex items-start gap-4">
            {/* Monogram */}
            <div className="bg-electric-blue/10 text-electric-blue flex h-11 w-11 shrink-0 items-center justify-center rounded-lg font-mono text-base font-bold">
              {exp.monogram}
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-off-white group-hover:text-electric-blue truncate text-lg font-semibold transition-colors">
                  {exp.title}
                </h3>
                {isPresent && (
                  <span className="relative flex h-2 w-2">
                    <span className="bg-electric-blue absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
                    <span className="bg-electric-blue relative inline-flex h-2 w-2 rounded-full" />
                  </span>
                )}
              </div>
              <p className="text-gray-light mt-0.5 text-base">{exp.company}</p>

              {/* Meta row */}
              <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                <span
                  className={`inline-block rounded-full border px-2 py-0.5 font-mono text-xs ${computeDurationClass(exp.employmentType)}`}
                >
                  {exp.employmentType}
                </span>
                <span className="text-gray-muted inline-flex items-center gap-1">
                  <Calendar size={12} />
                  {exp.startDate} — {exp.endDate}
                </span>
                <span className="text-gray-muted font-mono text-xs">
                  · {exp.duration}
                </span>
              </div>
            </div>
          </div>

          {/* Location row */}
          <div className="mt-3 flex items-center gap-3 text-sm">
            <span className="text-gray-muted inline-flex items-center gap-1">
              <MapPin size={12} />
              {exp.location}
            </span>
            <span
              className={`inline-flex items-center gap-1 font-medium ${workModeColor(exp.workMode)}`}
            >
              <Briefcase size={12} />
              {exp.workMode}
            </span>
          </div>

          {/* Expanded details */}
          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                id={`exp-details-${index}`}
                key="details"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="border-gray-subtle/50 mt-4 border-t pt-4">
                  {/* Highlights */}
                  <ul className="space-y-2">
                    {exp.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="text-gray-light flex items-start gap-2 text-base leading-relaxed"
                      >
                        <span className="text-electric-blue mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-current" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <ExperienceTag key={tag} tag={tag} />
                    ))}
                  </div>

                  {/* Company link */}
                  {exp.link && (
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-electric-blue hover:text-electric-blue-dim mt-4 inline-flex items-center gap-1 text-sm font-medium transition-colors"
                      aria-label={`Visit ${exp.company} website`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={13} />
                      {exp.company}
                    </a>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Chevron indicator */}
          <div className="text-gray-muted mt-2 flex justify-center">
            <motion.svg
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </motion.svg>
          </div>
        </div>
      </motion.div>
    </li>
  );
}

function ListView() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-4"
    >
      {experiences.map((exp, index) => (
        <motion.div
          key={exp.company + exp.startDate}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ delay: index * 0.08 }}
          className="border-gray-subtle bg-dark-card hover:border-electric-blue/20 rounded-xl border p-4 transition-all"
        >
          <div className="flex items-start gap-3">
            <div className="bg-electric-blue/10 text-electric-blue flex h-10 w-10 shrink-0 items-center justify-center rounded-lg font-mono text-sm font-bold">
              {exp.monogram}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-off-white text-base font-semibold">
                  {exp.title}
                </h3>
                <span className="text-gray-muted text-sm">{exp.company}</span>
                <span className="text-gray-muted">·</span>
                <span className="text-gray-muted font-mono text-xs">
                  {exp.duration}
                </span>
              </div>
              <p className="text-gray-muted mt-0.5 text-sm">
                {exp.startDate} — {exp.endDate} · {exp.location} ·{" "}
                {exp.workMode}
              </p>
              <div className="mt-2 flex flex-wrap gap-1">
                {exp.tags.map((tag) => (
                  <ExperienceTag key={tag} tag={tag} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

/* ── main component ── */

export default function Experience() {
  const [viewMode, setViewMode] = useState<"timeline" | "list">("timeline");
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useRef(
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false,
  );

  // Scroll-driven line fill — scoped to this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 100px", "end -100px"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const isPresent = experiences.some((e) => e.endDate === "Present");

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative z-10 px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <h2 className="text-electric-blue font-mono text-sm tracking-widest uppercase">
              Relevant Experience
            </h2>
            {isPresent && (
              <p className="text-gray-muted mt-1 flex items-center gap-1.5 text-base">
                <span className="relative flex h-2 w-2">
                  <span className="bg-electric-blue absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
                  <span className="bg-electric-blue relative inline-flex h-2 w-2 rounded-full" />
                </span>
                Looking for work
              </p>
            )}
          </div>

          {/* View toggle */}
          <div className="border-gray-subtle bg-near-black flex rounded-lg border p-0.5">
            <button
              onClick={() => setViewMode("timeline")}
              className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition-all ${
                viewMode === "timeline"
                  ? "bg-electric-blue/10 text-electric-blue shadow-sm"
                  : "text-gray-muted hover:text-off-white"
              }`}
              aria-label="Timeline view"
            >
              <Columns size={14} />
              Timeline
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition-all ${
                viewMode === "list"
                  ? "bg-electric-blue/10 text-electric-blue shadow-sm"
                  : "text-gray-muted hover:text-off-white"
              }`}
              aria-label="List view"
            >
              <List size={14} />
              List
            </button>
          </div>
        </motion.div>

        {/* Content */}
        <div className="relative mt-12">
          <AnimatePresence mode="wait">
            {viewMode === "timeline" ? (
              <motion.div
                key="timeline"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Semantic list structure for accessibility */}
                <ol className="relative" aria-label="Work experience timeline">
                  {/* Vertical line (desktop only) */}
                  {!prefersReducedMotion.current && (
                    <div className="absolute top-0 bottom-0 left-[15px] hidden md:left-1/2 md:block md:-translate-x-px">
                      {/* Track line */}
                      <div className="bg-gray-subtle absolute inset-0 w-px" />
                      {/* Animated fill line */}
                      <motion.div
                        className="bg-electric-blue absolute top-0 left-0 w-px origin-top"
                        style={{ scaleY: lineScale }}
                      />
                    </div>
                  )}

                  {/* Desktop: simple non-animated line for reduced motion or fallback */}
                  {prefersReducedMotion.current && (
                    <div className="absolute top-0 bottom-0 left-[15px] hidden md:left-1/2 md:block md:-translate-x-px">
                      <div className="bg-electric-blue/40 absolute inset-0 w-px" />
                    </div>
                  )}

                  {/* Nodes */}
                  {experiences.map((exp, i) => (
                    <motion.div
                      key={exp.company + exp.startDate}
                      className="relative"
                    >
                      {/* Timeline node dot */}
                      <div className="absolute top-6 left-0 z-10 hidden md:left-1/2 md:block md:-translate-x-1/2">
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: true, margin: "-60px" }}
                          transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 15,
                            delay: i * 0.1,
                          }}
                          className={`relative flex h-4 w-4 items-center justify-center rounded-full border-2 transition-colors duration-500 ${
                            i === 0 && exp.endDate === "Present"
                              ? "border-electric-blue bg-electric-blue shadow-[0_0_12px_#00d4ff]"
                              : "border-gray-muted bg-dark-card"
                          }`}
                        >
                          {/* Pulse ring on first appearance */}
                          <motion.div
                            initial={{ scale: 0.8, opacity: 0.6 }}
                            whileInView={{ scale: 2, opacity: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.1 + 0.3 }}
                            className="border-electric-blue absolute inset-0 rounded-full border"
                          />
                        </motion.div>
                      </div>

                      {/* Card wrapper */}
                      <ExperienceNode exp={exp} index={i} />
                    </motion.div>
                  ))}
                </ol>
              </motion.div>
            ) : (
              <motion.div
                key="list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ListView />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
