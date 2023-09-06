import {useState} from "react";
import {MdTask} from "react-icons/md";
import useApisContext from "../hooks/use-apis-context";

function TodoEdit({todo, onSubmit}) {
  const [title, setTitle] = useState(todo.title);
  const {editTodo} = useApisContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTodo = {...todo, title};
    editTodo(updatedTodo);
    onSubmit();
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <form className="edit-form" onSubmit={handleSubmit}>
      <input
        autoFocus
        spellCheck={false}
        value={title}
        onChange={handleChange}
      />
      <button type="submit">
        <MdTask />
      </button>
    </form>
  );
}

export default TodoEdit;
