import Todo from '../modal/todos';
import React from 'react';
import { useState } from 'react';
type TodoContext = {
  items: Todo[];
  addTodo: (todoContent: string) => void;
  removeTodo: (id: string) => void;
};
export const TodoContext = React.createContext<TodoContext>({
  items: [],
  addTodo: (todoContent: string) => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const [todos, setTodo] = useState<Todo[]>([]);
  const addTodo = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodo((prevTodos) => {
      return [newTodo, ...prevTodos];
    });
  };
  const removeTodo = (TodoId: string) => {
    const updatedTodo = todos.filter((todo) => todo.id !== TodoId);
    setTodo(updatedTodo);
  };
  const contextValue: TodoContext = {
    items: todos,
    addTodo,
    removeTodo,
  };

  return (
    <TodoContext.Provider value={contextValue}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodosContextProvider;
