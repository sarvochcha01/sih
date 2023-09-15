const TimeSlot = (props) => {
  return (
    <div
      className="w-16 h-8 bg-slate-300 hover:cursor-pointer rounded-lg flex justify-center items-center"
      onClick={() => props.setTime(props.time)}
    >
      {props.time.hour + ":" + props.time.minute}
    </div>
  );
};

export default TimeSlot;
