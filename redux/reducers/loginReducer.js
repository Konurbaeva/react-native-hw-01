import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/loginActions';

// const initialState = {
//   isLoggedIn: false,
//   isLoggingIn: false,
//   error: null,
// };
const initialState = {
  isLoggedIn: false,
  isLoggingIn: false,
  error: null,
  email: '',
  password:''
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    // case LOGIN_REQUEST:
    //   return {
    //     ...state,
    //     isLoggingIn: true,
    //     error: null,
    //   };
    case LOGIN_REQUEST:
      return {
        ...state.email,
        ...state.password,
        isLoggingIn: true,
        error: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state.email,
        ...state.password,
        isLoggedIn: true,
        isLoggingIn: false,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        isLoggingIn: false,
        error: action.error,
      };
    default:
      return state;
  }
}

// export default function loginReducer(state = initialState, {type, payload, user}) {
//   switch (type) {
//     // case LOGIN_REQUEST:
//     //   return [...state, payload]
//     case LOGIN_REQUEST:
//       return {
//         ...state,
//         isLoggingIn: true,
//         error: null,
//       };
//     case LOGIN_SUCCESS:
//       return {
//         ...state,
//         isLoggedIn: true,
//         isLoggingIn: false,
//         error: null,
//       };
//     case LOGIN_FAILURE:
//       return {
//         ...state,
//         isLoggedIn: false,
//         isLoggingIn: false,
//         error: error,
//       };
//     default:
//       return state;
//   }
// }

// export default function loginReducer(state = initialState, {type, user}) {
//   switch (type) {
//     case LOGIN_REQUEST:
//       return {
//         ...state,
//         isLoggingIn: true,
//         error: null,
//         email : user.email,
//         password : user.password
//       };

//     case LOGIN_SUCCESS:
//       return {
//         ...state,
//         isLoggedIn: true,
//         isLoggingIn: false,
//         error: null,
//       };
//     case LOGIN_FAILURE:
//       return {
//         ...state,
//         isLoggedIn: false,
//         isLoggingIn: false,
//         error: error,
//       };
//     default:
//       return state;
//   }
// }
