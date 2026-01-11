import { useContext, createContext } from "react";

export const TodoContext = createContext({
  Todos: [
    {
      id: 0,
      todo_msg: "message",
      completed: false
    },
    {},
    {}
  ],
  addTodo: (id,todo_msg) => {},
  updateTodo: (todo_msg) => {},
  deleteTodo: (id) => {},
  checkTodo: (id) => {}

})

export const useTodo = () => {
  return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider