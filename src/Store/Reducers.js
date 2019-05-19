import { combineReducers } from "redux";
import usersReducer from "../Containers/Users/Store/Reducer/UsersReducer";
import loadingReducer from "../Components/Loading/Store/Reducer/LoadingReducer";

const reducers = combineReducers({
    usersReducer,
    loadingReducer
});

export default reducers;