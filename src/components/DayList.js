import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  const { days, setDay, currentSelectedDay } = props;

  const parsedDays = days.map((singleDay) => {
    
    return (<DayListItem key={singleDay.id} {...singleDay} setDay={setDay} selected={currentSelectedDay === singleDay.name} />)});

  return <ul>{parsedDays}</ul>;
}