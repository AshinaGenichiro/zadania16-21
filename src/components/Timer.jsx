import React from "react"
import { useState } from "react"; 

let interval;
const Timer = () => {   
    
    const [showTimer, setTimer] = useState(0); 
    const start = () => {
        interval = setInterval(() => {
            setTimer(s => s + 1);
        }, 1000);   
    };
    const stop = () => {
        clearInterval(interval);
    };
     return(
        <>
        <h2>{showTimer}</h2>
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        </>
     );
}; 

export default Timer;