'use client';

import { useEffect, useRef, useState } from 'react';

interface ExpertGridProps {
  skills: string[];
  title?: string;
}

const skillIcons: Record<string, string> = {
  C: '⚙️',
  'C++': '⚙️',
  Python: '🐍',
  HTML: '🌐',
  CSS: '🎨',
  JavaScript: '📜',
  'Node.js': '🟢',
  React: '⚛️',
  PostgreSQL: '🐘',
  Web3: '🔷',
  DApps: '🔷',
  Linux: '🐧',
  Git: '📦',
};

function useInView<T extends HTMLElement>(threshold = 0.1) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold]);

  return { ref, isVisible };
}

export default function ExpertGrid({ skills, title = 'Expert In' }: ExpertGridProps) {
  const { ref, isVisible } = useInView<HTMLElement>(0.12);

  return (
    <section ref={ref} className="relative py-24">
      <div className="absolute inset-0 -skew-y-3 bg-gradient-to-r from-indigo-600/10 via-blue-500/10 to-cyan-500/10 dark:from-indigo-400/10 dark:via-blue-400/10 dark:to-cyan-400/10 pointer-events-none" />

      <div className="relative z-10 w-full px-2 sm:px-4 lg:px-6">
        <h2
          className={`text-center text-3xl sm:text-4xl font-bold tracking-tight text-indigo-700 dark:text-indigo-300 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {title}
        </h2>

        <div
          className={`mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 sm:gap-3 md:gap-4 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {skills.map((skill, index) => {
            const icon = skillIcons[skill] ?? '💡';
            return (
              <div
                key={skill}
                style={{ transitionDelay: `${Math.min(index * 25, 400)}ms` }}
                className={`group h-20 sm:h-22 md:h-24 lg:h-26 w-full flex flex-col items-center justify-center rounded-2xl bg-white/80 dark:bg-slate-900/50 backdrop-blur border border-slate-200/60 dark:border-slate-700/60 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 ease-out ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
              >
                <div className="text-4xl xs:text-5xl sm:text-6xl md:text-6xl lg:text-7xl drop-shadow-sm leading-none">
                  {icon}
                </div>
                <div className="mt-2 text-[11px] xs:text-xs sm:text-sm md:text-sm font-medium text-slate-700 dark:text-slate-300">
                  {skill}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


