// action type
const INCREMENT = 'COUNTER_INCREMENT'
const DECREMENT = 'COUNTER_DECREMENT'

const initialState = {
  count: 0
}

// reducer
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case INCREMENT:
      return Object.assign({}, state, {
        count: state.count + 1
      })
    case DECREMENT:
      return Object.assign({}, state, {
        count: state.count - 1
      })
    default:
      return state
  }
}

export default reducer

// action creator
export const increment = () => {
  return {type: INCREMENT}
}

export const decrement = () => {
  return {type: DECREMENT}
}
