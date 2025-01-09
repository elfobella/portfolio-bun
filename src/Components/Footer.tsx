import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/elfobella",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/yunus.emreu/",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/yunus-emre-u%C3%A7ar-611538210/",
    },
    {
      name: "Mail",
      icon: Mail,
      url: "mailto:yunusemreucr11@gmail.com",
    },
  ];

  return (
    <footer className="w-full max-w-6xl mx-auto px-4 py-8">
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-md">
        <div className="flex flex-col items-center gap-6">
          {/* Logo veya İsim */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl font-semibold bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent"
          >
            Yunus Emre UÇAR
          </motion.div>

          {/* Sosyal Medya Linkleri */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 text-gray-600 hover:text-violet-500 dark:text-gray-400 dark:hover:text-violet-400 transition-colors"
                aria-label={link.name}
              >
                <link.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* Alt Çizgi */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-violet-200 dark:via-violet-800 to-transparent" />

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400"
          >
            <span>Made with</span>
            <Heart className="w-4 h-4 text-violet-500 fill-violet-500" />
            <span>by</span>
            <a
              href="https://github.com/elfobella"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-violet-500 hover:text-violet-600 dark:text-violet-400 dark:hover:text-violet-300 transition-colors"
            >
              Yunus Emre UÇAR
            </a>
          </motion.div>

          {/* Yıl */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-gray-400 dark:text-gray-500"
          >
            © {new Date().getFullYear()}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
