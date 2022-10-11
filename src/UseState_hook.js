import {useState} from 'react';

function Fav_color()
{
    const [color,setColor]=useState("red");
    return(
        <>
        <h1>Color is {color}</h1>

        <button type='button' onClick={()=>setColor("blue")}>blue</button>
        <button type='button' onClick={()=>setColor("green")}>green</button>

        <button type='button' onClick={()=>setColor("yellow")}>yellow</button>

        <button type='button' onClick={()=>setColor("white")}>white</button>

        </>
    )
}

export default Fav_color;