import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function ToDoSections({ task, toggleComplete, deleteToDo, editToDo }) {
  console.log(task.completed);
  console.log(task.id);
  console.log(task);
  return (
    <>
      <div className="Todo">
        <p
          className={`${task.completed ? "completed" : ""}`}
          onClick={() => toggleComplete(task.id)}
        >
          {task && task.task}
        </p>
        <div>
          <FontAwesomeIcon
            icon={faPenToSquare}
            onClick={() => editToDo(task.id)}
          />
          <FontAwesomeIcon icon={faTrash} onClick={() => deleteToDo(task.id)} />
        </div>
      </div>
    </>
  );
}
