import { useEffect, useState } from "react";
import CalendarDateCard from "./CalendarDateCard";
import TimeSlot from "./TimeSlot";

const Calender = () => {
  const [calDate, setDate] = useState({});
  const [calTime, setTime] = useState({});

  const [variableName, setVariableName] = useState("");

  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    setDateTime(
      `${calDate.year}-${calDate.month}-${calDate.day}T${calTime.hour}:${calTime.minute}:${calTime.second}.000Z`
    );
    setVariableName(
      `${calDate.year}-${calDate.month}-${calDate.day},${calTime.hour}:${calTime.minute}`
    );
  }, [calDate, calTime]);

  return (
    <div className="calender-area flex flex-col mt-8 w-full lg:w-2/6 lg:mt-24 rounded-xl border-2 lg:ml-8 lg:h-2/3">
      <div className="date-area h-20 lg:h-32  bg-navbar rounded-t-xl overflow-x-auto flex flex-row px-10 space-x-10 snap-x items-center">
        <CalendarDateCard
          date={{ day: "15", month: "6", year: "2023" }}
          slots={6}
          setDate={setDate}
          setTime={setTime}
        />
        <CalendarDateCard
          date={{ day: "16", month: "6", year: "2023" }}
          slots={6}
          setDate={setDate}
          setTime={setTime}
        />
        <CalendarDateCard
          date={{ day: "17", month: "6", year: "2023" }}
          slots={6}
          setDate={setDate}
          setTime={setTime}
        />
        <CalendarDateCard
          date={{ day: "18", month: "6", year: "2023" }}
          slots={6}
          setDate={setDate}
          setTime={setTime}
        />
      </div>
      <div className="slot-area  w-full h-[600px] flex flex-col px-4 py-8 lg:py-4">
        <div className="morning flex flex-col h-1/3 w-full">
          <div className="text">Slots</div>
          <div className="slots flex flex-row gap-4 flex-wrap">
            <TimeSlot
              time={{ hour: "05", minute: "00", second: "00" }}
              setTime={setTime}
            />
            <TimeSlot
              time={{ hour: "06", minute: "00", second: "00" }}
              setTime={setTime}
            />
            <TimeSlot
              time={{ hour: "07", minute: "00", second: "00" }}
              setTime={setTime}
            />
            <TimeSlot
              time={{ hour: "08", minute: "00", second: "00" }}
              setTime={setTime}
            />
            <TimeSlot
              time={{ hour: "09", minute: "00", second: "00" }}
              setTime={setTime}
            />
          </div>
        </div>
      </div>
      <div
        className="ok flex justify-center self-end text-white bg-sky-700 w-16 hover:cursor-pointer"
        onClick={() => {
          Object.keys(calDate).length === 0 || Object.keys(calTime).length === 0
            ? console.log("Select a time")
            : console.log(dateTime);
        }}
      >
        OK
      </div>
    </div>
  );
};

export default Calender;
