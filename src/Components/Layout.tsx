export default function Layout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4 items-center bg-beige dark:bg-head sm:border-2 border-head dark:border-beige dark:text-beige sm:rounded-3xl sm:pb-12 pb-4 sm:px-20">
      <h3 className="text-5xl text-center font-bold py-4">{title}</h3>
      {children}
    </div>
  );
}
