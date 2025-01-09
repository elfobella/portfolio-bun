import { motion } from "framer-motion";

export default function Layout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden w-full"
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-br from-beige/80 via-beige/60 to-primary/5 dark:from-head/90 dark:via-head/80 dark:to-primary-dark/20 backdrop-blur-sm border border-primary/10 dark:border-primary/10 rounded-2xl sm:rounded-3xl shadow-soft hover:shadow-glow transition-all duration-300">
          {/* Dekoratif arka plan elementleri */}
          <div className="absolute inset-0 bg-pattern opacity-[0.03]" />
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl hidden sm:block" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-accent-indigo/10 rounded-full blur-3xl hidden sm:block" />
          
          {/* İçerik */}
          <div className="relative z-10 p-4 sm:p-8 md:p-12">
            <motion.h3 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-3xl sm:text-4xl md:text-5xl text-center font-heading font-bold text-head dark:text-beige mb-6 sm:mb-12"
            >
              {title}
            </motion.h3>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="w-full"
            >
              {children}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
