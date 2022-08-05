import classes from './Todos.module.css';
import Todo from '../modal/todos';
import TodoItem from './TodoItem';
import { useContext } from 'react';
import { TodoContext } from '../store/TodosContext';
const Todos: React.FC = (
  props
) => {
  const TodoCtx=useContext(TodoContext)
  return (
    <ul className={classes.todos}>
      {TodoCtx.items.map((item) => (
        <TodoItem
          RemoveTodo={TodoCtx.removeTodo.bind(null,item.id)}
          key={item.id}
          todoData={item}
        ></TodoItem>
      ))}
    </ul>
  );
};

export default Todos;
