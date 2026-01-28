import React from "react";
import { useState,useMemo } from "react";

function UseMemo(){
    let[count,setCount]=useState(0);
    let[Inputval,setInputVal]=useState("");

    function calculateSum(num){
        console.log("this is function of calculatesum")
        for(let i=0;i<1000000;i++){
            num++;
        }
        return num;

    }
    let result=useMemo(()=>{
     return calculateSum(count);
    },[count]);
    return(
        <div>
            <h1>UseMemo</h1>
            <h3>{result}</h3>
            <input type="text" value={Inputval} onChange={(e)=>setInputVal(e.target.value)}/>
            <button onClick={()=>setCount(count++)}>increase 1</button>
        </div>
    );
}
export default UseMemo;