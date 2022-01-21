import React from "react";
import "components/Appointment/styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";

export default function Appointment(props){
  const { interview } = props;

  // const interview={{ student: "Lydia Miller-Jones", interviewer }}
  
  return(
    <article className="appointment">
      <Header time={props.time} />
      {props.interview ? <Show 
      student={interview.student}
      interviewer={interview.interviewer.name} /> : <Empty />}
    </article>
  )
}