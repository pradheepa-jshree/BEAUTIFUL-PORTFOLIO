import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-14 px-4 bg-card border-t border-border mt-12">

      {/* Centered content */}
      <div className="flex flex-col items-center justify-center gap-3 text-center">

        {/* Text + star */}
        <div className="flex items-center gap-2 text-sm md:text-base text-foreground/60">
          <span className="text-primary text-glow">✦</span>
          <p className="text-glow">
            Learning. Building. Improving.
          </p>
        </div>

        {/* Arrow BELOW text */}
        <a
          href="#hero"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        >
          <ArrowUp size={20} />
        </a>

        {/* Copyright */}
        <p className="text-xs text-foreground/40 mt-2">
          © {new Date().getFullYear()} Pradheepa Jayashree
        </p>

      </div>
    </footer>
  );
};
