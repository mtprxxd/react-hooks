import {useContext, createContext} from 'react'

export const TodoContext = createContext({

  todos: [
    {
      id: 2,
      new_todo: "todo-title",
      completed: false

    },
  ],
  addTodo: (new_todo) =>{},
  removeTodo: (id) =>{},
  toggleTodo: (id) =>{},
  updateTodo: (id,new_todo) =>{}
})

export const useTodo = () => {
  return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider