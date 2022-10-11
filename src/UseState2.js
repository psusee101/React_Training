import { useState } from "react";

function Product1()
{
    const [product,setProduct] = useState({
        Name:"Car",
        Qty:1500,
        Price:2000
        
    });
    const updateName = () =>
    {
        setProduct(previouState=>{
            return {...previouState,Name:"New Car"}
        });
    }

    return(
        <>
        <h1>Product Name is :{product.Name}</h1>
        <h2>Qty :{product.Qty}</h2>
        <h2>Price:{product.Price}</h2>
        <button type="button" onClick={updateName}>Updated Name</button>
        </>
    )
}

export default Product1;