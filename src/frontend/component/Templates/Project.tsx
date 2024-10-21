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
          dataAosDelay="0"
          href="https://desa-genggelang.vercel.app/"
          github="https://github.com/iamCelott/playit-competition"
          img="/img/project-3.png"
          title="Desa Genggelang"
          desc="Desa Genggelang is a website dedicated to showcasing the beauty and cultural richness of Genggelang Village, located in Indonesia. The site highlights the village’s natural landscapes, community activities, and historical significance. It offers information about local traditions, tourism opportunities, and sustainable development projects that enhance the livelihood of its residents. Through this platform, visitors can explore the unique charm of Genggelang while learning about its commitment to preserving culture and promoting eco-friendly tourism."
        >
          <img src="/svg/React-icon.svg" alt="" className="w-7" />
          <img src="/svg/tailwind-svgrepo-com.svg" alt="" className="w-8" />
          <img
            src="/svg/LanguageIcon/framer-motion.svg"
            alt=""
            className="w-6"
          />
          <img
            src="/svg/typescript-official-svgrepo-com.svg"
            className="w-7"
            alt=""
          />
        </CardProject>
        <CardProject
          dataAos="fade-left"
          dataAosDelay="0"
          href="https://onewaygotrip.com/"
          github="https://github.com/iamCelott/OneWayGoTrip"
          img="/img/project-4.png"
          title="OneWayGoTrip"
          desc="Onewaygo Trip is a travel agency born from a friendship with a shared passion for adventure. It offers curated travel packages to stunning Indonesian destinations like Labuan Bajo and Lombok. The agency focuses on providing memorable experiences, showcasing the natural beauty of Indonesia, with future plans to expand its offerings across the country. The team is committed to affordable pricing, excellent service, and unique travel experiences for their clients."
        >
          <img
            src="/svg/LanguageIcon/Laravel-icon.svg"
            alt=""
            className="w-7"
          />
          <img src="/svg/tailwind-svgrepo-com.svg" alt="" className="w-8" />
        </CardProject>
        <CardProject
          dataAos="fade-right"
          dataAosDelay="0"
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
        >
          <img src="/svg/React-icon.svg" alt="" className="w-7" />
          <img src="/svg/tailwind-svgrepo-com.svg" alt="" className="w-8" />
          <img
            src="/svg/typescript-official-svgrepo-com.svg"
            className="w-7"
            alt=""
          />
        </CardProject>
        <CardProject
          dataAos="fade-left"
          dataAosDelay="0"
          href="https://askwai.vercel.app/"
          github="https://github.com/iamCelott/AskWai"
          img="/img/project-2.jpg"
          title="AskWai"
          desc="AskWai is an innovative platform leveraging AI technology powered by Groq SDK to provide interactive and informative experiences through chat. With a focus on enhancing connectivity between humans and technology, AskWai inspires users to explore diverse topics, obtain quick and accurate solutions, and foster more progressive and adaptive interactions in seeking information."
        >
          <img src="/svg/React-icon.svg" alt="" className="w-7" />
          <img src="/svg/tailwind-svgrepo-com.svg" alt="" className="w-8" />
          <img
            src="/svg/typescript-official-svgrepo-com.svg"
            className="w-7"
            alt=""
          />
        </CardProject>
      </div>
    </div>
  );
};

export default Project;
