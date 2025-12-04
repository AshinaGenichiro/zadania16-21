import React from "react"
import { useState } from "react"; 


const ReuzywalneKomendy = ({ items, heading }) => { 
    const List = ({ items, heading }) => { 
    return ( 
        <div> 
            <h2>{heading}</h2> 
            {items.length === 0 ?
            <p>Brak elementow do wyswietlenia</p>
            : 
            <ul> 
                {items.map((item, index) => ( 
                    
                    <li key={index}>{item}</li> 
                ))} 
            </ul> 
            }
        </div> 
    ); 

    }; 
    return ( 
        <div> 
            <List heading="Miasta" items={["Nowy Jork", "Londyn", "Paryż"]} /> 
            <List heading="Imiona" items={[]} /> 
        </div> 
    ); 
}; 


export default ReuzywalneKomendy;