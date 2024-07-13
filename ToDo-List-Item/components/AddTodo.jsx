import { useState } from "react";
import styles from "./AddTodo.module.css";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClick = () => {
    if (todoName && todoDate) {
      onNewItem(todoName, todoDate);
      setTodoName("");
      setDueDate("");
    }

    else{
      alert('Please enter both details')
    }

  };


  return (
    <div className={`${styles.kg} container`}>
      {/*   ROW 1 */}

      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter ToDo here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>

        <div className="col-4">
          <input type="date" onChange={handleDateChange} value={todoDate} />
        </div>

        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button button "
            onClick={handleAddButtonClick}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
