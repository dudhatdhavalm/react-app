import React from "react";

const UserAddress = (props) => {
    return (
        <span> {props.location.street},  <br />
            {props.location.state},  <br />
            {props.location.city},  <br />
            {props.location.postcode} </span >
    );
}

export default UserAddress;