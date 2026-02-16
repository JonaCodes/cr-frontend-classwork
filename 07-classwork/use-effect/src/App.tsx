import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const API_ADDRESS = "https://dummyjson.com/todos";

  useEffect(() => {
    fetch(API_ADDRESS)
      .then((res) => res.json())
      .then((data) => {
        setTodos(data.todos);
      });
  }, []);

  const isLoading = todos.length === 0;

  return (
    <div>
      {isLoading ? (
        <div>Loading data...</div>
      ) : (
        <div>
          {todos.map((todo: any) => (
            <div key={todo.id}>{todo.todo}</div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
