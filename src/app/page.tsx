import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';

export default function Home() {
  const workExperience = [
    {
      title: 'Presales Engineer',
      company: 'Kidum',
      period: '2018 – 2019',
      description: [
        'Managed and analyzed leads using CRM and Google Sheets/Microsoft tools',
        'Collaborated with cross-functional teams',
        'Delivered solutions tailored to client needs while meeting deadlines and priorities',
      ],
      type: 'work' as const,
    },
  ];

  const militaryService = [
    {
      title: 'Company Medic',
      company: 'Israeli Defense Forces',
      period: 'Dec 2021 – Apr 2023',
      description: [
        'Managed operational readiness for ~150 personnel, demonstrating high responsibility, process management, and cross-team coordination',
        'Worked under pressure with strict protocols - experience relevant to structured engineering environments',
        'Operated digital and reporting systems with strong attention to detail',
      ],
      type: 'military' as const,
    },
    {
      title: 'Combat Soldier',
      company: 'Intelligence Collection Unit 414',
      period: 'Aug 2020 – Dec 2021',
      description: [
        'Operated advanced field systems in real-time intelligence missions, requiring discipline, technical precision, and situational awareness',
        'Experience working with sensitive systems and adhering to security and confidentiality standards',
      ],
      type: 'military' as const,
    },
  ];

  const volunteering = [
    {
      title: 'EMT Volunteer',
      company: 'Magen David Adom (MDA)',
      period: '2018 – 2023',
      description: [
        'Worked in a Mobile Intensive Care Unit responding to critical, time-sensitive missions',
        'Demonstrated strong teamwork, rapid problem-solving, and the ability to operate complex systems under pressure',
      ],
      type: 'volunteer' as const,
    },
    {
      title: 'Instructor',
      company: 'Krembo Wings',
      period: '2019 – 2020',
      description: [
        'Provided one-on-one mentorship to a teenager with special needs',
        'Demonstrated patience, clear communication, problem-solving, and consistent responsibility in a supportive and trust-based environment',
      ],
      type: 'volunteer' as const,
    },
  ];

  const education = [
    {
      title: 'B.Sc. in Computer Science',
      company: 'Holon Institute of Technology (HIT)',
      period: 'Present (3 remaining semesters)',
      description: [
        'Pursuing Bachelor of Science in Computer Science',
        'Relevant coursework includes Object-Oriented Programming, Data Structures, Algorithms, Operating Systems, and Computer Networks',
      ],
      type: 'work' as const,
    },
    {
      title: 'Full-Stack Web Developer',
      company: 'Udemy',
      period: 'Completed',
      description: [
        'Comprehensive course covering HTML, CSS, JavaScript, Node.js, React, PostgreSQL, Web3 and DApps',
      ],
      type: 'work' as const,
    },
  ];

  return (
    <main className="min-h-screen">
      <Hero />
      
      <Section id="summary" title="Professional Summary">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-8 shadow-lg">
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Motivated Computer Science B.Sc. student (HIT, 3 semesters remaining). 
            A fast learner, highly disciplined, and an excellent team player with proven ability 
            to operate complex systems under pressure. Seeking a student Software Engineer role 
            to contribute and grow within a high-quality engineering team.
          </p>
        </div>
      </Section>

      <Section id="skills" title="Technical Skills" className="bg-gray-50 dark:bg-gray-900">
        <Skills />
      </Section>

      <Section id="education" title="Education">
        <Experience experiences={education} />
      </Section>

      <Section id="experience" title="Experience" className="bg-gray-50 dark:bg-gray-900">
        <Experience experiences={workExperience} />
      </Section>

      <Section id="military" title="Military Service">
        <Experience experiences={militaryService} />
      </Section>

      <Section id="volunteering" title="Volunteering" className="bg-gray-50 dark:bg-gray-900">
        <Experience experiences={volunteering} />
      </Section>

      <footer className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8 px-4 text-center">
        <p className="text-lg mb-2">Ariel Tolibov</p>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <a href="mailto:ariel.tbv@gmail.com" className="hover:underline">ariel.tbv@gmail.com</a>
          <span>•</span>
          <a href="tel:+972535312105" className="hover:underline">053-531-2105</a>
          <span>•</span>
          <a href="https://www.linkedin.com/in/ariel-tolibov-computer-science/" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
          <span>•</span>
          <a href="https://github.com/arieltbv" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
        </div>
        <p className="text-sm mt-4 opacity-90">© {new Date().getFullYear()} All rights reserved</p>
      </footer>
    </main>
  );
}
