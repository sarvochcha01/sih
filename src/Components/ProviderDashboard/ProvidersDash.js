// import DashProfile from "./DashProfile";
import Dashnav from "./Dashnav";

import { Link, Route, Routes } from "react-router-dom";
import DashboardHome from "./DashboardHome";
import Appointment from "./Appointment";
import RequestAppointment from "../RequestAppointment";

const ProvidersDash = () =>{
    return(
        <div className="flex flex-col xl:flex-row h-full w-full ">
            <Dashnav/>
            <Routes>
            <Route path="/" element={<DashboardHome />} />
            <Route path="/Appointment" element={<Appointment />} />
            <Route path="/Appointment" element={<Appointment />} />
            <Route path="/request" element={<RequestAppointment />} />
            </Routes>
        
        </div>
    );    
}
export default ProvidersDash;