// const store = createStore(loggeduser);

import { authReducer } from "./reducers/auth-reducer";

export const store = createStore(authReducer);