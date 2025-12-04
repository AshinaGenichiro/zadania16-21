import React from "react"
import { useState } from "react"; 


const ClickedOnCity = () => { 
    const List = ({ items, heading }) => { 
    return ( 
        <div> 
            <h2>{heading}</h2>
            <ul> 
                {items.map((item, index) => ( 
                    
                    <li key={index} onClick={() =>console.log(`Kliknięto na ${item}`)}>{item}</li> 
                ))} 
            </ul> 
            
        </div> 
    ); 

    }; 
    return ( 
        <div> 
            <List heading="Miasta" items={["Nowy Jork", "Londyn", "Paryż"]} /> 
 
        </div> 
    ); 
}; 


export default ClickedOnCity;