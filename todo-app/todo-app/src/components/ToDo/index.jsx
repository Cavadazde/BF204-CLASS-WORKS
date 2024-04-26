import React from 'react'
import AddToDo from '../AddToDo'
import { useState } from 'react'
import SearchToDo from '../SearchToDo'
import ToDoList from '../ToDoList'
import ToDoItem from '../ToDoItem'

function ToDo() {
    const [todos,setTodos]=useState([])
    const [searchQuery,setSearchQuery]=useState("")
    let filteredTodos=todos.filter((todo)=>{
        return todo.title.toLowerCase().trim().includes(searchQuery.toLowerCase().trim());
    })
  return (
   <>
   <h2>ToDo React App</h2>
   <AddToDo todos={todos} setTodos={setTodos}/>
   <hr />
   <SearchToDo setSearchQuery={setSearchQuery}/>
   <h3>ToDo List</h3>
   <ToDoList/>
   {filteredTodos && filteredTodos.map((todo)=>{
    return   <ToDoItem key={todo.id}  todo={todo} setTodos={setTodos}/>
   })}
  <ToDoList/>

   </>
  )
}

export default ToDo