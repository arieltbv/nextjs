interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
  type?: 'work' | 'military' | 'volunteer';
}

interface ExperienceProps {
  experiences: ExperienceItem[];
}

export default function Experience({ experiences }: ExperienceProps) {
  return (
    <div className="space-y-8">
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
        <div className="space-y-12 pl-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-16 top-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white dark:border-gray-900"></div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-blue-500">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {exp.title}
                    </h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-2 sm:mt-0">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-2 mt-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-gray-600 dark:text-gray-400 flex items-start">
                      <span className="text-blue-500 mr-2 mt-1.5">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

