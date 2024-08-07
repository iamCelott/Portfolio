import { ReactNode } from "react";

type MasteryCardProps = {
  img:
    | "/svg/LanguageIcon/HTML5_logo_and_wordmark.svg"
    | "/svg/LanguageIcon/CSS3_logo_and_wordmark.svg"
    | "/svg/LanguageIcon/Unofficial_JavaScript_logo_2.svg"
    | "/svg/LanguageIcon/Typescript_logo_2020.svg"
    | "/svg/LanguageIcon/express-svgrepo-com.svg"
    | "/svg/LanguageIcon/React-icon.svg"
    | "/svg/LanguageIcon/Tailwind_CSS_Logo.svg"
    | "/svg/LanguageIcon/Postgresql_elephant.svg"
    | "/svg/LanguageIcon/mysql-logo-svgrepo-com.svg"
    | "/svg/LanguageIcon/php-icon.svg"
    | "/svg/LanguageIcon/Laravel-icon.svg";
  title?: string;
  children: ReactNode;
  href: string;
  aos?: string;
  aosDuration?: string;
};

const MasteryCard = (props: MasteryCardProps) => {
  return (
    <div
      data-aos={props.aos}
      data-aos-duration={props.aosDuration}
      className="w-1/2 lg:w-1/3 flex flex-col py-3 px-2 hover:bg-[rgba(255,255,255,0.1)] duration-200"
    >
      <img
        src={props.img}
        alt={props.title}
        className="w-[45px] h-[45px] select-none"
      />
      <a href={props.href} target="_blank">
        <span className="relative underline-animation pt-3 font-semibold select-none">
          {props.title}
        </span>
      </a>
      <div className="h-1/2 overflow-auto lg:overflow-hidden">
        <p className="text-[12px] pointer-events-none select-none">
          {props.children}
        </p>
      </div>
    </div>
  );
};

export default MasteryCard;
