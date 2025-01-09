import { motion } from "framer-motion";
import { Users, Award, FolderGit2 } from "lucide-react";

export default function Info() {
  const stats = [
    {
      icon: Award,
      title: "4+",
      desc: "Year experience",
      delay: 0,
    },
    {
      icon: Users,
      title: "250+",
      desc: "Happy Clients",
      delay: 0.1,
    },
    {
      icon: FolderGit2,
      title: "10+",
      desc: "Projects Done!",
      delay: 0.2,
    },
  ];

  return (
    <section id="info" className="w-full max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <motion.div
            key={stat.desc}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: stat.delay }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-violet-50 dark:bg-gray-700">
                <stat.icon className="w-6 h-6 text-violet-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stat.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
