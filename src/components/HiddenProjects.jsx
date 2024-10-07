import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { secProjects } from "@/lib/data";
import { Link1Icon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const HiddenProjects = () => {
  const [openMore, setOpenMore] = useState(false);

  return (
    <div className="grid">
      <button
        className="__container_button"
        onClick={() => setOpenMore(!openMore)}
      >
        More
      </button>
      <div className={`__container ${openMore ? "__container_active" : ""} `}>
        <div className={`__border ${openMore ? "__border_active" : ""} `}></div>
        <div
          className={`__bottom_border ${
            openMore ? "__bottom_border_active" : ""
          }`}
        ></div>
        <div className="__block flex justify-center ">
          <Carousel
            className={`w-full max-w-[20rem] sm:max-w-none transition-transform duration-200 origin-top ${
              openMore ? "scale-100 delay-300" : "scale-y-0"
            }`}
          >
            <CarouselContent className="-ml-1 gap-5">
              {secProjects.map((project) => (
                <CarouselItem
                  key={project.idx}
                  className="pl-1 sm:basis-1/2 md:basis-1/3"
                >
                  <div>
                    <Image
                      src={`/images/${project.key}.jpg`}
                      alt={project.name}
                      width={"1200"}
                      height={"960"}
                    />
                  </div>
                  <Link
                    target="_blank"
                    href={project.code}
                    className="hover:underline text-lg font-bold flex items-center gap-1 justify-center"
                  >
                    <Link1Icon />
                    {project.name}
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default HiddenProjects;
// <div className="aspect-video w-64">
//   <div>
//     <Image
//       src={`/images/${project.key}.jpg`}
//       alt={project.name}
//       width={"1200"}
//       height={"960"}
//       className="main_project_img"
//     />
//   </div>
//   <div className="flex justify-center">
//     <Link
//       target="_blank"
//       className="text-lg font-bold hover:underline"
//       href={project.code}
//     >
//       {project.name}
//     </Link>
//   </div>
// </div>
