import {useContext, createContext} from 'react';

export const TodoContext = createContext({
    todos: [ 
      {
        id: 1,
        todo_title: 'Sample Todo',
        completed: false,
      }
    ],
    addTodo: ( todo_title) => {},
    updateTodo: (id,  todo_title) => {},
    
    removeTodo: (id) => {},
    toggleTodo: (id) => {}
});

export const useTodoContext = () => {
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;