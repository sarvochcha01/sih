import CalendarDateCard from "./CalendarDateCard";

const Calender = () => {
  return (
    <div className="calender-area flex flex-col mt-8 w-full lg:w-2/6 lg:mt-24 rounded-xl border-2 lg:ml-8 lg:h-2/3">
      <div className="date-area h-20 lg:h-32  bg-navbar rounded-t-xl overflow-x-auto flex flex-row px-10 space-x-10 snap-x items-center">
        <CalendarDateCard date={"13/09"} slots={6} />
        <CalendarDateCard date={"14/09"} slots={6} />
        <CalendarDateCard date={"15/09"} slots={6} />
        <CalendarDateCard date={"16/09"} slots={6} />
      </div>
      <div className="slot-area  w-full h-[600px] flex flex-col px-4 py-8 lg:py-4">
        <div className="morning flex flex-col h-1/3 w-full">
          <div className="text">Morning</div>
          <div className="slots flex flex-row gap-4 flex-wrap">
            <div className="w-16 h-8 bg-slate-300 hover:cursor-pointer rounded-lg flex justify-center items-center">
              ABC
            </div>
            <div className="w-16 h-8 bg-slate-300 hover:cursor-pointer rounded-lg flex justify-center items-center">
              DEF
            </div>
            <div className="w-16 h-8 bg-slate-300 hover:cursor-pointer rounded-lg flex justify-center items-center">
              GHI
            </div>
            <div className="w-16 h-8 bg-slate-300 hover:cursor-pointer rounded-lg flex justify-center items-center">
              JKL
            </div>
            <div className="w-16 h-8 bg-slate-300 hover:cursor-pointer rounded-lg flex justify-center items-center">
              MNO
            </div>
          </div>
        </div>
        <div className="noon flex h-1/3 w-full">
          <div className="text">Noon</div>
        </div>
        <div className="evening flex h-1/3 w-full">Evening</div>
      </div>
    </div>
  );
};

export default Calender;
