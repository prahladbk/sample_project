import './App.css';
import React, { useState } from 'react'

function App() {

  const [todos,setTodos]=useState("");

  const handleSubmit=(e) =>{
    console.log("clicked=",e);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h4>To do List</h4>
        <form onSubmit={handleSubmit()}>
          <label>Type Item : </label>
          <input type ="text" value={todos} onChange={(e)=>setTodos(e.target.value)} ></input>
          <button className="btn">Submit</button>
        </form>
      </header>
    </div>
  );
}

export default App;
