import Myself from "../assets/Myself.jpeg";
import { Instagram, Github, Linkedin } from "lucide-react";
export default function Header() {
  return (
    <section
      id="Header"
      className="bg-beige border-2 border-head dark:border-beige dark:bg-head gap-4 p-5 rounded-full items-center"
    >
      <div className="sm:flex items-center justify-between">
        <div className="flex gap-4 items-center">
          <img
            src={Myself}
            className="md:w-52 md:h-52 w-32 h-32 object-cover rounded-full"
            alt=""
          />
          <div itemScope>
            <h1
              itemProp="name"
              aria-label="Yunus Emre UÇAR"
              className="font-extrabold bg-primary/20 dark:bg-inherit p-1 inline-block md:text-4xl text-2xl dark:text-beige text-primary"
            >
              Yunus Emre Uçar
            </h1>
            <h2
              itemProp="jobTitle"
              aria-label="Full-Stack Web Developer"
              className="md:text-6xl text-4xl font-extrabold text-head dark:text-beige"
            >
              Full-Stack, <br /> Web Developer
            </h2>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex dark:text-beige gap-2">
            <a href="#" target="_blank">
              <Instagram />
            </a>
            <a href="#" target="_blank">
              <Github />
            </a>
            <a href="#" target="_blank">
              <Linkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
