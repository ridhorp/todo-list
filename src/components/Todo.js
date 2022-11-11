import React from "react";

const Todo = ({ text, key }) => {
  return (
    <div className="todo" id={key}>
      <li className="todo-iten">{text}</li>
      <button className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
