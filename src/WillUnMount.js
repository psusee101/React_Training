import React from 'react'

class WillUnMount extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={display:true};
    }
delHeader = () =>{
    this.setState({display:false})
}
render()
{
    let myHeader;
    if(this.state.display)
    {
        myHeader=<Child/>;
    };
    
    return(
        <>
        {myHeader}
        <button type='button' onClick={this.delHeader}>delHeader</button>
        </>
    )
}
}

class Child extends React.Component
{
    componentWillUnmount()
    {
        alert("the component named Header is about to be unmounted");
    }
    render(){
        return(
            <>
            <h1>Hello World</h1>
            </>
        )
    }
}
export default WillUnMount;