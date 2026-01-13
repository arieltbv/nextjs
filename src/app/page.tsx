import Hero from '@/components/Hero';
import Section from '@/components/Section';

export default function Home() {
  const focusAreas = [
    'Problem-solving and debugging complex systems',
    'Object-Oriented Programming and Data Structures',
    'Operating Systems and Computer Networks',
    'Full-stack web development (React, Node.js, PostgreSQL)',
    'Fast learning and adapting to new technologies',
    'Team collaboration and cross-functional coordination',
  ];

  const skills = {
    programming: ['C', 'C++', 'Python'],
    web: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'React', 'PostgreSQL', 'Web3', 'DApps'],
    tools: ['Linux', 'Git'],
    coursework: ['Object-Oriented Programming', 'Data Structures', 'Algorithms', 'Operating Systems', 'Computer Networks'],
  };

  return (
    <main className="min-h-screen">
      <Hero />
      
      <Section id="focus" title="Focus">
        <div className="space-y-6">
          <h3 className="text-xl font-semibold mb-6 text-slate-700 dark:text-slate-300">
            What I optimize for
          </h3>
          <ul className="space-y-4">
            {focusAreas.map((area, index) => (
              <li key={index} className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed flex items-start">
                <span className="text-gray-500 dark:text-gray-400 mr-3 mt-1">▸</span>
                <span>{area}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section id="skills" title="Expert In" accentColor="green" className="bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-900 dark:to-slate-800">
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-green-700 dark:text-green-400">
              Programming Languages
            </h3>
            <ul className="space-y-2 text-lg text-slate-700 dark:text-slate-300">
              {skills.programming.map((skill) => (
                <li key={skill} className="flex items-center">
                  <span className="text-green-500 dark:text-green-400 mr-3">▸</span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-green-700 dark:text-green-400">
              Web Technologies
            </h3>
            <ul className="space-y-2 text-lg text-slate-700 dark:text-slate-300">
              {skills.web.map((skill) => (
                <li key={skill} className="flex items-center">
                  <span className="text-green-500 dark:text-green-400 mr-3">▸</span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-green-700 dark:text-green-400">
              Tools & Environments
            </h3>
            <ul className="space-y-2 text-lg text-slate-700 dark:text-slate-300">
              {skills.tools.map((skill) => (
                <li key={skill} className="flex items-center">
                  <span className="text-green-500 dark:text-green-400 mr-3">▸</span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-green-700 dark:text-green-400">
              Relevant Coursework
            </h3>
            <ul className="space-y-2 text-lg text-slate-700 dark:text-slate-300">
              {skills.coursework.map((skill) => (
                <li key={skill} className="flex items-center">
                  <span className="text-green-500 dark:text-green-400 mr-3">▸</span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section id="currently" title="Currently">
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
              Education
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-lg font-medium text-slate-900 dark:text-slate-100">
                  B.Sc. in Computer Science
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-400">
                  Holon Institute of Technology (HIT) — 3 remaining semesters
                </p>
              </div>
              <div>
                <p className="text-lg font-medium text-slate-900 dark:text-slate-100">
                  Full-Stack Web Developer
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-400">
                  Udemy — HTML, CSS, JavaScript, Node.js, React, PostgreSQL, Web3 and DApps
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="experience" title="Experience" accentColor="green" className="bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-900 dark:to-slate-800">
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-green-700 dark:text-green-400">
              Work Experience
            </h3>
            <div className="space-y-6">
              <div>
                <p className="text-lg font-medium text-slate-900 dark:text-slate-100">
                  Sales Development Representative
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-2">
                  Kidum — 2018–2019
                </p>
                <ul className="space-y-2 text-lg text-slate-600 dark:text-slate-400">
                  <li className="flex items-start">
                    <span className="text-green-500 dark:text-green-400 mr-2 mt-1">•</span>
                    <span>Managed and analyzed leads using CRM and Google Sheets/Microsoft tools</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 dark:text-green-400 mr-2 mt-1">•</span>
                    <span>Collaborated with cross-functional teams</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 dark:text-green-400 mr-2 mt-1">•</span>
                    <span>Delivered solutions tailored to client needs while meeting deadlines and priorities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="military" title="Military Service">
        <div className="space-y-8">
          <div className="space-y-6">
            <div>
              <p className="text-lg font-medium text-slate-900 dark:text-slate-100">
                Company Medic
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-2">
                Israeli Defense Forces — Dec 2021 – Apr 2023
              </p>
              <ul className="space-y-2 text-lg text-slate-600 dark:text-slate-400">
                <li className="flex items-start">
                  <span className="text-gray-500 dark:text-gray-400 mr-2 mt-1">•</span>
                  <span>Managed operational readiness for ~150 personnel, demonstrating high responsibility, process management, and cross-team coordination</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-500 dark:text-gray-400 mr-2 mt-1">•</span>
                  <span>Worked under pressure with strict protocols - experience relevant to structured engineering environments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-500 dark:text-gray-400 mr-2 mt-1">•</span>
                  <span>Operated digital and reporting systems with strong attention to detail</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 dark:text-gray-300 mr-2 mt-1">•</span>
                  <span className="font-medium text-gray-800 dark:text-gray-200">Independence Day Excellence Citation 2022 (IDF)</span>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-lg font-medium text-slate-900 dark:text-slate-100">
                Combat Soldier
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-2">
                Intelligence Collection Unit 414 — Aug 2020 – Dec 2021
              </p>
              <ul className="space-y-2 text-lg text-slate-600 dark:text-slate-400">
                <li className="flex items-start">
                  <span className="text-gray-500 dark:text-gray-400 mr-2 mt-1">•</span>
                  <span>Operated advanced field systems in real-time intelligence missions, requiring discipline, technical precision, and situational awareness</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-500 dark:text-gray-400 mr-2 mt-1">•</span>
                  <span>Experience working with sensitive systems and adhering to security and confidentiality standards</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section id="volunteering" title="Volunteering" accentColor="green" className="bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-900 dark:to-slate-800">
        <div className="space-y-8">
          <div className="space-y-6">
            <div>
              <p className="text-lg font-medium text-slate-900 dark:text-slate-100">
                EMT Volunteer
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-2">
                Magen David Adom (MDA) — 2018–2023
              </p>
              <ul className="space-y-2 text-lg text-slate-600 dark:text-slate-400">
                <li className="flex items-start">
                  <span className="text-gray-500 dark:text-gray-400 mr-2 mt-1">•</span>
                  <span>Worked in a Mobile Intensive Care Unit responding to critical, time-sensitive missions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-500 dark:text-gray-400 mr-2 mt-1">•</span>
                  <span>Demonstrated strong teamwork, rapid problem-solving, and the ability to operate complex systems under pressure</span>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-lg font-medium text-slate-900 dark:text-slate-100">
                Instructor
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-2">
                Krembo Wings — 2019–2020
              </p>
              <ul className="space-y-2 text-lg text-slate-600 dark:text-slate-400">
                <li className="flex items-start">
                  <span className="text-gray-500 dark:text-gray-400 mr-2 mt-1">•</span>
                  <span>Provided one-on-one mentorship to a teenager with special needs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-500 dark:text-gray-400 mr-2 mt-1">•</span>
                  <span>Demonstrated patience, clear communication, problem-solving, and consistent responsibility in a supportive and trust-based environment</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <footer className="py-12 px-6 sm:px-8 lg:px-12 border-t border-gray-300 dark:border-gray-700 bg-gradient-to-r from-gray-100 via-slate-200 to-gray-100 dark:from-black dark:via-gray-900 dark:to-slate-900">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">© {new Date().getFullYear()} Ariel Tolibov.</p>
          <div className="flex flex-wrap justify-center gap-6 text-lg">
            <a href="mailto:ariel.tbv@gmail.com" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors underline underline-offset-4 decoration-gray-400 dark:decoration-gray-500">
              Email
            </a>
            <a href="https://github.com/arieltbv" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors underline underline-offset-4 decoration-gray-400 dark:decoration-gray-500">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/ariel-tolibov-computer-science/" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors underline underline-offset-4 decoration-gray-400 dark:decoration-gray-500">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
