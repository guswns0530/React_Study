import React from 'react'
import { connect } from 'react-redux'
import Todos from '../components/Todos'
import { changeInput, insert, remove, toggle } from '../modules/todos'

const TodosContainer = ({
  input,
  todos,
  changeInput,
  insert,
  toggle,
  remove,
}) => {
  return (
    <Todos
      input={input}
      onChangeInput={changeInput}
      onInsert={insert}
      onRemove={remove}
      onToggle={toggle}
      todos={todos}
    />
  )
}

export default connect(
  ({ todos }) => ({
    input: todos.input,
    todos: todos.todos,
  }),
  {
    changeInput,
    insert,
    remove,
    toggle,
  },
)(TodosContainer)
