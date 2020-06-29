import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BarGraph from "./../../components/BarGraph/BarGraph";
import DoughnutGraph from "./../../components/DoughnutGraph/DoughnutGraph";
import Map from "./../../components/Map/WalkingTrip";

class Charts extends Component {
  render() {
    return (
      <Container>
        <hr></hr>
        <Row className="justify-content-md-center">
          <Col>
            <h6>Routes travaled in Palermo</h6>
            <Map />
          </Col>
        </Row>
        <hr></hr>
      </Container>
    );
  }
}

export default Charts;
