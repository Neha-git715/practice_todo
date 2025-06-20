//step1
// import React from 'react';

// function App(){
//   return(
//     <div>
//       <h1>My Mern ToDo</h1>
//       <p>Let's build something awesome</p>
//     </div>
//   );
// }
// export default App;


//step2
// import React,{useState}from 'react';

// function App(){
//   const [count,setCount]=useState(0);
//   return(
//     <div>
//       <h1>
//         Counter:{count}
//       </h1>
//       <button onClick={()=>setCount(count+1)}>Increase </button>

//       {/* render ClickMe component in app component's jsx */}
//       <ClickMe/>
//       <AgeInfo/>
//       <MathStuff/>
//       <Mypic/>;
//       <Welcome/>;
//       <FruitList/>;
//     </div>
//   );
// }

// //1.button example
// function ClickMe(){
//     return(
//       <button>Click me!</button>
//     );
//   }
// //2.using javascript in jsx
//   const age=21;
// function AgeInfo(){
//   return(
//     <p>
//       I am {age} years old
//     </p>
//   );
// }

// //3. Doing Math Inside JSX
// function MathStuff() {
//   return <p>2 + 3 = {2 + 3}</p>;
// }

// //4. Using Images
// function Mypic(){
//   return(
//     <img src="https://placekitten.com/200/300" alt="Cute kitten" />
//   );
// }

// //5. If/Else with JSX (kinda)
// // JSX doesn’t like if statements directly, so we use a ternary (? :), like this:
// const isLoggedIn=true;
// function Welcome(){
//   return(
//     <h2>
//       {isLoggedIn ? "Welcome Back" : "please log in"}
//     </h2>
//   );
// }


// //6. Looping through an array
// const fruits=["apple","orange","kiwi"];             //array
// function FruitList(){                               /*html-style jsx for unordered list*/
//   return(
//     <ul>                                         
//       {fruits.map((fruit,index)=>(
//         <li key={index}>{fruit}</li>
//       ))}
//     </ul>
//   );
// }
// export default App;
// export {ClickMe};
// export {AgeInfo};
// export {MathStuff};
// export {Mypic};
// export {Welcome};
// export {FruitList};




//step3
// import React,{useState} from 'react';

// function App(){
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
//           {todos.map((todo,index)=>(
//             <li key={index}>
              
//                 {todo.done?'completed=>  ':'yet to do =>  '}{todo.text}
//                 <button onClick={()=>toggleDone(index)}>toggle</button>
              
//             <button onClick={()=>deleteTodo(index)}>Delete</button></li>
//           ))}
          
//         </ul>
//       </div>
//     );
// }
// export default App;





//step4 //making a component for the same
// import React from 'react';
// import TodoList from './components/TodoList';

// function App(){
//   return(
//     <div>
//       <TodoList/>
//     </div>
//   );
// }
// export default App;






//step5: day3
// add express to react

// import React ,{useState,useEffect } from 'react';

// function App(){
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



// const deleteTodo=(index)=>{
//       fetch(`http://localhost:5000/todos/${index}`, { method: 'DELETE' })
//       .then(() => setTodos(todos.filter((_, i) => i !== index)));



//     // const newTodos=todos.filter((_,i)=>i!==index);
//     // setTodos(newTodos);
//     };
    
// const toggleDone=(index)=>{
//       fetch(`http://localhost:5000/todos/${index}`, { method: 'PUT' })
//        .then(res => res.json())
//     .then(updatedTodo => {
//       const newTodos = [...todos];
//       newTodos[index] = updatedTodo;
//       setTodos(newTodos);
//     });
//       // const newTodos=[...todos];
//       // newTodos[index].done=! newTodos[index].done;
//       // setTodos(newTodos);
//     };

//  const clearAll = () => {
//     todos.forEach((_, i) => {
//       fetch(`http://localhost:5000/todos/${i}`, { method: 'DELETE' });
//     });
//     setTodos([]);
//   };

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
//           {todos.map((todo,index)=>(
//             <li key={index}>
              
//                 {todo.done?'completed=>  ':'yet to do =>  '}{todo.text}
//                 <button onClick={()=>toggleDone(index)}>toggle</button>
              
//             <button onClick={()=>deleteTodo(index)}>Delete</button></li>
//           ))}
          
//         </ul>
//       </div>
//     );
//   }
// export default App;



//day4
//update react to mongoDB ids

// import React ,{useState,useEffect } from 'react';

// function App(){
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
//           {todos.map(todo=>(
//             <li key={todo._id}>
              
//                 {todo.done ?'completed=>  ':'yet to do =>  '}<span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
//               {todo.text}
//             </span>
//                 <button onClick={()=>toggleDone(todo._id)}>toggle</button>
              
//             <button onClick={()=>deleteTodo(todo._id)}>Delete</button></li>
//           ))}
          
//         </ul>
//       </div>
//     );
//   }
// export default App;







//day5
//update frontend for auth

// import React ,{useState,useEffect } from 'react';

// //auth
// const getToken = () => localStorage.getItem('token');
// const setToken = (token) => localStorage.setItem('token', token);
// const removeToken = () => localStorage.removeItem('token');


// function App() {
//   // Auth states
//   const [page, setPage] = useState(getToken() ? 'todos' : 'login'); // 'login', 'register', 'todos'
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   // Todo states
//   const [todos, setTodos] = useState([]);
//   const [input, setInput] = useState('');
//   const [loading, setLoading] = useState(false);


// // // fetch todos from backend on mount
// // useEffect(()=> {
// //   fetch('http://localhost:5000/todos')
// //   .then(res=>res.json())
// //   .then(data=>setTodos(data))
// //   .catch(err => console.error('Error:', err));
// // },[]);

// // Tip: Always use .then(res => res.json()) after a fetch, since fetch returns a promise with a Response object, not the actual data.







// // Fetch todos when logged in
//   useEffect(() => {
//     if (page === 'todos') fetchTodos();
//     // eslint-disable-next-line
//   }, [page]);



// //auth 
// const register=async(e)=>{
//   e.preventDefault();
//   setError('✅ Registration successful! Please login.');
//   setLoading(true);
//   try{
//     const res=await fetch('http://localhost:5000/register',{
//     method:'POST',
//     headers:{'Content-type':'application/json'},
//     body:JSON.stringify({username,password}),
//   });
//   const data=await res.json();
//   if(res.ok){
//     setPage('login');
//     setError('Registered! Now login');
//   }else{
//     setError(data.error || 'Registration failed');
//   }
// }
// catch{
//   setError('Network error,but mongo has registered!');
// }
// setLoading(false);
//   };
  
// //login from auth
// const login = async (e) => {
//     e.preventDefault();
//     setError('');
//     setLoading(true);
//     try {
//       const res = await fetch('http://localhost:5000/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ username, password }),
//       });
//       const data = await res.json();
//       if (res.ok && data.token) {
//         setToken(data.token);
//         // CHANGE 3: Optionally store userId if needed
//         localStorage.setItem('userId', data.userId); // <-- Added
//         setPage('todos');
//         setUsername('');
//         setPassword('');
//         setError('');
//       } else {
//         setError(data.error || 'Login failed');
//       }
//     } catch {
//       setError('Network error');
//     }
//     setLoading(false);
//   };


// const logout = () => {
//     removeToken();
//     localStorage.removeItem('userId'); // <-- Added for cleanup
//     setTodos([]);
//     setPage('login');
//     setUsername('');
//     setPassword('');
//     setError('');
//   };


//   ///og todos
//    // --- Todo functions ---
//   const fetchTodos = async () => {
//     setLoading(true);
//     setError('');
//     try {
//       const res = await fetch('http://localhost:5000/todos', {
//         headers: { Authorization: 'Bearer ' + getToken() },
//       });
//       if (res.status === 401) {
//         logout();
//         return;
//       }
//       const data = await res.json();
//       setTodos(data);
//     } catch {
//       setError('Failed to fetch todos');
//     }
//     setLoading(false);
//   };




// const addTodo=async(e)=>{
//   e.preventDefault();
//   if(input.trim()==='')
//     return;
//   setLoading(true);
//     setError('');
//     try{
//       const res = await fetch('http://localhost:5000/todos',{
//         method:'POST',
//         headers:{'Content-type':'application/json',
//                   Authorization: 'Bearer ' + getToken(),
//         },
//         body: JSON.stringify({ text: input, done: false }), // CHANGE 4: No userId sent from frontend
//       });
//       if (res.status === 401) {
//         logout();
//         return;
//       }const newTodo = await res.json();
//       setTodos([...todos, newTodo]);
//       setInput('');
//     } catch {
//       setError('Failed to add todo');
//     }
//     setLoading(false);
//   };
//       // .then(res=>res.json())
//       // .then(newTodo=>setTodos([...todos,newTodo]));
//       // setInput('');

//       // const newTodo={text:input,done:false};
//       // setTodos([...todos,newTodo]);
//       // setInput('');




// const deleteTodo = async (id) => {
//     setLoading(true);
//     setError('');
//     try {
//       const res = await fetch(`http://localhost:5000/todos/${id}`, {
//         method: 'DELETE',
//         headers: { Authorization: 'Bearer ' + getToken() },
//       });
//       if (res.status === 401) {
//         logout();
//         return;
//       }
//       setTodos(todos.filter(todo => todo._id !== id));
//     } catch {
//       setError('Failed to delete todo');
//     }
//     setLoading(false);
//   };



    
// const toggleDone = async (id) => {
//     setLoading(true);
//     setError('');
//     try {
//       const res = await fetch(`http://localhost:5000/todos/${id}`, {
//         method: 'PUT',
//         headers: { Authorization: 'Bearer ' + getToken() },
//       });
//       if (res.status === 401) {
//         logout();
//         return;
//       }
//       const updatedTodo = await res.json();
//       setTodos(todos.map(todo => todo._id === id ? updatedTodo : todo));
//     } catch {
//       setError('Failed to toggle todo');
//     }
//     setLoading(false);
//   };

//  const clearAll = async () => {
//     setLoading(true);
//     setError('');
//     try {
//       for (const todo of todos) {
//         await fetch(`http://localhost:5000/todos/${todo._id}`, {
//           method: 'DELETE',
//           headers: { Authorization: 'Bearer ' + getToken() },
//         });
//       }
//       setTodos([]);
//     } catch {
//       setError('Failed to clear todos');
//     }
//     setLoading(false);
//   };



//      // --- UI ---
//   if (page === 'login') {
//     return (
//       <div>
//         <h2>Login</h2>
//         <form onSubmit={login}>
//           <input
//             placeholder="Username"
//             value={username}
//             onChange={e => setUsername(e.target.value)}
//             required
//           /><br />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={e => setPassword(e.target.value)}
//             required
//           /><br />
//           <button type="submit" disabled={loading}>Login</button>
//         </form>
//         <button onClick={() => setPage('register')}>Register</button>
//         {error && <p style={{ color: 'red' }}>{error}</p>}
//       </div>
//     );
//   }

//   if (page === 'register') {
//     return (
//       <div>
//         <h2>Register</h2>
//         <form onSubmit={register}>
//           <input
//             placeholder="Username"
//             value={username}
//             onChange={e => setUsername(e.target.value)}
//             required
//           /><br />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={e => setPassword(e.target.value)}
//             required
//           /><br />
//           <button type="submit" disabled={loading}>Register</button>
//         </form>
//         <button onClick={() => setPage('login')}>Back to Login</button>
//         {error && <p style={{ color: 'red' }}>{error}</p>}
//       </div>
//     );
//   }

//   // Todos page
//   return (
//     <div>
//       <h1>To-do List</h1>
//       <button onClick={logout}>Logout</button>
//       <form onSubmit={addTodo}>
//         <input
//           value={input}
//           onChange={e => setInput(e.target.value)}
//           placeholder='Add a todo'
//         />
//         <button type="submit" disabled={loading}>ADD</button>
//         <button type="button" onClick={clearAll} disabled={loading}>Clear All</button>
//       </form>
//       {loading && <p>Loading...</p>}
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <ul>
//         {todos.map(todo => (
//           <li key={todo._id}>
//             {todo.done ? 'completed => ' : 'yet to do => '}
//             <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
//               {todo.text}
//             </span>
//             <button onClick={() => toggleDone(todo._id)}>Toggle</button>
//             <button onClick={() => deleteTodo(todo._id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;










//day5 AUTH
//app.js for components in src like register,todoList and login

// import React, { useState, useEffect } from 'react';
// import LoginForm from './components/LoginForm';
// import RegisterForm from './components/RegisterForm';
// import TodoList from './components/TodoList';

// // Token helpers
// const getToken = () => localStorage.getItem('token');
// const setToken = (token) => localStorage.setItem('token', token);
// const removeToken = () => localStorage.removeItem('token');

// function App() {
//   const [page, setPage] = useState(getToken() ? 'todos' : 'login');
//   const [error, setError] = useState('');

//   // Auth handlers
//   const handleLogin = (token) => {
//     setToken(token);
//     setPage('todos');
//     setError('');
//   };

//   const handleLogout = () => {
//     removeToken();
//     setPage('login');
//     setError('');
//   };

//   const handleRegisterSuccess = () => {
//     setPage('login');
//     setError('Registered! Please login.');
//   };

//   return (
//     <div>
//       {page === 'login' && (
//         <LoginForm
//           onLogin={handleLogin}
//           onSwitchToRegister={() => { setPage('register'); setError(''); }}
//           error={error}
//           setError={setError}
//         />
//       )}
//       {page === 'register' && (
//         <RegisterForm
//           onRegister={handleRegisterSuccess}
//           onSwitchToLogin={() => { setPage('login'); setError(''); }}
//           error={error}
//           setError={setError}
//         />
//       )}
//       {page === 'todos' && (
//         <TodoList onLogout={handleLogout} />
//       )}
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//     </div>
//   );
// }

// export default App;




//day 6 polishing UI
import React ,{useState,useEffect } from 'react';

//auth
const getToken = () => localStorage.getItem('token');
const setToken = (token) => localStorage.setItem('token', token);
const removeToken = () => localStorage.removeItem('token');


function App() {
  // Auth states
  const [page, setPage] = useState(getToken() ? 'todos' : 'login'); // 'login', 'register', 'todos'
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  // Todo states
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');     //added


// // fetch todos from backend on mount
// useEffect(()=> {
//   fetch('http://localhost:5000/todos')
//   .then(res=>res.json())
//   .then(data=>setTodos(data))
//   .catch(err => console.error('Error:', err));
// },[]);

// Tip: Always use .then(res => res.json()) after a fetch, since fetch returns a promise with a Response object, not the actual data.





// Fetch todos when logged in
  useEffect(() => {
    if (page === 'todos') fetchTodos();
    // eslint-disable-next-line
  }, [page]);
 if (loading) return <div>Loading...</div>;    //new added


//auth 
const register=async(e)=>{
  e.preventDefault();
  setError('✅ Registration successful! Please login.');
  setLoading(true);
  try{
    const res=await fetch('http://localhost:5000/register',{
    method:'POST',
    headers:{'Content-type':'application/json'},
    body:JSON.stringify({username,password}),
  });
  const data=await res.json();
  if(res.ok){
    setPage('login');
    setError('Registered! Now login');
  }else{
    setError(data.error || 'Registration failed');
  }
}
catch{
  setError('Network error,but mongo has registered!');
}
setLoading(false);
  };
  
//login from auth
const login = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (res.ok && data.token) {
        setToken(data.token);
        // CHANGE 3: Optionally store userId if needed
        localStorage.setItem('userId', data.userId); // <-- Added
        setPage('todos');
        setUsername('');
        setPassword('');
        setError('');
      } else {
        setError(data.error || 'Login failed');
      }
    } catch {
      setError('Network error');
    }
    setLoading(false);
  };


const logout = () => {
    removeToken();
    localStorage.removeItem('userId'); // <-- Added for cleanup
    setTodos([]);
    setPage('login');
    setUsername('');
    setPassword('');
    setError('');
  };


  ///og todos
   // --- Todo functions ---
  const fetchTodos = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('http://localhost:5000/todos', {
        headers: { Authorization: 'Bearer ' + getToken() },
      });
      if (res.status === 401) {
        logout();
        return;
      }
      const data = await res.json();
      setTodos(data);
    } catch {
      setError('Failed to fetch todos');
    }
    setLoading(false);
  };




const addTodo=async(e)=>{
  e.preventDefault();
  if(input.trim()==='')
    return;
  setLoading(true);
    setError('');
    try{
      const res = await fetch('http://localhost:5000/todos',{
        method:'POST',
        headers:{'Content-type':'application/json',
        Authorization: 'Bearer ' + getToken(),
        },
        body: JSON.stringify({ text: input, done: false }), // CHANGE 4: No userId sent from frontend
      });
      
      
      if (res.status === 401) {
        logout();
        return;
      }const newTodo = await res.json();
      setTodos([...todos, newTodo]);
      setInput('');
    } catch {
      setError('Failed to add todo');
    }
    setLoading(false);
    setMessage('Todo added!');                 //added but doesnt werk
    setTimeout(() => setMessage(''), 2000);      //aint working or wot
  };
      // .then(res=>res.json())
      // .then(newTodo=>setTodos([...todos,newTodo]));
      // setInput('');

      // const newTodo={text:input,done:false};
      // setTodos([...todos,newTodo]);
      // setInput('');




const deleteTodo = async (id) => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`http://localhost:5000/todos/${id}`, {
        method: 'DELETE',
        headers: { Authorization: 'Bearer ' + getToken() },
      });
      if (res.status === 401) {
        logout();
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
        logout();
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



     // --- UI ---
  if (page === 'login') {
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={login}>
          <input
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          /><br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          /><br />
          <button type="submit" disabled={loading}>Login</button>
        </form>
        <button onClick={() => setPage('register')}>Register</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    );
  }

  if (page === 'register') {
    return (
      <div>
        <h2>Register</h2>
        <form onSubmit={register}>
          <input
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          /><br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          /><br />
          <button type="submit" disabled={loading}>Register</button>
        </form>
        <button onClick={() => setPage('login')}>Back to Login</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    );
  }

  // Todos page
  return (
    <div>
      <h1>To-do List</h1>
      <button onClick={logout}>Logout</button>
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
      {message && <p style={{ color: 'green' }}>{message}</p>}

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

export default App;




