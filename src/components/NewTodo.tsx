import React, { useContext, useRef } from 'react';
import { TodosContext } from '../store/todo-context';

const NewTodo: React.FC = () => {
    const todoCtx = useContext(TodosContext);

    const inputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const inputText = inputRef.current!.value;

        if (inputText.trim().length === 0) {
            // throw an error
            return;
        }

        console.log(inputText);
        console.log(todoCtx.addTodo);
        todoCtx.addTodo(inputText);
        inputRef.current!.value = '';
    };
    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="text">Todo text</label>: &nbsp;
            <input type="text" id="text" ref={inputRef} /> &nbsp;
            <button>Add Todo</button>
        </form>
    );
};

export default NewTodo;
