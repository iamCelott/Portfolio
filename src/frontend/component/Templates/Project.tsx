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
          github="https://github.com/iamCelott/NinuMovie"
          img="/img/project-1.png"
          title="NinuMovie"
          desc="NinuMovie is a film documentation platform that utilizes React
          technology and the TMDB API. With easy access to thousands of
          film titles and detailed information about each film, users can
          quickly and conveniently discover and explore their favorite
          movies. With interactive features and a clean interface,
          NinuMovie delivers a fun and informative cinematic experience."
        />
        <CardProject
          dataAos="fade-left"
          dataAosDelay="2000"
          href="https://askwai.vercel.app/"
          github="https://github.com/iamCelott/AskWai"
          img="/img/project-2.jpg"
          title="AskWai"
          desc="AskWai is an innovative platform leveraging AI technology powered by Groq SDK to provide interactive and informative experiences through chat. With a focus on enhancing connectivity between humans and technology, AskWai inspires users to explore diverse topics, obtain quick and accurate solutions, and foster more progressive and adaptive interactions in seeking information."
        />
      </div>
    </div>
  );
};

export default Project;
