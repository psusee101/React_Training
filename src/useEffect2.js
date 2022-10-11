import { useState, useEffect } from "react";

function Timer1()
{
    const [count,setCount] =useState(0);
    const [calculate,setCalculate]=useState(0);

    useEffect(()=>{
       
            setCalculate(()=>count *2 );
        },[count]);
    

    return (
        <>
        <p>Count : {count}</p>
        <button onClick={()=>setCount((c)=> c+1)}>+</button>
        <p>Calculation :{calculate}</p>
        </>
    )
}

export default Timer1;