import { useState, useEffect } from "react";
import "./App.css";
import { Todoprovider } from "./components"

function App() {

  const [todos, settodos] = useState([]);

  const addTodo  = (todo) => {
    settodos((prev) => [{id: Date.now(), ...todo }, ...prev])
  }

  const setTodo = (id, todo) => {
    setTodo((prev) => prev.map((prevTodo) => (prevTodo.id=== id ? todo : prevTodo)))
  }

  const removeTodo = (id) => prev.filter((todo) => todo.id !== id)

  const toggleTodo = (id) => {
    setTodo((prev) => prev.map((prevTodo) => prevTodo === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
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
            <p1>TODO LIST</p1>
            <p1 className="text-[20px] text-white">Lets Do It!! </p1>
          </div>

          <div className="spaceforlist h-[75%] w-full bg-blue-400 flex justify-center items-center rounded-3xl">
            <div className="taskcont w-[90%] h-[90%] bg-transparent rounded-xl">
              <div className="task1 h-[12%] w-full flex justify-evenly items-center p-3 bg-red-600 rounded-xl">
                <div className="tickornot bg-green-600 w-[6%] h-[90%] border-b border-t rounded-md flex bg-transparent items-center justify-center">
                  <input type="checkbox"></input>
                </div>
                <div className="text h-[90%] w-[71%] flex justify-start px-3 items-center border-b border-dotted font-semibold bg-transpaernt">
                  YOUR TASK HERE!
                </div>
                <div className="menus h-[95%] flex justify-evenly items-center w-[15%] bg-transparent">
                  <div className="bg-green-600 editorsave h-[90%] cursor-pointer w-[45%] p-[6px] bg-transparent border-b border-t rounded-lg">
                    <div className="icon h-full w-full bg-[url(./assets/pencil.png)] bg-contain bg-no-repeat bg-center"></div>
                  </div>
                  <div className="bg-green-600 delete h-[90%] cursor-pointer w-[45%] p-[6px] bg-transparent border-b border-t rounded-lg">
                    <div className="icon h-full w-full bg-[url(./assets/dustbin.png)] bg-contain bg-no-repeat bg-center"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Todoprovider>
  );
}

export default App;
