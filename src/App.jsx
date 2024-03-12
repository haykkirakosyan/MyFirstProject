
import { useState } from "react"
import "./styles.css"
import { AppForm } from "./AppForm"
import { ToDolist } from "./ToDolist"


function App() {
  
  const [todos,setTodos] = useState([])
  /*function handleSubmit(e){
    e.preventDefault()
   
    setTodos((prev) => {
      return [
        ...prev,
        {
          id: crypto.randomUUID(),
          title: value,
          iscompleted: false,
        }
      ]

    })
  }*/
  function addToDo(title){
    setTodos((prev) => {
      return [
        ...prev,
        {
          id: crypto.randomUUID(),
          title,
          iscompleted: false,
        }
      ]

    })
  }
  const tiggle = (id,iscompleted) => {
    /*setTodos(elm => {
      return elm.map(elm => {
        if(elm.id === id){
          return{...elm,iscompleted}
        }
      })
    })
    return todos*/
    let temp = [...todos]
    let obj = temp.find( x => x.id === id)
    setTodos([{...obj,iscompleted}])
   
  
   
    
    
  }
  const deleteItem = (id) => {
    let temp = [...todos]
    let obj = temp.filter(x => x.id != id)
    setTodos(obj)
  }
  return (
    <>
      <AppForm addToDo = {addToDo}/>
        <h1 className="header">ToDo List</h1>
      <ToDolist todos = {todos}/>

        


    </>

   

  

  
  )
  


}

export default App
