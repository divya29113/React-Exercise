import { useEffect, useState } from 'react'

function App() {
  
  const [value, setValue] = useState("");
  const[todos,setTodos]=useState([]);
  function handleChange(e){
    setValue(e.target.value)
  }
  function handleClick(){
    let newTodo={
      name:value,
      status:"pending"
    };
    let newTodolist=[...todos,newTodo];

    setTodos(newTodolist);
    localStorage.setItem("todos",JSON.stringify(newTodolist))
    setValue("");

  }

  useEffect(() => {
    let todos=JSON.parse(localStorage.getItem("todos"))|| [];
    setTodos(todos);
  },[]);

  return (
    
      <div>
        <h1>TODO List</h1>
        <input type="text" value={value} placeholder=' please enter your todo' onChange={handleChange}/>
        <button onClick={handleClick}>Add todo</button>
        <div>
          <h2>List of todo items</h2>
          <ol>
            {todos?.map((item,index)=>{
              return <li key={index}>{item.name}-status--{item.status}</li>
            })};
          </ol>
        </div>
      </div>
      
  )
}

export default App
