import TodoList from "@/components/Todolist";
import { render, fireEvent, RenderResult } from "@testing-library/react";

test("초기 할일 목록이 있는 TodoList 컴포넌트를 렌더링합니다.", () => {
  const initialTodos = [
    { id: 1, text: "TypeScript 배우기", completed: false },
    { id: 2, text: "Next.js 앱 만들기", completed: true },
  ];

  const { getByText }: RenderResult = render(<TodoList todos={initialTodos} />);

  // 초기 랜더링.
  expect(getByText("TypeScript 배우기")).toBeTruthy();
  expect(getByText("Next.js 앱 만들기")).toBeTruthy();

  initialTodos.forEach((todo) => {
    expect(getByText(todo.text)).toBeTruthy();
  });
});

test("폼 제출 시 새로운 할일을 추가합니다.", () => {
  const initialTodos = [
    { id: 1, text: "TypeScript 배우기", completed: false },
    { id: 2, text: "Next.js 앱 만들기", completed: true },
  ];

  const { getByRole, getByText }: RenderResult = render(<TodoList todos={initialTodos} />);

  const inputElement = getByRole("textbox");
  fireEvent.change(inputElement, { target: { value: " 테스트하기" } });

  const addButton = getByRole("button");
  fireEvent.click(addButton);

  const newTodoText = getByText(" 테스트하기");
  expect(newTodoText).toBeTruthy();
});
