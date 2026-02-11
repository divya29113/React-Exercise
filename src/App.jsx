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
import UseCallback from "./components/UseCallback";
import { Routes,Route } from "react-router-dom";
import Home from "./components/websites/Home";
import Products from "./components/websites/Products";
import AboutUs from "./components/websites/AboutUs";
import Contact from "./components/websites/Contact";
import Navigation from "./components/websites/Navigation";
import ProductDetails from "./components/websites/ProductDetails";
import ParticularDetails from "./components/websites/ParticularDetails";

function App() {  
  let[showcomponent,setshowcomponent]=useState(false);
 
  return (
  <div>
    {/*<h1>This is React course</h1>
    <Welcome/>
    <ReactHooks />
    <UseStateHook/>
    
    <button onClick={()=>setshowcomponent(!showcomponent)}>Rendercomponent</button> 
    {showcomponent&&<UseEffectHook/>}
    <ControlComponent/>
    <Conditionalrendering />
    <UseMemo />
    <UseCallback />*/}
    <Navigation />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/products" element={<Products />}>
        <Route path="details" element={<ProductDetails/>}/>
        <Route path="details/:productName" element={<ParticularDetails />}/>
      </Route>
      <Route path="/aboutus" element={<AboutUs/>} />
      <Route path="/contact" element={<Contact/>} />

    </Routes>
  </div>);
}
export default App;
