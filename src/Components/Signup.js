import axios from "axios";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import api from "../Authentication/apiAddress";

const Signup = () => {
  const navigate = useNavigate();
  useEffect(() => {}, []);

  const [cursorLoading, setCursorLoading] = useState(false);

  const [fullName, setFullName] = useState("");
  const [handle, setHandle] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    const userData = {
      fullName: fullName,
      handle: handle,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };

    axios
      .post(`${api}/signup`, userData)
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
        setCursorLoading(false);
        console.log(err.response.data);
      });
  };

  return (
    <div className="h-full w-full bg-bluebg  rounded-b-3xl rounded-l-3xl">
      <div className=" w-11/12 mx-auto pt-4 m-auto">
        <div className=" flex justify-center text-white ">
          {/* <label for="user" className="  my-auto text-lg mt-1">
            I am a{" "}
          </label>
          <select
            name="user"
            id="user"
            className="text-black w-auto mx-2 text-base rounded-sm outline-none hover:ring-1 focus:ring-2 focus:ring-white  hover:ring-white px-2 py-1   bg-slate-200"
          >
            <option value="client">Client</option>
            <option value="lawyer">Lawyer</option>
            <option value="lawfirm">Law Firm</option>
            <option value="notary">Notary</option>
            <option value="mediator">Mediator</option>
            <option value="documentwriter">Document Writer</option>
            <option value="consultant">Consultant</option>
          </select> */}
        </div>
        <form>
          <div className="w-full mx-auto ">
            <div className=" mx-auto w-10/12 md:w-8/12 mt-8 ">
              <label className="text-white text-lg">
                Full Name
                <br />
              </label>
              <input
                type="text"
                className="w-full h-8 rounded-sm outline-none hover:ring-1 focus:ring-2 focus:ring-white hover:ring-white bg-slate-200 p-2 mb-2 "
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
              />
              <br />
              <label className="text-white text-lg">
                Username
                <br />
              </label>
              <input
                type="text"
                className="w-full h-8 bg-slate-200 p-2 rounded-sm outline-none hover:ring-1 focus:ring-2 focus:ring-white  hover:ring-white  mb-2 "
                onChange={(e) => {
                  setHandle(e.target.value);
                }}
              ></input>
              <label className="text-white  text-lg">
                Email
                <br />
              </label>
              <input
                type="text"
                className="w-full h-8 rounded-sm outline-none hover:ring-1 focus:ring-2 focus:ring-white  hover:ring-white bg-slate-200 p-2  mb-3 "
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <br />
              <label className="text-white  text-lg">
                Password
                <br />
              </label>
              <input
                type="password"
                className="w-full h-8 rounded-sm outline-none hover:ring-1 focus:ring-2 focus:ring-white  hover:ring-white bg-slate-200 p-2  mb-3 "
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <br />
              <label className="text-white  text-lg">
                Confirm Password
                <br />
              </label>
              <input
                type="password"
                className="w-full h-8 rounded-sm outline-none hover:ring-1 focus:ring-2 focus:ring-white  hover:ring-white bg-slate-200 p-2  mb-3 "
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
              />
              <br />
            </div>
          </div>
          <div className="flex justify-center mt-6 h-10    ">
            <input
              type="button"
              value="Sign Up"
              className={`bg-white text-sky-600 text-xl font-bold w-4/12 md:w-3/12 rounded-md ${
                cursorLoading ? "hover:cursor-wait" : "hover:cursor-pointer"
              }`}
              onClick={() => {
                handleSubmit();
                setCursorLoading(true);
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};
export default Signup;
