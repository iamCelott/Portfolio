import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="flex justify-center items-center">
      <nav className="w-3/4 sm:w-[30rem] md:w-[35rem] lg:w-[45rem] xl:w-[60rem] border-b-[1px] border-white py-3">
        <Link to="/">
          <h1 className="text-white text-center font-[poppins]">iamCelott</h1>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
