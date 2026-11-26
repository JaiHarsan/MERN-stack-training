import { useState,useEffect } from "react";

function Counter(){
    const[count,setCount] = useState(0)
    function increase(){
        setCount(count + 1);
    }
    function decrease(){
        setCount(count - 1);
    }
    useEffect(()=>{
        console.log("count is updated")
    },[count])
    return(
        <div>
            <h3>Counter app</h3>
            <p>{count}</p>
            <button onClick={increase()}>Increment</button>
            <button onclick={decrease()}>Decrement</button>
        </div>
    )
}

export default Counter