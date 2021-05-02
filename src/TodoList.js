import TodoItem from "./TodoItem";
export default function TodoList(props) {
  /* Destructure props */
  const { todoItems, onDelete, onCompleteChange } = props;

  return (
    <ul>
      {todoItems.map((todo) => (
        <li key={todo.id}>
          <TodoItem
            id={todo.id}
            text={todo.text}
            onDelete={onDelete}
            completed={todo.completed}
            onCompleteChange={onCompleteChange}
          />
        </li>
      ))}
    </ul>
  );
}
