const AboutMe = () => {
  return (
    <div className="w-3/4 sm:w-[30rem] md:w-[35rem] lg:w-[45rem] xl:w-[60rem] py-3 lg:pt-16 pb-52 mx-auto text-white font-[poppins]">
      <div className="md:max-w-xl lg:max-w-3xl xl:max-w-5xl">
        <div className="flex justify-between">
          <div
            className="w-[320px] lg:w-[400px] flex flex-col "
            data-aos="fade-right"
            data-aos-duration="500"
          >
            <h1 className=" text-2xl lg:text-3xl font-bold py-3">ABOUT ME</h1>
            <p className="text-sm lg:text-[1.2rem] text-opacity-75 tracking-wide lg:tracking-widest ">
              My name is Dharma Chandra Viriya, I was born in Mataram, Lombok,
              West Nusa Tenggara, Indonesia. Currently I am learning about the
              world of IT, especially in the field of Web Developer. I have a
              feeling of liking and interest every time I learn something new. I
              have experience in the IT world for approximately 2 years, and I
              enjoy my journey. And I am currently studying at SMKN 2 Mataram.
            </p>
          </div>

          <div
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="1000"
            className="w-[40%] xl:w-[30%] h-full p-1 bg-[rgba(255,255,255,0.2)] backdrop-blur-lg hidden md:inline-block overflow-hidden"
          >
            <img
              className="duration-300 object-cover w-full h-full hover:scale-125"
              src="/img/hero-pp.jpg"
              alt=""
            />
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="500"
            data-aos-delay="500"
            className="hidden xl:inline-block"
          >
            <h1 className=" text-2xl lg:text-3xl font-bold py-3">
              Get in Touch
            </h1>
            <div className="w-full h-[240px] flex flex-col gap-3">
              <div className="flex items-center justify-start gap-3">
                <img
                  className="w-16 hover-drop-shadow"
                  src="/svg/Telegram_2019_Logo.svg"
                  alt=""
                />
                <a href="http://t.me/iamCelott" target="_blank">
                  <span className="relative underline-animation">Telegram</span>
                </a>
              </div>
              <div className="flex items-center justify-end gap-3">
                <a
                  href="https://www.instagram.com/dcviriya?igsh=MWIzd2hqNTI5cGR0bA=="
                  target="_blank"
                >
                  <span className="relative underline-animation">
                    Instagram
                  </span>
                </a>
                <img
                  className="w-16 hover-drop-shadow"
                  src="/svg/Instagram_logo_2022.svg"
                  alt=""
                />
              </div>
              <div className="flex items-center justify-start gap-3">
                <img
                  className="w-16 hover-drop-shadow"
                  src="/svg/GitHub_Invertocat_Logo.svg"
                  alt=""
                />
                <a href="https://github.com/iamCelott" target="_blank">
                  <span className="relative underline-animation">Github</span>
                </a>
              </div>
              <div className="flex items-center justify-end gap-3">
                <a
                  href="https://www.linkedin.com/in/dharma-chandra-viriya-286497305/"
                  target="_blank"
                >
                  <span className="relative underline-animation">
                    Linked in
                  </span>
                </a>
                <img
                  className="w-16 hover-drop-shadow"
                  src="/svg/linkedin-svgrepo-com.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className="max-w-[320px] md:max-w-none py-5 xl:hidden"
          data-aos="fade-left"
          data-aos-duration="500"
          data-aos-delay="500"
        >
          <h1 className=" text-2xl lg:text-3xl font-bold py-3">Get in Touch</h1>
          <div className="w-full md:h-52 flex flex-col gap-3 sm:gap-7 relative">
            <div className="flex items-center justify-start gap-3 md:absolute md:top-0 md:left-0">
              <img
                className="w-16 hover-drop-shadow"
                src="/svg/Telegram_2019_Logo.svg"
                alt=""
              />
              <a href="http://t.me/iamCelott" target="_blank">
                <span className="relative underline-animation">Telegram</span>
              </a>
            </div>
            <div className="flex items-center justify-end sm:justify-start md:justify-end gap-3 md:absolute md:top-1/2 md:left-20">
              <a
                href="https://www.instagram.com/dcviriya?igsh=MWIzd2hqNTI5cGR0bA=="
                target="_blank"
                className="sm:order-2 md:order-1"
              >
                <span className="relative underline-animation">Instagram</span>
              </a>
              <img
                className="w-16 hover-drop-shadow sm:order-1 md:order-2"
                src="/svg/Instagram_logo_2022.svg"
                alt=""
              />
            </div>
            <div className="flex items-center justify-start gap-3 md:absolute md:top-1/2 md:right-20">
              <img
                className="w-16 hover-drop-shadow"
                src="/svg/GitHub_Invertocat_Logo.svg"
                alt=""
              />
              <a href="https://github.com/iamCelott" target="_blank">
                <span className="relative underline-animation">Github</span>
              </a>
            </div>
            <div className="flex items-center justify-end sm:justify-start md:justify-end gap-3 md:absolute md:top-0 md:right-0">
              <a
                href="https://www.linkedin.com/in/dharma-chandra-viriya-286497305/"
                target="_blank"
                className="sm:order-2 md:order-1"
              >
                <span className="relative underline-animation">Linked in</span>
              </a>
              <img
                className="w-16 hover-drop-shadow sm:order-1 md:order-2"
                src="/svg/linkedin-svgrepo-com.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
