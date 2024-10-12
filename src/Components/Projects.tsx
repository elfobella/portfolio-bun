import Card from "./Card";
import Layout from "./Layout";

export default function Projects() {
  return (
    <section id="projects">
      <Layout title="Projects">
        {/* TODO: CARD */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card
            title="Blog application"
            desc="In this website i want to do a blog page which can be register,login, create blog,read blog,like,save."
            link="blog"
            langs={["Reactjs", "Nextjs", "Tailwindcss"]}
            hasUrl={false}
          />
          <Card
            title="Fitness,Wellness & Coaching"
            desc="This website users can find best fitness workout for himself and coaching if u want. In this website users can interact with each other real time! Find your best meal,fitness plan and enjoy with your friends!"
            link="blog"
            langs={["Reactjs", "Laravel", "Tailwindcss", "Inertiajs"]}
            hasUrl={false}
          />
        </div>
      </Layout>
    </section>
  );
}
