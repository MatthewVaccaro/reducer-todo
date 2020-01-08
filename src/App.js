import React, { useReducer, useState } from "react";
import "./App.css";

//Reducer Imports
import { initialState, simpleReducer } from "./reducers/index";

//Components Imports
import TodoList from "./components/todoList.js";

function App() {
  const [state, dispatch] = useReducer(simpleReducer, initialState);
  const [form, setForm] = useState();

  const changeHandler = e => {
    setForm(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();

    if (form === !"") {
      dispatch({ type: "CREATE_TODO", payload: form });
      setForm("");
    }
  };

  const toggleTodo = value => {
    return dispatch({ type: "TOGGLE", payload: value });
  };

  const clear = () => {
    return dispatch({ type: "CLEAR" });
  };

  console.log("state:", state.todo);

  return (
    <div className="masterContainer">
      <h1>TODOS</h1>
      <form onSubmit={submitHandler}>
        <input
          name="todoForm"
          onChange={changeHandler}
          value={form}
          type="text"
          placeholder="Add a Todo"
        />
        <button class="add" type="submit">
          Add Item
        </button>
        <button class="clear" type="reset" onClick={clear}>
          Clear
        </button>
      </form>

      <TodoList data={state.todo} toggle={toggleTodo} />
    </div>
  );
}

export default App;
