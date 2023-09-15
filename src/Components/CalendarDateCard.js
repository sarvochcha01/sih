import TimeSlot from "./TimeSlot";

const CalendarDateCard = (props) => {
  return (
    <div
      className="date-card flex flex-col w-36 h-20 lg:h-14 shrink-0 snap-center items-center justify-center rounded-lg hover:cursor-pointer font-bold text-white bg-[#3070D0] "
      onClick={() => {
        props.setDate(props.date);
        props.setTime({});
      }}
    >
      <div className="date flex">{props.date.day + "/" + props.date.month}</div>
      <div className="slots flex text-center">
        {props.slots} Slots available
      </div>
    </div>
  );
};

export default CalendarDateCard;
