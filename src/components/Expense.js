import React from 'react';


const Expense = ({ expense }) => { 
    return (
    <li className="gastos">
        <p>
             {expense.reference}

            <span className="gasto">${expense.amount}</span>
        </p>

    </li>
)}

export default Expense;