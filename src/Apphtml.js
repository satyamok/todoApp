import './App.css';
import React, { useState } from 'react'

const App = () => {

  
  

  return (
    <div className='App'>
 <div className="container">

  <h1> Todo List App </h1>

  <form className="todoForm"  action="">
    <input type="text"  />
    <button>Go</button>
  </form>

  <ul className='allTodos'>

 
<li className='singleTodo'><span className='todoText' >todo</span>
      <button  >Edit</button>
      <button >Delete</button>
      </li>

  </ul>
 </div>
    </div>
  )
}

export default App