import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Form/ButtonLink";
import HoverPopover from "./Form/PopOver";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="flex items-center justify-between flex-wrap p-6  "
      style={{ boxShadow: "0px 4px 4px rgba(14, 61, 183, 0.15)" }}
    >
      <div className="flex items-center flex-shrink-0 font-bold text-[35px]">
        <Link to="/" style={{ color: "#08299B" }}>
          CareFinder
        </Link>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
        >
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full block  lg:flex lg:items-center lg:w-auto ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="text-sm lg:flex-grow p-[10px] md:w-[491px]">
          <Link
            to="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-black text-[18px] font-medium mr-4 font-display"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block mt-4 lg:inline-block lg:mt-0 text-black text-[18px] font-medium mr-4 font-display"
          >
            About
          </Link>
          <Link
            to="/findhospital"
            className="block mt-4 lg:inline-block lg:mt-0 text-black text-[18px] font-medium mr-4 font-display"
          >
            Find Hospital
          </Link>
          <HoverPopover children={undefined} />
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
