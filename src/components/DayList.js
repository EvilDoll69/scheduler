import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  const { days, setDay, currentSelectedDay } = props;
  // console.log("DAYS:", days);

  const parsedDays = days.map((singleDay) => {
    // console.log("SINGLE DAYS:", singleDay.name);
    // console.log("day:", day);
    // console.log("Boolean", day === singleDay.name)
    
    return (<DayListItem key={singleDay.id} {...singleDay} setDay={setDay} selected={currentSelectedDay === singleDay.name} />)});

  return <ul>{parsedDays}</ul>;
}