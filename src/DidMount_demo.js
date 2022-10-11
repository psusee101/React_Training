import React from 'react'

class  DidMount extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={f_color:"red"};
    }
componentDidMount()
{
    setTimeout(()=>
    {
        this.setState({f_color:"violet"})
    },2000)
}

render()
{
    return(
        <h1>Colour is {this.state.f_color}</h1>
    )
}
}
export default DidMount;