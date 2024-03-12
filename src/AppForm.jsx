import { useState } from "react"





export function AppForm({addToDo}){
    const [value,setValue] = useState("")
    function handleSubmit(e){
        e.preventDefault()
       
        addToDo(value) 
        setValue("")
      }



      return (
        
         <form className="new-item-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="item">New Item</label>
            <input type="text" id="item" value={value} onChange={e => {
              setValue(e.target.value)
            }}/>
              </div>
            <button className="btn">add</button>
        </form>
        )
        
}