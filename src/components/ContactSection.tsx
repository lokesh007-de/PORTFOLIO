import React, { useState } from 'react';
import { Github, Linkedin, FileDown, Code2, Send, CheckCircle2, Mail, ExternalLink } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-20 border-t border-[#DDD0BE]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-[#948A80] uppercase tracking-wider mb-2">
            <span>04 / CORRESPONDENCE</span>
            <span>•</span>
            <span className="text-[#B5573A]">OPEN INQUIRIES</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#2B2520] mb-4">
            Initiate Dialogue.
          </h2>

          <p className="font-serif italic text-lg sm:text-xl text-[#635B54] max-w-2xl">
            Open for architectural engineering discussions, open source collaborations, and senior development initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Links & Atelier Colophon */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-lg bg-[#EADECF] border border-[#DDD0BE] shadow-clay-subtle">
              <h3 className="font-serif text-xl text-[#2B2520] mb-3">
                Architectural Atelier & Dossier
              </h3>
              <p className="text-sm text-[#55423D] leading-relaxed mb-6">
                Direct access to code repositories, public profiles, and curriculum vitae.
              </p>

              <div className="space-y-3">
                {/* Working Download Resume Button */}
                <a
                  href="/resume.pdf"
                  download="Lokesh_Kumar_Resume.pdf"
                  className="flex items-center justify-between w-full px-4 py-3 rounded bg-[#B5573A] text-[#F5EEE3] hover:bg-[#964025] transition-colors shadow-sm font-mono text-xs group"
                >
                  <span className="flex items-center gap-2 font-medium">
                    <FileDown className="w-4 h-4 text-[#F5EEE3]" />
                    <span>Download Resume (PDF)</span>
                  </span>
                  <span className="text-[#F5EEE3]/80 group-hover:translate-x-1 transition-transform">
                    ↓
                  </span>
                </a>

                {/* View Source Button */}
                <a
                  href="https://github.com/lokesh007-de/PORTFOLIO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full px-4 py-3 rounded bg-[#F5EEE3] text-[#2B2520] border border-[#DDD0BE] hover:border-[#B5573A] hover:bg-[#EFE6D8] transition-colors font-mono text-xs group"
                >
                  <span className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-[#B5573A]" />
                    <span>View Source (Repository)</span>
                  </span>
                  <span className="text-[#635B54] group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </a>

                {/* GitHub Profile */}
                <a
                  href="https://github.com/lokesh007-de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full px-4 py-3 rounded bg-[#F5EEE3] text-[#2B2520] border border-[#DDD0BE] hover:border-[#6B7A5A] hover:bg-[#EFE6D8] transition-colors font-mono text-xs group"
                >
                  <span className="flex items-center gap-2">
                    <Github className="w-4 h-4 text-[#6B7A5A]" />
                    <span>GitHub: @lokesh007-de</span>
                  </span>
                  <span className="text-[#635B54] group-hover:translate-x-1 transition-transform">
                    ↗
                  </span>
                </a>

                {/* LinkedIn Profile */}
                <a
                  href="https://www.linkedin.com/in/lokesh-kumar-4a0a15248"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full px-4 py-3 rounded bg-[#F5EEE3] text-[#2B2520] border border-[#DDD0BE] hover:border-[#546345] hover:bg-[#EFE6D8] transition-colors font-mono text-xs group"
                >
                  <span className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-[#546345]" />
                    <span>LinkedIn: Lokesh Kumar</span>
                  </span>
                  <span className="text-[#635B54] group-hover:translate-x-1 transition-transform">
                    ↗
                  </span>
                </a>
              </div>
            </div>

            {/* Colophon Note */}
            <div className="p-5 rounded-lg bg-[#ECE3D4] border border-[#DDD0BE] text-xs text-[#635B54] font-mono leading-relaxed">
              <span className="text-[#964025] font-semibold">COLOPHON:</span> Set in Playfair Display, DM Sans, and JetBrains Mono. Built with React, Three.js clay shaders, Motion, and Lenis smooth scrolling.
            </div>
          </div>

          {/* Right Column: Correspondence Dispatch Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-lg bg-[#EADECF] border border-[#DDD0BE] shadow-clay-subtle">
              <h3 className="font-serif text-2xl text-[#2B2520] mb-2">
                Dispatch a Message
              </h3>
              <p className="text-xs font-mono text-[#635B54] mb-6">
                Inquiries regarding systems architecture, software engineering, and collaborative ventures.
              </p>

              {submitted ? (
                <div className="p-6 rounded bg-[#F5EEE3] border border-[#6B7A5A] text-center space-y-3">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#6B7A5A]/20 text-[#6B7A5A]">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-xl text-[#2B2520]">
                    Dispatch Recorded
                  </h4>
                  <p className="text-sm text-[#635B54] max-w-md mx-auto">
                    Thank you, {formData.name}. Your inquiry has been drafted. You may also connect directly via LinkedIn or GitHub.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="mt-3 text-xs font-mono px-3 py-1.5 rounded bg-[#EADECF] border border-[#DDD0BE] text-[#2B2520] hover:border-[#B5573A]"
                  >
                    Send Another Dispatch
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[#635B54] uppercase tracking-wider mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Eleanor Vance"
                        className="w-full px-3.5 py-2.5 rounded bg-[#EFE6D8] border border-[#DDD0BE] text-[#2B2520] placeholder-[#948A80] placeholder:italic placeholder:font-serif text-sm focus:outline-none focus:border-[#B5573A] focus:ring-2 focus:ring-[#B5573A]/15 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#635B54] uppercase tracking-wider mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. contact@domain.com"
                        className="w-full px-3.5 py-2.5 rounded bg-[#EFE6D8] border border-[#DDD0BE] text-[#2B2520] placeholder-[#948A80] placeholder:italic placeholder:font-serif text-sm focus:outline-none focus:border-[#B5573A] focus:ring-2 focus:ring-[#B5573A]/15 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#635B54] uppercase tracking-wider mb-1.5">
                      Subject / Topic
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Systems Architecture Discussion"
                      className="w-full px-3.5 py-2.5 rounded bg-[#EFE6D8] border border-[#DDD0BE] text-[#2B2520] placeholder-[#948A80] placeholder:italic placeholder:font-serif text-sm focus:outline-none focus:border-[#B5573A] focus:ring-2 focus:ring-[#B5573A]/15 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#635B54] uppercase tracking-wider mb-1.5">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Detail your engineering initiative, system requirements, or architectural query..."
                      className="w-full px-3.5 py-2.5 rounded bg-[#EFE6D8] border border-[#DDD0BE] text-[#2B2520] placeholder-[#948A80] placeholder:italic placeholder:font-serif text-sm focus:outline-none focus:border-[#B5573A] focus:ring-2 focus:ring-[#B5573A]/15 transition-all resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded bg-[#B5573A] text-[#F5EEE3] hover:bg-[#964025] transition-colors font-mono text-xs uppercase tracking-wider shadow-sm font-medium"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Transmit Dispatch</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
