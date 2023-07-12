import React from "react";
// import NewTodo from "./NewTodo";

const DUMMY_DATA: string[] = ["Learn react", "Clean house", "Do it now"];

const Todos = () => {
  return (
    <ul>
      {DUMMY_DATA.map((item) => (
        <li>{item} </li>
      ))}
    </ul>
  );
};

export default Todos;
