import Todo from '../modal/todos';
import classes from './TodoItem.module.css';
import React from 'react';

const TodoItem: React.FC<{
  todoData: Todo;
  RemoveTodo: (id: string) => void;
}> = (props) => {
  return (
    <li
      className={classes.item}
      onClick={() => props.RemoveTodo(props.todoData.id)}
    >
      {props.todoData.text}
    </li>
  );
};

export default TodoItem;
