import { useState } from "react";

function Employee()
{
    const [id,setState]=useState(10012);
    const [name,setName]=useState("Name1");
    const [Dept,setDept]=useState("development");

    return(
        <>
        <h1> Id is :{id} </h1>
        <h1>Name : {name}</h1>
        <h1>Department :{Dept}</h1>
        </>
    )
}

export default Employee;