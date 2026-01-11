import { useEffect, useState } from 'react'
import './App.css'
import Form from './components/Form.jsx'
import Items from './components/Items.jsx'
import { TodoProvider } from './context/TodoContext'

function App() {
  const [todos, setTodos] = useState([])


  // addTodo <useState[]> array me add hojaaega
  const addTodo = (todo_title) => {
    // purane array me saari value delete karke naya todo add kar dega
    // purani saari values delete nhi karni h isliye hum prevTodos/prev/oldPrev ka use karenge 
    // <...prevTodos> se purane saare todos ka access mil jaata h
    // purane array se saari values leke aao or ek nya array bnao jisme purane saare todos or ek naya todo add ho.<[...prevTodos, todo]> bna dia
    // setTodos((prevTodos) => [...prevTodos, todo]) 
    // yha hum bs <todo> ko pass nhi kr skte qki humne vo define nhi kia h kahi bhi , to hum yha ek todo bnaenge as an Object so that we can have id, todo text and completed status 
    setTodos((prevTodos) => [...prevTodos, {
      id: Date.now(),...todo_title}])
  }



  const updateTodo = (id, todo_title) => {
    // todos hmara ek array h jisme saare todo objects h
    // map se hum us array ke saare todos mil jaaenge or saare todos ko iterate karenge
    // <prevTodo> se humein ek ek todo milega
    // agar jo todo hm update karna chahte h uski id mil jaati h to usko naya todo de denge
    // agar id match nhi karti to purana todo hi rehne denge
    setTodos((prevTodos) =>
      prevTodos.map((individualTodo) => (individualTodo.id === id ? todo_title : individualTodo))
    // <individualTodo.id> se humein har todo ka id milega Or <id> se humein wo id milegi jisko hm update karna chahte h
    )
  }



  const removeTodo = (id) => {
    // previos Array me se jo id delete karni h usko filter kar denge or baaki saare todos ko naya array bana ke return kar denge
    setTodos((prevTodos) => prevTodos.filter((todo_title) => todo_title.id !== id))
  }


  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((individualTodo) => individualTodo.id === id ? {...individualTodo, completed: !individualTodo.completed} : individualTodo ))}

  // LOCAL STORAGE ME DATA SAVE KARNE KE LIYE USEEFFECT KA USE KAR SAKTE H AISE

  
   useEffect(() => {
    const Todos = JSON.parse(localStorage.getItem("todos"))

    if (Todos && Todos.length > 0) {
      setTodos(Todos)
    }
  },[])

  // Multiple useEffect ho sakte h react me
// DATA LOCAL STORAGE ME SAVE KARNE KE LIYE

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, removeTodo, toggleTodo }}>
   <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <Form />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {/* <Items /> */}
                        {todos.map((todo_title) => (
                          <div key={todo_title.id}  
                            className='w-full'>
                              <Items todo={todo_title} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}


export default App
