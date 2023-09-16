import axios from "axios";
import jwtDecode from "jwt-decode";
import { useState } from "react";
import api from "../../../../Authentication/apiAddress";
import { useNavigate } from "react-router-dom";
const LawFirmDocUpload =(props)=>{
    const [Bvisible, changeBvisible] = useState(true);
     const [Mvisible, changeMvisible] = useState(false);
     const Eduinfobox1 = () => {
         changeBvisible(!Bvisible);
     };
     const Eduinfobox2 = () => {
        changeMvisible(!Mvisible);
    };

    let navigate = useNavigate()



    const handleSubmitDetails = () => {
        //let clientOrProvider = localStorage.getItem("clientOrProvider")
        let typeOfProvider = localStorage.getItem("typeOfProvider")
        let providerWorkLocation = localStorage.getItem("providerWorkLocation")
        let providerPersonalInfo = 
        {
            "providerFullName" : localStorage.getItem("providerFullName"),
            "providerContact" : localStorage.getItem("providerContact"),
            "providerEmail":localStorage.getItem("providerEmail"),
            "providerDob":localStorage.getItem("providerDob"),
            "providerLanguages":localStorage.getItem("providerLanguages"),
            "providerGender":localStorage.getItem("providerGender"),
            "providerAddress":localStorage.getItem("providerAddress")
        }
        let providerProfessionalInfo = 
        {
            "providerYearsOfExperience":localStorage.getItem("providerYearsOfExperience"),
            "providerLawFirm":localStorage.getItem("providerLawFirm"),
            "providerWorkLocation":localStorage.getItem("providerWorkLocation"),
            "providerBio":localStorage.getItem("providerBio")
        }      
        let providerEducationalInfo = 
        {
            "providerDegree":localStorage.getItem("providerDegree"),
            "providerNameOfCollege":localStorage.getItem("providerNameOfCollege"),
            "providerPassingYear":localStorage.getItem("providerPassingYear"),
            "providerDegree2":localStorage.getItem("providerDegree2"),
            "providerNameOfCollege2":localStorage.getItem("providerNameOfCollege2"),
            "providerPassingYear2":localStorage.getItem("providerPassingYear2")
        } 

        let providerInformation = {typeOfProvider, providerPersonalInfo, providerEducationalInfo, providerProfessionalInfo, providerWorkLocation}
        console.log(providerInformation)

        //AXIOS PUSH TO DATABASE
        //AXIOS PUSH TO DATABASE
    let token =
        localStorage.FBIdToken == null ? "Bearer " : localStorage.FBIdToken;
    let UID = "";
    if (token.split("Bearer ")[1]) {
        let decodedToken = jwtDecode(token);
        UID = decodedToken.user_id;
    }
    let bundledInfo = { UID, providerInformation };

    axios
        .post(`${api}/user/providerInformation`, bundledInfo)
        .then(() => {
        console.log("Successfully Uploaded");
        deleteLocalStorage();
        navigate("/success")
        //setCursorLoading(false);
        window.location.reload();
        })
        .catch((err) => {
        //setCursorLoading(false);
        console.log("Error", err);
        });




        //deleteLocalStorage()

    }

    const deleteLocalStorage = () => {
        localStorage.removeItem("providerFullName")
        localStorage.removeItem("providerContact")
        localStorage.removeItem("providerEmail")
        localStorage.removeItem("providerDob")
        localStorage.removeItem("providerLanguages")
        localStorage.removeItem("providerGender")
        localStorage.removeItem("providerAddress")

        localStorage.removeItem("providerYearsOfExperience")
        localStorage.removeItem("providerLawFirm")
        localStorage.removeItem("providerWorkLocation")
        localStorage.removeItem("providerBio")

        localStorage.removeItem("providerDegree")
        localStorage.removeItem("providerNameOfCollege")
        localStorage.removeItem("providerPassingYear")

        localStorage.removeItem("providerDegree2")
        localStorage.removeItem("providerNameOfCollege2")
        localStorage.removeItem("providerPassingYear2")

        localStorage.removeItem("clientOrProvider")
        localStorage.removeItem("typeOfProvider")

       
    }






    return(
        <div>
        <div className="h-10 w-full flex justify-center mt-2 px-8 md:px-96">
                        <div className="h-auto w-14 md:w-10 rounded-full border-4 border-blue-800 flex items-center text-white bg-blue-800 justify-center">1</div>
                        <div className="line w-2/5 bg-blue-800 h-0.5 my-5"></div>
                        <div className="h-auto w-14 md:w-10 rounded-full flex items-center border-4 text-white border-blue-800 bg-blue-800 justify-center">2</div>
                        <div className="line w-2/5 bg-blue-800 h-0.5 my-5"></div>
                        <div className="h-10 w-14 md:w-10 rounded-full flex items-center border-4 border-blue-800 bg-gray-300 justify-center">3</div>
                        
                    </div>
        <div className="container h-auto w-11/12 md:w-8/12 mx-auto mt-4 rounded-md bg-blue-950 p-2">
            <div className="flex flex-col md:flex-row md:space-x-20">
                        <div><p className="text-2xl text-sky-300 font-serif my-2 text-center sm:text-left sm:ml-12">Upload Documents</p></div>
                        {/* <div className="flex md:w-96 w-60 justify-start ml-8 md:justify-center items-center "><input checked="true" type="checkbox" value="Bachlors" id="bachlors" className="m-2" onClick={Eduinfobox1} /><label htmlFor="bachlors"  className="mr-20 font-semibold text-white">BA LLB</label>
                        <input type="checkbox" value="Masters" id="masters" className="m-2" onClick={Eduinfobox2}/><label htmlFor="masters" className="font-semibold text-white">LL.M.</label>
                        </div> */}
                    </div>
                <form className="">
                    <div className="upload flex flex-col-reverse lg:flex-row h-4/5 sm:justify-evenly">
                        <div className="personal basis-8/12 sm:ml-20">
                            {Bvisible && <div className="ballb flex justify-between sm:h-9 mt-6 mb-10">
                                <div className=" basis-4/12  "><label className="text-white font-bold text-md ">BA LLB passing certificate:</label></div>
                                <div className="value basis-7/12 "><input type="file" name="ballb" className="rounded-xl border-2 border-slate-500 h-8 text-white sm:h-8 w-full float-right"/></div>
                            </div>}
                            {Mvisible && <div className="llm flex justify-between sm:h-9 mt-6 mb-10">
                                <div className="  basis-4/12  "><label className="text-white font-bold text-md ">LL. M. passing certificate:</label></div>
                                <div className="value basis-7/12 "><input type="file" name="llm" className="rounded-xl border-2 border-slate-500 h-8 text-white sm:h-8 w-full float-right"/></div>
                            </div>}
                            <div className="Barcouncil flex justify-between sm:h-9 mt-6 mb-10">
                                <div className="  basis-4/12  "><label className="text-white font-bold text-md ">Any ID Proof:</label></div>
                                <div className="value basis-7/12 "><input type="file" name="barcouncil" className="rounded-xl border-2 border-slate-500 h-8 text-white sm:h-8 w-full float-right"/></div>
                            </div>
                            {/* <div className="id flex justify-between sm:h-9 mt-6 mb-20">
                                <div className="  basis-4/12  "><label className="text-white font-bold text-md ">ID of current BAR Association:</label></div>
                                <div className="value basis-7/12 "><input type="file" name="id" className="rounded-xl border-2 border-slate-500 h-8 text-white sm:h-8 w-full float-right"/></div>
                            </div> */}
                        </div>
                    </div>
                    <div className="flex justify-center space-x-6  my-2">
                <input onClick={() => props.pfun()} type="reset" value="Back" className="bg-gray-300 border-2 border-slate-400 rounded-lg w-5/12 md:w-3/12 h-10 text-xl font-extrabold"/>
                <input type="button" onClick={() => {handleSubmitDetails();props.nfun()}} value="Submit" className="bg-sky-300 border-2 border-slate-400 w-5/12 h-10 text-xl rounded-lg font-extrabold md:w-3/12"/>
                </div>
                </form>
             </div> 
             </div>  
    );
}
export default LawFirmDocUpload;