import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import "./Welcome.css";

class Welcome extends Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="2">
            Welcome screen
          </Col>
        </Row>
      </Container>
    );
  }
}

const withData = connect((state) => {
  return {
    userState: state.user,
  };
});

export default withData(Welcome);

// export default Welcome;
