import React from 'react';
import { Github, Linkedin, FileDown, Code2, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#EADECF] border-t border-[#DDD0BE] pt-14 pb-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Identity & Aesthetic Mission */}
          <div className="md:col-span-5 space-y-3">
            <h3 className="font-serif text-2xl text-[#2B2520]">
              Lokesh Kumar
            </h3>
            <p className="font-serif italic text-sm text-[#635B54] max-w-sm">
              Architectural software engineering, tactile web interfaces, and thoughtful open source craftsmanship.
            </p>
            <p className="font-mono text-xs text-[#948A80]">
              Designed in the Warm Editorial Atelier discipline.
            </p>
          </div>

          {/* Quick Folio Links */}
          <div className="md:col-span-3 space-y-2 font-mono text-xs text-[#635B54]">
            <span className="block font-semibold text-[#2B2520] uppercase tracking-wider mb-2">
              Folio Directory
            </span>
            <div><a href="#exhibits" className="hover:text-[#B5573A] transition-colors">Selected Exhibits</a></div>
            <div><a href="#disciplines" className="hover:text-[#B5573A] transition-colors">Engineering Disciplines</a></div>
            <div><a href="#case-index" className="hover:text-[#B5573A] transition-colors">Folio Index</a></div>
            <div><a href="#contact" className="hover:text-[#B5573A] transition-colors">Correspondence</a></div>
          </div>

          {/* Profiles & Actions */}
          <div className="md:col-span-4 space-y-3">
            <span className="block font-mono text-xs font-semibold text-[#2B2520] uppercase tracking-wider mb-2">
              Repositories & Actions
            </span>

            <div className="flex flex-wrap gap-2.5">
              {/* Working View Source Button */}
              <a
                href="https://github.com/lokesh007-de/PORTFOLIO"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded bg-[#F5EEE3] text-[#2B2520] border border-[#DDD0BE] hover:border-[#B5573A] hover:text-[#B5573A] transition-colors font-mono text-xs shadow-xs"
              >
                <Code2 className="w-3.5 h-3.5 text-[#B5573A]" />
                <span>View Source</span>
              </a>

              {/* Working Download Resume Button */}
              <a
                href="/resume.pdf"
                download="Lokesh_Kumar_Resume.pdf"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded bg-[#B5573A] text-[#F5EEE3] hover:bg-[#964025] transition-colors font-mono text-xs shadow-xs font-medium"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>Download Resume</span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/lokesh007-de"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded bg-[#F5EEE3] text-[#2B2520] border border-[#DDD0BE] hover:border-[#6B7A5A] hover:text-[#546345] transition-colors font-mono text-xs shadow-xs"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/lokesh-kumar-4a0a15248"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded bg-[#F5EEE3] text-[#2B2520] border border-[#DDD0BE] hover:border-[#546345] hover:text-[#546345] transition-colors font-mono text-xs shadow-xs"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Colophon Bar */}
        <div className="pt-8 border-t border-[#DDD0BE] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#948A80]">
          <div>
            <span>© {new Date().getFullYear()} Lokesh Kumar. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[#6B7A5A]">• 60fps clay rendering</span>
            <span className="text-[#B5573A]">• Pure code & craft</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-[#2B2520] hover:text-[#B5573A] transition-colors"
            >
              <span>Ascend</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
