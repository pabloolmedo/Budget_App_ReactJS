import React, { useState } from 'react';
import Question from './components/Question';


function App() {
  //state
  const [budget, saveBudget] = useState(0);
  const [balance, setBalance] = useState(0);
  return (
    <div className="container">
      <header>
        <h1>Weekly Budget</h1>

        <div className="contenido-principal contenido">
          <Question
          saveBudget={saveBudget}
          setBalance={setBalance}
          />
        </div>
      </header>
    </div>

  );
}

export default App;
