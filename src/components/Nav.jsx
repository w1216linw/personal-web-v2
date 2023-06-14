import Image from "next/image";
import Link from "next/link";

const Nav = ({ scrollTo, refs }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 h-24 bg-[--clr-primary-9] shadow-md shadow-[--clr-accent] grid xl:grid-cols-12 grid-cols-9 items-center text-[--clr-secondary-2]">
      <Image
        src="/images/logo.svg"
        alt="logo"
        width={60}
        height={60}
        className="col-start-2 "
      />
      <Link
        href="mailto:w1216lin@gmail.com"
        className="ff-accent xl:col-start-3 xl:col-end-5"
      >
        w1216lin@gmail.com
      </Link>
      <nav className="flex justify-between items-center xl:col-start-9 xl:col-end-12 col-start-6 col-end-9">
        <button
          onClick={() => scrollTo(refs.homeRef)}
          className="ff-accent uppercase"
        >
          home
        </button>
        <button
          onClick={() => scrollTo(refs.aboutRef)}
          className="ff-accent uppercase"
        >
          about
        </button>
        <button
          onClick={() => scrollTo(refs.projectsRef)}
          className="ff-accent uppercase"
        >
          projects
        </button>
        <a
          href="/files/resume.pdf"
          target="_blank"
          className="ff-accent uppercase"
        >
          resume
        </a>
      </nav>
    </header>
  );
};

export default Nav;
