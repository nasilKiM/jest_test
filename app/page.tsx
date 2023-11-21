import TodoList from "@/components/Todolist";
import React from "react";

const Home: React.FC = () => {
  const todos = [
    { id: 1, text: "타스심화", completed: false },
    { id: 2, text: "프로젝트연습", completed: true },
  ];

  return (
    <div>
      <h1>Todo List</h1>
      <TodoList todos={todos} />
    </div>
  );
};

export default Home;
