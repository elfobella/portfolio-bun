import { useEffect, useState } from "react";
import { Moon, SunMedium } from "lucide-react";

export default function Navbar() {
  const [isHover, setIsHover] = useState<boolean>(false);
  const [lastScrollPos, setLastScrollPos] = useState(0);
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") || "light"
  );

  const handleScroll = () => {
    const currScroll = window.scrollY;
    if (currScroll > lastScrollPos) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
    setLastScrollPos(currScroll);
  };

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

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollPos]);

  return (
    <section
      id="Navbar"
      className={`${isSticky ? "-top-20" : ""} transition-all  sticky top-0`}
    >
      <div className="flex items-center justify-center">
        <div
          onMouseEnter={() => setIsHover(true)}
          className={`flex border border-head/10 items-center justify-center ${
            isHover
              ? "bg-beige backdrop-blur-lg w-72"
              : "dark:bg-beige bg-head w-32"
          } transition-all overflow-hidden duration-500 rounded-full h-12 mt-2`}
        >
          <ul className="">
            {isHover ? (
              <div>
                <div className="flex gap-2 items-center">
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
                    {theme === "dark" ? <Moon /> : <SunMedium />}
                  </button>
                </div>
              </div>
            ) : (
              <span className="text-sm dark:text-head text-beige font-bold">
                👋 Hello There!
              </span>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
