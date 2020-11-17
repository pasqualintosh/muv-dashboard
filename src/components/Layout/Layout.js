import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./../Header/Header";
import { connect } from "react-redux";

class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = { logged: false };
  }

  componentDidMount() {
    this.setState({ logged: this.props.userState.logged });
  }

  render() {
    return (
      <Container>
        {/* {this.state.logged ? <Header /> : <div />} */}
        <Header />
        {this.props.children}
      </Container>
    );
  }
}

const withData = connect((state) => {
  return {
    userState: state.user,
  };
});

export default withData(Layout);
