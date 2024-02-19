import { useState } from "react"


export function NewTodoForm({onSubmit}) {
    // props.onSubmit
  const [newItem, setNewItem] = useState("");

    function handleSubmit(e) {
        e.preventDefault()

        if (newItem === "") return

        onSubmit(newItem)

        setNewItem("")

      }
      
      return ( 
        <div className="form-container">

        <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label id="frm-name" htmlFor="item">New Item</label>
          <input
          value={newItem}
          onChange={e => setNewItem(e.target.value)} 
          type="text" 
          id="item" 
          />
        </div>
      <button className="btn">Add</button>
    </form>
    </div>
  )
}




// setTodos(currentTodos => {
//   return [
//  ...currentTodos,
//     { id: crypto.randomUUID(), title: newItem, completed: false },
//   ]
// })