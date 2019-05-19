import React from "react";

const UserPicture = (props) => {
    return (
        <img src={props.urls.thumbnail} alt="user thumbnail" />
    )
}

export default UserPicture;