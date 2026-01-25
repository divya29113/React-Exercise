//hooks-special functions provided by react
//jsx-it means javascript+xml
//props-properties-used to pass data from one component to another component.
//Ways of pass data-1.parent to child ,2.child to parent 3.between siblings
//lifting the state up -moving the data to common parent component
import ReactHooks from "./components/ReactHooks";
import Welcome from "./components/Welcome";



function App() {  
  

  return (
  <div>
    <h1>This is React course</h1>
    <Welcome/>
    <ReactHooks />
    

  </div>);
}
export default App
