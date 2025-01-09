import { motion } from "framer-motion";
import { Mail, Github, Gamepad2, GraduationCap, Briefcase } from "lucide-react";

export default function About() {
  const details = [
    {
      icon: GraduationCap,
      title: "Eğitim",
      content: "İzmit TAML ve Yozgat Bozok Üniversitesi mezunu",
    },
    {
      icon: Briefcase,
      title: "Deneyim",
      content: "4+ yıl Fullstack Web Developer deneyimi",
    },
    {
      icon: Gamepad2,
      title: "E-Spor",
      content: "Profesyonel Fortnite oyuncusu, Dünya Şampiyonası'na katılım",
    },
  ];

  return (
    <section id="about" className="w-full max-w-6xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-md"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Sol taraf - Ana metin */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Merhaba! Ben Yunus Emre UÇAR. Kocaeli'de doğdum ve büyüdüm. 
              Küçük yaşlardan beri teknoloji ve oyunlara olan ilgim, beni 
              yazılım dünyasına yönlendirdi.
            </p>
          </div>

          {/* Sağ taraf - Detaylar */}
          <div className="space-y-4">
            {details.map((detail, index) => (
              <motion.div
                key={detail.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 hover:bg-violet-50 dark:hover:bg-gray-700 transition-colors"
              >
                <detail.icon className="w-5 h-5 text-violet-500 shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    {detail.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {detail.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* İletişim Butonları */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
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
        </div>
      </motion.div>
    </section>
  );
}
