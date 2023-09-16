import AppoReqCard from "./AppoReqCard";
import {AiOutlineAppstoreAdd} from 'react-icons/ai'
const AppointmentRequest =()=>{
    return(<div className="h-full w-full">
        <div className=" mt-20 w-11/12  font-bold lg:w-1/2 mx-auto flex items-center mb-6">
                    <AiOutlineAppstoreAdd    className="text-lg lg:text-2xl lg:mt-1"/>
                    <p className="ml-2 lg:ml-4 lg:text-3xl text-2xl">Appointment Requests</p>
                </div>
       <AppoReqCard
       img="https://shorturl.at/iDST9"
        name="Shubham Anand"
        case="Murder Case"
        descript="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut tempor nisl. Nullam nulla elit, viverra et faucibus eu, iaculis eu dolor. Aenean ultricies sagittis nisi, sed hendrerit nunc scelerisque in. Phasellus a lacinia quam. Maecenas pharetra nibh auctor mauris."
        date="1 Sep 2023"
        time="12:30 PM"
       />


    <AppoReqCard
        img="https://shorturl.at/iDST9"
        name="Manish Suresh"
        case="Fraud Case"
        descript="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut tempor nisl. Nullam nulla elit, viverra et faucibus eu, iaculis eu dolor. Aenean ultricies sagittis nisi, sed hendrerit nunc scelerisque in. Phasellus a lacinia quam. Maecenas pharetra nibh auctor mauris.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut tempor nisl. Nullam nulla elit, viverra et faucibus eu, iaculis eu dolor. Aenean ultricies sagittis nisi, sed hendrerit nunc scelerisque in. Phasellus a lacinia quam. Maecenas pharetra nibh auctor mauris."
        date="23 Nov 2023"
        time="2:30 PM"
       />
       </div>
    );
}
export default AppointmentRequest;

