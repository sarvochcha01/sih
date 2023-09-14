import { useState } from "react";
import EduInfo1 from "./EduInfo1";
import EduInfo2 from "./EduInfo2";

const Educationalinfo =(props)=>{
    
    const handleSubmitDetails = () => {
        let clientOrProvider = localStorage.getItem("clientOrProvider")
        let typeOfProvider = localStorage.getItem("typeOfProvider")
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
            "providerPassingYear":localStorage.getItem("providerPassingYear")
        } 

        //AXIOS PUSH TO DATABASE
        console.log(providerPersonalInfo)
        console.log(providerProfessionalInfo)
        console.log(providerEducationalInfo)
        console.log(clientOrProvider)
        console.log(typeOfProvider)
        deleteLocalStorage()

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

        localStorage.removeItem("clientOrProvider")
        localStorage.removeItem("typeOfProvider")

       
    }
     // frontend
     const [Bvisible, changeBvisible] = useState(true);
     const [Mvisible, changeMvisible] = useState(false);
     const Eduinfobox1 = () => {
         changeBvisible(!Bvisible);
     };
     const Eduinfobox2 = () => {
        changeMvisible(!Mvisible);
    };
     // frontend
    return(
        
    //Law passing certificate
    //BAR Council License
    //ID of current BAR Association where he is practicing
        <div className="">
            <div>
            <div className="h-10 w-full flex justify-center mt-2 px-8 md:px-96">
                        <div className="h-auto w-12 md:w-14 rounded-full border-4 border-green-800 flex items-center bg-green-800 justify-center">1</div>
                        <div className="line w-2/5 bg-green-800 h-0.5 my-5"></div>
                        <div className="h-auto w-12 md:w-14 rounded-full flex items-center border-4 border-green-800 bg-green-800 justify-center">2</div>
                        <div className="line w-2/5 bg-green-800 h-0.5 my-5"></div>
                        <div className="h-10 w-12 md:w-14 rounded-full flex items-center border-4 border-green-800 bg-gray-300 justify-center">3</div>
                        <div className="line w-2/5 bg-gray-500 h-0.5 my-5"></div>
                        <div className="h-10 w-12 md:w-14 rounded-full flex items-center bg-gray-300 justify-center">4</div>
                    </div>
                </div>
            <div className="container h-auto w-11/12 md:w-8/12 mx-auto mt-4 rounded-md bg-bluebg p-2">
                <form className="">
                    <div className="flex flex-col md:flex-row md:space-x-20">
                        <div><p className="text-2xl text-sky-300 font-serif my-2 text-center sm:text-left sm:ml-12">Educational Information</p></div>
                        <div className="flex md:w-96 w-60 justify-start ml-8 md:justify-center items-center "><input checked="true" type="checkbox" value="Bachlors" id="bachlors" className="m-2" onClick={Eduinfobox1} /><label htmlFor="bachlors"  className="mr-20 font-semibold text-white">BA LLB</label>
                        <input type="checkbox" value="Masters" id="masters" className="m-2" onClick={Eduinfobox2}/><label htmlFor="masters" className="font-semibold text-white">LL.M.</label>
                        </div>
                    </div>
                    <div className=" lg:mx-40 details flex flex-col lg:flex-col h-4/5 sm:justify-evenly">
                        {Bvisible && <EduInfo1/>}
                        {Bvisible && Mvisible && <div className="bg-gray-600 h-0.5 w-full"/>}
                        {Mvisible && <EduInfo2/>}
                    </div>
                    <div className="flex justify-center space-x-6  my-2">
                <input type="reset" value="Back" onClick={() => props.pfun()} className="bg-gray-300 border-2 border-slate-400 w-24 md:w-24 h-10 text-xl font-extrabold rounded-lg md:mr-20"/>
                <input type="button" value="Next" onClick={() => {handleSubmitDetails();props.nfun()}} className="bg-sky-300 border-2 border-slate-400 w-24 h-10 text-xl font-extrabold md:w-24 rounded-lg md:ml-20"
                />
                </div>
                </form>
             </div>   
        </div>
    )
}
export default Educationalinfo;