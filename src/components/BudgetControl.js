import React, { Fragment } from 'react';
import { checkBudget } from '../helpers';


const BudgetControl = ({budget, balance}) => {
    return (
        <Fragment>
            <div className="alert alert-primary">
                Budget:${budget}
            </div>
            <div className={checkBudget(budget, balance)}>
                Balance:${balance}
            </div>
        </Fragment>

    );
}

export default BudgetControl;