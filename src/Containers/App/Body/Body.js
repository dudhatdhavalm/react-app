import React, { Component, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Container } from "reactstrap";
const Users = lazy(() => import("../../Users/Users"));
const Home = lazy(() => import("../../Home/Home"));

class Body extends Component {
    render() {
        return (
            <Container fluid>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/user" component={Users} />
                    <Redirect to="/" />
                </Switch>
            </Container>
        );
    }
}

export default Body;