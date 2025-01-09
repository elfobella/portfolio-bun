import { motion } from "framer-motion";
import { Github, Mail } from "lucide-react";

export default function Header() {
  return (
    <section id="top" className="min-h-[90vh] flex items-center justify-center">
      <div className="text-center space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white"
        >
          Yunus Emre UÇAR
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg sm:text-xl text-gray-600 dark:text-gray-400"
        >
          Full Stack Developer
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center gap-4 pt-4"
        >
          <a
            href="mailto:yunusemreucr11@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-violet-500 to-purple-500 hover:opacity-90 rounded-lg transition-all shadow-md"
          >
            <Mail className="w-4 h-4" />
            İletişime Geç
          </a>
          <a
            href="https://github.com/elfobella"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium border border-gray-200 hover:border-violet-500 dark:border-gray-700 dark:hover:border-violet-500 text-gray-700 dark:text-white hover:text-violet-500 dark:hover:text-violet-400 rounded-lg transition-all"
          >
            <Github className="w-4 h-4" />
            Github
          </a>
        </motion.div>
      </div>
    </section>
  );
}
