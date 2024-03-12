export function ToDolist({todos}){
    <ul className="list">
          {todos.map(elm => {
            return <li key={elm.id}>
            <label>
              <input
              type="checkbox" checked={elm.iscompleted} onChange={e => {
                tiggle(elm.id, e.target.checked)
              }}/>
              {elm.title}
            </label>
            <button className="btn btn-danger" onClick={() => deleteItem(elm.id)}>delete</button>
          </li>
          })}
          
        </ul>
}