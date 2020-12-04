import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import TrendingNav from "./TrendingNav";

class Trending extends Component {
  render() {
    return (
      <Col
        xs={12}
        sm={12}
        md={12}
        lg={12}

        // style={{ backgroundColor: "white" }}
      >
        <TrendingNav />

        <Row className=" ml-5">
          <Col xs={10}>
            <div id="rock">
              <h2>Eminem</h2>
              <Row
                xs={4}
                sm={4}
                lg={4}
                xl={4}
                className=" imgLinks py-3"
                id="Eminem"
              ></Row>
            </div>
          </Col>
        </Row>
        <Row className=" ml-5">
          <Col lg={10}>
            <div id="rock">
              <h2>Metallica</h2>
              <Row
                xs={4}
                sm={4}
                lg={4}
                xl={4}
                className=" imgLinks py-3"
                id="Metallica"
              ></Row>
            </div>
          </Col>
        </Row>
        <Row className=" ml-5">
          <Col lg={10}>
            <div id="rock">
              <h2>Behemoth</h2>
              <Row
                xs={4}
                sm={4}
                lg={4}
                xl={4}
                className=" imgLinks py-3"
                id="Behemoth"
              ></Row>
            </div>
          </Col>
        </Row>
      </Col>
    );
  }
}

export default Trending;