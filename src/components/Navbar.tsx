import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useActiveSection } from "../hooks/useActiveSection";
import { personal } from "../data/portfolio";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useActiveSection();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleNavClick(
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  }

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-near-black/80 shadow-lg shadow-black/20 backdrop-blur-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="text-electric-blue hover:text-electric-blue/80 font-mono text-lg font-semibold transition-colors"
        >
          ruzzel.dev
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative text-base font-medium tracking-wide transition-colors ${
                  active === item.href.replace("#", "")
                    ? "text-electric-blue"
                    : "text-gray-light hover:text-off-white"
                }`}
              >
                {item.label}
                {active === item.href.replace("#", "") && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="bg-electric-blue absolute right-0 -bottom-1 left-0 h-0.5 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            </li>
          ))}
          <li>
            <a
              href={personal.resumePath}
              download
              className="border-electric-blue/40 bg-electric-blue/10 text-electric-blue hover:bg-electric-blue/20 rounded-full border px-4 py-2 text-base font-medium transition-all hover:shadow-[0_0_20px_-4px_#00d4ff]"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          aria-label="Toggle menu"
          className="text-off-white relative z-50 md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="bg-near-black/95 fixed inset-0 z-40 flex flex-col items-center justify-start gap-6 overflow-y-auto px-6 pt-24 pb-8 backdrop-blur-xl md:hidden"
          >
            {NAV_ITEMS.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="text-off-white hover:text-electric-blue text-2xl font-medium transition-colors"
              >
                {item.label}
              </motion.a>
            ))}
            <motion.a
              href={personal.resumePath}
              download
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: NAV_ITEMS.length * 0.08 }}
              className="border-electric-blue/40 bg-electric-blue/10 text-electric-blue mt-4 rounded-full border px-6 py-3 text-lg font-medium"
            >
              Download Resume
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
