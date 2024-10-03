import Header from "./Components/Header";
import Navbar from "./Components/Navbar";

export default function App() {
  return (
    <div className="flex max-w-7xl mx-auto px-4 flex-col gap-10">
      <Navbar />
      <Header />
    </div>
  );
}
