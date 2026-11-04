import React, { Suspense, lazy, useEffect, useState } from 'react';

// Lazy load the Three.js 3D Clay Scene
const ClayScene3D = lazy(() => import('./ClayScene3D'));

interface HeroClayWrapperProps {
  scrollProgress: number;
  reducedMotion: boolean;
}

function ClayScenePlaceholder({ isMobile }: { isMobile: boolean }) {
  return (
    <div className="w-full h-full flex items-center justify-center opacity-70 transition-opacity duration-700">
      <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">
        {/* Decorative soft geometric silhouette placeholder matching the palette */}
        <div className="absolute w-44 h-44 rounded-full bg-[#B5573A]/25 blur-xl -top-2 right-4 animate-pulse" />
        <div className="absolute w-36 h-52 rounded-t-full bg-[#6B7A5A]/25 blur-lg -bottom-2 left-6" />
        <div className="absolute w-28 h-28 rounded-full border-[18px] border-[#EFE6D8]/60 blur-[1px]" />
      </div>
    </div>
  );
}

export default function HeroClayWrapper({ scrollProgress, reducedMotion }: HeroClayWrapperProps) {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!mounted) {
    return <ClayScenePlaceholder isMobile={false} />;
  }

  return (
    <div className="w-full h-full relative">
      <Suspense fallback={<ClayScenePlaceholder isMobile={isMobile} />}>
        <ClayScene3D
          scrollProgress={scrollProgress}
          isMobile={isMobile}
          reducedMotion={reducedMotion}
        />
      </Suspense>
    </div>
  );
}
