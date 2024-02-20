export function TodoItem({ id, title, completed, toggleTodo, deleteTodo}) {
    return (
     <li>
         <label>
             <input 
                 type="checkbox" 
                 checked={completed} 
                 onChange={e => toggleTodo(id, e.target.checked)}
             />
             <span style={completed ? { textDecoration: 'line-through' } : {}}>
                 {title}
             </span>
         </label>
         <button
             onClick={() => deleteTodo(id)}
             className="btn btn-danger"
         >
             Delete
         </button>
     </li>
    );
 }

// export function TodoItem({ id, title, completed, toggleTodo, deleteTodo}) {
//    return (
//     <li>
//         <label>
//             <input 
//                 type="checkbox" 
//                 checked={completed} 
//                 onChange={e => toggleTodo(id, e.target.checked)}
//             />
//             <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
//                 {title}
//             </span>
//         </label>
//         <button
//             onClick={() => deleteTodo(id)}
//             className="btn btn-danger"
//         >
//             Delete
//         </button>
//     </li>
//    );
// }