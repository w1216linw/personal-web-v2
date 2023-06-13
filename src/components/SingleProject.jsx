import Image from "next/image";
import Link from "next/link";

const SingleProject = ({ project }) => {
  return (
    <div className="grid grid-cols-5 p-5 max-w-6xl m-auto w-full h-min gap-5">
      <div className="relative w-full max-w-md aspect-video col-span-2">
        <Image
          src={`/images/${project.key}.jpg`}
          alt={project.name}
          fill
          style={{ objectFit: "cover", objectPosition: "top" }}
        />
      </div>
      <div className="col-start-3 col-end-7 flex flex-col justify-between gap-5">
        <div className="space-y-3">
          <h2 className="xl:text-2xl font-medium">{project.name}</h2>
          <p>{project.description}</p>
          <div className="flex gap-2">
            {project.stack.map((tech) => (
              <div className="text-[--clr-accent] py-1 px-2 rounded-md bg-[--clr-accent-light]">
                {tech}
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-2">
          <Link
            href={project.code}
            target="_blank"
            className="bg-[--clr-secondary-5] text-[--clr-primary-9] font-bold px-5 py-2 rounded-md hover:bg-[--clr-secondary-5-light]"
          >
            Code
          </Link>
          <Link
            href={project.live}
            target="_blank"
            className="bg-[--clr-secondary-5] text-[--clr-primary-9] font-bold px-5 py-2 rounded-md hover:bg-[--clr-secondary-5-light]"
          >
            Live
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
