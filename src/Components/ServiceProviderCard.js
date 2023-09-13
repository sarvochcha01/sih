import { Link } from "react-router-dom";

const ServiceProviderCard = (props) => {
  return (
    <div className="card  w-80 lg:w-full h-96 lg:h-56 flex flex-col lg:flex-row bg-white border border-slate-300 rounded-xl lg:items-center">
      <div className="img w-full lg:w-1/5 h-40  flex justify-center">
        <img src={props.imgUrl} alt="" className="rounded-full h-full p-2" />
      </div>
      <div className="details flex flex-col lg:w-1/2 lg:px-8 w-full">
        <div className="name text-card-btn text-2xl font-bold flex w-full px-2  justify-center lg:justify-start">
          {props.name}
        </div>
        <div className="specialise font-extrabold text-center lg:text-left flex w-full justify-center lg:justify-start text-lg px-2 mt-2">{`Specialises in ${props.specialise}`}</div>
        <div className="experience px-2 flex w-full justify-center lg:justify-start text-md">{`${props.exp} years of experience`}</div>
        <div className="fee px-2 flex w-full justify-center lg:justify-start text-md">{`₹ ${props.fees} consultation fee`}</div>
      </div>
      <Link
        to={`/advocates/${props.id}`}
        className="book-appointment bg-card-btn hover:cursor-pointer w-60 lg:w-56 h-12 mt-3 flex self-center  justify-center items-center rounded-2xl lg:ml-12"
      >
        <div className="">
          <span className="text-lg font-bold text-white">
            Book an appointment
          </span>
        </div>
      </Link>
    </div>
  );
};

export default ServiceProviderCard;
