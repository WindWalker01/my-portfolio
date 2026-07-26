import { GitBranch, Link, MessageCircle, Heart } from "lucide-react";
import { personal } from "../data/portfolio";

const socialLinks = [
  { icon: GitBranch, href: personal.social.github, label: "GitHub" },
  { icon: Link, href: personal.social.linkedin, label: "LinkedIn" },
  { icon: MessageCircle, href: personal.social.twitter, label: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="border-gray-subtle/50 relative z-10 border-t px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 md:flex-row">
        {/* Social links */}
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="border-gray-subtle text-gray-muted hover:border-electric-blue/40 hover:text-electric-blue flex h-10 w-10 items-center justify-center rounded-lg border transition-all hover:shadow-[0_0_12px_-4px_#00d4ff]"
            >
              <link.icon size={18} />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-gray-muted text-center text-sm">
          &copy; {new Date().getFullYear()} {personal.name}. All rights
          reserved.
        </p>

        {/* Built with */}
        <p className="text-gray-muted inline-flex items-center gap-1 text-sm">
          Built with
          <Heart size={12} className="text-electric-blue" />
          using React + Tailwind + R3F
        </p>
      </div>
    </footer>
  );
}
