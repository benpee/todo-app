import React from 'react';
import classes from './TodoItem.module.css';

const TodoItem: React.FC<{ id: string, text: string, index: number, onDeleteItem: () => void; }> = (props) => {
    const { text, index, onDeleteItem } = props;

    return (
        <li onClick={onDeleteItem} className={classes.item}>
            {index}. {text}
        </li >
    );
};

export default TodoItem;
