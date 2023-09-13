import axios from "axios";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    const userData = {
      email: email,
      password: password,
    };

    axios
      .post(
        "https://asia-south1-socialape-3f6b4.cloudfunctions.net/api/login",
        userData
      )
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err.code);
      });
  };

  return (
    <div className="h-full w-full flex flex-col justify-betwen bg-bluebg rounded-b-3xl rounded-r-3xl shadow-2xl shadow-slate-900">
      <div className="mt-12 text-3xl justify-center flex font-bold text-white">
        <p>Welcome Back!</p>
      </div>
      <div className="h-4/5">
        <form>
          <div className="w-full mx-auto ">
            <div className=" mx-auto w-10/12 md:w-8/12 mt-10 ">
              <label className="text-white font-semibold text-lg">
                Email or Username
                <br />
              </label>
              <input
                type="text"
                className="w-full h-10 rounded-lg bg-gray-300 p-2 border-2 mt-1 mb-3 border-slate-500"
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
                className="w-full h-10 bg-gray-300 p-2 rounded-lg border-2 mt-1 border-slate-500"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              ></input>
              <a href="login">
                <p className="text-sm ml-2 mt-1 text-skyblue">
                  Forgot Password?
                </p>
              </a>
            </div>
          </div>
          <div className="flex justify-center mt-12 h-10">
            <input
              type="button"
              value="Sign In"
              className="bg-white text-sky-600 text-xl font-bold w-3/12 rounded-md pb-1"
              onClick={() => handleLogin()}
            />
          </div>
        </form>
      </div>
      <div></div>
    </div>
  );
};
export default Signin;
