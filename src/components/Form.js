import React, { useState } from 'react';
import Error from './Error';
import shortid from 'shortid';


const Form = ({ setExpense, setCreateExpense }) => {
    const [reference, saveReference] = useState('');
    const [amount, saveAmount] = useState(0);
    const [error, setError] = useState(false);


    // submit function
    const addExpense = e => {
        e.preventDefault();

        //validate form
        if (reference.trim() === '' || amount < 1 || isNaN(amount)) {
            setError(true);
            return;
        }
        setError(false);
        //build object  
        const expense = {
            reference,
            amount,
            id: shortid.generate()
        }

        //send expense to app component
        setExpense(expense);
        setCreateExpense(true);

        //reset form
        saveReference('');
        saveAmount(0);

    }
    return (



        <form

            onSubmit={addExpense}
        >
            <h2>Add your expenses here</h2>

            {error ? <Error message="Both inputs are rquired or wrong expense" /> : null}


            <div className="campo">
                <label>Expenses</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ex. Transport"
                    value={reference}
                    onChange={e => saveReference(e.target.value)}
                />
            </div>

            <div className="campo">
                <label>Amount of expenses</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ex. 1000"
                    value={amount}
                    onChange={e => saveAmount(parseInt(e.target.value) || amount)}
                />
            </div>

            <input
                type="submit"
                className="button-primary u-full-width"
                value="Add expense"

            />
        </form>

    );
}

export default Form;