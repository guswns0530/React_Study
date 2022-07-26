import React, { useCallback, useSyncExternalStore } from 'react'
import { connect, useSelector, useDispatch, useStore } from 'react-redux'
import { bindActionCreators } from 'redux'
import Todos from '../components/Todos'
import useActions from '../lib/useActions'
import { changeInput, insert, remove, toggle } from '../modules/todos'

// const TodosContainer = ({
//   input,
//   todos,
//   changeInput,
//   insert,
//   toggle,
//   remove,
// }) => {
//   return (
//     <Todos
//       input={input}
//       onChangeInput={changeInput}
//       onInsert={insert}
//       onRemove={remove}
//       onToggle={toggle}
//       todos={todos}
//     />
//   )
// }

// export default connect(
//   ({ todos }) => ({
//     input: todos.input,
//     todos: todos.todos,
//   }),
//   {
//     changeInput,
//     insert,
//     remove,
//     toggle,
//   },
// )(TodosContainer)

const TodosContainer = () => {
  const { input, todos } = useSelector(({ todos: { input, todos } }) => ({
    input,
    todos,
  }))

  // const dispatch = useDispatch()

  // const onChangeInput = useCallback(() => dispatch(changeInput()), [dispatch])
  // const onInsert = useCallback(() => dispatch(insert()), [dispatch])
  // const onToggle = useCallback(() => dispatch(toggle()), [dispatch])
  // const onRemove = useCallback(() => dispatch(remove()), [dispatch])

  let [onChangeInput, onInsert, onToggle, onRemove] = useActions(
    [changeInput, insert, toggle, remove],
    [],
  )

  return (
    <Todos
      input={input}
      onChangeInput={onChangeInput}
      onInsert={onInsert}
      onRemove={onRemove}
      onToggle={onToggle}
      todos={todos}
    />
  )
}

export default React.memo(TodosContainer)
