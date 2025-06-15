import { useState, useEffect } from "react";
import "./App.css";
import { Todoprovider } from "./components"
import TodoForm from "./components/comp/TodoForm";
import TodoItem from "./components/comp/TodoItem";

function App() {

  const [todos, settodos] = useState([]);

  const addTodo  = (todo) => {
    settodos((prev) => [{id: Date.now(), ...todo }, ...prev])
  }

  const updateTodo = (id, todo) => {
    settodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo )))
  }

  const removeTodo = (id) => {
    settodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  const toggleTodo = (id) => {
    settodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
  }

  useEffect (() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      settodos(todos)
    }
  }, [])

  useEffect (() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <Todoprovider value={{todos, addTodo, removeTodo, updateTodo, toggleTodo}}>
      <div className="main h-screen w-screen bg-[url(./assets/bg.jpg)] bg-cover bg-center bg-no-repeat flex justify-end items-center ">
        <div className="container h-[85%] w-[40%] bg-transparent flex-col flex  gap-[5%] rounded-3xl mr-[10%]">
          <div className="header h-[15%] w-full bg-blue-600 flex flex-col justify-center  items-center font-mono font-extrabold text-[40px] text-black rounded-3xl">
            <p>TODO LIST</p>
            <p className="text-[20px] text-white">Lets Do It!! </p>
          </div>
          <TodoForm/>
          <div className="main h-[100%] flex flex-col gap-[15px]">
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo}/>
              </div>
            ))}
          </div>



        </div>
      </div>
    </Todoprovider>
  );
}

export default App;
