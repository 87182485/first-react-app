import React from 'react';
import './App.css';
import { Todo } from './Todo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Todos
        <Todo />
      </header>
    </div>
  );
}

export default App;
