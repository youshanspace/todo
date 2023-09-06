import {useState} from "react";
import useApisContext from "../hooks/use-apis-context";
import TodoItem from "./TodoItem";

function TodoList() {
  const [activeTab, setActiveTab] = useState("all");
  const {todos} = useApisContext();
  const tabs = ["all", "active", "completed"];

  const handleClick = (tabState) => {
    setActiveTab(tabState);
  };

  const renderedTabs = tabs.map((tab, idx) => (
    <p
      className={activeTab === tab ? "active" : ""}
      onClick={() => handleClick(tab)}
      key={idx}
    >
      {tab}
    </p>
  ));

  let currentTabTodos;
  switch (activeTab) {
    case "active":
      currentTabTodos = todos.filter((todo) => !todo.completed);
      break;
    case "completed":
      currentTabTodos = todos.filter((todo) => todo.completed);
      break;
    case "all":
      currentTabTodos = todos;
      break;
    default:
      currentTabTodos = todos;
      break;
  }

  return (
    <div className="todo-list-outer-container">
      <div className="todo-list-container">
        <div className="todo-list-header">{renderedTabs}</div>
        {currentTabTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
        <div className="todo-count">
          <span>{currentTabTodos.length}</span>
          <span>items</span>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
