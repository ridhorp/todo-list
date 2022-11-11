import React from "react";

const Form = ({ inputText, setInputText, todos, setTodos }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 100, user: 'user_a' },
    ]);
    setInputText("")
  };
  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button className="todo-button" onClick={submitTodoHandler} type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
    </form>
  );
};

export default Form;
