import { FaBars, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const ClientHomeNavbar = () => {
  return (
    <div className="flex bg-navbar w-full h-16 z-50 fixed text-white justify-center">
      <div className="nav-content flex flex-row w-full max-w-screen-4xl h-full justify-center">
        <div className="sm-nav  w-1/4 h-full lg:hidden flex justify-center items-center">
          <FaBars className="text-2xl" />
        </div>
        <div className="logo w-2/4 md:w-1/4 h-full  flex justify-center items-center">
          <Link to="/">
            <span className="text-4xl font-extrabold p-2 hover:cursor-pointer">
              eLegal
            </span>
          </Link>
        </div>
        <div className="nav w-2/5 max-w-screen-xl h-full hidden md:flex justify-between items-center  text-lg font-semibold">
          <Link to="/">
            <div className="hover:border-b-2 hover:cursor-pointer px-4 py-2">
              Home
            </div>
          </Link>
          <div className="hover:border-b-2 hover:cursor-pointer px-4 py-2">
            NAV1
          </div>
          <div className="hover:border-b-2 hover:cursor-pointer px-4 py-2">
            NAV1
          </div>
          <div className="hover:border-b-2 hover:cursor-pointer px-4 py-2">
            NAV1
          </div>
          <div className="hover:border-b-2 hover:cursor-pointer px-4 py-2">
            NAV1
          </div>
        </div>
        <div className="account w-1/4 h-full  flex justify-center items-center flex-row space-x-8">
          <FaUser className="text-3xl md:hidden" />
          <Link to="/signin">
            <div className="signup h-full  md:flex justify-center items-center hidden">
              <span className="text-md px-4 py-2 border text-white text-black rounded-xl hover:cursor-pointer hover:-translate-y-0.5">
                Sign In / Sign Up
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ClientHomeNavbar;
