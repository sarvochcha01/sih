import DashProfile from "./DashProfile";
import Dashnav from "./Dashnav";
import Requests from "./DashRequests";
import DashUpcomingApntmnt from "./DashUpcomingApntmnt";

const ProvidersDash = () => {
  return (
    <div className="flex flex-col xl:flex-row h-full w-full ">
      <Dashnav />
      <div className="bg-gray-200 h-full w-full pt-4 mt-10">
        <div className=" h-auto mx-3 mt-3 md:pl-7 p-4 flex flex-col md:flex-row md:pr-8">
          <div className="bg-white rounded-lg shadow-lg shadow-slate-300 basis-2/3 md:mx-2 flex flex-col sm:flex-row">
            <img
              src="./img/dashimg.png"
              className="h-52 w-96 mx-auto"
              alt="Good Morning..."
              height="100%"
              width="100%"
            />
            <div className="bg-white w-full flex flex-col justify-center">
              <div className=" text-2xl text-center font-bold">
                Good Day Mr. Himanshu{" "}
              </div>
              <div className="text-slate-700 text-center text-[15px] font-semibold">
                Have a Nice Day !
              </div>
            </div>
          </div>
          <div className="bg-green-300 rounded-lg shadow-lg shadow-slate-300 md:basis-1/3 md:mx-2 mt-5 md:mt-0 md:ml-4">
            <div className="bg-blue-800 w-full h-12 hidden md:flex rounded-t-lg text-lg font-semibold text-gray-200 p-2 pl-4">
              Profile
            </div>
            <DashProfile
              img="https://shorturl.at/uHKT3"
              name="Himanshu Yadav"
              num="+91 9898989811"
              email="himanshuyadav123@gmail.com"
            />
          </div>
        </div>
        <div className=" h-3/5 py-2 px-3 mx-3 flex flex-col md:flex-row md:justify-evenly md:pr-6">
          <div className="bg-white rounded-lg shadow-md shadow-slate-300  md:w-96">
            <div className="bg-blue-800 w-full p-2 pl-4 h-12 rounded-t-lg text-lg font-semibold text-gray-200">
              Appointment Requests
            </div>
            <div className="overflow-auto flex flex-col h-72 scrollbar-hide mt-2">
              <Requests
                img="https://shorturl.at/zQZ03"
                name="Gaurav Anand"
                case="Criminal Case"
              />
              <Requests
                img="https://shorturl.at/isF13"
                name="Ayush Mehta"
                case="Harrashment Case"
              />
              <Requests
                img="https://shorturl.at/uHKT3"
                name="Shubham Anand"
                case="Divorse Case"
              />
              <Requests
                img="https://shorturl.at/mO026"
                name="Anurag Bhushan"
                case="Molestation Case"
              />
              <Requests
                img="https://shorturl.at/zQZ03"
                name="Gaurav Anand"
                case="Criminal Case"
              />
              <Requests
                img="https://shorturl.at/isF13"
                name="Ayush Mehta"
                case="Harrashment Case"
              />
              <Requests
                img="https://shorturl.at/uHKT3"
                name="Shubham Anand"
                case="Divorse Case"
              />
              <Requests
                img="https://shorturl.at/mO026"
                name="Anurag Bhushan"
                case="Molestation Case"
              />
            </div>
          </div>
          <div className=" bg-white mt-4 md:mt-0 rounded-lg shadow-lg shadow-slate-300 md:w-96 mb-4">
            <div className="bg-blue-800 w-full h-12 rounded-t-lg text-lg font-semibold text-gray-200 p-2 pl-4">
              Upcoming Appointments
            </div>
            <div className="overflow-auto flex flex-col h-72 scrollbar-hide mt-2">
              <DashUpcomingApntmnt
                img="https://shorturl.at/zQZ03"
                name="Divyansh Yaduvanshi"
                case="Molestation Case"
                date="30 Sept 2023"
                time="2:00 PM"
              />
              <DashUpcomingApntmnt
                img="https://shorturl.at/zQZ03"
                name="Aayush Patanayak"
                case="Divorse Case"
                date="12 Aug 2023"
                time="10:00 AM"
              />
              <DashUpcomingApntmnt
                img="https://shorturl.at/mO026"
                name="Sarvochcha Sharma"
                case="Murder Case"
                date="10 Dec 2023"
                time="1:00 PM"
              />
              <DashUpcomingApntmnt
                img="https://shorturl.at/zQZ03"
                name="Anurag Bhushan"
                case="Smuggling Case"
                date="12 Oct 2023"
                time="4:00 PM"
              />
              <DashUpcomingApntmnt
                img="https://shorturl.at/zQZ03"
                name="Divyansh Yaduvanshi"
                case="Molestation Case"
                date="30 Sept 2023"
                time="2:00 PM"
              />
              <DashUpcomingApntmnt
                img="https://shorturl.at/zQZ03"
                name="Aayush Patanayak"
                case="Divorse Case"
                date="12 Aug 2023"
                time="10:00 AM"
              />
              <DashUpcomingApntmnt
                img="https://shorturl.at/mO026"
                name="Sarvochcha Sharma"
                case="Murder Case"
                date="10 Dec 2023"
                time="1:00 PM"
              />
              <DashUpcomingApntmnt
                img="https://shorturl.at/zQZ03"
                name="Anurag Bhushan"
                case="Smuggling Case"
                date="12 Oct 2023"
                time="4:00 PM"
              />
            </div>
          </div>
          <div className="rounded-lg shadow-lg shadow-slate-300 md:w-96">
            <div className="bg-blue-800 w-full h-12 rounded-t-lg text-lg font-semibold text-gray-200 p-2 pl-4">
              Modify Appointment Slots
            </div>
            <Calender className="w-full h-96" dateAreaClass={"h-24 lg:h-20"} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProvidersDash;
