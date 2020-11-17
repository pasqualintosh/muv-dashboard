import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import DoughnutGraph from "./../../components/DoughnutGraph/DoughnutGraph";
import HorizontalGraph from "../../components/TransportTool/TransportTool";
import DistanceHomeWork from "../../components/DistanceHomeWork/DistanceHomeWork";
import ModalSplit from "../../components/ModalSplit/ModalSplit";
import MiddleTrip from "../../components/MiddleTrip/MiddleTrip";

class Charts extends Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col>
            <HorizontalGraph />
          </Col>
        </Row>
        <hr></hr>
        <Row className="justify-content-md-center">
          <Col>
            <DistanceHomeWork />
          </Col>
        </Row>
        <hr></hr>
        <Row className="justify-content-md-center">
          <Col>
            <ModalSplit />
          </Col>
        </Row>
        <hr></hr>
        <Row className="justify-content-md-center">
          <Col>
            <MiddleTrip />
          </Col>
        </Row>
        <hr></hr>
      </Container>
    );
  }
}

export default Charts;
