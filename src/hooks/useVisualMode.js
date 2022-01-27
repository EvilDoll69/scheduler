import { useState } from "react";

export function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(newMode, replace = false) {
    if (replace) {

      setHistory(prev => [...prev]);
    } else {
      setHistory(prev => [...prev, newMode]);
    } setMode(newMode);

    //   const shortHistory = history.slice(0, -1);
    //   setHistory([...shortHistory, newMode]);
    // } else {    
    // setHistory([...history, newMode]);
    // }  setMode(newMode);
  };

  function back() {
    if (history.length > 1) {

      const shortHistory = history.slice(0, -1);
      setHistory(shortHistory);
      setMode(shortHistory[shortHistory.length - 1])
    }
  };
  return { mode, transition, back };
}

