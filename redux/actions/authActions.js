export const loginRequest = () => {
    return {
      type: 'LOGIN_REQUEST',
    };
  };
  
  export const loginSuccess = (user) => {
    return {
      type: 'LOGIN_SUCCESS',
      payload: user,
    };
  };
  
  export const loginFailure = (error) => {
    return {
      type: 'LOGIN_FAILURE',
      payload: error,
    };
  };
  
  export const loginUser = (username, password) => {
    return (dispatch) => {
      dispatch(loginRequest());
  
      // Make API call to login user
      fetch('https://example.com/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            dispatch(loginSuccess(data.user));
          } else {
            dispatch(loginFailure(data.message));
          }
        })
        .catch((error) => {
          dispatch(loginFailure(error.message));
        });
    };
  };
  