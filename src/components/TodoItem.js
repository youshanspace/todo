import {useState} from "react";
import {MdModeEdit, MdDelete} from "react-icons/md";
import TodoEdit from "./TodoEdit";
import useApisContext from "../hooks/use-apis-context";

function TodoItem({todo}) {
  const [isCompleted, setIsCompleted] = useState(todo.completed);
  const [edit, setEdit] = useState(false);
  const {editTodo, deleteTodo} = useApisContext();

  const handleTitleEdit = () => {
    setEdit(!edit);
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  const handleCheckboxChange = () => {
    const updatedTodo = {...todo, completed: !isCompleted};
    editTodo(updatedTodo);
    setIsCompleted(!isCompleted);
  };

  const handleSubmit = () => {
    setEdit(false);
  };

  let editContent = todo.title;
  if (edit) {
    editContent = <TodoEdit todo={todo} onSubmit={handleSubmit} />;
  }

  return (
    <div
      className={
        todo.completed
          ? "todo-item-container is-completed"
          : "todo-item-container"
      }
    >
      <input
        type="checkbox"
        onChange={handleCheckboxChange}
        checked={todo.completed}
      />
      <div className="content">{editContent}</div>
      <div className="actions">
        <button onClick={handleTitleEdit}>
          <MdModeEdit />
        </button>
        <button onClick={handleDelete}>
          <MdDelete />
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
