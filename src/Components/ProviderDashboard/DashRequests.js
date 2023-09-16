import { Link } from "react-router-dom";

const Requests =(props)=>{
    return(
        <Link to = "/AppRequest"><div className="bg-white flex h-16 m-2 p-2 border-r-2 border-b-2 border-slate-400 shadow-lg shadow-slate-300">
            <div className=" basis-1/5 items-center flex justify-center">
                <img src={props.img} alt="P" className="bg-amber-700 h-10  rounded-full w-10" height="100%" width="100%"/>
            </div>
            <div className=" basis-4/5 pl-2">
                <p className=" text-base font-semibold">{props.name}</p>
                <p className=" text-xs">{props.case}</p>
            </div>
        </div></Link>
    );
}
export default Requests;