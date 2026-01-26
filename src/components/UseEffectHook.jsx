import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react';

function UseEffectHook(){ 
  let[count,setCount]=useState(0);
     
    useEffect(()=>{
      console.log("im useeffect")

    });
  return (
    <div>
        <h1>UseEffectHook</h1>
        <p>UseEffecthook is used to run sideeffects(outside rendering) in react components </p>
        {count}
        <button onClick={()=>setCount(count+1)}>increase count</button>
    </div>
  )
}

export default UseEffectHook