'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
  accentColor?: 'gray' | 'green';
}

export default function Section({ id, title, children, className = '', accentColor = 'gray' }: SectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
  }, []);

  const titleColor = accentColor === 'green' 
    ? 'text-green-700 dark:text-green-400' 
    : 'text-gray-800 dark:text-gray-200';

  return (
    <section 
      ref={ref}
      id={id} 
      className={`py-20 px-6 sm:px-8 lg:px-12 ${className}`}
    >
      <div className="max-w-3xl mx-auto">
        <h2 
          className={`text-3xl sm:text-4xl font-bold mb-12 tracking-tight ${titleColor} transition-all duration-700 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          {title}
        </h2>
        <div 
          className={`transition-all duration-700 delay-200 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
