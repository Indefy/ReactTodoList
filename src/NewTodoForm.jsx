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

        <form onSubmit={handleSubmit} id="new-frm-item">
        <div className="form-row">
          <div id="frm-item-name" htmlFor="item">New Item</div>
          <input
          value={newItem}
          onChange={e => setNewItem(e.target.value)} 
          type="text" 
          id="item" 
          />
        </div>
      <button className="botn">Add</button>
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