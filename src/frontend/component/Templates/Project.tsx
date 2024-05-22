import { Typewriter } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Project = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-3/4 sm:w-[30rem] md:w-[35rem] lg:w-[45rem] xl:w-[60rem] pt-5 pb-52 mx-auto text-white select-none">
      <div>
        <span className="text-2xl lg:text-3xl font-bold pt-3 font-[poppins]">
          Projects
        </span>
        <br />
        <Typewriter
          words={[
            "These are some of the projects I made with the technology I master",
          ]}
          typeSpeed={20}
        />
      </div>
      <div className="w-full">
        <div
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-easing="ease"
          data-aos-delay="1600"
        >
          <div className="w-full bg-[rgba(255,255,255,0.1)] hover:scale-105 duration-200 my-5 flex flex-col md:flex-row brightness-parent color-hover-text-parent text-opacity-parent">
            <a
              href="https://ninumovie.vercel.app/"
              target="_blank"
              className="w-full md:w-2/4 p-3 relative"
            >
              <img
                src="/img/project-1.png"
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
                  Ninu Movie
                </h1>
                <p className="text-sm xl:text-lg h-[100px] xl:h-[150px] overflow-auto scrollbar-thin scrollbar-thumb-[rgba(255,255,255,0.3)] scrollbar-track-[rgba(255,255,255,0.1)]">
                  NinuMovie is a film documentation platform that utilizes React
                  technology and the TMDB API. With easy access to thousands of
                  film titles and detailed information about each film, users
                  can quickly and conveniently discover and explore their
                  favorite movies. With interactive features and a clean
                  interface, NinuMovie delivers a fun and informative cinematic
                  experience.
                </p>
              </div>

              <div className="flex justify-between">
                <div className="flex gap-3">
                  <img
                    src="/public/svg/React-icon.svg"
                    alt=""
                    className="w-7 animate-spin"
                  />
                  <img
                    src="/public/svg/tailwind-svgrepo-com.svg"
                    alt=""
                    className="w-7"
                  />
                  <img
                    src="/public/svg/typescript-official-svgrepo-com.svg"
                    className="w-7"
                    alt=""
                  />
                </div>

                <a
                  href="https://github.com/iamCelott/NinuMovie"
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
      </div>
    </div>
  );
};

export default Project;
