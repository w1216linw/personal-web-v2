import Link from "next/link";

const Footer = () => {
  return (
    <section className="border-t border-[--clr-secondary-2] py-8">
      <div className="grid grid-cols-2 place-items-center">
        <h1 className="text-xl font-bold">Weiwei Lin</h1>
        <div className="space-y-2 ">
          <h1 className="font-bold text-lg">Find me on</h1>
          <div>
            <Link
              href="https://github.com/w1216linw"
              target="_blank"
              className="flex gap-2 items-center hover:scale-105 active:scale-95 transition-transform"
            >
              <img src="/images/github.png" alt="github" className="w-5 h-5" />
              <p>GitHub</p>
            </Link>
          </div>
          <div>
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
    </section>
  );
};

export default Footer;
