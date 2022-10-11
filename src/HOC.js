import React,{Component} from 'react'

export default function Hoc(HocComponent)
{
    return class extends Component{
        render()
        {
            return(
                <>
                <HocComponent></HocComponent>
                </>
            )
        }
    }
}