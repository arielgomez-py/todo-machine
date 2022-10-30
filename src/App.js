import React from "react";
import "./App.css";
import TodoCounter from "./TodoCounter";
import TodoSearch from "./TodoSearch";
import TodoList from "./TodoList";
import CreateButton from "./CreateButton";
import TodoItem from "./TodoItem";

const todos = [
  { text: "Cortar cebolla", completed: false },
  { text: "Tormar el curso de intro a react", completed: false },
  { text: "Llorar con la llorona", completed: false },
];
function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <input placeholder="cebolla"></input>
      <TodoList>
        {todos.map((todo) => (
          <TodoItem text={todo.text} />
        ))}
      </TodoList>
      <CreateButton />
      <button>+</button>
    </React.Fragment>
  );
}

export default App;
