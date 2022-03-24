function AddToDoEntry({ todo, index }) {
  return (
    <div style={{ display: "flex" }}>
      {index + 1}-{todo.text}
    </div>
  );
}

export default AddToDoEntry;
