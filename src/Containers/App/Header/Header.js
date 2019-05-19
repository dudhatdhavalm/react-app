import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, Collapse, Nav, NavItem, NavLink } from "reactstrap"

const Header = () => {
    return (
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">React App</NavbarBrand>
            <Collapse navbar>
                <Nav navbar>
                    <NavItem>
                        <NavLink tag={Link} to="/"> Home </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/user"> Users </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default Header;