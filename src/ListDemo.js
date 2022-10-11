function Dept(props)
{
return <li> Department is{props.dept_name}</li>

}

function Display_dept()
{
const depts=['Development','Testing','QA'];
return(
<>
<h1>List of Departments</h1>
<ul>
{depts.map((emp)=> <Dept dept_name={emp}/>)}
</ul>
</>
);
}

export default Display_dept;


