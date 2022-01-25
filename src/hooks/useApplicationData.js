import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData(props) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: [],
    interviewers: {}
  });

  const setDay = day => { setState({ ...state, day }) };

  useEffect(() => {
    Promise.all([
      axios.get('http://localhost:8001/api/days'),
      axios.get('http://localhost:8001/api/appointments'),
      axios.get('http://localhost:8001/api/interviewers')
    ]).then((all) => {
      setState(prev => ({ ...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }));
    });
  }, []);

  const bookInterview = function (id, interview, editing) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    const newDays = state.days.map((someDay) => {
      if (someDay.name === state.day && !editing) {
        return { ...someDay, spots: someDay.spots - 1}
      } else {
        return someDay;
      }
    })

    return axios.put(`/api/appointments/${id}`, appointment)
      .then((res) => {
        setState(prev => ({ ...prev, appointments, days: newDays }))
      })
  }

  const cancelInterview = function (id) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    const newDays = state.days.map((someDay) => {
      if (someDay.name === state.day) {
        return { ...someDay, spots: someDay.spots + 1}
      } else {
        return someDay;
      }
    })

    return axios.delete(`/api/appointments/${id}`, appointment)
      .then((res) => {
        setState(prev => ({ ...prev, appointments, days: newDays  }))
      })
  }

  return { state, setDay, bookInterview, cancelInterview }
}