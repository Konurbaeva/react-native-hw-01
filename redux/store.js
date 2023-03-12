// import { configureStore } from '@reduxjs/toolkit';
// import loginReducer from './reducers/loginReducer';

// const store = configureStore({
//   reducer: {
//     login: loginReducer,
//   },
// });

// export default store;

import { configureStore, combineReducers} from '@reduxjs/toolkit';
import loginReducer from './reducers/loginReducer';
import { authSlice} from "./auth/authReducer"

const rootReducer = combineReducers({
  [authSlice.name]: authSlice.reducer
})
const store = configureStore({
  reducer: rootReducer
});

export default store;
