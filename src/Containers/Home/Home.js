import React from "react";
import { Jumbotron, Container } from "reactstrap";

const Home = () => {
    return (
        <Jumbotron fluid>
            <Container fluid>
                <h1 className="display-3">React App Home</h1>
                <p className="lead"></p>
            </Container>
        </Jumbotron>
    );
}

export default Home;