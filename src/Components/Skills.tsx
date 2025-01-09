import { motion } from "framer-motion";
import Laravel from "../assets/laravel-svgrepo-com.svg";
import React from "../assets/react.svg";
import Inertia from "../assets/inertia-logo.svg";
import Nextjs from "../assets/nextjs.svg";
import { Code2 } from "lucide-react";

export default function Skills() {
  const skills = [
    { 
      name: "Laravel", 
      icon: Laravel, 
      level: 65,
      label: "Advanced"
    },
    { 
      name: "React.js", 
      icon: React, 
      level: 90,
      label: "Expert"
    },
    { 
      name: "Inertia", 
      icon: Inertia, 
      level: 45,
      label: "Intermediate"
    },
    { 
      name: "Next.js", 
      icon: Nextjs, 
      level: 75,
      label: "Advanced"
    },
  ];

<<<<<<< HEAD
  const secRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      if (secRef.current) {
        const rect = secRef.current.getBoundingClientRect();
        if (rect.top < 650) {
          setIsAnimate(true);
        }
      }
    };

    // Scroll olayını dinle
    window.addEventListener("scroll", handleScroll);

    // Temizleme işlemi
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

=======
>>>>>>> f86be0b (Redesign)
  return (
    <section id="skills" className="w-full max-w-6xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-md"
      >
        <div className="flex items-center gap-3 mb-12">
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-violet-500 to-purple-500 shadow-md">
            <Code2 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Skills & Technologies
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Technologies I've been working with
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-r from-violet-500/10 to-purple-500/10 p-6 rounded-xl border border-violet-100 dark:border-violet-900/20 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="p-3 bg-violet-50 dark:bg-violet-900/20 rounded-lg shadow-sm"
                >
                  <img 
                    src={skill.icon} 
                    className="w-8 h-8" 
                    alt={skill.name} 
                  />
                </motion.div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {skill.name}
                    </h3>
                    <span className="text-sm font-medium px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-300">
                      {skill.label}
                    </span>
                  </div>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="relative h-1.5 bg-violet-100 dark:bg-violet-900/20 rounded-full overflow-hidden"
                  >
                    <motion.div
                      initial={{ width: "0%" }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: (index * 0.2) + 0.5 }}
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-violet-500 to-purple-500 rounded-full"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
