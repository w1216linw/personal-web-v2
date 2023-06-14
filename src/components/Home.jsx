const Home = ({ homeRef }) => {
  return (
    <section
      ref={homeRef}
      className="grid place-content-center h-screen relative"
    >
      <div className="max-w-2xl text-center space-y-6">
        <h1 className="md:text-6xl sm:text-5xl text-3xl font-bold flex gap-4 justify-center">
          <p className="animate-[jump_1s_0ms_1]">Hi,</p>
          <p className="animate-[jump_1s_500ms_1]">I&apos;m</p>
          <p className="animate-[jump_1s_1000ms_1]">Weiwei</p>
          <p className="animate-[jump_1s_1500ms_1]">Lin.</p>
        </h1>
        <p className="md:text-xl text-base text-[--clr-primary-2]">
          A Frontend engineer that passionate about building user-centric
          interaction interface.
        </p>
        <div className="overflow-hidden absolute bottom-20 left-1/2 -translate-x-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Home;
