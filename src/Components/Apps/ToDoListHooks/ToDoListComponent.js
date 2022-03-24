import React, { useState } from "react";
import ToDoEntry from "./ToDoEntry";

export default function ToDoListComponent() {
  const initialToDoList = [
    { text: "Learn React", isCompleted: false },
    { text: "Learn Hooks", isCompleted: false },
    { text: "Learn Redux", isCompleted: false },
  ];

  const [useIcons, setUseIcons] = useState(false);
  const [todoList, setToDoList] = useState(initialToDoList);

  const completeToDo = (index) => {
    const newToDos = [...todoList];
    newToDos[index].isCompleted = !newToDos[index].isCompleted;
    setToDoList(newToDos);
  };

  return (
    <React.Fragment>
      <h1>To Do Application - Hooks</h1>
      <div></div>
      <div>
        <input
          type="checkbox"
          checked={useIcons}
          onChange={() => setUseIcons(!useIcons)}
        />
        <label style={{ marginLeft: 10 }}>Use Icons</label>
      </div>
      <br />
      {todoList.map((todo, index) => (
        <ToDoEntry
          key={index}
          index={index}
          useIcons={useIcons}
          todo={todo}
          completeToDo={completeToDo}
        />
      ))}
    </React.Fragment>
  );
}
