import React from "react";
import { useTodo } from "../Todocontext";

function TodoItem({ todo }) {
  const [isTodoEditable, setisTodoEditable] = React.useState(false);
  const [todoMsg, settodoMsg] = React.useState(todo.todo);
  const { toggleTodo, updateTodo, removeTodo } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setisTodoEditable(false);
  };

  const toggleCompleted = () => {
    toggleTodo(todo.id);
  };

  return (
    <>
      <div className="task1 h-[100%] w-full flex justify-evenly items-center p-3 bg-[rgb(51,65,85)]   rounded-xl">
        <div className="tickornot bg-[rgb(100,116,139)] w-[6%] h-[90%] border-b border-t rounded-md flex bg-transparent items-center justify-center">
          <input
            type="checkbox"
            className="cursor-pointer"
            checked={todo.completed}
            onChange={toggleCompleted}
          ></input>
        </div>
        <div className="text h-[90%] w-[71%] flex justify-start px-3 items-center border-b border-dotted font-semibold bg-transpaernt">
          <input
            type="text"
            className={`border outline-none w-full h-full bg-transparent ${
              isTodoEditable ? "border-black/10 px-2" : "border-transparent"
            } ${todo.completed ? "line-through" : ""}`}
            value={todoMsg}
            onChange={(e) => settodoMsg(e.target.value)}
            readOnly={!isTodoEditable}
          />
        </div>
        <div className="menus h-[95%] flex justify-evenly items-center w-[15%] bg-transparent">
          <div className="bg-[rgb(251,191,36)] editorsave h-[90%] cursor-pointer w-[45%] p-[6px] bg-transparent border-b border-t rounded-lg">
            <button
              className={`icon h-full w-full ${
                isTodoEditable ? "bg-[url('./assets/penciledit.png')]" : "bg-[url('./assets/pencil.png')]"
              } bg-contain bg-no-repeat bg-center`}
              onClick={() => {
                if (todo.completed) return;
                if (isTodoEditable) {
                  editTodo();
                } else setisTodoEditable((prev) => !prev);
              }}
              disabled={todo.completed}
            ></button>
          </div>

          <div className="bg-[rgb(244,63,94)] delete h-[90%] cursor-pointer w-[45%] p-[6px] bg-transparent border-b border-t rounded-lg">
            <button
              className={`icon h-full w-full bg-[url(./assets/dustbin.png)] bg-contain bg-no-repeat bg-center`}
              onClick={() => removeTodo(todo.id)}
            ></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoItem;
