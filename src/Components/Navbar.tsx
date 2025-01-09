import { useEffect, useState } from "react";
import { House, Moon, SunMedium } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [lastScrollPos, setLastScrollPos] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setIsVisible(currentScrollPos < lastScrollPos || currentScrollPos < 100);
    setLastScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollPos]);

  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const navItems = [
    { href: "#top", icon: House, label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
  ];

  return (
    <AnimatePresence>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-4 py-4"
      >
        <motion.div
          className="flex items-center justify-between px-6 py-2.5 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 rounded-full shadow-lg"
          layout
        >
          <div className="flex items-center gap-1">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-violet-500 dark:text-gray-300 dark:hover:text-violet-400 transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {item.icon ? <item.icon className="w-4 h-4" /> : item.label}
              </motion.a>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="ml-4 p-2 text-gray-700 hover:text-violet-500 dark:text-gray-300 dark:hover:text-violet-400 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {theme === "dark" ? (
              <Moon className="w-4 h-4" />
            ) : (
              <SunMedium className="w-4 h-4" />
            )}
          </motion.button>
        </motion.div>
      </motion.nav>
    </AnimatePresence>
  );
}
