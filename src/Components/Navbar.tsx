import { useEffect, useState } from "react";
import { House, Moon, SunMedium } from "lucide-react";

export default function Navbar() {
  const [lastScrollPos, setLastScrollPos] = useState(0);
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") || "dark"
  );

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    // Eğer yukarı kaydırıyorsak navbar'ı göster, aşağı kaydırıyorsak gizle
    if (currentScrollPos < lastScrollPos) {
      setIsSticky(true); // Yukarı kaydırınca navbar geri gelsin
    } else {
      setIsSticky(false); // Aşağı kaydırınca navbar gizlensin
    }

    setLastScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollPos]);
  // Dark Mode
  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const handleClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <section
      id="Navbar"
      className={`${isSticky ? "-top-20" : "top-0"}  transition-all  sticky`}
    >
      <div className="flex items-center justify-center">
        <div className="flex border border-head/10 items-center justify-center bg-beige/40 w-80 transition-all backdrop-blur-lg overflow-hidden duration-500 rounded-full h-12 mt-2">
          <ul className="">
            <div>
              <div className="flex gap-2 items-center">
                <a href="#top">
                  <li className="p-1">
                    <House className="w-6 h-6 p-0" />
                  </li>
                </a>
                <a href="#projects">
                  <li>Projects</li>
                </a>
                <a href="#about">
                  <li>About</li>
                </a>
                <a href="#skills">
                  <li>Skills</li>
                </a>
                <button onClick={handleClick}>
                  <li className="p-1">
                    {theme === "dark" ? <Moon /> : <SunMedium />}
                  </li>
                </button>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </section>
  );
}
