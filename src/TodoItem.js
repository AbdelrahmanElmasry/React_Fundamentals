export default function TodoItem(props) {
  /* Destructure props */
  const { id, text, onDelete, completed, onCompleteChange } = props;

  return (
    <div className="todoItem">
      <p>{text}</p>
      <button onClick={(e) => onDelete(e, id)}>Delete</button>
      <input
        type="checkbox"
        checked={completed}
        value={completed}
        onChange={(e) => onCompleteChange(e, id)}
      />
    </div>
  );
}
