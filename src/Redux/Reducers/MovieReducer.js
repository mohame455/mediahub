const initialState = {
  listMovies: [],
  movieDetails: {},
  listHistorique: [],
};

function MovieReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_MOVIES":
      return {
        ...state,
        listMovies: action.value,
      };
    case "SET_MOVIE_DETAILS":
      return {
        ...state,
        movieDetails: action.value,
      };
    case "SET_MOVIE_HISTORIQUE": {
      let indexMovie = state.listHistorique.findIndex(
        (el) => el.id === action.value.id
      );
      if (indexMovie === -1) {
        return {
          ...state,
          listHistorique: [...new Set([...state.listHistorique, action.value])],
        };
      } else {
        return state;
      }
    }

    case "LOGOUT":
      return initialState;
    default:
      return state;
  }
}

export default MovieReducer;
