import React from 'react'

const TodoItem = ({ todo, onToggle, onRemove }) => {
  console.log(todo)
  return (
    <div>
      <input
        type={'checkbox'}
        onClick={() => onToggle(todo.id)}
        checked={todo.done}
        readOnly={true}
      ></input>
      <span
        style={{
          textDecoration: todo.done ? 'line-through' : 'none',
        }}
      >
        {todo.text}
      </span>
      <button onClick={() => onRemove(todo.id)}>삭제</button>
    </div>
  )
}

const Todos = ({
  input,
  todos,
  onChangeInput,
  onInsert,
  onToggle,
  onRemove,
}) => {
  const onSubmit = (e) => {
    e.preventDefault()
    onInsert(input)
    onChangeInput('')
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={input} onChange={(e) => onChangeInput(e.target.value)} />
        <button>등록</button>
      </form>
      <div>
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            onToggle={onToggle}
            onRemove={onRemove}
            key={todo.id}
          />
        ))}
      </div>
    </div>
  )
}

export default Todos
