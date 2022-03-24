//prettier-ignore
import complete from '../../../assets/images/complete.png'; // with import
import edit from "../../../assets/images/edit.png"; // with import
import deleteIcon from "../../../assets/images/deleteIcon.png"; // with import

function ToDoEntry({ todo, index, useIcons, completeToDo }) {
  return (
    <div style={{ display: "flex", marginTop: 10 }}>
      <div
        style={{
          marginTop: 8,
          width: 170,
          textDecoration: todo.isCompleted ? "line-through" : "",
        }}
      >
        {index + 1} - {todo.text}
      </div>

      {useIcons && (
        <div>
          <img
            src={complete}
            style={{ width: 50, height: 50 }}
            onClick={() => completeToDo(index)}
          />
          <img
            src={edit}
            style={{ width: 50, height: 50 }}
            onClick={() => completeToDo(index)}
          />
          <img
            src={deleteIcon}
            style={{ width: 50, height: 50 }}
            onClick={() => completeToDo(index)}
          />
        </div>
      )}
      {!useIcons && (
        <div>
          <button
            style={{ width: 125, height: 40 }}
            onClick={() => completeToDo(index)}
          >
            Complete
          </button>
          <button
            style={{ width: 125, height: 40 }}
            onClick={() => completeToDo(index)}
          >
            Edit
          </button>
          <button
            style={{ width: 125, height: 40 }}
            onClick={() => completeToDo(index)}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}

export default ToDoEntry;
