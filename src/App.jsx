import styles from "./App.module.css";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import { useState } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([]);
  const handleNewItem = (itemName, itemDueDate) => {
    console.log(itemName, itemDueDate);
    const newTodoItems = [
      ...todoItems,
      {
        name: itemName,
        dueDate: itemDueDate,
      },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name != todoItemName);
    setTodoItems(newTodoItems);
  };
  return (
    <>
      <div className={styles.container}>
        <AppName></AppName>
        <AddTodo onNewItem={handleNewItem}></AddTodo>
        {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
        <TodoItems
          todoItems={todoItems}
          onDeleteClick={handleDeleteItem}
        ></TodoItems>
      </div>
    </>
  );
}

export default App;
