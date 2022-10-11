import React from 'react'

class Constructor_demo extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={f_color:"red"};
    }


render()
{
    return(
        <h1>Colour is {this.state.f_color}</h1>
    )
}
}
export default Constructor_demo;