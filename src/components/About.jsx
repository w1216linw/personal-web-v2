import { keys } from "../lib/data";
import SectionTitle from "./SectionTitle";

const About = ({ aboutRef }) => {
  return (
    <section ref={aboutRef} className="min-h-[80vh] py-[5rem] space-y-28">
      <SectionTitle title="About me" id="about" />
      <div className="responsive max-w-[90rem] mx-auto gap-y-6">
        <div className="space-y-5 lg:col-start-3 lg:col-end-7 md:col-end-6 sm:col-start-1 sm:col-end-7">
          <h2 className="text-3xl font-medium">Background</h2>
          <p className="leading-8">
            I am a frontend engineer who recently graduated from Northern
            Illinois University with a bachelor&apos;s degree in Computer
            Science. After graduation, I developed a keen interest in frontend
            development and embarked on a self-learning journey to master HTML,
            CSS, and JavaScript. My primary focus is on utilizing the React
            library for development. Additionally, I have completed
            Google&apos;s UX design certificate courses to further enhance my
            understanding of delivering exceptional user experiences.
          </p>
        </div>
        <div className="space-y-5 lg:col-end-12 sm:col-start-8 sm:col-end-13">
          <h2 className="text-3xl font-medium">Skills</h2>
          <div className="flex w-full flex-wrap gap-5">
            {keys.map((elem) => (
              <div key={elem} className="largeKey">
                {elem}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
