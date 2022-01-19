import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  const { days } = props;
  const parsedDays = days.map((day) => (
    <DayListItem 
    key={day.id}
    id={day.id}
    name={day.name}
    spots={day.spots} 
    selected={day.name === props.day}
    setDay={props.setDay}
    />
  ));

  return <ul>{parsedDays}</ul>;
}

// export default function DayList(props) {
//   const { days, day, setDay } = props;
//   const daysParsed = days.map((singleDay) => {
//     return (
//       <DayListItem
//         key={singleDay.id}
//         selected={singleDay.name === day}
//         {...singleDay}
//         setDay={setDay}
//       />
//     );
//   });

//   return <ul> {daysParsed} </ul>;
// }

// export default function DayList(props) {
//   const { days } = props;
//   const parsedDays = days.map(day => <DayListItem key={day.days} {...day}/>)

//   return(
//     <ul>{parsedDays}</ul>
//   )
// }
