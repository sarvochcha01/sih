import AppointmentHistory from "./AppointmentHistory";
import AppointmentUpcoming from "./AppointmentUpcoming";
import {FaClockRotateLeft} from 'react-icons/fa6';
import {BsCalendar3} from 'react-icons/bs'
import { useState } from "react";

const Appointment =()=>{
    let small="h-44 ";
    let large="h-96 ";
    const[A,changeA]=useState(false);
    const[B,changeB]=useState(false);
    let expand1 =()=>{
        changeA(!A);
    }
    let expand2 =()=>{
        changeB(!B);
    }
    // let height = "h-44 ";
    // let changeheight=()=>{
    //     height ="h-96 ";
    // }
    return(
        <div>
            <div className="bg-gray-200 mt-16  h-auto py-2">
                <div className=" mt-12 w-11/12  font-bold lg:w-1/2 mx-auto flex items-center mb-6">
                    <BsCalendar3 className="text-lg lg:text-2xl lg:mt-1"/>
                    <p className="ml-2 lg:ml-4 lg:text-3xl text-2xl">Upcoming Appointment</p>
                </div>
                <div className={`${
                    A===false
                    ?"h-44 flex lg:flex-row-reverse flex-col-reverse"
                    :"h-96 flex lg:flex-row-reverse flex-col-reverse"
                }`}>
                    <AppointmentUpcoming 
                    descript="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut tempor nisl. Nullam nulla elit, viverra et faucibus eu, iaculis eu dolor. Aenean ultricies sagittis nisi, sed hendrerit nunc scelerisque in. Phasellus a lacinia quam. Maecenas pharetra nibh auctor mauris.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget porta velit. Quisque eleifend lectus eget tincidunt cursus. Nunc id risus sed urna vehicula dignissim.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    img="https://shorturl.at/mtuV0" 
                    name="Divyansh Yaduvanshi" 
                    case="Criminal Case" 
                    descrip=""
                    date="23 Sep 2023"
                    time="3:00 PM"
                    fun ={expand1}
                    />
                </div>
                <div className={`${
                    B===false
                    ?"h-44 flex lg:flex-row-reverse flex-col-reverse"
                    :"h-96 flex lg:flex-row-reverse flex-col-reverse"
                }`}>
                    <AppointmentUpcoming 
                    descript="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer molestie malesuada sagittis. Donec vehicula nisl ut leo tempus, vel porttitor dolor consequat. Phasellus sed egestas quam. Donec vestibulum scelerisque nulla, sed ultrices enim lacinia ut. Praesent faucibus dignissim faucibus. Quisque placerat finibus pulvinar. Nunc euismod massa imperdiet, dapibus leo vitae.."
                    img="https://shorturl.at/iDST9" 
                    name="Anurag Bhushan" 
                    case="Harrashment case" 
                    descrip=""
                    date="3 Oct 2023"
                    time="12:30 PM"
                    fun ={expand2}
                    />
                </div>

                <div className=" mt-12 w-11/12  font-bold lg:w-1/2 mx-auto flex items-center mb-6">
                    <FaClockRotateLeft className="text-lg lg:text-2xl lg:mt-1"/>
                    <p className="ml-2 lg:ml-4 lg:text-3xl text-2xl">Appointment History</p>
                </div>
                    <AppointmentHistory 
                    img="https://shorturl.at/ltLTZ"
                    name="Ayush Mehta"
                    case="Divorse Case"
                    descrip="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut tempor nisl. Nullam nulla elit, viverra et faucibus eu, iaculis eu dolor. Aenean ultricies sagittis nisi, sed hendrerit nunc scelerisque in. Phasellus a lacinia quam. Maecenas pharetra nibh auctor mauris.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget porta velit. Quisque eleifend lectus eget tincidunt cursus. Nunc id risus sed urna vehicula dignissim.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    date="04 Oct 2023"
                    time="1:30 PM"
                    />
                    <AppointmentHistory
                    img="https://shorturl.at/aclPZ"
                    name="Singh Pranshu"
                    case="Property Case"
                    descrip="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut tempor nisl. Nullam nulla elit, viverra et faucibus eu, iaculis eu dolor. Aenean ultricies sagittis nisi, sed hendrerit nunc scelerisque in. Phasellus a lacinia quam. Maecenas pharetra nibh auctor mauris."
                    date="12 Oct 2023"
                    time="4:30 PM"
                    />
            </div>
        </div>
    );
}
export default Appointment;