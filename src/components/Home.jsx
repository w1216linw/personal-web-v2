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
          A Frontend engineer passionate about learning and committed to
          continually improving my knowledge.
        </p>
      </div>
    </section>
  );
};

export default Home;
