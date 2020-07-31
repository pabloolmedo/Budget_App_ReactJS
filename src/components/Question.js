import React, { Fragment, useState } from 'react';
import Error from './Error';

const Question = () => {
    //State
    const [quantity, setQuanqtity] = useState(0);
    const [error, setError] = useState(false);
    //setBudget function
    const setBudget = (event) => {
        setQuanqtity(parseInt(event.target.value, 10));
    }

    //submit budget
    const addBudget = (event) => {
        event.preventDefault();

        //validation
        if (quantity < 1 || isNaN(quantity)) {
            setError(true);
            return;
        }

        //actions
        setError(false);

    }
    return (
        <Fragment>
            <h2>Add your budget</h2>
            {error ? <Error message="Is not a valid budget" /> : null}

            <form
                onSubmit={addBudget}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Add your budget"
                    onChange={setBudget}
                />

                <input
                    type="submit"
                    className=" button-primary u-full-width"
                    value="Define budget"

                />
            </form>
        </Fragment>
    );
}

export default Question;