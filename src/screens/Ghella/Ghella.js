import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Map from "./../../components/Map/MapWithPin";

class Ghella extends Component {
    render() {
        return (
            <Container>
                <hr></hr>
                <Row className="justify-content-md-center">
                    <Col>
                        <h6>Dataset Dipendenti Ghella</h6>
                        <Map />
                    </Col>
                </Row>
                <hr></hr>
            </Container>
        );
    }
}

export default Ghella;
