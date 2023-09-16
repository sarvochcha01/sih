import { Link } from "react-router-dom";

const DashUpcomingApntmnt =(props)=>{
    return(
        <Link to = "/AppHistory"><div className="bg-white border-r-2 border-b-2 border-slate-400 shadow-lg shadow-slate-300 flex h-auto m-2 p-2">
            <div className="  basis-1/5 flex justify-center items-center">
            <img src={props.img}  alt="P" className="bg-amber-700 h-10 rounded-full w-10" height="100%" width="100%"/>
            </div>
            <div className=" basis-3/5">
                <p className=" text-base font-semibold">{props.name}</p>
                <p className=" text-xs">{props.case}</p>
            </div>
            <div className=" basis-1/3 flex flex-col justify-center pl-2">
            <p className=" text-xs">{props.date}</p>
            <p className=" text-xs">{props.time}</p>
            </div>
        </div></Link>
    );
}
export default DashUpcomingApntmnt;
