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
            I am a frontend engineer with a Bachelor&apos;s degree in Computer
            Science from Northern Illinois University. After completing my
            degree, I developed a strong interest in frontend development,
            focusing on mastering HTML, CSS, and JavaScript. In the past months,
            I have delved into learning Django for backend development and am
            currently working on a project that utilizes Django on the backend
            and React on the frontend. Additionally, I have expanded my skill
            set by completing Google&apos;s UX design certificate courses,
            aiming to enhance my ability to deliver exceptional user
            experiences。
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
