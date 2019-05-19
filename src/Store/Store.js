import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import reducers from "./Reducers";

const middleWare = applyMiddleware(thunk);

const store = createStore(reducers, middleWare);

export default store;