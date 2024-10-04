import Image from "next/image";
import Link from "next/link";

const SingleProject = ({ project }) => {
  return (
    <div className="col_parent">
      <div className="col_left_children">
        <Image
          src={`/images/${project.key}.png`}
          alt={project.name}
          width={"1200"}
          height={"960"}
          className="main_project_img"
        />
      </div>
      <div className=" col_right_children flex flex-col gap-6 w-full">
        <div className="space-y-3">
          <h2 className="xl:text-2xl font-medium">{project.name}</h2>
          <p>{project.description}</p>
          <div className="flex gap-2">
            {project.stack.map((tech) => (
              <div
                key={tech}
                className="text-[--clr-accent] py-1 px-2 rounded-md bg-[--clr-accent-light]"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-2">
          <Link
            href={project.code}
            target="_blank"
            className="bg-[--clr-secondary-5] text-[--clr-primary-9] font-bold px-5 py-2 rounded-md hover:bg-[--clr-secondary-5-light] hover:-translate-y-1 transition-transform"
          >
            Code
          </Link>
          <Link
            href={project.live}
            target="_blank"
            className="bg-[--clr-secondary-5] text-[--clr-primary-9] font-bold px-5 py-2 rounded-md hover:bg-[--clr-secondary-5-light] hover:-translate-y-1"
          >
            Live
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
