import Card from "./Card";

export default function Projects() {
  return (
    <section id="projects">
      <div className="flex flex-col gap-4 items-center bg-beige dark:bg-head border-2 border-head dark:border-beige dark:text-beige rounded-3xl pb-12 pt-4 px-20">
        <h3 className="text-5xl text-center font-bold py-4">Projects</h3>
        {/* TODO: CARD */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
}
