import React from "react";

var newData={
    data:'Data from HOC...'
}

var Higher_order= ComposedComponent=> class extends React.Component
{
    componentDidMount()
    {
        this.setState({
            data:newData.data
        });
    }
    render()
    {
        return<ComposedComponent{...this.props}{...this.state}/>

    }
};

class MyComponent extends React.Component
{
    render()
    {
        return(
            <>
            <h1>{this.props.data}</h1>
            
            </>
        )
    }
}

export default Higher_order(MyComponent);