import React from 'react'

class Header2 extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={f_color:"Violet"};
    }
shouldComponentUpdate()
{
    return false;
}
changeColor = () =>{
    this.setState({f_color:"Orange"});
}
render()
{
    return(
        <>
        <h1>Colour is {this.state.f_color}</h1>
        <button type="button" onClick={this.changeColor}>changeColor</button>
        </>
    )
}
}
export default Header2;