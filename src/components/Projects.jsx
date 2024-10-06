import { priProjects } from "@/lib/data";
import HiddenProjects from "./HiddenProjects";
import SectionLayout from "./SectionLayout";
import SectionTitle from "./SectionTitle";
import SingleProject from "./SingleProject";

const Projects = ({ projectsRef }) => {
  return (
    <section ref={projectsRef} className="min-h-[80vh] py-[5rem] space-y-28">
      <SectionTitle title="Projects" />
      <SectionLayout>
        {priProjects.map((project) => (
          <SingleProject project={project} key={project.key} />
        ))}
        <HiddenProjects />
      </SectionLayout>
    </section>
  );
};

export default Projects;
