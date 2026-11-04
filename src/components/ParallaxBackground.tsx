import React from 'react';

interface ParallaxBackgroundProps {
  scrollProgress: number;
  reducedMotion: boolean;
}

export default function ParallaxBackground({ scrollProgress, reducedMotion }: ParallaxBackgroundProps) {
  // Parallax offsets
  const factor = reducedMotion ? 0 : scrollProgress;
  const offset1 = factor * -120;
  const offset2 = factor * 140;
  const offset3 = factor * -80;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* 1. Persistent SVG microporous paper grain overlay at 3% opacity */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.035] mix-blend-multiply"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="paper-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#paper-grain)" />
      </svg>

      {/* 2. Floating Botanical Hairline Arch (Left) */}
      <div
        style={{
          transform: `translate3d(0, ${offset1}px, 0)`,
          transition: 'transform 0.1s linear',
        }}
        className="absolute -left-16 top-1/4 w-72 h-96 arch-top border border-[#DDD0BE]/70 opacity-40 pointer-events-none"
      />

      {/* 3. Soft Terracotta Architectural Glow Disc (Right) */}
      <div
        style={{
          transform: `translate3d(0, ${offset2}px, 0)`,
          transition: 'transform 0.1s linear',
        }}
        className="absolute -right-24 top-1/2 w-96 h-96 rounded-full bg-[#B5573A]/[0.03] blur-3xl pointer-events-none"
      />

      {/* 4. Subtle Sage Accent Disc (Bottom Left) */}
      <div
        style={{
          transform: `translate3d(0, ${offset3}px, 0)`,
          transition: 'transform 0.1s linear',
        }}
        className="absolute left-1/4 top-3/4 w-80 h-80 rounded-full bg-[#6B7A5A]/[0.03] blur-3xl pointer-events-none"
      />

      {/* 5. Delicate Single-Pixel Framing Guidelines (Editorial Grid Lines) */}
      <div className="hidden xl:block absolute left-12 top-0 bottom-0 w-px bg-[#DDD0BE]/40" />
      <div className="hidden xl:block absolute right-12 top-0 bottom-0 w-px bg-[#DDD0BE]/40" />
    </div>
  );
}
