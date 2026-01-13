export default function Skills() {
  const programmingLanguages = [
    { name: 'C', level: 'Advanced' },
    { name: 'C++', level: 'Advanced' },
    { name: 'Python', level: 'Advanced' },
  ];

  const coursework = [
    'Object-Oriented Programming',
    'Data Structures',
    'Algorithms',
    'Operating Systems',
    'Computer Networks',
  ];

  const tools = [
    { name: 'Linux', icon: '🐧' },
    { name: 'Git', icon: '📦' },
  ];

  const webTech = [
    'HTML',
    'CSS',
    'JavaScript',
    'Node.js',
    'React',
    'PostgreSQL',
    'Web3',
    'DApps',
  ];

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
          Programming Languages
        </h3>
        <div className="flex flex-wrap gap-3">
          {programmingLanguages.map((lang) => (
            <div
              key={lang.name}
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-shadow"
            >
              {lang.name}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
          Relevant Coursework
        </h3>
        <div className="flex flex-wrap gap-3">
          {coursework.map((course) => (
            <div
              key={course}
              className="px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-shadow"
            >
              {course}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
          Tools & Environments
        </h3>
        <div className="flex flex-wrap gap-3">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-shadow flex items-center gap-2"
            >
              <span>{tool.icon}</span>
              {tool.name}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
          Web Technologies
        </h3>
        <div className="flex flex-wrap gap-3">
          {webTech.map((tech) => (
            <div
              key={tech}
              className="px-4 py-2 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-shadow"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
          Additional Skills
        </h3>
        <div className="flex flex-wrap gap-3">
          {['Problem-solving', 'Debugging', 'Teamwork', 'Fast Learning'].map((skill) => (
            <div
              key={skill}
              className="px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-shadow"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}



