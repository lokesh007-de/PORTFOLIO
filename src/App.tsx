import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  FileDown,
  Code2,
  Github,
  Linkedin,
  ArrowDown,
  Layers,
  Sparkles,
  Compass,
  Cpu,
  Boxes,
  CheckCircle2,
  Terminal,
} from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroClayWrapper from './components/HeroClayWrapper';
import ProjectTiltCard from './components/ProjectTiltCard';
import ProjectDetailModal from './components/ProjectDetailModal';
import CodeWorkbench from './components/CodeWorkbench';
import FolioIndexTable from './components/FolioIndexTable';
import ContactSection from './components/ContactSection';
import ParallaxBackground from './components/ParallaxBackground';
import { PROJECTS, Project } from './data/projects';
import { useLenis } from './hooks/useLenis';

export default function App() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string>('All');

  // Detect user preference for reduced motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Smooth Lenis scroll & progress
  const { scrollProgress } = useLenis(reducedMotion);

  // Filtered projects
  const filteredProjects = categoryFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === categoryFilter);

  const categories = ['All', 'Full-Stack', 'AI & Machine Learning', 'Systems & Tools', 'Creative Craft'];

  return (
    <div className="relative min-h-screen text-[#2B2520] selection:bg-[#B5573A]/20 selection:text-[#964025]">
      {/* Parallax Background Shapes & Paper Grain (Requirement 2) */}
      <ParallaxBackground scrollProgress={scrollProgress} reducedMotion={reducedMotion} />

      {/* Fixed Navbar with Thin Terracotta Scroll Progress Bar (Requirement 2 & Links) */}
      <Navbar scrollProgress={scrollProgress} />

      <main className="relative z-10 pt-24">
        {/* ========================================================================= */}
        {/* 1. HERO SECTION WITH 3D CLAY SCENE (Requirements 1 & 3)                  */}
        {/* ========================================================================= */}
        <section className="relative min-h-[92vh] flex items-center border-b border-[#DDD0BE]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 py-12 md:py-20 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Monograph Copy & Actions */}
              <motion.div
                initial={reducedMotion ? {} : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-7 space-y-6"
              >
                {/* Chapter & Status Pill */}
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-xs text-[#948A80] uppercase tracking-wider">
                    CHAPTER 01 / PROLOGUE
                  </span>
                  <span className="text-xs text-[#DDD0BE]">•</span>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#6B7A5A]/12 text-[#546345] border border-[#6B7A5A]/25 text-xs font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6B7A5A] animate-pulse" />
                    <span>Software Craftsperson</span>
                  </div>
                </div>

                {/* Primary Editorial Headline */}
                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-normal text-[#2B2520] tracking-tight leading-[1.08]">
                  Thoughtful Software Craft & Deliberate Architecture.
                </h1>

                {/* Editorial Deck / Subhead */}
                <p className="font-serif italic text-lg sm:text-xl text-[#635B54] max-w-xl leading-relaxed">
                  Building resilient systems, tactile user interfaces, and modular web architectures with an uncompromising standard of digital craft.
                </p>

                {/* Concise Engineering Ledger */}
                <div className="pt-2 pb-2">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#635B54]">
                    <span className="text-[#964025] font-semibold">CORE STACK:</span>
                    <span className="px-2 py-0.5 rounded bg-[#EADECF] border border-[#DDD0BE]">React</span>
                    <span className="px-2 py-0.5 rounded bg-[#EADECF] border border-[#DDD0BE]">TypeScript</span>
                    <span className="px-2 py-0.5 rounded bg-[#EADECF] border border-[#DDD0BE]">Three.js</span>
                    <span className="px-2 py-0.5 rounded bg-[#EADECF] border border-[#DDD0BE]">Node.js</span>
                    <span className="px-2 py-0.5 rounded bg-[#EADECF] border border-[#DDD0BE]">WebSockets</span>
                  </div>
                </div>

                {/* Primary Actions Row */}
                <div className="flex flex-wrap items-center gap-3.5 pt-4">
                  <a
                    href="#exhibits"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded bg-[#B5573A] text-[#F5EEE3] hover:bg-[#964025] transition-colors font-mono text-xs uppercase tracking-wider font-medium shadow-sm group"
                  >
                    <span>Explore Folio Works</span>
                    <ArrowDown className="w-3.5 h-3.5 text-[#F5EEE3] group-hover:translate-y-0.5 transition-transform" />
                  </a>

                  {/* Working Download Resume Button */}
                  <a
                    href="/resume.pdf"
                    download="Lokesh_Kumar_Resume.pdf"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded bg-[#EADECF] text-[#2B2520] border border-[#DDD0BE] hover:border-[#B5573A] hover:bg-[#EFE6D8] transition-colors font-mono text-xs uppercase tracking-wider shadow-xs"
                  >
                    <FileDown className="w-3.5 h-3.5 text-[#B5573A]" />
                    <span>Download Resume</span>
                  </a>

                  {/* View Source Button */}
                  <a
                    href="https://github.com/lokesh007-de/PORTFOLIO"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-3 rounded bg-[#F5EEE3] text-[#2B2520] border border-[#DDD0BE] hover:border-[#6B7A5A] transition-colors font-mono text-xs uppercase tracking-wider"
                  >
                    <Code2 className="w-3.5 h-3.5 text-[#6B7A5A]" />
                    <span>View Source</span>
                  </a>
                </div>
              </motion.div>

              {/* Right Column: Hero 3D Clay Scene (Requirements 1 & 3) */}
              <div className="lg:col-span-5 relative w-full h-[360px] sm:h-[420px] md:h-[480px] lg:h-[520px]">
                {/* 3D Scene Container */}
                <div className="w-full h-full relative rounded-2xl overflow-hidden border border-[#DDD0BE]/70 bg-[#EFE6D8]/40 shadow-clay-subtle">
                  <HeroClayWrapper
                    scrollProgress={scrollProgress}
                    reducedMotion={reducedMotion}
                  />

                  {/* Monograph caption */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[10px] font-mono text-[#948A80] pointer-events-none select-none border-t border-[#DDD0BE]/50 pt-2">
                    <span>FIG. 01 — SOFT MATTE CLAY STUDY</span>
                    <span className="hidden sm:inline">TERRACOTTA • SAGE • CREAM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. CURATED FOLIO EXHIBITS (Requirement 4: 3D Tilt Cards & Links)         */}
        {/* ========================================================================= */}
        <section id="exhibits" className="py-20 sm:py-28 max-w-7xl mx-auto px-5 sm:px-8">
          {/* Section Header */}
          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#DDD0BE] pb-8 gap-6"
          >
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#948A80] uppercase tracking-wider mb-2">
                <span>02 / SELECTED REPOSITORIES</span>
                <span>•</span>
                <span className="text-[#B5573A]">OPEN SOURCE FOLIO</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#2B2520]">
                Curated Works & Blueprints.
              </h2>
              <p className="font-serif italic text-base sm:text-lg text-[#635B54] mt-2 max-w-xl">
                A selection of architectural web applications, computation engines, and domain utilities.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategoryFilter(cat)}
                  className={`px-3 py-1.5 text-xs font-mono rounded-full border transition-all ${
                    categoryFilter === cat
                      ? 'bg-[#B5573A] text-[#F5EEE3] border-[#B5573A] shadow-xs'
                      : 'bg-[#EADECF] text-[#635B54] border-[#DDD0BE] hover:border-[#B5573A] hover:text-[#2B2520]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Staggered Grid of 3D Tilt Project Cards (Requirement 4) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={reducedMotion ? {} : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: reducedMotion ? 0 : idx * 0.08 }}
              >
                <ProjectTiltCard
                  project={project}
                  reducedMotion={reducedMotion}
                  onOpenDetails={(p) => setSelectedProject(p)}
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. ENGINEERING DISCIPLINES & CODE WORKBENCH                               */}
        {/* ========================================================================= */}
        <section id="disciplines" className="py-20 sm:py-24 bg-[#EFE6D8]/60 border-t border-b border-[#DDD0BE]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <motion.div
              initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-14"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-[#948A80] uppercase tracking-wider mb-2">
                <span>03 / TECHNICAL DISCIPLINES</span>
                <span>•</span>
                <span className="text-[#6B7A5A]">ENGINEERING PARADIGMS</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#2B2520]">
                Deliberate Engineering Architecture.
              </h2>
              <p className="font-serif italic text-base sm:text-lg text-[#635B54] mt-2 max-w-2xl">
                Technical standards founded on robust modularity, mathematical rigor, and tactile user experience.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Disciplines Columns */}
              <div className="lg:col-span-5 space-y-4">
                <div className="p-6 rounded-lg bg-[#EADECF] border border-[#DDD0BE] shadow-clay-subtle">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded bg-[#B5573A]/15 text-[#B5573A]">
                      <Compass className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-xl text-[#2B2520]">
                      Frontend Craft & Tactile WebGL
                    </h3>
                  </div>
                  <p className="text-sm text-[#55423D] leading-relaxed">
                    Composing responsive interfaces with semantic typography, custom WebGL/Three.js shaders, and smooth 60fps frame budgets. Respecting reduced motion and accessibility constraints by default.
                  </p>
                </div>

                <div className="p-6 rounded-lg bg-[#EADECF] border border-[#DDD0BE] shadow-clay-subtle">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded bg-[#6B7A5A]/15 text-[#6B7A5A]">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-xl text-[#2B2520]">
                      Realtime Systems & Data Pipelines
                    </h3>
                  </div>
                  <p className="text-sm text-[#55423D] leading-relaxed">
                    Engineering event-driven WebSocket architectures, state reconciliation algorithms, and abstract syntax tree parsers with deterministic error boundaries.
                  </p>
                </div>

                <div className="p-6 rounded-lg bg-[#EADECF] border border-[#DDD0BE] shadow-clay-subtle">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded bg-[#7C7162]/15 text-[#7C7162]">
                      <Boxes className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-xl text-[#2B2520]">
                      Architectural Restraint & Maintainability
                    </h3>
                  </div>
                  <p className="text-sm text-[#55423D] leading-relaxed">
                    Rejecting arbitrary dependencies and visual fluff. Writing clean, expressive TypeScript with comprehensive interfaces, testable domain layers, and zero-compromise documentation.
                  </p>
                </div>
              </div>

              {/* Code Workbench */}
              <div className="lg:col-span-7">
                <div className="mb-3 flex items-center justify-between text-xs font-mono text-[#948A80]">
                  <span>INTERACTIVE CODE WORKBENCH</span>
                  <span>TYPESCRIPT SPECIFICATION</span>
                </div>
                <CodeWorkbench />
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. FOLIO CASE INDEX TABLE                                                 */}
        {/* ========================================================================= */}
        <section id="case-index" className="py-20 sm:py-24 max-w-7xl mx-auto px-5 sm:px-8">
          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <div className="flex items-center gap-2 text-xs font-mono text-[#948A80] uppercase tracking-wider mb-2">
              <span>FOLIO CATALOGUE</span>
              <span>•</span>
              <span className="text-[#964025]">COMPLETE REPOSITORY INDEX</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#2B2520]">
              Chronological Project Ledger.
            </h2>
            <p className="font-serif italic text-base sm:text-lg text-[#635B54] mt-2">
              Architectural index of all 7 open-source repositories and experimental systems.
            </p>
          </motion.div>

          <FolioIndexTable onSelectProject={(p) => setSelectedProject(p)} />
        </section>

        {/* ========================================================================= */}
        {/* 5. CONTACT & CORRESPONDENCE SECTION                                      */}
        {/* ========================================================================= */}
        <ContactSection />
      </main>

      {/* Footer with View Source, Download Resume, and Profile Links */}
      <Footer />

      {/* Project Architectural Blueprint Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}