import { useState } from 'react';
import './App.css';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './modal/todos';
import TodoContextProvider from './store/TodosContext';
function App() {
  // const [todos, setTodo] = useState<Todo[]>([]);
  // const AddNewTodo = (todoText: string) => {
  //   const newTodo = new Todo(todoText);
  //   setTodo((prevTodos) => {
  //     return [newTodo, ...prevTodos];
  //   });
  // };
  // const RemoveTodo = (TodoId: string) => {
  //   const updatedTodo = todos.filter((todo) => todo.id !== TodoId);
  //   setTodo(updatedTodo);
  // };
  return (
    <TodoContextProvider>
      <NewTodo ></NewTodo>
      <Todos ></Todos>
    </TodoContextProvider>
  );
}

export default App;
