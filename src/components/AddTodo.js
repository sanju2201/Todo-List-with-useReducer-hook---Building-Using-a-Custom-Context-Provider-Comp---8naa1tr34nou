import React, { useState } from "react"
import { useContext } from "react";
import { myContext } from "./App";

const AddTodo = ({ dispatch }) => {
    const newContext = useContext(myContext);
    console.log("Dispatch", newContext);
    const [inputValue, setInputValue] = useState("");


    const handleForm = (e) => {
        e.preventDefault();
        newContext.dispatchFun({ type: "ADD", payload: { todoTitle: inputValue, todoId: Date.now() } })
        setInputValue("");
    }

    return (
        <>
            <form id="todo-form" onSubmit={handleForm}>
                <input type={"text"} id="todo-input" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <input type="submit" value="ADD TODO" />
                {console.log("FORM")}
            </form>
        </>
    )
}

export { AddTodo }