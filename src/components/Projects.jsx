import { projectNames } from "@/lib/data";
import SectionTitle from "./SectionTitle";
import SingleProject from "./SingleProject";

const Projects = ({ projectsRef }) => {
  return (
    <section ref={projectsRef} className="min-h-[80vh] py-[5rem] space-y-28">
      <SectionTitle title="Projects" />
      <div className="grid grid-cols-12">
        <div className="col-start-3 col-end-11 grid gap-y-20">
          {projectNames.map((project) => (
            <SingleProject project={project} key={project.key} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
