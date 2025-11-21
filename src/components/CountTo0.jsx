import React from "react"
import { useState } from "react"; 

let interval;
const CountTo0 = () => {   
    
   const [count, setCount] = useState(10); 
   function handleCount()
   {
        if(count > 0 )
        {
            setCount(count-1)
        }
   }
   return(
        <>
        <p>{count}</p>
        <button disabled = {count === 0} style = {{backgroundColor: count === 0 ? "gray" : "green"}} onClick={handleCount}>Zmniejsz</button>
      
        </>
     );
}; 

export default CountTo0;