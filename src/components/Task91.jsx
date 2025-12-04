import { useState } from "react";

const CountProps = ({showCount}) => {
    return showCount
}

const Task91 = () =>{

    const [count,setCount] = useState(0);
    return(
        <div>
            <button onClick={() => setCount(count+1) }>Zwiększ</button>
            <CountProps showCount={count} />
            
        </div>
    );
};
export default Task91;
