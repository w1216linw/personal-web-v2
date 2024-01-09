import { projectNames } from "@/lib/data";
import SectionTitle from "./SectionTitle";
import SingleProject from "./SingleProject";

const Projects = ({ projectsRef }) => {
  return (
    <section ref={projectsRef} className="min-h-[80vh] py-[5rem] space-y-28">
      <SectionTitle title="Projects" />
      <div className="responsive">
        <div className="xl:col-start-3 xl:col-end-11 lg:col-start-2 lg:col-end-12 sm:col-start-1 sm:col-end-13 grid gap-y-20">
          {projectNames.map((project) => (
            <SingleProject project={project} key={project.key} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
