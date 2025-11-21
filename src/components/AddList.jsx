import React from "react"
import { useState } from "react"; 

let interval;
const AddList = () => {   
    
   const [list, setList] = useState([]); 
   const [text, setText] = useState("");
   function handleAdding()
   {
      setList([...list,text])
      setText("");
   }
   return(
        <>
      <input type="text"
      value={text}
      onChange={(e) => setText(e.target.value)} />
      <button onClick={handleAdding}>Dodaj</button>
      <ul>
         {list.map((item,i ) =>(
            <li key={i}> {item}</li>
            ))}
      </ul>
        </>
     );
}; 

export default AddList;