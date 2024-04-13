import styles from "./TodoItem.module.css";

function TodoItem({ todoName, todoDate, onDeleteClick }) {
  return (
    <div className={`${styles.container} row`}>
      <div className={`${styles.name} col-6`}>{todoName}</div>
      <div className={`${styles.name} col-4`}>{todoDate}</div>
      <div className="col-2">
        <button
          type="button"
          className={`${styles.button} btn btn-danger`}
          onClick={() => onDeleteClick(todoName)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
export default TodoItem;
