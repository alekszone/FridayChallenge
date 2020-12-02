import React from "react";
import NavBar from "./NavBar";
import { Row, Col } from "react-bootstrap";
import Styles from "./style.module.css";
import Trending from "./Trending";

class Home extends React.Component {
  render() {
    return (
      <Row className={`m-0 p-0 ${Styles.home} `}>
        <Trending />
      </Row>
    );
  }
}

export default Home;
