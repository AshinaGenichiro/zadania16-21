import { useState } from "react";

const ChangeColor = ({color}) => {
    return color;
}
const Task92 = () =>{
    
    const [color,setColor] = useState("#000000");
    const changeColor = () => {
    const newColor = '#' + Math.random().toString(16).substr(-6);
    setColor(newColor);
    document.body.style.backgroundColor = newColor; // Zmienia kolor tła body
  };

    return (
        <>
        <button onClick={changeColor}>Zmień kolor tła</button>
        </>
    );
};
export default Task92;
