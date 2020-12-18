import React, { useState, useEffect } from 'react';
import Question from './components/Question';
import Form from './components/Form';
import List from './components/List';
import BudgetControl from './components/BudgetControl';


function App() {
  //state
  const [budget, saveBudget] = useState(0);
  const [balance, setBalance] = useState(0);
  const [showquestion, updateQuestion] = useState(true);
  const [outlay, setOutlay] = useState([]);
  const [expense, setExpense] = useState({});
  const [ createExpense, setCreateExpense] = useState(false);

  //useEffect refresh Balance
  useEffect(() => {
    //add new budget
    if(createExpense){
      setOutlay([
        ...outlay,
        expense
      ]);

      //show actual balance
      const actualBalance = balance - expense.amount;
      setBalance(actualBalance);

      //reset
      setCreateExpense(false);
    }
  }, [expense])





  return (
    <div className="container">
      <header>
        <h1>Weekly Budget</h1>

        <div className="contenido-principal contenido">
          {showquestion ?
            (
              <Question
                saveBudget={saveBudget}
                setBalance={setBalance}
                updateQuestion={updateQuestion}
              />
            )
            :
            (
              <div className="row">
                <div className="one-half column">
                  <Form
                    setExpense={setExpense}
                    setCreateExpense={setCreateExpense}
                  />
                </div>
                <div className="one-half column">
                  <List
                    outlay={outlay}
                  />

                  <BudgetControl
                    budget={budget}
                    balance={balance}
                  />
                </div>
              </div>
            )}


        </div>
      </header>
    </div>

  );
}

export default App;
