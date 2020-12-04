import React from "react";
import NavBar from "./component/NavBar";
import "./App.css";
import { Row, Col } from "react-bootstrap";
import Home from "./component/Home";
import Trending from "./component/Trending";
import Styles from "./component/style.module.css";
import Footer from "./component/Footer";
import SearchSong from "./component/SearchSong";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {" "}
          <Router>
            <Row className="m-0 p-0">
              <Col xs={12} sm={12} md={2} lg={2}>
                <NavBar />
              </Col>
              <Col xs={12} sm={12} md={10} lg={10}>
                <Route path="/" exact component={Home} />
                <Route path="/search" exact component={SearchSong} />
              </Col>{" "}
            </Row>
            <Footer />
          </Router>
        </header>
      </div>
    );
  }
}
export default App;
