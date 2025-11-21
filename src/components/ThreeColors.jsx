import React from "react"
import { useState } from "react"; 

const ThreeColors = () => {   
    
    const [color, setColor] = useState("black"); 
    
     return(
        <>
         <button style={{color: color}} onClick={() => setColor("red")}>Czerwony</button>
         <button style={{color: color}} onClick={() => setColor("blue")}>Niebieski</button>
         <button style={{color: color}} onClick={() => setColor("green")}>Zielony</button>
        </>
     );
}; 

export default ThreeColors;