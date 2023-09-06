import useApisContext from "./hooks/use-apis-context";
import {useEffect} from "react";
import InputForm from "./components/InputForm";
import TodoList from "./components/TodoList";

function App() {
  const {fetchTodos} = useApisContext();

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return (
    <div>
      <InputForm />
      <TodoList />
    </div>
  );
}

export default App;
