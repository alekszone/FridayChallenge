import React from "react";
import NavBar from "./NavBar";
import { Row, Col } from "react-bootstrap";
import Styles from "./style.module.css";
import Trending from "./Trending";

class Home extends React.Component {
  render() {
    return <Trending className={`${Styles.home}`} />;
  }
}

export default Home;
