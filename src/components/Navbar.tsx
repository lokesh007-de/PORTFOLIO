import React, { useState, useEffect } from 'react';
import { Github, Linkedin, FileDown, Menu, X, Code2 } from 'lucide-react';

interface NavbarProps {
  scrollProgress: number;
}

export default function Navbar({ scrollProgress }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* 1. Thin Terracotta Scroll Progress Bar at the very top (Requirement 2) */}
      <div
        className="fixed top-0 left-0 right-0 h-[3px] bg-[#B5573A] z-50 origin-left transition-transform duration-75"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />

      {/* Main Masthead / Nav */}
      <header
        className={`fixed top-[3px] left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#F5EEE3]/90 backdrop-blur-md border-b border-[#DDD0BE]/80 shadow-clay-subtle py-3.5'
            : 'bg-transparent py-5 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Masthead Identity */}
          <a href="#" className="group flex flex-col">
            <span className="font-serif text-xl sm:text-2xl font-normal tracking-tight text-[#2B2520] group-hover:text-[#B5573A] transition-colors">
              Lokesh Kumar
            </span>
            <span className="font-mono text-[10px] tracking-widest uppercase text-[#948A80]">
              Software Craftsperson • Atelier Edition
            </span>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-mono tracking-wider uppercase text-[#635B54]">
            <a
              href="#exhibits"
              className="hover:text-[#B5573A] transition-colors"
            >
              Exhibits
            </a>
            <a
              href="#disciplines"
              className="hover:text-[#B5573A] transition-colors"
            >
              Disciplines
            </a>
            <a
              href="#case-index"
              className="hover:text-[#B5573A] transition-colors"
            >
              Folio Index
            </a>
            <a
              href="#contact"
              className="hover:text-[#B5573A] transition-colors"
            >
              Correspondence
            </a>
          </nav>

          {/* Right Action Icons & Working Download Resume Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://github.com/lokesh007-de"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Lokesh Kumar GitHub profile"
              className="p-2 rounded-full border border-[#DDD0BE] bg-[#EADECF]/60 text-[#2B2520] hover:text-[#B5573A] hover:border-[#B5573A] transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href="https://www.linkedin.com/in/lokesh-kumar-4a0a15248"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Lokesh Kumar LinkedIn profile"
              className="p-2 rounded-full border border-[#DDD0BE] bg-[#EADECF]/60 text-[#2B2520] hover:text-[#546345] hover:border-[#546345] transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            {/* Working Download Resume Button */}
            <a
              href="/resume.pdf"
              download="Lokesh_Kumar_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-[#B5573A] text-[#F5EEE3] hover:bg-[#964025] transition-colors font-mono text-xs uppercase tracking-wider shadow-sm font-medium"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded border border-[#DDD0BE] bg-[#EADECF] text-[#2B2520]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-[#DDD0BE] bg-[#F5EEE3] px-6 py-6 space-y-4 shadow-lg">
            <nav className="flex flex-col space-y-3 font-mono text-xs uppercase tracking-wider text-[#635B54]">
              <a
                href="#exhibits"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#B5573A] py-1"
              >
                01 / Exhibits
              </a>
              <a
                href="#disciplines"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#B5573A] py-1"
              >
                02 / Disciplines
              </a>
              <a
                href="#case-index"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#B5573A] py-1"
              >
                03 / Folio Index
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#B5573A] py-1"
              >
                04 / Correspondence
              </a>
            </nav>

            <div className="pt-4 border-t border-[#DDD0BE] flex flex-col gap-2.5">
              <a
                href="/resume.pdf"
                download="Lokesh_Kumar_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded bg-[#B5573A] text-[#F5EEE3] font-mono text-xs uppercase font-medium"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>

              <div className="flex gap-2 pt-1">
                <a
                  href="https://github.com/lokesh007-de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded bg-[#EADECF] border border-[#DDD0BE] text-xs font-mono text-[#2B2520]"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/lokesh-kumar-4a0a15248"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded bg-[#EADECF] border border-[#DDD0BE] text-xs font-mono text-[#2B2520]"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
