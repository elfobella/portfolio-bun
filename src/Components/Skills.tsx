import Laravel from "../assets/laravel-svgrepo-com.svg";
import React from "../assets/react.svg";
import Inertia from "../assets/inertia-logo.svg";
import Nextjs from "../assets/nextjs.svg";
import { useEffect, useRef, useState } from "react";
import Layout from "./Layout";

export default function Skills() {
  const [isAnimate, setIsAnimate] = useState<boolean>(false);
  const knowledge = [
    { lang: "laravel", src: Laravel, percent: 65 },
    { lang: "reactjs", src: React, percent: 90 },
    { lang: "inertia", src: Inertia, percent: 45 },
    { lang: "nextjs", src: Nextjs, percent: 75 },
  ];

  const secRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      if (secRef.current) {
        const rect = secRef.current.getBoundingClientRect();
        if (rect.top < 650) {
          setIsAnimate(true);
        }
      }
    };

    // Scroll olayını dinle
    window.addEventListener("scroll", handleScroll);

    // Temizleme işlemi
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="skills" ref={secRef}>
      <Layout title="Skills">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {knowledge.map((knw) => (
            <div
              key={knw.lang}
              title={knw.lang.toLocaleUpperCase()}
              className="flex border-2 border-head dark:bg-primary dark:border-beige items-center gap-2 p-2 rounded-lg"
            >
              <img src={knw.src} className="w-12 h-12" alt="" />
              <div className="w-48  relative overflow-hidden h-6 rounded-full border border-head dark:border-beige">
                <div
                  className="dark:bg-beige transition-all duration-500 bg-head h-full"
                  style={{
                    width: isAnimate ? `${knw.percent}%` : "0",
                    margin: 0,
                    padding: 0,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </Layout>
    </section>
  );
}
