import React from "react";
import  {useState} from "react";

function Conditionalrendering(){

    let[data,setData]=useState(null);
    let[error,SetError]=useState(null);

    function getData(){
        (async function fetchData(){
            let result=await fetch("https://jsonplaceholder.typicode.com/users");
            let parseData=await result.json();
            console.log(parseData);
            if(!result.ok){
                SetError("Data failed to fetch");
            }

            if(parseData.length>0){
                SetError(null);
                setData(parseData);
            }
        })();
    }



    return(
        <div>
            <h1>Conditional Rendering</h1>
            <button onClick={getData}>cllick me to GetData</button>
            <ol>
                {data !== null ?data.map((element,index)=>{
                    return(
                        <li key={index}>Name-{element.name} Email-{element.email}</li>
                    )
                })
            :null}
            {error !==null ?<h3> {error} </h3>:null}
            </ol>

        </div>
    )
}

export default Conditionalrendering;