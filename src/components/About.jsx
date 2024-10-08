import { keys } from "../lib/data";
import SectionLayout from "./SectionLayout";
import SectionTitle from "./SectionTitle";

const About = ({ aboutRef }) => {
  return (
    <section ref={aboutRef} className="min-h-[80vh] py-[5rem] space-y-28">
      <SectionTitle title="About me" id="about" />
      <SectionLayout>
        <div className="col_parent">
          <div className="col_left_children">
            <h2 className="text-3xl md:text-4xl font-medium">Background</h2>
            <p className="leading-8 md:text-lg">
              I am a frontend engineer with a Bachelor&apos;s degree in Computer
              Science from Northern Illinois University. After completing my
              degree, I developed a strong passion for frontend development and
              currently focus on JavaScript, utilizing the React library to
              build various projects. I am also exploring Next.js and developing
              an app with it. Additionally, I am learning Python for backend
              development and have completed Google&apos;s UX design certificate
              courses to enhance my ability to deliver exceptional user
              experiences.
            </p>
          </div>
          <div className="col_right_children space-y-5">
            <h2 className="text-3xl md:text-4xl font-medium">Skills</h2>
            <div className="flex w-full flex-wrap gap-5">
              {keys.map((elem) => (
                <div key={elem} className="largeKey">
                  {elem}
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionLayout>
    </section>
  );
};

export default About;
