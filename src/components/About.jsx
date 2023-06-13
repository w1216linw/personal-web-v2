import { keys } from "../lib/data";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section id="about" className="min-h-[80vh] py-[5rem] space-y-28">
      <SectionTitle title="About me" id="about" />
      <div className="grid xl:grid-cols-12 grid-cols-9 max-w-[90rem] mx-auto">
        <div className="xl:col-start-3 xl:col-end-6 col-start-2 col-end-5 space-y-5">
          <h2 className="text-3xl font-medium">Background</h2>
          <p className="leading-8">
            I am a frontend engineer who recently graduated from Northern
            Illinois University with a bachelor's degree in Computer Science.
            After graduation, I developed a keen interest in frontend
            development and embarked on a self-learning journey to master HTML,
            CSS, and JavaScript. My primary focus is on utilizing the React
            library for development. Additionally, I have completed Google's UX
            design certificate courses to further enhance my understanding of
            delivering exceptional user experiences.
          </p>
        </div>
        <div className="xl:col-start-8 xl:col-end-11 col-start-6 col-end-9 space-y-5">
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
