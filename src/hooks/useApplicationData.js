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

  const getDaysWithUpdatedSpots = (newAppointments) => {
    return state.days.map((eachDay) => {
      let freeSpotsPerDay = 0;

      for (let id of eachDay.appointments) {
        if (!newAppointments[id].interview) {
          freeSpotsPerDay++;
        }
      }

      const updatedSpotsPerDay = { ...eachDay, spots: freeSpotsPerDay };
      return updatedSpotsPerDay;
    })
  };

  const bookInterview = function (id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    const days = getDaysWithUpdatedSpots(appointments);

    return axios.put(`/api/appointments/${id}`, appointment)
      .then((res) => {
        setState(prev => ({ ...prev, appointments, days }))
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

    const days = getDaysWithUpdatedSpots(appointments);

    return axios.delete(`/api/appointments/${id}`, appointment)
      .then((res) => {
        setState(prev => ({ ...prev, appointments, days }))
      })
  }

  return { state, setDay, bookInterview, cancelInterview }
}