const AppoReqCard =(props)=>{
    return(
        <div className="mt-12 my-2  py-4 w-11/12 lg:w-1/2 mx-auto h-auto lg:h-44 flex justify-center shadow-lg shadow-slate-400 border-b-2 border-r-2 border-slate-500">
        <div className=" w-3/12">
            <div className="bg-white h-full flex justify-center items-center">
                <img src={props.img} alt="profile" className="h-12 w-12 rounded-full lg:h-24 lg:w-24 mx-auto" height="100%" width="100%"/>
             </div>
        </div>
        <div className="bg-white w-7/12 flex flex-col justify-center pl-1 lg:pl-4">
            <div className="h-1/4 flex items-center text-blue-950 font-semibold lg:font-bold text-[16px] lg:text-2xl">{props.name}</div>
            <div className=" text-sm lg:text-xs lg:mb-1 mt-1">{props.case}</div>
            <p className=" text-xs font-bold pt-2">Case Description<br/></p>   
            <div className="h-1/2 overflow-hidden lg:flex flex-col  hidden">
                <p className=" text-sm pt-1 flex" >
                {props.descript}
                </p>
            </div>
        </div>
        
        <div className=" w-5/12 flex flex-col justify-center items-center">
            <div className=" h-1/4 flex items-end font-extrabold lg:font-bold text-xs lg:text-lg">{props.date}</div>
            <div className=" h-1/4 font-bold text-sm lg:text-lg">{props.time}</div>
            <div className=" w-full flex flex-col lg:flex-row justify-center items-center lg:justify-evenly mt-4 space-y-2 lg:space-y-0">
                <div className="bg-blue-800 shadow-lg shadow-slate-400 flex justify-center items-center h-7 lg:h-8 w-3/4 lg:w-1/3 rounded-md text-white font-semibold"> Accept</div>
                <div className="bg-white flex shadow-lg shadow-slate-400 justify-center items-center w-3/4 lg:w-1/3 h-7 lg:h-8 rounded-md text-red-600 hover:bg-red-600 hover:text-white font-semibold">Decline</div>
            </div>
        </div>


    </div>
    );
}
export default AppoReqCard;