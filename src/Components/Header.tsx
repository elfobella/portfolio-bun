import Myself from "../assets/Myself.jpeg";
import { Instagram, Github, Linkedin } from "lucide-react";
export default function Header() {
  return (
    <section
      id="Header"
      className="bg-beige border-2 border-head dark:border-beige dark:bg-head gap-4 p-5 sm:rounded-full rounded-lg items-center"
    >
      <div className="flex sm:flex-row flex-col gap-4 items-center">
        <div className="flex flex-1 sm:flex-row flex-col  gap-4 items-center">
          <img
            src={Myself}
            className="w-52 h-52 object-cover rounded-full"
            alt=""
          />
          <div className="sm:text-start text-center" itemScope>
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
        <div>
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
