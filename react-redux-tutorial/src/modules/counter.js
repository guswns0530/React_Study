import { createAction, handleActions } from 'redux-actions'

const INCREASE = 'counter/INCREASE'
const DECREASE = 'counter/DECREASE'

// export const increase = () => ({ type: INCREASE })
// export const decrease = () => ({ type: DECREASE })

// redux-action 사용후
export const increase = createAction(INCREASE)
export const decrease = createAction(DECREASE)

const initialState = {
  number: 0,
}

// function counter(state = initialState, action) {
//   switch (action.type) {
//     case INCREASE:
//       return {
//         number: state.number + 1,
//       }
//     case DECREASE:
//       return {
//         number: state.number - 1,
//       }
//     default:
//       return state
//   }
// }

// redux-action 사용후
const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({
      number: state + 1,
    }),
    [DECREASE]: (state, action) => ({
      number: state - 1,
    }),
  },
  initialState,
)

export default counter
