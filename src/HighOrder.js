import React from 'react'

const EnhancedComponent =(OriginalComponet)=>{
    class NewComponent extends React.Component
    {
        constructor(props)
        {
            super(props);
            this.state={count:0};
        }
    
    handleClick = () => 
    {
        this.setState({count:this.state.count+1});
    }

    render(){
        return <OriginalComponet 
        handleClick={this.handleClick}
         show={this.state.count}/>
    }
}
return NewComponent
}

export default EnhancedComponent;