import React from "react";
import  { useState } from "react";
function UseStateHook(){
  let[details,setDetails]=useState({
    name:"divya",
    age:22,
    place:"india"
  });
  return (
    <div>
     <h1>UseStateHook</h1>
     <h3>Add Details</h3>
    <ul>
      {Object.entries(details).map((items,index)=>(
        <li key={index}>
          {items[0]}:{items[1]}
        </li>
      ))}
    </ul>
    

     <button onClick={()=>setDetails({...details,hobbies:"cooking"})}>Add Hobbies</button>
    </div>
  );
}

export default UseStateHook;