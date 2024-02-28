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
          <div className="fillter-group">
            <input type="radio" id="html" name="fav_language" value="HTML"></input>
            <label htmlFor="html">All Tasks</label>
            <input type="radio" id="css" name="fav_language" value="CSS"></input>
            <label htmlFor="css">Todo Tasks</label>
            <input type="radio" id="javascript" name="fav_language" value="JavaScript"></input>
            <label htmlFor="javascript">Finished Tasks</label>
          </div>
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