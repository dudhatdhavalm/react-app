import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import loading from "../../Assets/Images/loading.gif";
import { connect } from "react-redux";
import "./Loading.css";

class Loading extends Component {
    render() {
        return (this.props.loading ?
            <div className="Loading">
                <Container fluid>
                    <Row>
                        <Col className="text-center">
                            <img src={loading} alt="loading" />
                        </Col>
                    </Row>
                </Container>
            </div> : ""
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.loadingReducer.loading,
    }
}

export default connect(mapStateToProps)(Loading);