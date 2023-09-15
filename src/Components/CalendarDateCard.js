import TimeSlot from "./TimeSlot";

const CalendarDateCard = (props) => {
  return (
    <div
      className="date-card flex flex-col w-40 h-14 shrink-0 snap-center items-center justify-center rounded-lg hover:cursor-pointer text-black bg-slate-200"
      onClick={() => {
        props.setDate(props.date);
        props.setTime({});
      }}
    >
      <div className="date flex">{props.date.day + "/" + props.date.month}</div>
      <div className="slots flex">{props.slots} Slots available</div>
    </div>
  );
};

export default CalendarDateCard;
