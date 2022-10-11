import React from 'react'

class DerivedState extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={f_color:"red"};
    }
static getDerivedStateFromProps(props,state)
{
    return {f_color:props.favcolor}
}

render()
{
    return(
        <h1>Colour is {this.state.f_color}</h1>
    )
}
}
export default DerivedState;