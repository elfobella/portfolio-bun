export default function Card() {
  return (
    <div className="max-w-sm bg-beige border-2 border-head rounded-2xl  dark:bg-head dark:border-beige">
      <a href="#">
        <img
          className="rounded-t-lg"
          src="/docs/images/blog/image-1.jpg"
          alt=""
        />
      </a>
      <div className="p-5 text-start">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-head dark:text-beige">
            Noteworthy technology acquisitions 2021
          </h5>
        </a>
        <p className="mb-3 font-normal text-head/70 dark:text-beige/70">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <a
          href="#"
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
      </div>
      <div className="p-2 flex gap-2">
        <span className="inline-block text-head  border-2 border-head hover:bg-head hover:text-beige dark:hover:bg-beige dark:hover:text-head  dark:border-beige dark:text-beige rounded-lg px-3 py-1 text-sm font-semibold">
          <a href="#skills">#Laravel</a>
        </span>
        <span className="inline-block text-head  border-2 border-head hover:bg-head hover:text-beige dark:hover:bg-beige dark:hover:text-head  dark:border-beige dark:text-beige rounded-lg px-3 py-1 text-sm font-semibold">
          <a href="#skills">#Inertia</a>
        </span>
        <span className="inline-block text-head  border-2 border-head hover:bg-head hover:text-beige dark:hover:bg-beige dark:hover:text-head  dark:border-beige dark:text-beige rounded-lg px-3 py-1 text-sm font-semibold">
          <a href="#skills">#Reactjs</a>
        </span>
      </div>
    </div>
  );
}
