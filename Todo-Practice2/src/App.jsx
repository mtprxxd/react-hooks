

import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts'
import Form from './components/Form.jsx'
import Item from './components/Item.jsx'

function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (todo_msg) => {
    setTodos((prevTodos) => [...prevTodos, {id: Date.now(), ...todo_msg}])

  }

  const updateTodo = (id, todo_msg) => {
    setTodos((prevTodos) => prevTodos.map((individualTodo) => individualTodo.id === id ? todo_msg  : prevTodos ))

  }

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((individualTodo) => individualTodo.id !== id))

  }

  const checkTodo = (id) => {
    setTodos((prevTodos) => prevTodos.map((individualTodo) => individualTodo.id === id ? {...individualTodo, completed: !individualTodo.completed } : individualTodo))

  }

  // LOCAL STORAGE

  useEffect(() => {
    const Todos = JSON.parse(localStorage.getItem("todo"))
    if(Todos && Todos.length > 0){
      setTodos(Todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todos)
    )
  } , [todos] )


  return ( 
    <TodoProvider value = {{addTodo, deleteTodo, checkTodo, updateTodo, todos }}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <Form />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo_msg) => (
                          <div key={todo_msg.id}
                          className = "w-full">
                            <Item todo = {todo_msg} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
