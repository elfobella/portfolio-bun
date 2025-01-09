import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface CardProp {
  title: string;
  desc: string;
  link: string;
  langs: string[];
  hasUrl: boolean;
  category: string;
}

export default function Card({ title, desc, link, langs, hasUrl, category }: CardProp) {
  return (
    <div className="group relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -5 }}
        className="flex flex-col h-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
      >
        <div className="p-6 flex-1">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
              {desc}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {langs.map((lang) => (
              <span
                key={lang}
                className="px-2.5 py-1 text-xs font-medium text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/30 rounded-full"
              >
                {lang}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
              {category}
            </span>
            {hasUrl && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-500 hover:text-purple-600 dark:text-purple-400 dark:hover:text-purple-300"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
