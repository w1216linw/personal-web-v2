import Image from "next/image";
import Link from "next/link";

const SingleProject = ({ project }) => {
  return (
    <div className="grid sm:grid-cols-5 p-5 max-w-6xl m-auto w-full h-min gap-5 items-start">
      <div className="relative w-full sm:max-w-md max-w-xs aspect-video sm:col-span-2 rounded-lg overflow-hidden">
        <Image
          src={`/images/${project.key}.jpg`}
          alt={project.name}
          fill
          style={{ objectFit: "cover", objectPosition: "top" }}
        />
      </div>
      <div className="sm:col-start-3 sm:col-end-7 flex flex-col gap-6">
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
