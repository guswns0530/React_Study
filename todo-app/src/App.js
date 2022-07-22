import { useCallback, useReducer, useRef, useState } from 'react';
import './App.css';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';
import TodoTemplate from './TodoTemplate';

function createBulkTodos() {
  const array = []
  for(let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false
    })
  }

  return array
}

// function App() {

//   const [todos, setTodos] = useState(createBulkTodos
//     )

//   const nextId = useRef(2501)

//   const onInsert = useCallback(text => {
//     const todo = {
//       id: nextId.current,
//       text,
//       checked: false
//     }

//     setTodos(todos => todos.concat(todo))
//     nextId.current += 1
//   }, [])

//   const onRemove = useCallback(id => {
//     setTodos(todos => todos.filter(({id: todo_id}) => id !== todo_id))
//   }, [])

//   const onToggle = useCallback(
//     id => {
//       setTodos( todos =>
//         todos.map(todo => 
//           todo.id === id ? {...todo, checked: !todo.checked } : todo
//         )
//       )
//     }, []
//   )

//   return (
//     <TodoTemplate> 
//       <TodoInsert onInsert={onInsert}/>
//       <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
//     </TodoTemplate>
//   );
// }

function todoReducer(todos = [], action = {type: '', todo: '', id: ''}) {

  switch(action.type) {
    case 'INSERT':
      return todos.concat(action.todo)
    case 'REMOVE' :
      return todos.filter(todo => action.id !== todo.id)
    case 'TOGGLE':
      return todos.map(todo => 
        todo.id === action.id ? {...todo, checked: !todo.checked} : todo)
    default :
      return todos
  }
}

const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

  const nextId = useRef(2501)

  const onInsert = useCallback(text => {
    const todo = {
      id: nextId.current,
      text,
      checked: false
    };

    dispatch({type: 'INSERT', todo})
    nextId.current += 1;
  }, [])

  const onRemove = useCallback(id => {
    dispatch({type: 'REMOVE', id})
  }, [])

  const onToggle = useCallback(id => {
    dispatch({type: 'TOGGLE', id})
  }, [])

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
    </TodoTemplate>
  )
}

export default App;
