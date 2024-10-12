interface CardProp {
  title: string;
  desc: string;
  link: string;
  langs: string[];
  hasUrl: boolean;
}

export default function Card({ title, desc, link, langs, hasUrl }: CardProp) {
  return (
    <div className="max-w-sm flex flex-col bg-beige border-2 border-head rounded-2xl  dark:bg-head dark:border-beige">
      <div className="p-5 flex-1 text-start">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-head dark:text-beige">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-head/70 dark:text-beige/70">
          {desc}
        </p>
        {hasUrl && (
          <a
            href={link}
            className="inline-flex items-center px-3 py-2 text-sm font-bold text-center text-head  border-2 border-head hover:bg-head hover:text-beige dark:hover:bg-beige dark:hover:text-head  dark:border-beige dark:text-beige rounded-lg transition-all focus:ring-blue-300 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        )}
      </div>
      <div className="pb-5 px-3 grid grid-cols-3 gap-2">
        {langs.map((lang) => (
          <span className="inline-block text-head  border-2 border-head hover:bg-head hover:text-beige dark:hover:bg-beige dark:hover:text-head  dark:border-beige dark:text-beige rounded-lg p-1 sm:text-sm text-xs font-semibold">
            <a href="#skills">#{lang}</a>
          </span>
        ))}
      </div>
    </div>
  );
}
