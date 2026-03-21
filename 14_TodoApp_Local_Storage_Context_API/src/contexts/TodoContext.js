import { createContext, useContext, useState} from "react"

export const TodoContext = createContext({
    todos : [
        {
            id: 1,
            todo: "Study Hard",
            completed: false
        }
    ],
    addTodo : (todo) => {},
    updatedTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

export const TodoProvider = TodoContext.Provider

export const useTodo = () => { return useContext(TodoContext) }