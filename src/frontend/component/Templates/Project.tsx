import { Typewriter } from "react-simple-typewriter";
const Project = () => {
  return (
    <div className="w-3/4 sm:w-[30rem] md:w-[35rem] lg:w-[45rem] xl:w-[60rem] pt-5 pb-10 mx-auto text-white">
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
      <h1 className="text-center font-bold py-52 text-7xl">COMING SOON!</h1>
    </div>
  );
};

export default Project;
