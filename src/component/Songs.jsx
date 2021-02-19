import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import Styles from "./style.module.css";
import { withRouter } from "react-router-dom";
class Songs extends Component {
  render() {
    return (
      <Col xs={12} sm={12} md={12} lg={12} className={`${Styles.home}`}>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6}>
            <h1 style={{ color: "white" }}>Hello</h1>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <h1 style={{ color: "white" }}>Hello</h1>
          </Col>
        </Row>
      </Col>
    );
  }
}
export default withRouter(Songs);
