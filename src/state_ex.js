import React from 'react-dom'

class Car extends React.Component
{
constructor(props)
{
    super(props);
    this.state={
        brand:"Honda",};
}
render()
{
    return(
        <div>
            <h1>{this.state.brand}</h1>
        </div>
    )
}
}

export default Car;