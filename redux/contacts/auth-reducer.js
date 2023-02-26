const initialState = {
  user: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

// const authReducer = (state = initialState, {type, payload}) => {
//     switch(type) {
//         case "LOGIN_REQUEST":
//             return [...store, payload]
//         case "contacts/delete":
//             console.log('STORE: ', store)
//             const result = store.filter(item => item.id !== payload)
//             return result

//             default:
//                 return store
//     }
// }
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return { ...state, isLoading: true };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
        isLoading: false,
        error: null,
      };
    case 'LOGIN_FAILURE':
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
};

export default authReducer;
