import React, { Fragment } from 'react';

const Question = () => {

    
    return (
        <Fragment>
            <h2>Add your budget</h2>
            
            <form>
                <input
                type="number"
                className="u-full-width"
                placeholder="Add your budget"
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