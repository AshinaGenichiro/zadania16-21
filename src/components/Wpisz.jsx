import React from "react"
import { useState } from "react"; 

const Wpisz = () => {   
    
    const [text, setText] = useState(""); 
    
     return(
        <>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)}></input>
            <p>{text == "" ? "Wpisz coś powyżej" : text} </p>  
        </>
     );
}; 

export default Wpisz;