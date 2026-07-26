import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUp, Heart } from "lucide-react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { personal } from "../data/portfolio";

const socialLinks = [
  { icon: FaGithub, href: personal.social.github, label: "GitHub" },
  { icon: FaLinkedin, href: personal.social.linkedin, label: "LinkedIn" },
  { icon: FaFacebook, href: personal.social.facebook, label: "Facebook" },
];

const quickLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const stagger = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.5, ease: "easeOut" as const },
  }),
} as const;

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 600);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <motion.button
      initial={false}
      animate={
        visible
          ? { opacity: 1, scale: 1, pointerEvents: "auto" as const }
          : { opacity: 0, scale: 0.8, pointerEvents: "none" as const }
      }
      transition={{ duration: 0.3, ease: "easeInOut" }}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="bg-electric-blue/10 border-electric-blue/40 hover:bg-electric-blue/20 text-electric-blue fixed right-6 bottom-6 z-20 flex h-11 w-11 items-center justify-center rounded-full border backdrop-blur-sm transition-shadow hover:shadow-[0_0_20px_-4px_#00d4ff]"
    >
      <ArrowUp size={18} />
    </motion.button>
  );
}

export default function Footer() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <ScrollToTop />

      <footer className="relative z-10 overflow-hidden border-t border-transparent px-6 pt-16 pb-8">
        {/* ─── Animated gradient top border ─── */}
        <div
          className="absolute top-0 left-0 h-[2px] w-full opacity-70"
          style={{
            background:
              "linear-gradient(90deg, transparent, #00d4ff, #a855f7, #00d4ff, transparent)",
            backgroundSize: "200% 100%",
            animation: "gradient-border 4s linear infinite",
          }}
        />

        {/* ─── Keyframes injected once ─── */}
        {mounted && (
          <style>{`
            @keyframes gradient-border {
              0% { background-position: 0% 0; }
              100% { background-position: 200% 0; }
            }
            @keyframes pulse-dot {
              0%, 100% { opacity: 1; }
              50% { opacity: 0.3; }
            }
          `}</style>
        )}

        <div className="mx-auto grid max-w-5xl gap-10 sm:grid-cols-2 md:grid-cols-3">
          {/* ─── Column 1 — Brand ─── */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 24 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: "easeOut" },
              },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            className="flex flex-col gap-3"
          >
            <div className="flex items-center gap-2.5">
              <span className="font-mono text-xl font-semibold text-white">
                {personal.name.split(" ")[0]}.dev
              </span>
              <span
                className="inline-block h-2 w-2 rounded-full bg-emerald-400"
                style={{ animation: "pulse-dot 2s ease-in-out infinite" }}
              />
            </div>
            <p className="text-gray-light max-w-xs text-sm leading-relaxed">
              {personal.tagline}
            </p>
          </motion.div>

          {/* ─── Column 2 — Quick Links ─── */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            className="flex flex-col gap-3"
          >
            <h3 className="text-gray-muted text-xs font-semibold tracking-widest uppercase">
              Navigation
            </h3>
            <ul className="flex flex-col gap-1.5">
              {quickLinks.map((item, i) => (
                <motion.li
                  key={item.href}
                  custom={i}
                  variants={stagger}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-40px" }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const id = item.href.replace("#", "");
                      const el = document.getElementById(id);
                      if (el) {
                        el.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="text-gray-muted hover:text-electric-blue group inline-flex items-center gap-1.5 text-sm transition-colors"
                  >
                    <span className="bg-electric-blue h-px w-0 transition-all duration-300 group-hover:w-3" />
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* ─── Column 3 — Social ─── */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            className="flex flex-col gap-3"
          >
            <h3 className="text-gray-muted text-xs font-semibold tracking-widest uppercase">
              Connect
            </h3>
            <div className="flex items-center gap-3">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  custom={i}
                  variants={stagger}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-40px" }}
                  whileHover={{ scale: 1.1 }}
                  className="border-gray-subtle text-gray-muted hover:border-electric-blue/40 hover:text-electric-blue flex h-10 w-10 items-center justify-center rounded-lg border transition-all hover:shadow-[0_0_14px_-4px_#00d4ff]"
                >
                  <link.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ─── Bottom bar ─── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="border-gray-subtle/50 text-gray-muted mx-auto mt-12 flex max-w-5xl flex-col items-center justify-between gap-2 border-t pt-6 text-center text-xs sm:flex-row sm:text-left"
        >
          <p>
            &copy; {new Date().getFullYear()} {personal.name}. All rights
            reserved.
          </p>
          <p className="inline-flex items-center gap-1">
            Built with
            <Heart size={10} className="text-electric-blue" />
            using React + Tailwind + R3F
          </p>
        </motion.div>
      </footer>
    </>
  );
}
