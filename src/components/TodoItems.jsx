import TodoItem from "./TodoItem";

function TodoItems({ todoItems, onDeleteClick }) {
  return (
    <div className="conatiner">
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoName={item.name}
          todoDate={item.dueDate}
          onDeleteClick={onDeleteClick}
        ></TodoItem>
      ))}
    </div>
  );
}
export default TodoItems;
