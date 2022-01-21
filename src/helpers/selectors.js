export function getAppointmentsForDay(state, day) {
  const getArray = state.days.filter(item => item.name === day)[0];

  if (!getArray) {
    return [];
  }

  let newArray = [];

  if (getArray.appointments.length > 0) {
    for (let elem of getArray.appointments) {
      newArray.push(state.appointments[elem])    
    }
  }  
  return newArray;
}

export function getInterview(state, interview) {
    
    if (interview === null) {
      return null;
    }

    let newObject = {
      student: interview.student,
      interviewer: state.interviewers[interview.interviewer]
    };
    
    return newObject;

  }