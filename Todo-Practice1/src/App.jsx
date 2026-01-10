import { useState, useEffect } from 'react'
import Form from './Components/Form.jsx'
import Item from './Components/Item.jsx'

import './App.css'
import { TodoProvider } from './Context'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (new_todo) => {
    setTodos((prevTodos) => [...prevTodos, {id: Date.now(), ...new_todo} ])

  }
  const updateTodo = (id, new_todo) => {
    setTodos((prevTodos) => prevTodos.map((individualTodo) => individualTodo.id === id ? new_todo : prevTodos))

  }

  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((prevTodos) => prevTodos.id !==id))

  }
  const toggleTodo = (id) => {
    setTodos((prevTodos) => prevTodos.map((individualTodo) => individualTodo.id === id ? {...individualTodo, completed: !individualTodo.completed}  : individualTodo))

  }



  // LOCAL STORAGE

 useEffect(()=> {
  const todos = JSON.parse(localStorage.getItem("todos"))
  if (todos && todos.length > 0) {
    setTodos(todos)
  }
 },[])

 useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos))

 }, [todos])




  return (
    <TodoProvider value={{todos, addTodo , removeTodo, toggleTodo, updateTodo}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <Form />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                       
                        {todos.map((new_todo) => (
                          <div key = {new_todo.id}
                          className='w-full text-red-600'>
                            <Item todo = {new_todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
