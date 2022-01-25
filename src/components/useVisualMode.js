import { useState } from "react";

export function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  
  function transition(newMode, replace = false) {

    if (replace) {
      
      const shortHistory = history.slice(0, -1);
      setHistory([...shortHistory, newMode]);
    } else {    
    setHistory([...history, newMode]);
    }  
    //mode === EMPTY
    //newMode === CREATE
    setMode(newMode); //here we are changing mode and replacing it whatever the newMode is
    //mode === CREATE 
  }  

  function back() {
    if (history.length > 1) {

        const shortHistory = history.slice(0, -1);
        setHistory(shortHistory);
        setMode(shortHistory[shortHistory.length - 1])
    }      
  }
  return { mode, transition, back };
}

// import { useState } from "react";

// export default function useVisualMode(initial) {
//   const [mode, setMode] = useState(initial);
//   const [history, setHistory] = useState([initial]);

//   //transition to a new mode
//   function transition(current, replace) {
//     replace && back();
//     let newHistory = [...history];
//     newHistory.push(current);
//     setHistory(newHistory);
//     setMode(current);
//   }

//   function back() {
//     let newHistory = [...history];
//     newHistory.pop();
//     setHistory(newHistory);
//     setMode(newHistory[newHistory.length - 1]);
//   }
//   return { mode, transition, back };
// }

 