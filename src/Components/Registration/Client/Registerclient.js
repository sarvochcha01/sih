import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../../Authentication/apiAddress";
import jwtDecode from "jwt-decode";





const Registerclient =()=>{




    const [fullName, setFullName] = useState();
    const [contact, setContact] = useState();
    const [email, setEmail] = useState();
    const [dob, setDob] = useState();
    const [languages, setLanguages] = useState();
    const [gender, setGender] = useState();
    const [address, setAddress] = useState();

    const handleFullName = (e) => {
        setFullName(e.target.value)
        localStorage.setItem("clientFullName", e.target.value)
        
    }
    const handleContact = (e) => {
        setContact(e.target.value)
        localStorage.setItem("clientContact", e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
        localStorage.setItem("clientEmail", e.target.value)
    }
    const handleDob = (e) => {
        setDob(e.target.value)
        localStorage.setItem("clientDob", e.target.value)
    }
    const handleLanguages = (e) => {
        setLanguages(e.target.value)
        localStorage.setItem("clientLanguages", e.target.value)
    }
    const handleGender = (e) => {
        setGender(e.target.value)
        localStorage.setItem("clientGender", e.target.value)
    }
    const handleAddress = (e) => {
        setAddress(e.target.value)
        localStorage.setItem("clientAddress", e.target.value)
    }

    const handleSubmitDetails = () => {
       
        
        let clientPersonalInfo = 
        {
            "clientFullName" : localStorage.getItem("clientFullName"),
            "clientContact" : localStorage.getItem("clientContact"),
            "clientEmail":localStorage.getItem("clientEmail"),
            "clientDob":localStorage.getItem("clientDob"),
            "clientLanguages":localStorage.getItem("clientLanguages"),
            "clientGender":localStorage.getItem("clientGender"),
            "clientAddress":localStorage.getItem("clientAddress")
        }

        //AXIOS PUSH TO DATABASE
        let token = localStorage.FBIdToken == null ? "Bearer " : localStorage.FBIdToken;
        let UID = ""
        if(token.split("Bearer ")[1]){
            let decodedToken = jwtDecode(token)
            UID = decodedToken.user_id
        }
        let bundledInfo = {UID, clientPersonalInfo}

        axios.post(`${api}/user/clientInformation`, bundledInfo)
        .then(()=>{
            console.log("Successfully Uploaded")
            deleteLocalStorage()
            window.location.reload()
        })
        .catch(err=>{
            console.log("Error", err)
        })
    }

    const deleteLocalStorage = () => {
        localStorage.removeItem("clientFullName")
        localStorage.removeItem("clientContact")
        localStorage.removeItem("clientEmail")
        localStorage.removeItem("clientDob")
        localStorage.removeItem("clientLanguages")
        localStorage.removeItem("clientGender")
        localStorage.removeItem("clientAddress")

        localStorage.removeItem("clientOrProvider")
        localStorage.removeItem("typeOfProvider")
    }





    return(
           <div className="w-full h-full">
                
            <div className="container h-auto w-11/12 md:w-8/12 mx-auto md:mt-12 mt-5 rounded-2xl drop-shadow-2xl bg-blue-950 p-4">
                <form className="">
                    <div className="details flex flex-col-reverse lg:flex-row h-4/5 sm:justify-evenly">
                        <div className="personal basis-8/12 sm:ml-20">
                            <div className="name flex justify-between sm:h-9  my-6 mt-6">
                                <div className="title  basis-4/12  "><label className="text-white font-bold text-md ">Full Name:</label></div>
                                <div className="value basis-7/12 ">
                                <input className="rounded-md border-2 border-slate-700 h-8  sm:h-full w-full float-right"
                                onChange={(e) => handleFullName(e)}
                                value={localStorage.getItem("clientFullName")}
                                /></div>
                            </div>

                            <div className="contact flex  justify-between sm:h-9  my-6 mt-3">
                                <div className="title  basis-4/12"><label className="text-white font-bold text-md ">Contact no:</label></div>
                                <div className="value basis-7/12">
                                <input type="number" pattern="[0-9]{10}"className="rounded-md border-2 border-slate-700 h-8  w-full float-right sm:h-full "
                                onChange={(e) => handleContact(e)}
                                value={localStorage.getItem("clientContact")}
                                /></div>
                            </div>

                            <div className="email flex  justify-between sm:h-9  my-6 mt-3">
                                <div className="title basis-4/12"><label className="text-white font-bold text-md">Email ID:</label></div>
                                <div className="value  basis-7/12">
                                <input type="email" className="rounded-md border-2 border-slate-700 h-8  w-full float-right sm:h-full "
                                onChange={(e) => handleEmail(e)}
                                value={localStorage.getItem("clientEmail")}
                                /></div>
                            </div>

                            <div className="DOB flex  justify-between sm:h-9  my-6 mt-3">
                                <div className="title  basis-4/12"><label className="text-white font-bold text-md">Date of Birth:</label></div>
                                <div className="value basis-7/12">
                                <input className="rounded-md border-2 border-slate-700 h-8  w-full float-right sm:h-full "
                                onChange={(e) => handleDob(e)}
                                value={localStorage.getItem("clientDob")}
                                /></div>
                            </div>

                            <div className="Language flex justify-between sm:h-9  my-6 mt-3 ">
                                <div className="title basis-4/12"><label className="text-white font-bold text-md">Language Spoken:</label></div>
                                <div className="value  basis-7/12 py-3 sm:py-0">
                                <input className="rounded-md border-2 border-slate-700 h-8  w-full float-right sm:h-full"
                                onChange={(e) => handleLanguages(e)}
                                value={localStorage.getItem("clientLanguages")}
                                /></div>
                            </div>

                            <div className="Gender flex justify-between sm:h-9  my-6 mt-3">
                                <div className="title  basis-4/12"><label className="text-white font-bold text-md">Gender:</label></div>
                                <div className="value  basis-7/12">
                                <input className="rounded-md border-2 border-slate-700 h-8  w-full float-right sm:h-full "
                                onChange={(e) => handleGender(e)}
                                value={localStorage.getItem("clientGender")}
                                /></div>
                            </div>

                            <div className="address flex  justify-between sm:h-9  my-6 mt-3">
                                <div className="title  basis-4/12"><label className="text-white font-bold text-md">Address:</label></div>
                                <div className="value basis-7/12">
                                <input  className="rounded-md border-2 border-slate-700 h-8 w-full float-right  sm:h-full overflow-auto"
                                onChange={(e) => handleAddress(e)}
                                value={localStorage.getItem("clientAddress")}
                                /></div>
                            </div>
                        
                        </div>
                        <div className="photo basis-4/12">
                            <div className=" h-32 w-32 xl:h-40 xl:w-40 xl:mt-16 mx-auto flex">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS5m7yIkq3oUIi8Gv31tfMsSN3FN_DpkVyEQ&usqp=CAU" height="100%" width="100%" 
                            className="mx-auto rounded-full" id="choosen_file"></img>
                            </div>
                            <label htmlFor="uploadbtn" className="flex justify-center"><span className=" mt-2 md:pt-1 rounded-md   w-5/12 md:w-4/12 md:h-8  font-bold  bg-skyblue flex justify-center">Select Image</span></label>
                            <input type="file" id="uploadbtn" name="upploadbtn" accept="image/*" className="hidden"/>
                        </div>
                    </div>
                    <div className="flex justify-center space-x-6 mt-6 mb-2">
                <Link to = "/userselection"><input type="button" value="Back" className="bg-gray-300 md:w-2/12 h-10 text-xl font-bold rounded-lg"
                /></Link>
                <input type="button" value="Register" className="bg-skyblue  w-5/12 h-10 text-xl font-bold md:w-2/12 rounded-lg"
                onClick={() => handleSubmitDetails()}
                />
                </div>
                </form>
             </div>   
        </div>
    );
}
export default Registerclient;