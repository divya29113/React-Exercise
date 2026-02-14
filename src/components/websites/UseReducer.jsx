import React,{useReducer, useState,useRef, useContext} from 'react'
import { reducerfunction } from './reducerfunction';
import { context } from '../store/ContextProvider';

function UseReducer() {
    const[state,dispatch]=useReducer(reducerfunction,{
        count:0,
        isLoggedIn:false,
        todos:[{
        id:1,
        todo:"I will code today",
         status:"pending"
        }]


    })
    
    /* let[count,setCount]=useState(0);
    let[isloggedin,setIsloogedin]=useState(false);
    let[todos,setTodos]=useState([{
        id:1,
        todo:"I will code today",
         status:"pending"
     }]) */
    /* function handleOnClick(){
        let count2=count+1;
        setCount(count2);

    } */
   let ref=useRef();
   let data=useContext(context);
   console.log(data);
   function handleOnCLick(){
    dispatch({type:"login"})
   }

   function increaseCount(){
    dispatch({type:"Increase count"})
   }

   function handleAddToDo(e){
    let newTodo={
        id:state.todos.length+1,
        todo:ref.current.value,
        status:"pending",

    }
    let updateTodo=[...state.todos,newTodo];
    dispatch({type:"setTodos",payload:updateTodo});

   }
  return (
    <div>
        
        <h1>UseReducer</h1>
        <ol>
            {state.todos.map((element,index)=>{
               return  <li key={index}>{element.todo}</li>;
            })}
        </ol>
        <input type='text' ref={ref} />
        <button onClick={handleAddToDo}>Add Todo</button>
        
        <h3>count={data.count}</h3>
        <button onClick={()=>data.setCount(data.count+1)}>Increase by 1</button>
         
        <h3>{state.isLoggedIn?"welcome user 1":"please login"}</h3>
        <button onClick={handleOnCLick}>Login</button>
    </div>
  )
}

export default UseReducer;