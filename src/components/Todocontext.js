import { useContext, createContext } from "react";

export const Todocontext = createContext({
    todos: [
        {
            id: 1,
            task: "Your task here",
            completed: false
        },
    ],
    addTodo: (todo) => {},
    removeTodo: (todo) => {},
    updateTodo: (todo) => {},
    toggleTodo: (todo) => {}
})

export const useTodo = () => {
    return useContext(Todocontext)
}

export const Todoprovider = Todocontext.Provider




