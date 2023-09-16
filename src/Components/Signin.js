import axios from "axios";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import api from "../Authentication/apiAddress";

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [cursorLoading, setCursorLoading] = useState(false);
  const [errorObject, setErrorObject] = useState({});

  const handleLogin = (e) => {
    const userData = {
      email: email,
      password: password,
    };

    axios
      .post(`${api}/login`, userData)
      .then((res) => {
        console.log(res.data);
        const token = res.data.token; //Manish
        const FBIdToken = `Bearer ${token}`; //Manish
        localStorage.setItem("FBIdToken", FBIdToken); //Manish
        axios.defaults.headers.common["Authorization"] = FBIdToken; //Manish




        setCursorLoading(false);
        navigate("/");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.response.data);
        setErrorObject(err.response.data);
        setCursorLoading(false);
      });
  };

  return (
    <div className="h-full w-full flex flex-col relative justify-betwen bg-bluebg rounded-b-3xl rounded-r-3xl">
      {Object.keys(errorObject).length === 0 ? (
        <div></div>
      ) : (
        <div className="error bg-red-600 text-white rounded-sm w-60 flex absolute mb-8 top-0 z-50 left-0 mx-auto right-0 justify-center text-center">
          {"email" in errorObject && `Email ${errorObject.email}\n`}
          {"password" in errorObject && `Password ${errorObject.password}`}
          {"general" in errorObject && `${errorObject.general}`}
          {"error" in errorObject && `Email or Password doesn't match`}
        </div>
      )}
      <div className="mt-12 text-3xl justify-center flex font-bold text-white">
        <p>Welcome Back!</p>
      </div>
      <div className="h-4/5">
        <form>
          <div className="w-full mx-auto ">
            <div className=" mx-auto w-10/12 md:w-8/12 mt-10 ">
              <label className="text-white font-semibold text-lg">
                Email
                <br />
              </label>
              <input
                type="text"
                className="w-full h-8 rounded-sm outline-none hover:ring-1 focus:ring-2 focus:ring-white  hover:ring-white bg-slate-200 p-2 mb-2 border-slate-500"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <br />
              <label className="text-white font-semibold text-lg">
                Password
                <br />
              </label>
              <input
                type="password"
                className="w-full h-8 rounded-sm outline-none hover:ring-1 focus:ring-2 focus:ring-white  hover:ring-white bg-slate-200 p-2 mb-2 border-slate-500"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              ></input>
              <Link to="/forgot-password">
                <p className="text-sm ml-2 mt-1 text-skyblue">
                  Forgot Password?
                </p>
              </Link>
            </div>
          </div>
          <div className="flex justify-center mt-12 h-10">
            <input
              type="button"
              value="Sign In"
              className={`bg-white text-sky-600 text-xl font-bold w-3/12 rounded-md pb-1 ${
                cursorLoading ? "hover:cursor-wait" : "hover:cursor-pointer"
              }`}
              onClick={() => {
                handleLogin();
                setCursorLoading(true);
                setTimeout(() => {
                  setErrorObject({});
                }, 2000);
              }}
            />
          </div>
        </form>
      </div>
      <div></div>
    </div>
  );
};
export default Signin;
