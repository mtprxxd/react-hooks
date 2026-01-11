import React from 'react'
import {useTodo} from '../contexts/TodoContext'
import {useState , useRef, useCallback} from 'react'

function Form() {
    
    const [todo,setTodo] = useState("")
    const {addTodo} = useTodo()

    const add = (e) =>{
        e.preventDefault()
        if(!todo) return
        addTodo({todo, complete: false})
        setTodo("")
    }

    const textReference = useRef(null)

const copyToClipboard = (e) => {
  e.preventDefault()

  if (!textReference.current) return

  const value = textReference.current.value
  if (!value) return

  textReference.current.select()
  navigator.clipboard.writeText(value)
}


  
    

    return (
        <form   className="flex">
            <input 
            
            onChange = {(e) => setTodo(e.target.value)}
                type="text"
                ref={textReference}
                value={todo}
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button onClick = {add} value = {todo}  type="click" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
            <button  type="button" onClick = {copyToClipboard} className="bg-orange-500 text-white px-4 py-1 rounded-lg ml-2">
                Copy
            </button>
            
        </form>
    );
}

export default Form;

