const initialState = {
    accessToken: '',
  };
  
  function AuthReducer (state = initialState, action) {
    switch (action.type) {
      case 'SET_TOKEN':
        return {
          ...state,
          accessToken: action.value,
        };
      case 'LOGOUT':
        return initialState;
      default:
        return state;
    }
  }
  
  export default AuthReducer;
  