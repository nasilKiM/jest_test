import { useState, ChangeEvent, FormEvent } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<TodoListProps> = ({ todos, setTodos }) => {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newTodoItem: Todo = {
      id: todos.length + 1,
      text: newTodo,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodoItem]);
    setNewTodo("");
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
