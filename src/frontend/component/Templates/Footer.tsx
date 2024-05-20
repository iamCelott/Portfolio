const Footer = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center font-[poppins] text-white gap-2 py-5 bg-[rgba(0,0,0,0.3)]">
        <div className="text-sm flex gap-2 items-center">
          <span>This Web Created Using: </span>
          <a href="https://react.dev/" target="_blank">
            <img
              src="/svg/LanguageIcon/React-icon.svg"
              alt=""
              className="w-6 animate-spin"
            />
          </a>
          <a href="https://tailwindcss.com/" target="_blank">
            <img
              src="/svg/LanguageIcon/Tailwind_CSS_Logo.svg"
              alt=""
              className="w-6"
            />
          </a>
        </div>
        <div className="">
          <span className="text-xs text-gray-500">
            Created by Human Named{" "}
            <span className="text-white">Dharma Chandra Viriya</span> on Earth
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
