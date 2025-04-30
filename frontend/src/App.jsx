import React from 'react';
import Todo from './Todo.jsx';
import './App.css';

const App = () => {
  return (<div>

    <div className="app-container">
      <Todo />
    </div>
      <div style={{backgroundColor:'black',textAlign:'center',color:'white'}}>© 2025 Rohini Mittal. All rights reserved.</div>
  </div>

  );
};

export default App;
