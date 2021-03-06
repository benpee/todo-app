import React, { useContext } from 'react';
import { TodosContext } from '../store/todo-context';
import TodoItem from './TodoItem';
import classes from './Todos.module.css';

const Todos: React.FC = () => {
    const todoCtx = useContext(TodosContext);
    return (
        <ul className={classes.todos}>
            {todoCtx.items.map((item, i) => (
                <TodoItem onDeleteItem={todoCtx.removeTodo.bind(null, item.id)} key={item.id} index={i + 1} id={item.id} text={item.text} />
            ))}
        </ul>
    );
};

export default Todos;
