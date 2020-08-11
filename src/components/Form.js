import React, { useState } from 'react';


const Form = () => {
    return (
        <form>
            <h2>Add your expenses here</h2>

            <div className="campo">
                <label>Expenses</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ex. Transport"
                />
            </div>

            <div className="campo">
                <label>Amount of expenses</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ex. 1000"
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