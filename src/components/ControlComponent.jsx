import React from 'react'
import {useState} from 'react';
/*import { useRef } from 'react'*/



function ControlComponent() {
   /* let reference=useRef();
    function changeValue(){
          console.log(reference.current.value);
    }*/
   let [Username ,setUsername]=useState("");
   function onchangevalue(e){
        setUsername(e.target.value);
   }
  return (
    <div className='div'>
        <h1>Controlled vs Uncontrolled components</h1>
        <input /*ref={reference} */ value={Username} onChange={onchangevalue} type='text'/>
        <h2>uncontrolled components</h2>
        <p>uncontrolled components when you access the value directly using the dom element with the help of useref hook that is uncontrolled component</p>
        <button>click me</button>
        <p>Hello</p>
    </div>
  )
}

export default ControlComponent;