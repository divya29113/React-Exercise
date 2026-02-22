import React from 'react';
import style from "./Expenselist.module.css"

function ExpenseList({expense,setExpense,setEditExpense,isEditing,setIsEditing}) {
  function editExpense(id){
    setIsEditing(true);
    let filter=expense.filter((ele)=> ele.id.toString()===id.toString());
    setEditExpense(filter);
    

  }
  function deleteExpense(id){
    let filteredNew=expense.filter((ele)=>ele.id.toString()!==id.toString());
    setExpense(filteredNew);
  }
  return (
    <div className={style.listmain}>
      <ul>
        {expense.map((element)=>{
         return (
          <li key={element.id}>{element.expenseTitle} --Rs {element.expenseAmount}
          <button onClick={()=> editExpense(element.id)}>Edit Expense</button>
          <button onClick={()=> deleteExpense(element.id)}>Delete Expense</button>
          
          </li>);
        })}
                
      </ul>
    </div>
  )
}

export default ExpenseList;