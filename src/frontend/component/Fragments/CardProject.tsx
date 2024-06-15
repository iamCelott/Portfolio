import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

type CardProjectProps = {
  dataAos: string;
  dataAosDelay: string;
  href: string;
  img: string;
  title: string;
  desc: string;
  github: string;
};
const CardProject = ({
  dataAos,
  dataAosDelay,
  href,
  img,
  title,
  desc,
  github,
}: CardProjectProps) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div
        data-aos={dataAos}
        data-aos-duration="500"
        data-aos-easing="ease"
        data-aos-delay={dataAosDelay}
      >
        <div className="w-full bg-[rgba(255,255,255,0.1)] hover:scale-105 duration-200 my-5 flex flex-col md:flex-row brightness-parent color-hover-text-parent text-opacity-parent">
          <a
            href={href}
            target="_blank"
            className="w-full md:w-2/4 p-3 relative"
          >
            <img
              src={img}
              alt=""
              className="w-full h-full brightness-child object-cover"
            />
            <h1 className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-xl opacity-0 text-opacity-child duration-200">
              Visit Site {"->"}
            </h1>
          </a>
          <div className="pb-3 pl-3 pr-3 md:pt-3 md:w-2/4 flex flex-col justify-between">
            <div className="pb-3">
              <h1 className="font-semibold text-xl lg:text-2xl color-hover-text-child duration-200 pb-2">
                {title}
              </h1>
              <p className="text-sm xl:text-lg h-[100px] xl:h-[150px] overflow-auto scrollbar-thin scrollbar-thumb-[rgba(255,255,255,0.3)] scrollbar-track-[rgba(255,255,255,0.1)]">
                {desc}
              </p>
            </div>

            <div className="flex justify-between">
              <div className="flex gap-3">
                <img src="/svg/React-icon.svg" alt="" className="w-7" />
                <img
                  src="/svg/tailwind-svgrepo-com.svg"
                  alt=""
                  className="w-7"
                />
                <img
                  src="/svg/typescript-official-svgrepo-com.svg"
                  className="w-7"
                  alt=""
                />
              </div>

              <a
                href={github}
                target="_blank"
                className="text-blue-500 flex gap-3"
              >
                <span className="relative">
                  <span className="underline-animation">View Project</span>
                </span>
                <img
                  src="/svg/GitHub_Invertocat_Logo.svg"
                  alt=""
                  className="w-7"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardProject;
