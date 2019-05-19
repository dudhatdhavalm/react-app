import React, { lazy } from "react";
import UserAddress from "../../../Components/Users/UserAddress/UserAddress";
const UserName = lazy(() => import("../../../Components/Users/UserName/UserName"));
const UserPicture = lazy(() => import("../../../Components/Users/UserPicture/UserPicture"));

const TableBody = (props) => {
    const userData = props.data.map((user, index) => {
        return (
            <tr key={index}>
                <td> <UserPicture urls={user.picture} /> </td>
                <td> <UserName name={user.name} /> </td>
                <td> {user.email} </td>
                <td> {user.dob.date}  </td>
                <td> <UserAddress location={user.location} /> </td>
                <td> {user.phone} </td>
            </tr>
        );
    });
    return userData;
}

export default TableBody;