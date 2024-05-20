import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Cursor, Typewriter } from "react-simple-typewriter";

const HeroContent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navActive, setNavActive] = useState("");

  useEffect(() => {
    AOS.init();

    if (window.innerWidth >= 640) {
      setIsMenuOpen(true);
    }

    if (window.location.pathname === "/") {
      setNavActive("home");
    } else if (window.location.pathname === "/mastery") {
      setNavActive("mastery");
    } else if (window.location.pathname === "/project") {
      setNavActive("project");
    }
  }, []);

  const handleHamburger = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  const handleMenu = (path: string) => (e: any) => {
    e.preventDefault;
    setNavActive(path);
  };

  return (
    <div
      className="font-[poppins] overflow-hidden relative text-white w-3/4 sm:w-[30rem] md:w-[35rem] lg:w-[45rem] xl:w-[60rem] mx-auto pt-3"
      id="Hero-Content"
    >
      <span className="font-semibold font-[inder] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
        <div>
          <span className="text-yellow-600">Hi, {""}</span>
          <span className="border-b-2 border-[rgba(255,255,255,0.2)]">
            <Typewriter words={["i'm Chandra"]} loop />
            <Cursor cursorColor="white" />
          </span>
        </div>
      </span>
      <div className="flex gap-5 sm:w-[25rem] md:w-[30rem] lg:w-[40rem] xl:w-[50rem] items-center py-7 mx-auto">
        <a
          href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRzCpVPbwjXXhGrvWnGrMBMrWhcWWvWVfLVTQrZXLzCvGnvdcPTHCzLKqMGHNLKSlvTBhQjx"
          target="_blank"
        >
          <div className="w-24 md:w-32 xl:w-44 rounded-full overflow-hidden p-1 border-2 object-cover border-[rgba(255,255,255,0.3)]">
            <img src="img/profile-pic.jpg" alt="" className="rounded-full" />
          </div>
        </a>

        <div className="flex flex-col">
          <span className="md:text-lg lg:text-2xl xl:text-3xl">
            Dharma Chandra Viriya
          </span>
          <div className=" flex justify-between text-[0.55rem] md:text-[0.7rem] lg:text-[15px]">
            <span className="opacity-50">@Chandra</span>
            <span>
              • Based On{" "}
              <a
                className="underline-animation relative hover:text-gray-200"
                target="_blank"
                href="https://www.google.co.id/maps/place/Kota+Mataram,+Nusa+Tenggara+Bar./@-8.5886589,116.0790299,13z/data=!3m1!4b1!4m6!3m5!1s0x2dcdbf591a7f5ec7:0x830b122bdd101dc5!8m2!3d-8.5970808!4d116.1004894!16zL20vMDRuOTVt?entry=ttu"
              >
                Mataram
              </a>
            </span>
          </div>
        </div>
      </div>

      {/* Hamburger Button */}
      <div className="flex flex-col gap-1 absolute right-0 top-6 z-10">
        <div
          className={`duration-300 ${
            isMenuOpen ? "w-1 rotate-[180deg]" : "w-4"
          } h-[1.5px] bg-white`}
        ></div>
        <div
          className={`duration-300 ${
            isMenuOpen ? "w-2" : "w-4"
          } h-[1.5px] bg-white`}
        ></div>
        <div
          className={`duration-300 ${
            isMenuOpen ? "w-3 rotate-[-180deg]" : "w-4"
          } h-[1.5px] bg-white`}
        ></div>
      </div>
      <input
        type="checkbox"
        onChange={handleHamburger}
        className="absolute top-5 z-30 right-0 w-[18px] h-[18px] opacity-0 cursor-pointer"
      />

      {/* Hamburger Option */}
      <div
        id="HamburgerMenu"
        className={`duration-[0.4s] flex flex-col absolute ${
          isMenuOpen ? "right-0" : "right-[-70%]"
        } top-10 backdrop-blur-xl bg-[rgba(255,255,255,0.1)] rounded-tl-xl rounded-bl-xl rounded-br-xl overflow-hidden`}
      >
        <div className="flex flex-col gap-1">
          <Link to="/">
            <div
              onClick={handleMenu("home")}
              className="flex items-center gap-2 py-[3px] pr-6 md:pr-10 lg:pr-20 pl-2 cursor-pointer hover:bg-[rgba(255,255,255,0.2)]"
            >
              <img
                src="/svg/white-king-svgrepo-com.svg"
                alt=""
                className="w-3 h-3 lg:w-5 lg:h-5"
              />
              <span
                className={`text-sm lg:text-lg xl:text-xl ${
                  navActive === "home" ? "text-yellow-600" : "text-white"
                }`}
              >
                Home
              </span>
            </div>
          </Link>

          <Link to="/mastery">
            <div
              onClick={handleMenu("mastery")}
              className="flex items-center gap-2 py-[3px] pr-6 md:pr-10 lg:pr-20 pl-2 cursor-pointer hover:bg-[rgba(255,255,255,0.2)]"
            >
              <img
                src="/svg/white-queen-svgrepo-com.svg"
                alt=""
                className="w-3 h-3 lg:w-5 lg:h-5"
              />
              <span
                className={`text-sm lg:text-lg xl:text-xl ${
                  navActive === "mastery" ? "text-yellow-600" : "text-white"
                }`}
              >
                Mastery
              </span>
            </div>
          </Link>

          <Link to="/project">
            <div
              onClick={handleMenu("project")}
              className="flex items-center gap-2 py-[3px] pr-6 md:pr-10 lg:pr-20 pl-2 cursor-pointer hover:bg-[rgba(255,255,255,0.2)]"
            >
              <img
                src="/svg/white-bishop-svgrepo-com.svg"
                alt=""
                className="w-3 h-3 lg:w-5 lg:h-5"
              />
              <span
                className={`text-sm lg:text-lg xl:text-xl ${
                  navActive === "project" ? "text-yellow-600" : "text-white"
                }`}
              >
                Project
              </span>
            </div>
          </Link>
          <a
            href="https://api.whatsapp.com/send/?phone=6282340966694&text=Hi+Chandra!+Nice+To+Meet+You...&type=phone_number&app_absent=0"
            target="_blank"
          >
            <div className="flex items-center gap-2 py-[3px] pr-6 md:pr-10 lg:pr-20 pl-2 cursor-pointer hover:bg-[rgba(255,255,255,0.2)]">
              <img
                src="/svg/white-knight-svgrepo-com.svg"
                alt=""
                className="w-3 h-3 lg:w-5 lg:h-5"
              />{" "}
              <span className="text-sm lg:text-lg xl:text-xl">Contact</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
