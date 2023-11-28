import { useState, ChangeEvent, FormEvent } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (newTodo.trim() !== "") {
      console.log("추가:", newTodo);
    }
  };

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={newTodo} onChange={handleInputChange} />
        <button type="submit">+</button>
      </form>
    </div>
  );
};

export default TodoList;
