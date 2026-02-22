import { useState } from "react";
import ExpenseForm from "./component/ExpenseForm";
import ExpenseList from "./component/ExpenseList";
import style from "./Index.module.css"

function App(){
  const[expense,setExpense]=useState([]);
  const[editExpense,setEditExpense]=useState(null);
  const[isEditing,setIsEditing]=useState(false);
  return <div className={style.main}>
    <h2>Expense Tracker </h2>
    <ExpenseForm setExpense={setExpense}  expense={expense} editExpense={editExpense} isEditing={isEditing} setIsEditing={setIsEditing} setEditExpense={setEditExpense} />
    <ExpenseList expense={expense} setExpense={setExpense} setEditExpense={setEditExpense} isEditing={isEditing} setIsEditing={setIsEditing} />

  </div>
}
export default App;