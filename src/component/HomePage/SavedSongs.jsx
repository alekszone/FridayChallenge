import React, { Component } from "react";
import Styles from "../style.module.css";
import { Row, Col, Card, Button } from "react-bootstrap";

export default class Login extends Component {
  render() {
    return (
      <div className={`${Styles.home}`}>
        <Row>
          <Col className="d-flex justify-content-center mt-5">
            <Card style={{ width: "18rem", backgroundColor: "transparent" }}>
              <Card.Img
                variant="top"
                src="https://w7.pngwing.com/pngs/867/694/png-transparent-user-profile-default-computer-icons-network-video-recorder-avatar-cartoon-maker-blue-text-logo.png"
              />
              <Card.Body>
                <Card.Title style={{ color: "white" }}>Name</Card.Title>

                <Button variant="primary">Your Playlist</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col className="mt-5">
            <h2 style={{ color: "white " }}>all liked songs</h2>
          </Col>
        </Row>
      </div>
    );
  }
}
