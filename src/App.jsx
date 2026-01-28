//hooks-special functions provided by react
//jsx-it means javascript+xml
//props-properties-used to pass data from one component to another component.
//Ways of pass data-1.parent to child ,2.child to parent 3.between siblings
//lifting the state up -moving the data to common parent component
import ReactHooks from "./components/ReactHooks";
import UseEffectHook from "./components/UseEffectHook";
import UseStateHook from "./components/UseStateHook";
import { useState } from "react";
import Welcome from "./components/Welcome";
import ControlComponent from "./components/controlComponent";
import Conditionalrendering from "./components/Conditionalrendering";
import UseMemo from "./components/UseMemo";



function App() {  
  let[showcomponent,setshowcomponent]=useState(false);

  return (
  <div>
    <h1>This is React course</h1>
    {/*<Welcome/>
    <ReactHooks />
    <UseStateHook/>
    
    <button onClick={()=>setshowcomponent(!showcomponent)}>Rendercomponent</button> 
    {showcomponent&&<UseEffectHook/>}
    <ControlComponent/>
    <Conditionalrendering />*/}
    <UseMemo />

  </div>);
}
export default App;
