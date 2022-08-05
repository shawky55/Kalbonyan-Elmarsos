import React from 'react';
import classes from './NewTodo.module.css';
import { useContext } from 'react';
import { TodoContext } from '../store/TodosContext'

import { useRef } from 'react';
const NewTodo: React.FC = () => {
  const todoCtx=useContext(TodoContext);
  const todoContent = useRef<HTMLInputElement>(null);
  const submitFormHandler = (event: React.FormEvent) => {
    event.preventDefault();
    let todoValue = todoContent.current!.value;
    if (todoValue.trim().length === 0) {
      console.log('can not be empty');
      return;
    }
    todoCtx.addTodo(todoValue);
    todoContent.current!.value = '';
  };

  return (
    <form onSubmit={submitFormHandler} className={classes.form}>
      <label htmlFor="newTodo">Todo</label>
      <input type="text" id="newTodo" ref={todoContent} />
      <button>Add Todo</button>
    </form>
  );
};
export default NewTodo;
