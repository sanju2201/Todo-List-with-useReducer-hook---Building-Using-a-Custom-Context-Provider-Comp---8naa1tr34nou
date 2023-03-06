import React, { useReducer } from 'react'
import { todoReducer } from '../reducers/todo';
import '../styles/App.css';
import { AddTodo } from './AddTodo';
import { Todo } from './Todo';

export const myContext = React.createContext();
const App = () => {
  const [state, dispatch] = useReducer(todoReducer, [])


  return (
    <myContext.Provider value={{ todoState: state, dispatchFun: dispatch }}>
      <div id="main">
        <AddTodo dispatch={dispatch} />
        <ul>
          {state.map((todo) => <Todo todoObj={todo} />)}
        </ul>
      </div>
    </myContext.Provider>
  )
}


export default App;
