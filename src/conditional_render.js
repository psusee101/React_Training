function C1()
{
    return <h1>Componet 1</h1>
}

function C2()
{
    return <h1>Componet 2</h1>
}

function Main(props)
{
    const data=props.data;
    if(data)
    {
        return <C1/>
        // return <div><C1 />,<C2/></div>; 
    }
    return <C2 />
}

export default Main;
