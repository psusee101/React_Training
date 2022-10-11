import React from 'react'
class ChildComponent extends React.Component
{
    render()
    {
        const { msg } = this.props;
        return(
            <>
            <p>message from App Component :<b>{msg}</b></p>
            </>
        )
    }
}

export default ChildComponent;