import { useState } from "react";

function Product()
{
    const [product,setName] = useState({
        Name:"Car",
        Qty:1500,
        Price:2000
        
    });

    return(
        <>
        <h1>Product Name is :{product.Name}</h1>
        <h2>Qty :{product.Qty}</h2>
        <h2>Price:{product.Price}</h2>
        </>
    )
}

export default Product;