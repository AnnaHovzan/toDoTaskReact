// import React from "react";
import { useState, useRef } from "react";

export const EditToDo = ({editToDo, task}) => {
  const [inputText, setInputText] = useState(task.task);
  const [date, setDate] = useState(task.date);
  const dateInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText && date) {
      editToDo(task.id, inputText, date);
      editTask(task.id, inputText); 
      setInputText(""); 
      dateInputRef.current.value = "";
    } else {
      alert("Fill in the input fields");
    }
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Update Task"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />{" "}
      <br />
      <input
        type="date"
        ref={dateInputRef}
        className="todo-input-data"
        onChange={(e) => setDate(new Date(e.target.value))}
      />
      <button type="submit" className="todo-btn">
        Update
      </button>
    </form>
  );
};
