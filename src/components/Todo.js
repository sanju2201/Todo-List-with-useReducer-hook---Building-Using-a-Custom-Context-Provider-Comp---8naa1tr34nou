import React from 'react';
import { useContext } from 'react';
import { myContext } from './App';
const Todo = ({ todoObj }) => {
    console.log(todoObj);
    const newContext = useContext(myContext);
    return (
        <div className='todo'>
            <div className="todo-title">{todoObj.title}</div>
            <button className='todo-delete' onClick={(e) => newContext.dispatchFun({ type: "DELETE", payload: { todoTitle: todoObj.title, todoId: todoObj.id } })}>Delete</button>

        </div>
    )
}


export { Todo }

