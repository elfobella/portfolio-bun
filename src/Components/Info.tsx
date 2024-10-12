interface InfoCardProps {
  title: string;
  desc: string;
}

export default function Info() {
  return (
    <section id="info" className="flex justify-center">
      <InfoCard title="4&#43;" desc="Year experience" />
      <InfoCard title="250&#43;" desc="Happy Clients" />
      <InfoCard title="10&#43;" desc="Projects Done!" />
    </section>
  );
}

function InfoCard({ title, desc }: InfoCardProps) {
  return (
    <div className="flex flex-col gap-2 items-center sm:[&:nth-child(2)]:px-20 [&:nth-child(2)]:px-8 sm:first:pr-20 sm:last:pl-20 first:pr-8 last:pl-8 last:border-0 border-r-2 text-head dark:text-beige border-head dark:border-beige">
      <span className="sm:text-5xl text-xl font-bold">{title}</span>
      <span className="sm:text-2xl text-center">{desc}</span>
    </div>
  );
}
