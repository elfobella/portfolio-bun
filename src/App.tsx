import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Info from "./Components/Info";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="relative">
        {/* Dekoratif arka plan efektleri */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-violet-100 dark:bg-violet-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-indigo-100 dark:bg-indigo-900/20 rounded-full blur-3xl" />
        
        {/* Ana içerik */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative flex flex-col gap-12 sm:gap-24 max-w-7xl mx-auto px-4 py-4 sm:py-8 font-sans"
        >
          <Navbar />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Header />
          </motion.div>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-24"
          >
            <Info />
            <Projects />
            <About />
            <Skills />
          </motion.section>

          <Footer />
        </motion.div>
      </div>
    </div>
  );
}

export default App;
