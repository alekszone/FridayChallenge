import React, { Component } from "react";
import Styles from "../style.module.css";
import { Row, Col } from "react-bootstrap";

export default class Login extends Component {
  render() {
    return (
      <div className={`${Styles.home}`}>
        <Row>
          <Col>
            {" "}
            <h2 style={{ color: "white " }}>your profile</h2>
          </Col>

          <Col>
            <h2 style={{ color: "white " }}>all liked songs</h2>
          </Col>
        </Row>
      </div>
    );
  }
}
