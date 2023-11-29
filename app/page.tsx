import TodoList from "@/components/Todolist";
import React, { useState } from "react";

const Home: React.FC = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "타스심화", completed: false },
    { id: 2, text: "프로젝트연습", completed: true },
  ]);

  return (
    <div>
      <h1>Todo List</h1>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default Home;
