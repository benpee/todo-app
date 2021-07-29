import './App.css';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import TodoContextProvider from './store/todo-context';

function App() {
  // const [todos, setTodos] = useState<Todo[]>([]);

  // const addTodoHandler = (todoText: string) => {
  //   const newTodo = new Todo(todoText);

  //   setTodos(prevTodos => ([...prevTodos, newTodo]));
  // };

  // const removeTodoHandler = (todoId: string) => {
  //   const todo = todos.filter(todo => todo.id !== todoId);
  //   setTodos(todo);
  // };

  return (
    <TodoContextProvider>
      <NewTodo />
      <Todos />
    </TodoContextProvider>
  );
}

export default App;
