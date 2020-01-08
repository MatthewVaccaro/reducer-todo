import React from "react";

const SingleTodo = props => {
  return (
    <div className="todoContainer">
      <h3
        className={props.data.completed ? "complete" : "incomplete"}
        onClick={props.toggle}
      >
        {props.data.item}
      </h3>
    </div>
  );
};

export default SingleTodo;
