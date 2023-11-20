import React from "react";
import { ToDoForm } from "./toDoForm";
import ToDoSections from "./toDoSection"
import { EditToDo } from "./editTodo";
import { useState,useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
uuidv4();

export const ToDoWrapper = () => {
  const [ toDoTasks, setToDoTasks ] = useState([]);

  useEffect(() => {
    console.log(toDoTasks);
  }, [toDoTasks]);

  const addToDo = (toDo, date) => {
    setToDoTasks((prevTasks) => [
      ...prevTasks,
      {
        id: uuidv4(),
        task: toDo,
        completed: false,
        isEditing: false,
        done: false,
        date: date
      },
    ]);
  };
  const toggleComplete = (id) => {
    setToDoTasks((prevTasks) =>
      prevTasks.map((toDoTask) =>
        toDoTask.id === id
          ? { ...toDoTask, completed: !toDoTask.completed }
          : toDoTask
      )
    );
  };

  const deleteToDo = (id) => {
    setToDoTasks(toDoTasks.filter((toDoTasks) => toDoTasks.id !== id));
  }

  const editToDo = (id) => {
    setToDoTasks((prevTasks) =>
      prevTasks.map((toDoTask) =>
        toDoTask.id === id
          ? { ...toDoTask, isEditing: !toDoTask.isEditing }
          : toDoTask
      )
    );
  };

  const editTask = (id, updatedTask) => {
    setToDoTasks((prevTasks) =>
      prevTasks.map((toDoTask) =>
        toDoTask.id === id
          ? { ...toDoTask, task: updatedTask, isEditing: !toDoTask.isEditing }
          : toDoTask
      )
    );
  };

  return (
    <div className="TodoWrapper">
      <h1>To Do Task </h1>
      <ToDoForm addToDo={addToDo} />
      {toDoTasks.map((toDo, index) =>
        toDo.isEditing ? (
          <EditToDo key={index} editToDo={editTask} task={toDo} />
        ) : (
          <ToDoSections
            task={toDo}
            key={index}
            toggleComplete={toggleComplete}
            deleteToDo={deleteToDo}
            editToDo={editToDo}
          />
        )
      )}
    </div>
  );
};


