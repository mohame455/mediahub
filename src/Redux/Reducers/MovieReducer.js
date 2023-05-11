const initialState = {
  listMovies: [],
};

function MovieReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_MOVIES":
      return {
        ...state,
        listMovies: action.value,
      };
    case "LOGOUT":
      return initialState;
    default:
      return state;
  }
}

export default MovieReducer;
