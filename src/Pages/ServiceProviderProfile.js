import { useParams } from "react-router-dom";
import SearchAreaLocal from "../Components/SearchAreaLocal";
import ServiceProviderProfileCard from "../Components/ServiceProviderProfileCard";
import Calender from "../Components/Calendar";

const ServiceProviderProfile = () => {
  let { id } = useParams();

  //TODO: Redirect to 404 if id doesn't exist

  return (
    <div className="w-full flex justify-center mt-16">
      <div className=" flex flex-col w-full max-w-screen-2xl items-center">
        <SearchAreaLocal />
        <div className="content w-80 flex flex-col lg:flex-row lg:w-4/5 lg:self-start lg:ml-60  mt-12">
          <ServiceProviderProfileCard id={id} />
          <Calender />
        </div>
      </div>
    </div>
  );
};

export default ServiceProviderProfile;
