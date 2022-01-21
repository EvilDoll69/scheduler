import React from "react";
import classNames from "classnames";
import "components/DayListItem.scss"

export default function DayListItem(props) {

  const formatSpots = () => {
    if (!props.spots) {
      return `no spots remaining`;
    }
    if (props.spots === 1) {
      return `${props.spots} spot remaining`;
    }
    return `${props.spots} spots remaining`;
  };

  const dayClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0
  });  

  // console.log("Here:", props.selected);

  return (
    <li className={dayClass} onClick={() => props.setDay(props.name)} selected={props.selected} key={props.id}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots(props.spots)}</h3>
    </li>
  );
}