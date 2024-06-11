import React from 'react';
import './App.css';
import {ClassCompWithCounter} from "./class-component-with-counter";


function App() {
  return (
    <div className="App">
      <ClassCompWithCounter initialCount={0}/>
    </div>
  );
}

export default App;
