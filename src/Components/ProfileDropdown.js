import axios from "axios";
import authentication from "../Authentication/authentication";
import api from "../Authentication/apiAddress";
import { Link } from "react-router-dom";

const handleSignOut = () => {
  const values = authentication();
  if (values.authenticated) {
    axios
      .post(`${api}/signout`)
      .then((res) => {
        axios.defaults.headers.common["Authorization"] = "";

        const FBIdToken = `Bearer `; //Manish
        localStorage.setItem("FBIdToken", FBIdToken); //Manish
        console.log(res.data);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  } else {
    console.error("Hahahah");
  }
};

const ProfileDropdown = (props) => {
  const values = authentication();
  return (
    <div
      className={`${
        values.authenticated == false ? "h-20" : "h-40"
      } text-navbar w-40 lg:w-1/2 bg-slate-200 rounded-xl absolute top-16 right-6 lg:right-40 flex flex-col items-center justify-center px-2`}
    >
      {!values.authenticated && (
        <Link
          to="/signin"
          className="text-navbar w-4/5 h-12 flex justify-center items-center border border-navbar font-semibold rounded-xl"
        >
          <div
            className=" "
            onClick={() => {
              props.setProfileDropdownVisibility(false);
              console.log(props.profileDropdownVisibility);
            }}
          >
            Sign In / <br /> Sign Up
          </div>
        </Link>
      )}
      {values.authenticated && (
        <>
          <div className="profile hover:bg-navbar hover:text-white hover:cursor-pointer w-4/5 h-12 flex justify-center items-center border border-navbar font-semibold rounded-xl">
            Profile
          </div>
          <div
            className="hover:bg-navbar hover:text-white hover:cursor-pointer w-4/5 h-12 flex justify-center items-center border border-navbar font-semibold rounded-xl mt-4"
            onClick={() => {
              handleSignOut();
            }}
          >
            Sign Out
          </div>
        </>
      )}
    </div>
  );
};

export default ProfileDropdown;
