import React from 'react'
import { useTodo } from '../Todocontext';

function TodoItem() {



  return (
    <>
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
    </>
  )
}

export default TodoItem
