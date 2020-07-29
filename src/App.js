import React from 'react';
import Question from './components/Question';


function App() {
  return (
    <div className="container">
      <header>
        <h1>Weekly Budget</h1>

        <div className="contenido-principal contenido">
          <Question />
        </div>
      </header>
    </div>

  );
}

export default App;
