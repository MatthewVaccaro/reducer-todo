import React from "react";

export const initialState = {
  todo: [
    { item: "Learn about reducers", completed: false, id: 3893487589 },
    { item: "Try not to cry", completed: false, id: 3892987899 },
    { item: "Pack for vacation", completed: false, id: 38923435589 }
  ]
};

export const simpleReducer = (state, action) => {
  let newTodo = {
    item: action.payload,
    completed: false,
    id: Date.now()
  };

  switch (action.type) {
    case "CREATE_TODO":
      return { ...state, todo: [...state.todo, newTodo] };
    case "TOGGLE":
      return {
        ...state,
        todo: state.todo.map(cv => {
          if (action.payload.id === cv.id) {
            return {
              ...cv,
              completed: !cv.completed
            };
          } else {
            return cv;
          }
        })
      };
    case "CLEAR":
      return { ...state, todo: state.todo.filter(cv => !cv.completed) };
    default:
      return state;
  }
};
