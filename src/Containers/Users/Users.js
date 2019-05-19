import React, { lazy, Component } from "react";
import { getUsers, emptyUser } from "./Store/Actions/UsersActions";
import { connect } from "react-redux";
import { Table, Row, Col } from "reactstrap";
const TableBody = lazy(() => import("./TableBody/TableBody"));

class User extends Component {

    constructor(props) {
        super(props);
        this.tableRef = React.createRef();
    }

    render() {
        return (
            <Row>
                <Col>
                    <Table>
                        <thead>
                            <tr>
                                <th>User Picture</th>
                                <th>Full Name</th>
                                <th>E-mail</th>
                                <th>DOB</th>
                                <th>Full Address</th>
                                <th>Phone</th>
                            </tr>
                        </thead>
                        <tbody ref={this.tableRef}>
                            <TableBody data={this.props.users} />
                        </tbody>
                    </Table>
                </Col>
            </Row >
        );
    }

    componentDidMount() {
        this.fetchUserData();
        window.addEventListener("scroll", this.handleScroll);
    }

    handleScroll = (e) => {
        console.log(window.innerHeight + window.scrollY, document.body.offsetHeight);
        if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 1)) {
            this.fetchUserData();
        }
    }

    fetchUserData = () => {
        console.log(this.props);
        const pageNum = this.props.pageNum + 1;
        console.log(pageNum);
        this.props.getUsers(pageNum, 20);
    }

    componentWillUnmount() {
        this.props.emptyUser();
        window.removeEventListener('scroll', this.handleScroll);
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersReducer.users,
        pageNum: state.usersReducer.pageNum,
    };
}

const mapDispatchToProps = {
    getUsers,
    emptyUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(User);