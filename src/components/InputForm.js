import useApisContext from "../hooks/use-apis-context";
import {useState} from "react";
import {IoAdd} from "react-icons/io5";

function InputForm() {
  const [input, setInput] = useState("");
  const {createTodo} = useApisContext();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      createTodo(input);
    }
    setInput("");
  };

  return (
    <form className="input-form" onSubmit={handelSubmit}>
      <input
        spellCheck="false"
        placeholder="Add a new todo"
        value={input}
        onChange={handleChange}
      />
      <button type="submit">
        <IoAdd />
      </button>
    </form>
  );
}

export default InputForm;
