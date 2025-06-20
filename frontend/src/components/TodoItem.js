// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCheckCircle, faClock, faTrash } from '@fortawesome/free-solid-svg-icons';

// function TodoItem({ todo, index, toggleDone, deleteTodo }) {
//   return (
//     <li>
//       <FontAwesomeIcon
//         icon={todo.done ? faCheckCircle : faClock}
//         style={{ color: todo.done ? 'green' : 'gray', marginRight: '10px', cursor: 'pointer' }}
//         onClick={() => toggleDone(index)}
//       />
//       <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
//         {todo.text}
//       </span>
//       <FontAwesomeIcon
//         icon={faTrash}
//         onClick={() => deleteTodo(index)}
//         style={{ color: 'red', marginLeft: '10px', cursor: 'pointer' }}
//       />
//     </li>
//   );
// }
// export default TodoItem;





// 0R 





// src/TodoItem.js
import React from 'react';

function TodoItem({ todo, index, toggleDone, deleteTodo }) {
  return (
    <li style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => toggleDone(index)}
      />
      <span style={{ marginLeft: '10px' }}>
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(index)} style={{ marginLeft: '10px' }}>
        delete
      </button>
    </li>
  );
}

export default TodoItem;
