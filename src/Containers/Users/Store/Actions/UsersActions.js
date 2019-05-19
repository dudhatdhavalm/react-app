import Axios from "axios";
import { GET_USERS, EMPTY_USERS } from "./UsersConstants";
import { showLoading, hideLoading } from "../../../../Components/Loading/Store/Actions/LoadingActions";

const getUsersSuccess = (users, pageNum) => {
    return {
        type: GET_USERS,
        users,
        pageNum,
    }
}

export const getUsers = (pageNum, results) => {
    return (dispatch) => {
        dispatch(showLoading());
        Axios.get("https://randomuser.me/api/?seed=test&page=" + pageNum + "&results=" + results).then((response) => {
            dispatch(hideLoading());
            dispatch(getUsersSuccess(response.data.results, pageNum));
        }).catch((error) => {
            dispatch(hideLoading());
            // here we can handle error while fetching data
            console.log("error occure while fetching data", error);
        });
    }
}

export const emptyUser = () => {
    return {
        type: EMPTY_USERS,
    }
}