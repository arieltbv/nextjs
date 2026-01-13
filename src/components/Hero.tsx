export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-gray-50 via-slate-100 to-gray-100 dark:from-black dark:via-slate-900 dark:to-gray-900">
      <div className="max-w-3xl mx-auto text-center pt-16 sm:pt-20 lg:pt-24">
        <p className="text-lg sm:text-xl text-green-700 dark:text-green-400 mb-4 font-medium">
          Nice to meet you
        </p>
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-6 tracking-tight bg-gradient-to-r from-gray-700 via-slate-600 to-gray-800 dark:from-gray-300 dark:via-slate-400 dark:to-gray-200 bg-clip-text text-transparent">
          Ariel Tolibov
        </h1>
        <p className="text-xl sm:text-2xl text-green-700 dark:text-green-400 mb-12 font-light">
          Software Developer
        </p>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          Software developer and B.Sc. Computer Science student. <span className="text-green-700 dark:text-green-400 font-medium">Team player</span> with proven experience in high-pressure situations as an <span className="text-green-700 dark:text-green-400 font-medium">MDA volunteer</span> in mobile intensive care units.
        </p>
        <div className="mb-16 max-w-2xl mx-auto">
          <p className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200 border-l-4 border-green-600 dark:border-green-500 pl-4 py-2 bg-gray-100 dark:bg-gray-800/50 rounded-r-lg">
            Seeking a student Software Engineer role to contribute to high-quality product teams.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 text-lg">
          <a
            href="mailto:ariel.tbv@gmail.com"
            className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors underline underline-offset-4 decoration-gray-400 dark:decoration-gray-500"
          >
            Email me
          </a>
          <a
            href="https://github.com/arieltbv"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors underline underline-offset-4 decoration-gray-400 dark:decoration-gray-500"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ariel-tolibov-computer-science/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors underline underline-offset-4 decoration-gray-400 dark:decoration-gray-500"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
