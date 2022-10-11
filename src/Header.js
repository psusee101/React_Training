import React from 'react'

class Header extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={f_color:"red"};
    }

componentDidMount()
{
    setTimeout(()=>{
        this.setState({f_color:"yellow"})
    },1000)
}
render()
{
    return(
        <h1>Colour is {this.state.f_color}</h1>
    )
}
}
export default Header;