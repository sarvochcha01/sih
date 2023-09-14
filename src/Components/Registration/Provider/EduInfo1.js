import { useState } from "react";
const EduInfo1 =()=>{
    const [degree, setDegree] = useState();
    const [nameOfCollege, setNameOfCollege] = useState();
    const [passingYear, setPassingYear] = useState();
    const handleDegree = (e) => {
        setDegree(e.target.value)
        localStorage.setItem("providerDegree", e.target.value)
        
    }
    const handleNameOfCollege = (e) => {
        setNameOfCollege(e.target.value)
        localStorage.setItem("providerNameOfCollege", e.target.value)
    }
    const handlePassingYear = (e) => {
        setPassingYear(e.target.value)
        localStorage.setItem("providerPassingYear", e.target.value)
    }
    return(
        <div className="personal basis-8/12 sm:ml-20 mb-4"  id="edu1">
                            <p className="text-sm text-gray-400 font-semibold underline ">BA LLB<br/></p>
                            <div className="name flex justify-between sm:h-9 mt-6">
                                <div className="title  basis-4/12  "><label className="text-white font-bold text-md ">Degree:</label></div>
                                <div className="value basis-7/12 ">
                                <input className="rounded-xl border-2 border-slate-700 h-8  sm:h-full w-full float-right"
                                onChange={(e) => handleDegree(e)}
                                value={localStorage.getItem("providerDegree")}
                                /></div>
                            </div>

                            <div className="DOB flex  justify-between sm:h-9 mt-3">
                                <div className="title  basis-4/12"><label className="text-white font-bold text-md">Name of College :</label></div>
                                <div className="value basis-7/12">
                                <input className="rounded-xl border-2 border-slate-700 h-8  w-full float-right sm:h-full "
                                onChange={(e) => handleNameOfCollege(e)}
                                value={localStorage.getItem("providerNameOfCollege")}
                                /></div>
                            </div>

                            <div className="contact flex  justify-between sm:h-9 mt-3">
                                <div className="title  basis-4/12"><label className="text-white font-bold text-md ">Passing Year :</label></div>
                                <div className="value basis-7/12">
                                <input type="number" className="rounded-xl border-2 border-slate-700 h-8  w-full float-right sm:h-full "
                                onChange={(e) => handlePassingYear(e)}
                                value={localStorage.getItem("providerPassingYear")}
                                /></div>
                            </div>
                        </div>
    );
}
export default EduInfo1;