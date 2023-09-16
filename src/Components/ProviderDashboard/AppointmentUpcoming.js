import { useState } from 'react';
import {ImCross} from 'react-icons/im';
const AppointmentUpcoming =(props)=>{
    return(
            <div className=" h-auto w-full flex lg:flex-row-reverse flex-col-reverse">
                {props.visi && <div className="p-2 bg-white shadow-lg shadow-slate-400 border-r-2 border-b-2 border-slate-500 lg:w-[600px] lg:h-40 w-11/12 mx-auto lg:mx-0 lg:mr-12 h-auto mt-2 float-right overflow-auto">
                <ImCross className=' float-right text-xs hover:text-sm' onClick={()=>{props.Cbox()}}/>
                <p className="text-black">{props.descript}</p>    
                </div>}

                <div className="my-2 bg-white py-4 w-11/12 lg:w-1/2 mx-auto h-28 lg:h-40 flex justify-center shadow-lg shadow-slate-400 border-b-2 border-r-2 border-slate-500">
                <div className=" w-3/12">
                    <div className="bg-white h-full flex justify-center items-center">
                        <img src={props.img} alt="profile" className="h-12 w-12 rounded-full lg:h-24 lg:w-24 mx-auto" height="100%" width="100%"/>
                    </div>
                </div>
                <div className="bg-white w-7/12 flex flex-col justify-center pl-1 lg:pl-4">
                    <div className="h-1/4 flex items-center text-blue-950 font-semibold lg:font-bold text-[16px] lg:text-2xl">{props.name}</div>
                    <div className=" text-sm lg:text-xs lg:mb-1">{props.case}</div>  
                    <p className=" text-xs font-bold pt-2">Case Description<br/></p>   
                        <div className="h-1/2 overflow-hidden lg:flex flex-col  hidden">
                            <p className=" text-sm pt-2 flex">{props.descript}</p>
                        </div> 
                    </div>
                <div className="w-0 lg:w-2/12"></div>
                <div className=" w-3/12 flex flex-col justify-center">
                <div className="h-3/4 lg:h-1/4 p-1">
                    <div className="bg-blue-700 w-full lg:w-11/12 h-full mx-auto justify-center flex items-center  text-xs lg:text-lg font-semibold text-white rounded-md float-left">UPCOMING</div>
                </div>
                    <div className=" h-1/4 flex items-end font-extrabold lg:font-bold text-xs lg:text-lg lg:pl-4 pl-1">{props.date}</div>
                    <div className=" h-1/4 font-bold text-sm lg:text-lg lg:pl-4 pl-1">{props.time}</div>
                </div>
                </div>
            </div>
    );
}
export default AppointmentUpcoming;