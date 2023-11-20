
import { useState, useRef } from "react";

export const ToDoForm = (props) => {
  const [inputText, setInputText] = useState("");
  const [date, setDate] = useState(new Date());

  const dateInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText && date) {
      props.addToDo(inputText, date);
      setInputText("");
      setDate(new Date());
      dateInputRef.current.value = "";
    } else {
      alert("fill all input");
    }
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="What do you need to do?"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      /> <br />
        <input
          type="date"
          ref={dateInputRef}
          className="todo-input-data"
          onChange={(e) => setDate(new Date(e.target.value))}
        />
      

      <button type="submit" className="todo-btn">
        Add
      </button>
    </form>
  );
};
