import React from 'react'

class Employee extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            empid:10011,
            name:"Name1",
            dept:"Development"
        };  
    }
    changeData= ()=>
    {
        this.setState({name:"Name2",empid:10022,dept:"testing"});
        // this.setState({empid:10022});
        // this.setState({dept:"Testing"});
        
    }
    render()
    {
        return(
            <>
            <h1>Employee ID is:{this.state.empid}</h1>
            <h1>Employee Name is:{this.state.name}</h1>
            <h1>Employee Department is:{this.state.dept}</h1>
            <button type="button" onClick={this.changeData}>Change Name</button>
            </>
        )
    }
}

export default Employee;