'use client';

import { useEffect, useRef, useState } from 'react';

interface SkillBadgeProps {
  skill: string;
  icon?: string;
  delay?: number;
}

const skillIcons: Record<string, string> = {
  'C': '⚙️',
  'C++': '⚙️',
  'Python': '🐍',
  'HTML': '🌐',
  'CSS': '🎨',
  'JavaScript': '📜',
  'Node.js': '🟢',
  'React': '⚛️',
  'PostgreSQL': '🐘',
  'Web3': '🔷',
  'DApps': '🔷',
  'Linux': '🐧',
  'Git': '📦',
  'Object-Oriented Programming': '🏗️',
  'Data Structures': '📊',
  'Algorithms': '🧮',
  'Operating Systems': '💻',
  'Computer Networks': '🌐',
};

export default function SkillBadge({ skill, icon, delay = 0 }: SkillBadgeProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  const displayIcon = icon || skillIcons[skill] || '💡';

  return (
    <span
      ref={ref}
      className={`px-4 py-2.5 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:scale-110 hover:border-indigo-400 dark:hover:border-indigo-500 hover:-translate-y-1 transition-all duration-500 ease-out text-sm font-medium flex items-center gap-2 ${
        isVisible
          ? 'opacity-100 translate-y-0 rotate-0'
          : 'opacity-0 translate-y-8 rotate-2'
      }`}
      style={{
        transitionDelay: isVisible ? '0ms' : `${delay}ms`,
      }}
    >
      <span className="text-base transform transition-transform duration-300 group-hover:scale-125">{displayIcon}</span>
      <span>{skill}</span>
    </span>
  );
}

