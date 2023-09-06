import axios from "axios";
import {createContext, useCallback, useState} from "react";

const ApisContext = createContext();

function Provider({children}) {
  const [todos, setTodos] = useState([]);

  const fetchTodos = useCallback(async () => {
    const res = await axios.get("http://localhost:3001/todos");
    setTodos(res.data);
  }, []);

  const createTodo = async (title) => {
    const res = await axios.post("http://localhost:3001/todos", {
      title,
      completed: false,
    });
    const updatedTodo = [...todos, res.data];
    setTodos(updatedTodo);
  };

  const editTodo = async (newTodo) => {
    const res = await axios.put(`http://localhost:3001/todos/${newTodo.id}`, {
      ...newTodo,
    });
    const updatedTodos = todos.map((todo) => {
      if (todo.id === newTodo.id) {
        return {...todo, ...res.data};
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:3001/todos/${id}`);
    const updatedBooks = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(updatedBooks);
  };

  const contextObj = {
    todos,
    fetchTodos,
    createTodo,
    editTodo,
    deleteTodo,
  };

  return (
    <ApisContext.Provider value={contextObj}>{children}</ApisContext.Provider>
  );
}

export default ApisContext;
export {Provider};
