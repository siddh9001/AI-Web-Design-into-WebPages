import React from 'react'
import {TodoItem} from "./TodoItem"
export const Todos = (props) => {
  const myStyle = {
    minHeight: "80vh",
    margin: "10px auto"
  }
  return (
    <div className='container' style={myStyle}>
      <h3 className="text-center my-3">Todos List</h3>
      {props.todos.length === 0 ? "No Todos to Display!" :
      props.todos.map((todo) => {
        return (
          <>
          <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
          <hr/>
          </>
        )
      })
      }
      
    </div>
  )
}
 