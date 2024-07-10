import AOS from "aos";
import "aos/dist/aos.css";
import MasteryCard from "../Fragments/MasteryCard";
import { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
const Mastery = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-3/4 sm:w-[30rem] md:w-[35rem] lg:w-[45rem] xl:w-[60rem] pt-5 pb-10 mx-auto text-white">
      <div>
        <span className="text-2xl lg:text-3xl font-bold pt-3 font-[poppins]">
          Mastery
        </span>
        <br />
        <Typewriter
          words={["These are some of the technologies I've mastered"]}
          typeSpeed={20}
        />
      </div>

      <div
        data-aos="zoom-in-up"
        data-aos-duration="500"
        data-aos-easing="ease"
        data-aos-delay="1200"
        className="flex flex-wrap py-3 "
      >
        <MasteryCard
          img="/svg/LanguageIcon/HTML5_logo_and_wordmark.svg"
          title="HTML"
          href="https://developer.mozilla.org/en-US/docs/Web/HTML"
        >
          HTML (HyperText Markup Language) provides the basic structure for web
          pages, allowing developers to organize content such as text, images,
          and links effectively.
        </MasteryCard>
        <MasteryCard
          img="/svg/LanguageIcon/php-icon.svg"
          title="PHP"
          href="https://www.php.net/"
        >
          PHP is a server-side scripting language designed for web development,
          enabling the creation of dynamic web pages and interaction with
          databases. It’s widely used due to its simplicity and efficiency.
        </MasteryCard>
        <MasteryCard
          img="/svg/LanguageIcon/CSS3_logo_and_wordmark.svg"
          title="CSS"
          href="https://developer.mozilla.org/en-US/docs/Web/CSS"
        >
          CSS (Cascading Sytle Sheets) enhances the presentation of HTML
          elements by specifying styles like colors, fonts, and layouts,
          resulting in visually appealing websites.
        </MasteryCard>
        <MasteryCard
          img="/svg/LanguageIcon/Unofficial_JavaScript_logo_2.svg"
          title="Javascript"
          href="https://developer.mozilla.org/en-US/docs/Web/javascript"
        >
          JavaScript enables dynamic interactions on web pages, allowing for
          features like form validation, animations, and DOM manipulation to
          enhance user experience.
        </MasteryCard>
        <MasteryCard
          img="/svg/LanguageIcon/Typescript_logo_2020.svg"
          title="Typescript"
          href="https://www.typescriptlang.org/docs/"
        >
          TypeScript extends JavaScript with static typing and advanced features
          like interfaces and classes, promoting code robustness and
          maintainability.
        </MasteryCard>
        <MasteryCard
          img="/svg/LanguageIcon/express-svgrepo-com.svg"
          title="ExpressJs"
          href="https://expressjs.com/"
        >
          Express.js is a popular Node.js framework simplifying the development
          of web applications by providing tools for routing, middleware, and
          server management.
        </MasteryCard>
        <MasteryCard
          img="/svg/LanguageIcon/React-icon.svg"
          title="ReactJs"
          href="https://react.dev/"
        >
          React is a JavaScript library for building user interfaces, offering
          reusable components and a virtual DOM for efficient rendering of
          dynamic content.
        </MasteryCard>
        <MasteryCard
          img="/svg/LanguageIcon/Laravel-icon.svg"
          title="Laravel"
          href="https://laravel.com/"
        >
          Laravel, with its MVC architecture, Eloquent ORM, Blade templating,
          and robust tools, simplifies web development and is widely favored
          among PHP developers.
        </MasteryCard>
        <MasteryCard
          img="/svg/LanguageIcon/Tailwind_CSS_Logo.svg"
          title="Tailwind"
          href="https://tailwindcss.com/"
        >
          Tailwind CSS is a utility-first CSS framework streamlining the styling
          process with pre-defined utility classes for rapid development and
          customization.
        </MasteryCard>
        <MasteryCard
          img="/svg/LanguageIcon/Postgresql_elephant.svg"
          title="PostgreSql"
          href="https://www.postgresql.org/"
        >
          PostgreSQL is a reliable open-source relational database management
          system, offering features like ACID compliance, powerful indexing, and
          support for complex data types.
        </MasteryCard>
        <MasteryCard
          img="/svg/LanguageIcon/mysql-logo-svgrepo-com.svg"
          title="MySql"
          href="https://www.mysql.com/"
        >
          PostgreSQL is a reliable open-source relational database management
          system, offering features like ACID compliance, powerful indexing, and
          support for complex data types.
        </MasteryCard>
      </div>
    </div>
  );
};

export default Mastery;
