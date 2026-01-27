import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react';

function UseEffectHook(){ 
  let[count,setCount]=useState(0);
  let[hobbies,setHobbies]=useState(0);
     
    useEffect(()=>{
      let setInt=setInterval(()=>{
        console.log(Date.now())
      },1000)
      return ()=>{//cleanup function
        clearInterval(setInt);

      };
    },[]);
  return (
    <div>
        <h1>UseEffectHook</h1>
        <p>UseEffecthook is used to run sideeffects(outside rendering) in react components </p>
         <p>{count}</p>
        <button onClick={()=>setCount(count+1)}>increase count</button>
        <p>{hobbies}</p>
        <button onClick={()=>setHobbies(hobbies+1)}>increase hobbies</button>
    </div>
  )
}

export default UseEffectHook