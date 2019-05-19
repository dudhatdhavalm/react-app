import { GET_USERS, EMPTY_USERS } from "../Actions/UsersConstants";

const initState = {
    users: [],
    pageNum: 0,
}

const usersReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_USERS:
            return updateGetUser(state, action);
        case EMPTY_USERS:
            return { ...state, users: [], pageNum: 0 };
        default:
            return state;
    }
}

const updateGetUser = (state, action) => {
    const combineUser = [...state.users, ...action.users];
    return {
        ...state,
        users: combineUser,
        pageNum: action.pageNum,
    }
}

export default usersReducer;