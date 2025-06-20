// //only react with component for app.js
// import React,{useState} from 'react';
// import TodoItem from './TodoItem';

// function TodoList(){
//     const[todos,setTodos]=useState([]);
//     const[input,setInput]=useState('');

//     const addTodo=()=>{
//       if(input.trim()==='')
//         return;
//       const newTodo={text:input,done:false};
//       setTodos([...todos,newTodo]);
//       setInput('');
//     };

//     const deleteTodo=(index)=>{
//     const newTodos=todos.filter((_,i)=>i!==index);
//     setTodos(newTodos);
//     };
    
//     const toggleDone=(index)=>{
//       const newTodos=[...todos];
//       newTodos[index].done=! newTodos[index].done;
//       setTodos(newTodos);
//     };

//     const clearAll=()=>{
//       setTodos([]);
//     }
//     return(
//       <div>
//         <h1>To-do List</h1>
//         <input 
//          value={input}
//          onChange={e=>setInput(e.target.value)}
//          placeholder='add a todo'
//          />

//         <button onClick={addTodo}>ADD</button>
//         <button onClick={clearAll}>clear</button>

//         <ul>
//             {/* use this without TodoItem.js file  */}
//           {/* {todos.map((todo,index)=>(
//             <li key={index}>
              
//                 {todo.done?'completed=>  ':'yet to do =>  '}{todo.text}
//                 <button onClick={()=>toggleDone(index)}>toggle</button>
              
//             <button onClick={()=>deleteTodo(index)}>Delete</button></li>
//           ))} */}


//          {/* use this with TodoItem.js */}
//           {todos.map((todo,index)=>(
//             <TodoItem
//             key={index}
//             todo={todo}
//             index={index}
//             toggleDone={toggleDone}
//             deleteTodo={deleteTodo}
//             />
//           ))}
          
//         </ul>
//       </div>
//     );
// }
// export default TodoList;





//react with express for in-memory and no localstate
// import React, { useState, useEffect } from 'react';
// import TodoItem from './TodoItem';

// function TodoList() {
//   const [todos, setTodos] = useState([]);
//   const [input, setInput] = useState('');

//   // 🔁 Get todos on load
//   useEffect(() => {
//     fetch('http://localhost:5000/todos')
//       .then(res => res.json())
//       .then(data => setTodos(data))
//       .catch(err => console.error('Error:', err));
//   }, []);

//   const addTodo = () => {
//     if (input.trim() === '') return;

//     const newTodo = { text: input, done: false };

//     fetch('http://localhost:5000/todos', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(newTodo),
//     })
//       .then(res => res.json())
//       .then(savedTodo => {
//         setTodos([...todos, savedTodo]);
//         setInput('');
//       });
//   };

//   const deleteTodo = (index) => {
//     fetch(`http://localhost:5000/todos/${index}`, {
//       method: 'DELETE',
//     }).then(() => {
//       setTodos(todos.filter((_, i) => i !== index));
//     });
//   };

//   const toggleDone = (index) => {
//     fetch(`http://localhost:5000/todos/${index}`, {
//       method: 'PUT',
//     })
//       .then(res => res.json())
//       .then(updatedTodo => {
//         const newTodos = [...todos];
//         newTodos[index] = updatedTodo;
//         setTodos(newTodos);
//       });
//   };

//   const clearAll = () => {
//     todos.forEach((_, i) => {
//       fetch(`http://localhost:5000/todos/${i}`, { method: 'DELETE' });
//     });
//     setTodos([]);
//   };

//   return (
//     <div>
//       <h1>To-do List</h1>
//       <input
//         value={input}
//         onChange={e => setInput(e.target.value)}
//         placeholder='add a todo'
//       />
//       <button onClick={addTodo}>ADD</button>
//       <button onClick={clearAll}>clear</button>
//       <ul>
//         {todos.map((todo, index) => (
//           <TodoItem
//             key={index}
//             todo={todo}
//             index={index}
//             toggleDone={toggleDone}
//             deleteTodo={deleteTodo}
//           />
//         ))}
//       </ul>
//     </div>
//   );
// }
// export default TodoList;







//react with mongo for forever memory
// import React ,{useState,useEffect } from 'react';
// import TodoItem from './TodoItem';

// function TodoList(){
// const [todos,setTodos]=useState([]);
// const [input,setInput]=useState('');

// //fetch todos from backend on mount
// useEffect(()=> {
//   fetch('http://localhost:5000/todos')
//   .then(res=>res.json())
//   .then(data=>setTodos(data))
//   .catch(err => console.error('Error:', err));
// },[]);

// // Tip: Always use .then(res => res.json()) after a fetch, since fetch returns a promise with a Response object, not the actual data.


// const addTodo=()=>{
//   if(input.trim()==='')
//     return;
//       fetch('http://localhost:5000/todos',{
//         method:'POST',
//         headers:{'Content-type':'application/json'},
//         body:JSON.stringify({text:input,done:false}),
//       })
//       .then(res=>res.json())
//       .then(newTodo=>setTodos([...todos,newTodo]));
//       setInput('');

//       // const newTodo={text:input,done:false};
//       // setTodos([...todos,newTodo]);
//       // setInput('');
//     };



// const deleteTodo=(id)=>{
//       fetch(`http://localhost:5000/todos/${id}`, { method: 'DELETE' })
//       .then(() => setTodos(todos.filter(todo=>todo._id!==id)));

//     // const newTodos=todos.filter((_,i)=>i!==index);
//     // setTodos(newTodos);
//     };
    
// const toggleDone=(id)=>{
//       fetch(`http://localhost:5000/todos/${id}`, { method: 'PUT' })
//        .then(res => res.json())
//     .then(updatedTodo => {
//       setTodos(todos.map(todo=>todo._id ===id ? updatedTodo :todo));
//     });
//       // const newTodos=[...todos];
//       // newTodos[index].done=! newTodos[index].done;
//       // setTodos(newTodos);
//     };

//  const clearAll = async () => {
//     // Optional: clearAll endpoint can be added in server
//     for (const todo of todos) {
//       await fetch(`http://localhost:5000/todos/${todo._id}`, { method: 'DELETE' });
//     }
//     setTodos([]);
//   };

//   return (
//     <div>
//       <h1>To-do List</h1>
//       <input
//         value={input}
//         onChange={e => setInput(e.target.value)}
//         placeholder='add a todo'
//       />
//       <button onClick={addTodo}>ADD</button>
//       <button onClick={clearAll}>clear</button>
//       <ul>
//         {todos.map((todo, index) => (
//           <TodoItem
//             key={index}
//             todo={todo}
//             index={index}
//             toggleDone={toggleDone}
//             deleteTodo={deleteTodo}
//           />
//         ))}
//       </ul>
//     </div>
//   );
// }
// export default TodoList;



//react with auth 
import React, { useState, useEffect } from 'react';

const getToken = () => localStorage.getItem('token');

function TodoList({ onLogout }) {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Fetch todos on mount
  useEffect(() => {
    fetchTodos();
    // eslint-disable-next-line
  }, []);

  const fetchTodos = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('http://localhost:5000/todos', {
        headers: { Authorization: 'Bearer ' + getToken() },
      });
      if (res.status === 401) {
        onLogout();
        return;
      }
      const data = await res.json();
      setTodos(data);
    } catch {
      setError('Failed to fetch todos');
    }
    setLoading(false);
  };

  const addTodo = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setLoading(true);
    setError('');
    try {
      const res = await fetch('http://localhost:5000/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + getToken(),
        },
        body: JSON.stringify({ text: input, done: false }),
      });
      if (res.status === 401) {
        onLogout();
        return;
      }
      const newTodo = await res.json();
      setTodos([...todos, newTodo]);
      setInput('');
    } catch {
      setError('Failed to add todo');
    }
    setLoading(false);
  };

  const deleteTodo = async (id) => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`http://localhost:5000/todos/${id}`, {
        method: 'DELETE',
        headers: { Authorization: 'Bearer ' + getToken() },
      });
      if (res.status === 401) {
        onLogout();
        return;
      }
      setTodos(todos.filter(todo => todo._id !== id));
    } catch {
      setError('Failed to delete todo');
    }
    setLoading(false);
  };

  const toggleDone = async (id) => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`http://localhost:5000/todos/${id}`, {
        method: 'PUT',
        headers: { Authorization: 'Bearer ' + getToken() },
      });
      if (res.status === 401) {
        onLogout();
        return;
      }
      const updatedTodo = await res.json();
      setTodos(todos.map(todo => todo._id === id ? updatedTodo : todo));
    } catch {
      setError('Failed to toggle todo');
    }
    setLoading(false);
  };

  const clearAll = async () => {
    setLoading(true);
    setError('');
    try {
      for (const todo of todos) {
        await fetch(`http://localhost:5000/todos/${todo._id}`, {
          method: 'DELETE',
          headers: { Authorization: 'Bearer ' + getToken() },
        });
      }
      setTodos([]);
    } catch {
      setError('Failed to clear todos');
    }
    setLoading(false);
  };

  return (
    <div>
      <h1>To-do List</h1>
      <button onClick={onLogout}>Logout</button>
      <form onSubmit={addTodo}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder='Add a todo'
        />
        <button type="submit" disabled={loading}>ADD</button>
        <button type="button" onClick={clearAll} disabled={loading}>Clear All</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {todos.map(todo => (
          <li key={todo._id}>
            {todo.done ? 'completed => ' : 'yet to do => '}
            <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button onClick={() => toggleDone(todo._id)}>Toggle</button>
            <button onClick={() => deleteTodo(todo._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
