import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
export default function App() {
  return (
    <div className="dark:bg-primary transition-all min-h-screen">
      <div className="flex font-work tracking-tight max-w-7xl mx-auto px-4 flex-col gap-10">
        <Navbar />
        <Header />
        <Projects />
      </div>
    </div>
  );
}
