import React from "react";

const UserName = (props) => {
    return (
        <span> {props.name.title} {props.name.first} {props.name.last} </span>
    )
}

export default UserName;