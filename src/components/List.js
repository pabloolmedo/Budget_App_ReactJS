import React from 'react';
import Expense from './Expense';

const List = ({outlay}) => {
    return (  
        <div className="gastos-realizados">
            <h2>Expenses</h2>
            {outlay.map(expense=>(
                <Expense 
                key={expense.id}
                expense={expense}

                />
            ))}
        </div>
    );
}
 
export default List;