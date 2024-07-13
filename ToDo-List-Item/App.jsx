import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import EmptyMessage from "./components/EmptyMessage";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
function App() {
  const initialTodoItems = [];

  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const formatDate = (date) => {
    const [year,month,day] = date.split('-');
    return `${month}/${day}/${year}`
  }  

  const handleNewItem = (itemName, itemDueDate) => {
    if (itemName && itemDueDate) {
      const formattedDate = formatDate(itemDueDate)
      const newTodoItems = [
        ...todoItems,
        { name: itemName, dueDate: formattedDate },
      ];

      setTodoItems(newTodoItems);
    }
  };

  const handleDeleteitem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <EmptyMessage todoItems={todoItems} />}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteitem} />
    </center>
  );
}

export default App;
