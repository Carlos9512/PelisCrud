import { createStore, applyMiddleware} from "redux";

import thunk from "redux-thunk";

import rootReducer from "./reducers";

const estadoInicial = {};
const middleware = [thunk];

const store = createStore(
  rootReducer,
  estadoInicial,  
  applyMiddleware(...middleware)   
)

export default store

