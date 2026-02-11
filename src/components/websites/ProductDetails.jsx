import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
function ProductDetails(){
    const[dummyProduct,setDummyProduct]=useState([
        {
            productName:"Apple phone",
        },
        {
            productName:"Utensils",
        },
        {
            productName:"Chocolate",
        },
        {
            productName:"Dresses",
        },
    ])



    return(
        <div>
            <h3>ProductDetails</h3>
            <div>
                <ol>
                    {dummyProduct.map((product,index)=>{
                        return(
                        <li key={index}>
                            {product.productName}-{" "}
                            <Link to={`${product.productName}`}>Click to see {product.productName} details</Link>
                            </li>
                            ); 
                    })}
                </ol>
                <Outlet />
            </div>
        </div>
    )
}
export default ProductDetails;