import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./../Header/Header";

export const Layout = (props) => (
  <Container>
    <Header />
    {props.children}
  </Container>
);
