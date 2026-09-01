import React from "react";
import { Linkedin, Instagram, Mail } from "lucide-react";

export default function SiteChrome({ children }) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-teal-500/30">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
        <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a
            href="/"
            className="text-sm font-black tracking-tight text-white hover:opacity-60 transition-opacity uppercase"
          >
            Mobo Abayomi
          </a>

          <div className="flex items-center gap-10">
            <div className="hidden md:flex items-center gap-8 text-[10px] font-medium tracking-[0.3em] uppercase">
              <a
                href="/"
                className="text-white/60 hover:opacity-60 transition-opacity"
              >
                Home
              </a>
              <a
                href="/moodboard"
                className="text-white/60 hover:opacity-60 transition-opacity"
              >
                Moodboard
              </a>
            </div>

            <div className="flex items-center gap-4 border-l border-white/10 pl-6">
              <a
                href="https://linkedin.com/in/moboa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="text-white/40 hover:opacity-60 transition-opacity"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://instagram.com/notmobo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Moodboard on Instagram, @notmobo"
                title="Moodboard — @notmobo"
                className="text-white/40 hover:opacity-60 transition-opacity"
              >
                <Instagram size={16} />
              </a>
              <a
                href="mailto:mobo.abayomi@gmail.com"
                className="text-[10px] font-bold text-white/60 hover:opacity-60 transition-opacity flex items-center gap-1 uppercase tracking-[0.2em]"
              >
                <Mail size={14} />
                <span className="hidden sm:inline">Email</span>
              </a>
            </div>
          </div>
        </nav>
      </header>

      <main className="pt-20">{children}</main>

      <footer className="py-24 border-t border-white/5 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xs text-white/30 uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} Mobo Abayomi.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            <a
              href="https://linkedin.com/in/moboa"
              className="text-[10px] text-white/30 hover:opacity-60 transition-opacity uppercase tracking-[0.2em]"
            >
              LinkedIn
            </a>
            <a
              href="https://instagram.com/mobo.abayomi"
              className="text-[10px] text-white/30 hover:opacity-60 transition-opacity uppercase tracking-[0.2em]"
            >
              Instagram — @mobo.abayomi
            </a>
            <a
              href="https://instagram.com/notmobo"
              className="text-[10px] text-white/30 hover:opacity-60 transition-opacity uppercase tracking-[0.2em]"
            >
              Moodboard — @notmobo
            </a>
          </div>
          <div className="text-[10px] text-white/20 uppercase tracking-[0.2em]">
            Made by Mobo :)
          </div>
        </div>
      </footer>
    </div>
  );
}
