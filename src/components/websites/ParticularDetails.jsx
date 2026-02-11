import { useState } from "react";
import { useParams } from "react-router-dom";

function ParticularDetails(){
    const[dummyData,setDummyData]=useState([{
        productName:"Apple phone",
        price:"$1550",
        waranty:"3years",
        customercare:"234567",

    },
    {
        productName:"Utensils",
        price:"$550",
        waranty:"2years",
        customercare:"23456798",


    },
    {
        productName:"Chocolate",
        price:"$155",
        waranty:"6months",
        customercare:"23456097",

    },
    {
        productName:"Dresses",
        price:"$750",
        waranty:"unlimited",
        customercare:"0984567",

    },
])
let {productName}=useParams();
let filteredData=dummyData.filter((product)=>{
    return product.productName === productName;
});
console.log(filteredData);
      return(
        <div>
            {filteredData?.map((product,index)=>{
                return(
                    <div key={index}>
                        <h2>{product.productName}</h2>
                        <p>Price:{product.price}</p>
                        <p>Waranty:{product.waranty}</p>
                        <p>Customercare:{product.customercare}</p>

                    </div>

                );
            })}
        </div>
    )
}
export default ParticularDetails;