import { TbBrandGithubFilled } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="fixed flex flex-row items-center justify-center w-full bg-transparent">
      <div className="bg-slate-800 p-2 px-5 p-2 md:px-10 my-5 rounded-full flex flex-row items-center justify-between w-11/12 md:w-4/5">
        <h1 className="text-white text-xl font-dancing">Saravanan</h1>

        <div className="flex flex-row items-center">
          <a
            href="https://github.com/dev-saravanan/"
            target="_blank"
            className="flex flex-row items-center justify-center bg-white rounded-full p-1 md:p-2 mx-1 outline-none"
          >
            <TbBrandGithubFilled className="text-slate-800" />
          </a>

          <a
            href="https://www.linkedin.com/in/-saravanan-k/"
            target="_blank"
            className="flex flex-row items-center justify-center bg-white rounded-full p-1 md:p-2 mx-1 outline-none"
          >
            <FaLinkedinIn className="text-slate-800" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
