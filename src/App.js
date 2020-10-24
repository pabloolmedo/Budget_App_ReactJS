import React, { useState } from 'react';
import Question from './components/Question';
import Form from './components/Form';
import List from './components/List';


function App() {
  //state
  const [budget, saveBudget] = useState(0);
  const [balance, setBalance] = useState(0);
  const [showquestion, updateQuestion] = useState(true);
  const [outlay, setOutlay] = useState([]);

  //executed when add a new outlay
  const addNewOutlay = (expense)=>{
    setOutlay([
      ...outlay,
      expense
    ]);
  }
  

  
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
                    addNewOutlay={addNewOutlay}
                  />
                </div>
                <div className="one-half column">
                  <List 
                  outlay={outlay}
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
