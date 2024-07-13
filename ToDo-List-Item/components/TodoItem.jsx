function TodoItem1({ todoName, todoDate, onDeleteClick }) {
  return (
    <div className="container">
      {/*   ROW 2 */}
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>

        <div className="col-4">{todoDate}</div>

        <div className="col-2">
          <button
            type="button"
            className="kg-button btn btn-danger"
            onClick={() => onDeleteClick(todoName)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem1;
