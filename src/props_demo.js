function Emp(props)
{
    return<h1>Emp Id is:{props.data.empid} <br/> Name: {props.data.Name}</h1>
}


function Dept()
{
    const EmpData={empid:10013,Name:"Name123",Dept:"Development"};
    return(
        <>
        <Emp data={EmpData} />

        </>
    )
}

export default Dept;