import Card from "./Card";
import { motion } from "framer-motion";
import { Code2, ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Akü E-Ticaret Platformu",
      desc: "Akü satışı yapan bir e-ticaret sitesi. Kullanıcılar araçlarına uygun aküleri filtreleyebilir, fiyat karşılaştırması yapabilir ve online satın alabilirler. Admin paneli ile stok ve sipariş yönetimi yapılabilmektedir.",
      link: "https://example.com/aku-website",
      langs: ["React", "Node.js", "MongoDB", "Express", "Redux"],
      hasUrl: false,
      category: "E-Ticaret",
    },
    {
      title: "Blog Application",
      desc: "In this website i want to do a blog page which can be register, login, create blog, read blog, like, save.",
      link: "blog",
      langs: ["Reactjs", "Nextjs", "Tailwindcss"],
      hasUrl: false,
      category: "Blog Platform",
    },
    {
      title: "Fitness & Wellness Platform",
      desc: "This website users can find best fitness workout for himself and coaching if u want. In this website users can interact with each other real time! Find your best meal, fitness plan and enjoy with your friends!",
      link: "blog",
      langs: ["Reactjs", "Laravel", "Tailwindcss", "Inertiajs"],
      hasUrl: false,
      category: "Health & Fitness",
    },
  ];

  return (
    <section id="projects" className="w-full max-w-6xl mx-auto px-4">
      {/* Başlık Alanı */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-4 mb-12"
      >
        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-violet-500 to-purple-500 shadow-md">
          <Code2 className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-heading font-bold text-head dark:text-white">
            Projects
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Showcase of my latest work
          </p>
        </div>
      </motion.div>

      {/* Proje Kartları */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card {...project} />
          </motion.div>
        ))}
      </div>

      {/* Alt Bilgi */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="text-center mt-16"
      >
        <a
          href="https://github.com/elfobella"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-violet-500 to-purple-500 hover:opacity-90 rounded-lg transition-all shadow-md"
        >
          <span>Daha Fazla Proje</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </motion.div>
    </section>
  );
}
