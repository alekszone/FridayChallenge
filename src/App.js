import React from "react";
import NavBar from "./component/NavBar";
import "./App.css";
import { Row, Col } from "react-bootstrap";
import Home from "./component/Home";
import Trending from "./component/Trending";
import Styles from "./component/style.module.css";
import Footer from "./component/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Row>
            <Col xs={12} sm={12} md={3} lg={3}>
              <NavBar />
            </Col>
            <Col xs={12} sm={12} md={9} lg={9}>
              <Router>
                <Route path="/" exact component={Home} />
                {/* <Route path="/yourlibrary" exact component={AlbumPage} /> */}

                {/* <AlbumPage /> */}
              </Router>
            </Col>{" "}
          </Row>
          <Footer />
        </header>
      </div>
    );
  }
}
export default App;
