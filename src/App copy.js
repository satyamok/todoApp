import './App.css';
import React, { useState } from 'react'

const App = () => {

  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [editid, setEditid] = useState(0);

const handleSubmit =(e)=>{
   e.preventDefault();
   if (editid){
    const editTodo = todos.find((i)=>(i.id === editid));
    const updatedTodos = todos.map((t)=>t.id === editTodo.id ? (t={id:t.id, todo}): {id:t.id, todo:t.todo});
    setTodos(updatedTodos);
    setEditid(0)
    setTodo('')
    return;
   }
   
    if(todo !== ''){
      setTodos([{id: `${todo}-${Date.now()}` , todo}, ...todos]);
     setTodo('');
    }
}
 
const handledelete =(id)=>{
  const deleteTodo = todos.filter((to)=> to.id !== id)
  setTodos([...deleteTodo])
}
const handleEdit =(id)=>{
  const editTodo = todos.find((i)=>(i.id === id))
  setTodo(editTodo.todo);
  setEditid(id);
}
  return (
    <div className='App'>
 <div className="container">

  <h1> Todo List App </h1>

  <form className="todoForm" onSubmit={handleSubmit} action="">
    <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)} />
    <button>Go</button>
  </form>

  <ul className='allTodos'>
{
  todos.map((t)=>(
<li className='singleTodo'><span className='todoText' >{t.todo}</span>
      <button onClick={()=>handleEdit(t.id)} >Edit</button>
      <button onClick={()=>handledelete(t.id)}>Delete</button>
      </li>
  ))
}
  </ul>
 </div>
    </div>
  )
}

export default App