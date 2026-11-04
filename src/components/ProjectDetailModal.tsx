import React from 'react';
import { X, Github, ExternalLink, Code2, CheckCircle2, Terminal } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  if (!project) return null;

  const githubUrl = project.hasGithub && project.repoName
    ? `https://github.com/lokesh007-de/${project.repoName}`
    : null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#2B2520]/50 backdrop-blur-xs transition-opacity"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#F5EEE3] rounded-lg border border-[#DDD0BE] shadow-2xl p-6 sm:p-8 my-8 text-[#2B2520] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full border border-[#DDD0BE] bg-[#EADECF] text-[#635B54] hover:text-[#B5573A] hover:border-[#B5573A] transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header Metadata */}
        <div className="flex items-center gap-3 text-xs font-mono text-[#948A80] mb-3">
          <span>CHAPTER {project.index}</span>
          <span>•</span>
          <span>FOLIO CATALOG {project.year}</span>
          <span>•</span>
          <span className="text-[#6B7A5A] font-semibold">{project.category}</span>
        </div>

        {/* Title & Deck */}
        <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#2B2520] mb-2">
          {project.title}
        </h2>
        <p className="font-serif italic text-lg text-[#635B54] mb-6">
          {project.subtitle}
        </p>

        {/* Divider */}
        <div className="h-px bg-[#DDD0BE] w-full mb-6" />

        {/* Architectural Overview */}
        <div className="mb-6">
          <h4 className="font-mono text-xs uppercase tracking-wider text-[#948A80] mb-2">
            System Abstract
          </h4>
          <p className="text-sm leading-relaxed text-[#55423D]">
            {project.description}
          </p>
        </div>

        {/* Architectural Rationale & Engineering Notes */}
        {project.architectureNotes && (
          <div className="mb-6 p-4 rounded bg-[#EADECF] border border-[#DDD0BE]">
            <h4 className="font-mono text-xs uppercase tracking-wider text-[#964025] mb-2 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5" />
              <span>Architectural Blueprint & Rationale</span>
            </h4>
            <p className="text-xs leading-relaxed text-[#2B2520] font-mono">
              {project.architectureNotes}
            </p>
          </div>
        )}

        {/* Key Engineering Highlights */}
        <div className="mb-6">
          <h4 className="font-mono text-xs uppercase tracking-wider text-[#948A80] mb-3">
            Core Technical Highlights
          </h4>
          <div className="space-y-2">
            {project.highlights.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-[#2B2520]">
                <CheckCircle2 className="w-4 h-4 text-[#6B7A5A] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-8">
          <h4 className="font-mono text-xs uppercase tracking-wider text-[#948A80] mb-2">
            Component Modules & Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="px-3 py-1 text-xs font-mono rounded bg-[#ECE3D4] text-[#2B2520] border border-[#DDD0BE]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#DDD0BE]">
          {githubUrl ? (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono rounded bg-[#B5573A] text-[#F5EEE3] hover:bg-[#964025] transition-colors shadow-sm"
            >
              <Github className="w-4 h-4" />
              <span>Inspect Repository on GitHub</span>
            </a>
          ) : (
            <span className="text-xs font-mono text-[#948A80]">No public repository listed</span>
          )}

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-mono rounded bg-[#EADECF] text-[#2B2520] border border-[#DDD0BE] hover:border-[#B5573A] transition-colors"
          >
            Close Folio
          </button>
        </div>
      </div>
    </div>
  );
}
