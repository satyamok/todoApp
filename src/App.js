import './App.css';
import React, { useState } from 'react'

const App = () => {

  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e)=>{
    
    e.preventDefault();

if(todo !== ''){
  setTodos([{id:`${todo}-${Date.now()}` , todo}, ...todos]);
  setTodo('')
}
  }

const handleDelete =(id)=>{
  const deleteTodo =todos.filter((t)=> t.id !==id);
  setTodos(deleteTodo)
}

  return (
    <div className='App'>
 <div className="container">

  <h1> Todo List App </h1>

  <form className="todoForm" onSubmit={handleSubmit} action="">
    <input value={todo} onChange={(e)=>setTodo(e.target.value)} type="text" />
    <button>Go</button>
  </form>

  <ul className='allTodos'>
    {
      todos.map((t)=>(
<li className='singleTodo'><span className='todoText' >{t.todo}</span>
      <button  >Edit</button>
      <button onClick={()=>handleDelete(t.id)} >Delete</button>
      </li>
      ))
    }
  </ul>
 </div>
    </div>
  )
}

export default App