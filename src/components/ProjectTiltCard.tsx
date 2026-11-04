import React, { useRef, useState } from 'react';
import { Github, ExternalLink, Sparkles, Layers, ArrowRight } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectTiltCardProps {
  project: Project;
  reducedMotion: boolean;
  onOpenDetails: (project: Project) => void;
}

export default function ProjectTiltCard({
  project,
  reducedMotion,
  onOpenDetails,
}: ProjectTiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotX, setRotX] = useState(0);
  const [rotY, setRotY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const normX = (x / rect.width - 0.5) * 2; // -1 to 1
    const normY = (y / rect.height - 0.5) * 2; // -1 to 1

    // Subtle 3D tilt (under 8 degrees max for refined tactile feel)
    setRotX(-normY * 6);
    setRotY(normX * 6);
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.12,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotX(0);
    setRotY(0);
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  const githubUrl = project.hasGithub && project.repoName
    ? `https://github.com/lokesh007-de/${project.repoName}`
    : null;

  return (
    <div
      style={{ perspective: '1100px' }}
      className="h-full flex flex-col"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: reducedMotion
            ? 'none'
            : `rotateX(${rotX}deg) rotateY(${rotY}deg) ${isHovered ? 'scale3d(1.015, 1.015, 1.015)' : 'scale3d(1, 1, 1)'}`,
          transition: isHovered
            ? 'transform 0.12s ease-out, box-shadow 0.25s ease-out, border-color 0.25s ease-out'
            : 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.4s ease-out, border-color 0.4s ease-out',
        }}
        className={`relative flex flex-col justify-between h-full rounded-lg bg-[#EADECF] border transition-colors p-6 sm:p-7 shadow-clay-subtle hover:shadow-clay-elevated ${
          isHovered ? 'border-[#B5573A]' : 'border-[#DDD0BE]'
        }`}
      >
        {/* Subtle dynamic clay sheen glare */}
        {!reducedMotion && (
          <div
            className="pointer-events-none absolute inset-0 rounded-lg transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, ${glarePos.opacity}), transparent 65%)`,
            }}
          />
        )}

        <div>
          {/* Card Top Metadata & Arched Frame */}
          <div className="flex items-center justify-between mb-5 border-b border-[#DDD0BE]/80 pb-3">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-semibold tracking-wider text-[#948A80]">
                CHAPTER {project.index}
              </span>
              <span className="text-xs text-[#DDD0BE]">•</span>
              <span className="font-mono text-xs text-[#635B54]">
                {project.year}
              </span>
            </div>

            <span
              className="px-2.5 py-0.5 rounded-full text-[11px] font-medium border font-mono tracking-tight"
              style={{
                backgroundColor: `${project.visualTheme.accentColor}14`,
                borderColor: `${project.visualTheme.accentColor}35`,
                color: project.visualTheme.accentColor,
              }}
            >
              {project.visualTheme.badgeText}
            </span>
          </div>

          {/* Arched Architectural Preview Frame */}
          <div
            onClick={() => onOpenDetails(project)}
            className="cursor-pointer group/preview relative overflow-hidden arch-top w-full h-44 mb-6 border border-[#DDD0BE] bg-[#F5EEE3] flex flex-col justify-between p-4 transition-transform duration-300 hover:border-[#B5573A]"
          >
            {/* Soft decorative clay geometry background pattern */}
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#DDD0BE_1px,transparent_1px)] [background-size:16px_16px]" />

            <div className="relative z-10 flex justify-between items-start">
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#948A80] px-2 py-0.5 rounded bg-[#EADECF]/90 border border-[#DDD0BE]">
                {project.category}
              </span>
              <div className="w-8 h-8 rounded-full bg-[#EADECF] border border-[#DDD0BE] flex items-center justify-center text-[#635B54] group-hover/preview:bg-[#B5573A] group-hover/preview:text-[#F5EEE3] group-hover/preview:border-[#B5573A] transition-colors">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Visual Subject Representation */}
            <div className="relative z-10 my-auto text-center py-2">
              <div
                className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-1 shadow-sm transition-transform duration-300 group-hover/preview:scale-110"
                style={{ backgroundColor: `${project.visualTheme.accentColor}20` }}
              >
                <Layers
                  className="w-6 h-6"
                  style={{ color: project.visualTheme.accentColor }}
                />
              </div>
              <p className="font-serif italic text-sm text-[#635B54]">
                {project.subtitle}
              </p>
            </div>

            <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-[#948A80] pt-2 border-t border-[#DDD0BE]/60">
              <span>ARCHITECTURAL FOLIO</span>
              <span>INSPECT ARCHITECTURE</span>
            </div>
          </div>

          {/* Title & Description */}
          <h3
            onClick={() => onOpenDetails(project)}
            className="cursor-pointer font-serif text-2xl font-normal text-[#2B2520] mb-2 hover:text-[#B5573A] transition-colors"
          >
            {project.title}
          </h3>

          <p className="text-sm text-[#55423D] leading-relaxed mb-5">
            {project.description}
          </p>

          {/* Key Architectural Highlights */}
          <ul className="mb-6 space-y-1.5 text-xs text-[#635B54]">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-[#B5573A] mt-0.5">•</span>
                <span className="leading-snug">{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Card Footer: Tech Chips & Action Buttons */}
        <div>
          {/* Tech Stack Chips */}
          <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-[#DDD0BE]/70">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-[11px] font-mono rounded bg-[#E2D5C3] text-[#2B2520] border border-[#DDD0BE]"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Row */}
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={() => onOpenDetails(project)}
              className="inline-flex items-center gap-1.5 text-xs font-serif italic text-[#2B2520] hover:text-[#B5573A] transition-colors group/link"
            >
              <span>Examine Blueprint</span>
              <span className="text-[#B5573A] transition-transform group-hover/link:translate-x-1">→</span>
            </button>

            {/* GitHub button linking to repo if available */}
            {githubUrl ? (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on GitHub`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded bg-[#F5EEE3] text-[#2B2520] border border-[#DDD0BE] hover:bg-[#B5573A] hover:text-[#F5EEE3] hover:border-[#B5573A] transition-all shadow-sm"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
