import React  from "react";

function Animal()
{
    return(
        <Animal1 cat={'name1'} />
    )
}


class Animal1 extends React.Component
{
    render()
    {
        return(
            <>
            {{ 'name':this.props.cat}}
                I am Cat from Animal1 component
            
            </>
        )
    }
}

export default Animal1;