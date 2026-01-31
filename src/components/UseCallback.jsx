import React, { useState } from "react"; 
import { useCallback } from "react";


function UseCallback(){

    let[inputVal,setInputval]=useState("");

    const handleclick= useCallback(()=>{
        console.log("im handle click function");
    },[]);

    return(
        <div>
            <h2>UseCallback</h2>
            <input type="text" value={inputVal} onChange={(e)=>setInputval(e.target.value)}/>
            <button onClick={handleclick}>Click me</button>
            <UseCallbackChild handleclick={handleclick} />
        </div>
    );

}

const UseCallbackChild=React.memo(() =>{
    console.log(" Im a Usecallbackchild");
     return <div>UseCallbackChild</div>

});

export default UseCallback;