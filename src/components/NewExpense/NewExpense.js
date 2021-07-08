import React, { useState } from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [formVisible, setFormVisible] = useState (false);

    const startEditingHandler = () => {
        setFormVisible(true)
    };
    const stopEditingHandler = () => {
        setFormVisible(false)
    }
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setFormVisible(false)
    };

    return <div className = "new-expense"> 
       {!formVisible && <button onClick = {startEditingHandler}>Add New Expense</button>}
        {formVisible &&
        <ExpenseForm 
        onSaveExpenseData = {saveExpenseDataHandler} 
        onCancel = {stopEditingHandler}/>
        
        }
        
        
    </div>
}

export default NewExpense