import React, { useState } from 'react';
import { Terminal, Copy, Check, FileCode2 } from 'lucide-react';

interface CodeSnippet {
  title: string;
  filename: string;
  language: string;
  lines: { num: number; code: React.ReactNode }[];
}

const SNIPPETS: CodeSnippet[] = [
  {
    title: 'Clay Material & 3D Shading',
    filename: 'ClayShadingEngine.ts',
    language: 'typescript',
    lines: [
      {
        num: 1,
        code: (
          <span>
            <span className="text-[#964025] font-semibold">import</span> *{' '}
            <span className="text-[#964025] font-semibold">as</span> THREE{' '}
            <span className="text-[#964025] font-semibold">from</span>{' '}
            <span className="text-[#6B7A5A]">'three'</span>;
          </span>
        ),
      },
      {
        num: 2,
        code: (
          <span>
            <span className="text-[#948A80] italic">
              // Architectural clay shader setup: unglazed terracotta & sage
            </span>
          </span>
        ),
      },
      {
        num: 3,
        code: (
          <span>
            <span className="text-[#964025] font-semibold">export function</span>{' '}
            <span className="text-[#2B2520] font-semibold">createClayMaterial</span>
            (tone: <span className="text-[#7C7162]">'terracotta'</span> |{' '}
            <span className="text-[#7C7162]">'sage'</span> |{' '}
            <span className="text-[#7C7162]">'cream'</span>) {'{'}
          </span>
        ),
      },
      {
        num: 4,
        code: (
          <span className="pl-4">
            <span className="text-[#964025] font-semibold">const</span> palette = {'{'}
          </span>
        ),
      },
      {
        num: 5,
        code: (
          <span className="pl-8">
            terracotta:{' '}
            <span className="text-[#6B7A5A]">'#B5573A'</span>, sage:{' '}
            <span className="text-[#6B7A5A]">'#6B7A5A'</span>, cream:{' '}
            <span className="text-[#6B7A5A]">'#EFE6D8'</span>,
          </span>
        ),
      },
      {
        num: 6,
        code: <span className="pl-4">{'}'};</span>,
      },
      {
        num: 7,
        code: (
          <span className="pl-4">
            <span className="text-[#964025] font-semibold">return new</span>{' '}
            THREE.<span className="text-[#2B2520]">MeshStandardMaterial</span>({'{'}
          </span>
        ),
      },
      {
        num: 8,
        code: (
          <span className="pl-8">
            color: <span className="text-[#964025] font-semibold">new</span>{' '}
            THREE.<span className="text-[#2B2520]">Color</span>(palette[tone]),
          </span>
        ),
      },
      {
        num: 9,
        code: (
          <span className="pl-8">
            roughness: <span className="text-[#B5573A]">0.90</span>,{' '}
            <span className="text-[#948A80] italic">// Soft matte tactile dispersion</span>
          </span>
        ),
      },
      {
        num: 10,
        code: (
          <span className="pl-8">
            metalness: <span className="text-[#B5573A]">0.02</span>,{' '}
            <span className="text-[#948A80] italic">// Non-conductive earthen clay</span>
          </span>
        ),
      },
      {
        num: 11,
        code: <span className="pl-4">{'}'});</span>,
      },
      {
        num: 12,
        code: <span>{'}'}</span>,
      },
    ],
  },
  {
    title: 'State Synchronization Pipeline',
    filename: 'ReconcilerSync.ts',
    language: 'typescript',
    lines: [
      {
        num: 1,
        code: (
          <span>
            <span className="text-[#948A80] italic">
              // Event-driven operational state synchronization
            </span>
          </span>
        ),
      },
      {
        num: 2,
        code: (
          <span>
            <span className="text-[#964025] font-semibold">export class</span>{' '}
            <span className="text-[#2B2520] font-semibold">DocumentReconciler</span>{' '}
            {'{'}
          </span>
        ),
      },
      {
        num: 3,
        code: (
          <span className="pl-4">
            <span className="text-[#964025] font-semibold">private</span> version ={' '}
            <span className="text-[#B5573A]">0</span>;
          </span>
        ),
      },
      {
        num: 4,
        code: (
          <span className="pl-4">
            <span className="text-[#964025] font-semibold">private</span> buffer: Mutation[] = [];
          </span>
        ),
      },
      {
        num: 5,
        code: (
          <span className="pl-4">
            <span className="text-[#964025] font-semibold">applyLocal</span>(mutation: Mutation):{' '}
            <span className="text-[#7C7162]">void</span> {'{'}
          </span>
        ),
      },
      {
        num: 6,
        code: (
          <span className="pl-8">
            <span className="text-[#964025] font-semibold">this</span>.buffer.push(mutation);
          </span>
        ),
      },
      {
        num: 7,
        code: (
          <span className="pl-8">
            <span className="text-[#964025] font-semibold">this</span>.broadcast(mutation);{' '}
            <span className="text-[#948A80] italic">// Broadcast delta to subscribers</span>
          </span>
        ),
      },
      {
        num: 8,
        code: <span className="pl-4">{'}'}</span>,
      },
      {
        num: 9,
        code: <span>{'}'}</span>,
      },
    ],
  },
];

export default function CodeWorkbench() {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const snippet = SNIPPETS[activeTab];

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-lg border border-[#DDD0BE] bg-[#ECE3D4] overflow-hidden shadow-clay-subtle">
      {/* Workbench Header */}
      <div className="flex flex-wrap items-center justify-between px-4 py-3 bg-[#E4D8D0] border-b border-[#DDD0BE]">
        <div className="flex items-center gap-2">
          {SNIPPETS.map((s, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-1.5 px-3 py-1 text-xs font-mono rounded transition-colors ${
                activeTab === idx
                  ? 'bg-[#F5EEE3] text-[#2B2520] font-medium shadow-xs border border-[#DDD0BE]'
                  : 'text-[#635B54] hover:text-[#2B2520]'
              }`}
            >
              <FileCode2 className="w-3.5 h-3.5 text-[#B5573A]" />
              <span>{s.filename}</span>
            </button>
          ))}
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1 text-xs font-mono text-[#635B54] hover:text-[#2B2520] px-2 py-1 rounded bg-[#EADECF]/60 border border-[#DDD0BE]"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-[#6B7A5A]" />
              <span>Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy snippet</span>
            </>
          )}
        </button>
      </div>

      {/* Code Area with left-aligned line numbers */}
      <div className="p-4 sm:p-5 overflow-x-auto text-xs sm:text-[13px] font-mono leading-relaxed bg-[#ECE3D4]">
        <div className="min-w-fit space-y-1">
          {snippet.lines.map((l) => (
            <div key={l.num} className="flex items-baseline">
              <span className="w-8 shrink-0 select-none text-right pr-4 text-[#948A80]">
                {l.num}
              </span>
              <div className="text-[#2B2520]">{l.code}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
