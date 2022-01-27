import React, { useState } from "react";
import { useVisualMode } from "hooks/useVisualMode";
import "components/Appointment/styles.scss";
import Header from "./Header"
import Show from "./Show"
import Empty from "./Empty"
import Form from "./Form"
import Error from "./Error";
import Status from "./Status";
import Confirm from "./Confirm";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETING = "DELETING";
const CONFIRM = "CONFIRM";
const EDIT = "EDIT";
const ERROR_SAVE = "ERROR_SAVE";
const ERROR_DELETE = "ERROR_DELETE"

export default function Appointment(props) {
  const { interview, time, listOfInterviewers, id } = props;

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    if (!name || !interviewer) {
      return
    };
    const interview = {
      student: name,
      interviewer
    };

    transition(SAVING);

    props
      .bookInterview(id, interview)
      .then(() => transition(SHOW))
      .catch(error => transition(ERROR_SAVE, true));
  };

  function deleteAppointment() {
    transition(DELETING, true);
    props
      .cancelInterview(id)
      .then(() => transition(EMPTY))
      .catch(error => transition(ERROR_DELETE, true));
  };

  function edit() {
    transition(EDIT);
  };

  function create() {
    transition(CREATE);
  };

  return (
    <article className="appointment">
      <Header time={time} />
      {mode === EMPTY && <Empty onAdd={create} />}

      {mode === SHOW && (<Show
        student={interview.student}
        interviewer={(interview.interviewer)}
        onDelete={() => transition(CONFIRM)}
        onEdit={edit}
      />
      )}
      {mode === CONFIRM && <Confirm
        message={"Would you like to confirm"}
        onCancel={back}
        onConfirm={deleteAppointment} />}

      {mode === CREATE && <Form
        interviewers={listOfInterviewers}
        onCancel={back}
        onSave={save} />}

      {mode === EDIT && <Form
        name={interview.student}
        interviewer={interview.interviewer.id}
        interviewers={listOfInterviewers}
        onCancel={back}
        onSave={save} />}

      {mode === SAVING && <Status
        message={"Saving..."} />}

      {mode === DELETING && <Status
        message={"Deliting..."} />}

      {mode === ERROR_SAVE && <Error
        message={"Could not save the appointment"}
        onClose={back} />}

      {mode === ERROR_DELETE && <Error
        message={"Could not delete the appointment"}
        onClose={back} />}
    </article>
  )
}