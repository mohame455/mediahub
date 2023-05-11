export const setToken = (value) => {
  return {
    type: "SET_TOKEN",
    value
  };
};

export const logOut = () => {
  return {
    type: "LOGOUT",
  };
};
