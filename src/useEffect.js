import { useState, useEffect } from "react";

function Timer()
{
    const [count,setCount] =useState(0);

    useEffect(()=>{
        setTimeout(()=>{
            setCount((count)=>count+1);
        },1000)
    });

    return <h1> Rendered {count} times!</h1>
}


export default Timer;