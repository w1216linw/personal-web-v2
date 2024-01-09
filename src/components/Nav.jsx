import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Nav = ({ scrollTo, refs }) => {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex justify-between px-4 sm:responsive items-center fixed top-0 left-0 right-0 z-10 h-24 bg-[--clr-primary-9] shadow-md shadow-[--clr-accent] text-[--clr-secondary-2] ">
      <Image
        src="/images/logo.svg"
        alt="logo"
        width={60}
        height={60}
        className="lg:col-start-2 col-start-1"
      />
      <Link
        href="mailto:w1216lin@gmail.com"
        className="ff-accent sm:col-start-3  navLink"
      >
        w1216lin@gmail.com
      </Link>
      <nav className="hidden sm:flex justify-between items-center xl:col-start-9 lg:col-end-12 md:col-start-8 sm:col-start-7 col-end-13">
        <button
          onClick={() => scrollTo(refs.homeRef)}
          className="ff-accent uppercase navSection"
        >
          home
        </button>
        <button
          onClick={() => scrollTo(refs.aboutRef)}
          className="ff-accent uppercase navSection"
        >
          about
        </button>
        <button
          onClick={() => scrollTo(refs.projectsRef)}
          className="ff-accent uppercase navSection"
        >
          projects
        </button>
        <a
          href="/files/resume.pdf"
          target="_blank"
          className="relative ff-accent uppercase navLink"
        >
          resume
        </a>
      </nav>
      <button className="sm:hidden" onClick={() => setOpen(!open)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <div
        className={`fixed inset-0 bg-[--clr-primary-9] flex flex-col items-start pl-12 justify-center gap-20 z-50 text-xl ${
          open ? "flex" : "hidden"
        }`}
      >
        <button
          onClick={() => setOpen(!open)}
          className="absolute top-4 right-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <button
          onClick={() => scrollTo(refs.homeRef)}
          className="ff-accent uppercase navSection mt-auto"
        >
          home
        </button>
        <button
          onClick={() => scrollTo(refs.aboutRef)}
          className="ff-accent uppercase navSection"
        >
          about
        </button>
        <button
          onClick={() => scrollTo(refs.projectsRef)}
          className="ff-accent uppercase navSection"
        >
          projects
        </button>
        <a
          href="/files/resume.pdf"
          target="_blank"
          className="relative ff-accent uppercase navLink"
        >
          resume
        </a>
        <div className="mt-auto mb-4">
          <h1 className="font-bold text-lg ">Find me on</h1>
          <div className="flex items-center gap-5">
            <Link
              href="https://github.com/w1216linw"
              target="_blank"
              className="flex gap-2 items-center hover:scale-105 active:scale-95 transition-transform"
            >
              <img src="/images/github.png" alt="github" className="w-5 h-5" />
              <p>GitHub</p>
            </Link>
            <Link
              href="https://www.linkedin.com/in/weiweilin99/"
              target="_blank"
              className="flex gap-2 items-center hover:scale-105 active:scale-95 transition-transform"
            >
              <img
                src="/images/linkedin.png"
                alt="linkedin"
                className="w-5 h-5"
              />
              <p>LinkedIn</p>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
