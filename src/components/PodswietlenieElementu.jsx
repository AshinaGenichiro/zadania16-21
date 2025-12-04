import React from "react"
import { useState } from "react"; 
const App = () => {
    const handleSelectItem = (item) => { 
   console.log(`Wybrano: ${item}`); 
    }
    const PodswietlenieElementu = ({ items,onSelectItem }) => { 
        const [selectedItem, setSelectedItem] = useState(null); 
        return ( 
            <ul> 
            {items.map((item, index) => ( 
               <li
            key={index}
            className={selectedItem === item ? "active" : ""}
            onClick={() => { 
                        setSelectedItem(item); 
                        onSelectItem(item); 
                    }} 
                > 
            {item}
          </li>
            ))} 
        </ul> 
    ); 
};
 return ( 
        <div> 
            <h2>Wybierz miasto:</h2> 
            <PodswietlenieElementu items={["Warszawa", "Kraków", "Gdańsk"]}selectedItem="Krakow" onSelectItem={handleSelectItem}/> 
        </div> 

    ); 

}; 


export default App;