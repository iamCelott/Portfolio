import { Typewriter } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import CardProject from "../Fragments/CardProject";
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
        <CardProject
          dataAos="fade-right"
          dataAosDelay="1600"
          href="https://ninumovie.vercel.app/"
          img="/img/project-1.png"
          title="NinuMovie"
          desc="NinuMovie is a film documentation platform that utilizes React
          technology and the TMDB API. With easy access to thousands of
          film titles and detailed information about each film, users can
          quickly and conveniently discover and explore their favorite
          movies. With interactive features and a clean interface,
          NinuMovie delivers a fun and informative cinematic experience."
        />
      </div>
    </div>
  );
};

export default Project;
