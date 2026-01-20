//hooks-special functions provided by react
//jsx-it means javascript+xml
import { useState } from "react";
function App() {  
  const [count,setCount]=useState("divya");

  let name="sanju";
  let na={name:"jesus",anotherName:"sheeba"};
  return (
  <div>
    <h1>Hello world, {na.name}</h1>

  </div>);
}
export default App
