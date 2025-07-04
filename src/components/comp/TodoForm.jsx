import { useState } from "react";
import { useTodo } from "../Todocontext";

function TodoForm() {
    
    const [todo, setTodo] = useState("");
    const { addTodo } = useTodo();

    const add = (e) => {
        e.preventDefault()

        if (!todo) return 

        addTodo({id: Date.now(), todo:todo, completed: false})
        // addTodo({todo, completed: false})
    }


    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" 
            className="rounded-r-lg px-3 py-1 bg-[rgb(16,185,129)] text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;
