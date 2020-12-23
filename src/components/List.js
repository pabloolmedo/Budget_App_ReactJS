import React from 'react';
import Expense from './Expense';
import PropTypes from 'prop-types';

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

List.propTypes = {
    outlay: PropTypes.array.isRequired
}
 
export default List;

