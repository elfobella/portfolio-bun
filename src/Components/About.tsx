import Layout from "./Layout";

export default function About() {
  return (
    <section id="about">
      <Layout title="About Me">
        <p className="text-head text-ellipsis px-2 sm:text-2xl font-medium dark:text-beige">
          My name is Yunus Emre UÇAR. I was born in Kocaeli, Turkey. I attended
          Levent Kırca Oya Başar Primary School for my primary and middle school
          education. My father passed away when I was 11 years old. Generally,
          my life has revolved around playing games. I played League of Legends
          and Fortnite, the latter of which I played professionally and
          qualified for the World Championship. I attended high school at İzmit
          TAML and university at Yozgat Bozok. I have been working as a
          Fullstack Web Developer for over four years now.
        </p>
        <strong>Contact: yunusemreucr11@gmail.com</strong>
      </Layout>
    </section>
  );
}
