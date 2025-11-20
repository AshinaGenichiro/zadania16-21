import React from "react"
import { useState } from "react"; 

const ThreeColors = () => {   
    
    const [color, setColor] = useState("black"); 
    
     return(
        <>
        <button style={{color:color}} onclick={setColor("red")}>Czerwony</button>
        <button style={{color:color}} onclick={setColor("green")}> Zielony</button>
        <button style={{color:color}} onclick={setColor("blue")}>Niebieski</button>
            
       
        </>
     );
}; 

export default ThreeColors;