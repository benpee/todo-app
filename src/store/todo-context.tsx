import { createContext, useState } from 'react';
import Todo from '../models/todo';

type TodoContextObj = {
    items: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void;
};

export const TodosContext = createContext<TodoContextObj>({
    items: [],
    addTodo: () => { },
    removeTodo: (id: string) => { },
});

export const TodoContextProvider: React.FC = (props) => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodoHandler = (todoText: string) => {
        const newTodo = new Todo(todoText);

        setTodos(prevTodos => ([...prevTodos, newTodo]));
    };

    const removeTodoHandler = (id: string) => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    };

    const contextValue: TodoContextObj = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler,
    };

    return <TodosContext.Provider value={contextValue}>
        {props.children}
    </TodosContext.Provider>;
};

export default TodoContextProvider;;