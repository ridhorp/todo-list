import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos }) => {
  todos = todos.filter(todo => todo.user === 'user_a')
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => (
          < Todo todos={todos} setTodos={setTodos} text={todo.text} key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
