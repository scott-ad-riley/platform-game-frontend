export default (state, action) => {
  switch(action.type) {
    case 'NEW_RUN':
      const {name, key, time} = action.run
      return {
        ...state,
        runs: [
          ...state.runs,
          { name, key, time }
        ]
      }
    case 'REMOVE_RUN':
      const index = state.runs.findIndex(run => run.key === action.key)
      return {
        ...state,
        runs: [
          ...state.runs.slice(0, index),
          ...state.runs.slice(index + 1)
        ]
      }
    default:
      return state;
  }
}
