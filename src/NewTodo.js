export default function NewTodo(props) {
  const { onChange, text, onSubmit } = props;

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <input type="text" value={text} onChange={(e) => onChange(e)} />
      <button type="submit">Create</button>
    </form>
  );
}
