import React, { useEffect, useState } from 'react';
import style from "./Expenseform.module.css";


function ExpenseForm({expense,setExpense,editExpense,isEditing,setIsEditing,setEditExpense}){
  const[title,setTitle]=useState("");
  const[amount,setAmount]=useState(0);

  
  function handleSubmit(e){
    e.preventDefault();
    console.log("handle submitted successfully",title,amount);

    if(isEditing && editExpense.length>0){
      let updateExpense=expense.map((ele)=>
        ele.id===editExpense[0].id 
      ?{...ele,expenseTitle:title,expenseAmount:amount}
      :ele
      );
      setExpense(updateExpense);
      setIsEditing(false);
      setEditExpense([]);
      setTitle("");
      setAmount(0);
      return;
    }
    
    let newExpenses=[...expense,{id:expense.length+1,expenseTitle:title,expenseAmount:amount}];
    setExpense(newExpenses);
    setTitle("");

    setAmount(0);

  }

  useEffect(()=>{
    if( editExpense && editExpense.length>0){
      setTitle(editExpense[0].expenseTitle || "");
      setAmount(editExpense[0].expenseAmount?.toString()|| "");
    }

  },[isEditing,editExpense])
  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <input type='text' placeholder='Expense Title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
      <input type='number' placeholder=' Amount'  value={amount} onChange={(e)=>setAmount(e.target.value)}/>
      <button type='submit'>{isEditing? "Update Expense":"Add Expense"}</button>
    </form>
    
  );
}

export default ExpenseForm;