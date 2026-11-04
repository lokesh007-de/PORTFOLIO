import React, { useState } from 'react';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import { Project, PROJECTS } from '../data/projects';

interface FolioIndexTableProps {
  onSelectProject: (project: Project) => void;
}

export default function FolioIndexTable({ onSelectProject }: FolioIndexTableProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="w-full border-t border-b border-[#DDD0BE]">
      <div className="hidden sm:grid grid-cols-12 gap-4 py-3 text-xs font-mono text-[#948A80] border-b border-[#DDD0BE]/80 uppercase tracking-wider">
        <div className="col-span-1">No.</div>
        <div className="col-span-4">Folio Subject</div>
        <div className="col-span-4">Competency & Stack</div>
        <div className="col-span-1 text-center">Era</div>
        <div className="col-span-2 text-right">Repository</div>
      </div>

      <div className="divide-y divide-[#DDD0BE]">
        {PROJECTS.map((p) => {
          const isHovered = hoveredId === p.id;
          const githubUrl = p.hasGithub && p.repoName
            ? `https://github.com/lokesh007-de/${p.repoName}`
            : null;

          return (
            <div
              key={p.id}
              onMouseEnter={() => setHoveredId(p.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => onSelectProject(p)}
              className={`group cursor-pointer grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 py-4 sm:py-5 px-2 -mx-2 rounded transition-colors ${
                isHovered ? 'bg-[#EADECF]/60' : 'hover:bg-[#EADECF]/30'
              }`}
            >
              {/* Index */}
              <div className="sm:col-span-1 font-mono text-xs text-[#948A80] flex items-center">
                <span>{p.index}</span>
              </div>

              {/* Title & Subtitle */}
              <div className="sm:col-span-4 flex items-center gap-3">
                {/* Micro arched thumbnail on hover */}
                <div
                  className={`hidden lg:flex w-9 h-11 shrink-0 arch-top border border-[#DDD0BE] items-center justify-center transition-all ${
                    isHovered
                      ? 'scale-105 border-[#B5573A] bg-[#B5573A]/10 text-[#B5573A]'
                      : 'bg-[#F5EEE3] text-[#948A80]'
                  }`}
                >
                  <span className="font-mono text-[9px]">{p.index}</span>
                </div>

                <div>
                  <h4 className="font-serif text-lg text-[#2B2520] group-hover:text-[#B5573A] transition-colors leading-tight">
                    {p.title}
                  </h4>
                  <p className="font-serif italic text-xs text-[#635B54]">
                    {p.subtitle}
                  </p>
                </div>
              </div>

              {/* Tech stack chips */}
              <div className="sm:col-span-4 flex flex-wrap items-center gap-1.5 py-1">
                {p.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-[10px] font-mono rounded-full bg-[#6B7A5A]/12 text-[#546345] border border-[#6B7A5A]/25"
                  >
                    {tech}
                  </span>
                ))}
                {p.technologies.length > 3 && (
                  <span className="text-[10px] font-mono text-[#948A80]">
                    +{p.technologies.length - 3}
                  </span>
                )}
              </div>

              {/* Year */}
              <div className="sm:col-span-1 flex items-center sm:justify-center font-mono text-xs text-[#635B54]">
                <span>{p.year}</span>
              </div>

              {/* Repository link */}
              <div className="sm:col-span-2 flex items-center sm:justify-end gap-2">
                {githubUrl ? (
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    aria-label={`Open ${p.title} repository`}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded bg-[#F5EEE3] text-[#2B2520] border border-[#DDD0BE] hover:bg-[#B5573A] hover:text-[#F5EEE3] hover:border-[#B5573A] transition-colors"
                  >
                    <Github className="w-3 h-3" />
                    <span>Repo</span>
                    <ArrowUpRight className="w-2.5 h-2.5" />
                  </a>
                ) : (
                  <span className="text-xs font-mono text-[#948A80]">—</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
