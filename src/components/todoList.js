import React from "react";
import SingleTodo from "./singleTodo.js";

const TodoList = props => {
  console.log("props", props.data);
  const { toggle } = props;
  return (
    <div>
      {props.data
        ? props.data.map(cv => {
            return (
              <SingleTodo
                data={cv}
                key={cv.id}
                toggle={() => {
                  toggle(cv);
                }}
              />
            );
          })
        : ""}
    </div>
  );
};

export default TodoList;
