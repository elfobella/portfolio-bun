import Header from "./Components/Header";
import Info from "./Components/Info";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
export default function App() {
  return (
    <div className="dark:bg-primary -z-50 transition-all min-h-screen">
      <div className="flex font-work tracking-tight max-w-7xl mx-auto px-4 flex-col gap-20">
        <Navbar />
        <Header />
        <Info />
        <Projects />
        <Skills />
      </div>
    </div>
  );
}
