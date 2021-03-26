import React from "react";
import NavBar from "./component/HomePage/NavBar";
import "./App.css";
import { Row, Col } from "react-bootstrap";
import Home from "./component/HomePage/Home";
import AlbumsSongs from "./component/HomePage/AlbumSongs";

import Footer from "./component/Footer/Footer";
import SearchSong from "./component/HomePage/SearchSong";
import Login from "./component/Authorization/Login";
import Singup from "./component/Authorization/Singup";
import Songs from "./component/HomePage/Songs";

import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
        {this.props.location.pathname !== "/login" &&
          this.props.location.pathname !== "/singup" && (
            <Router>
              <Row className=" m-0 p-0">
                <Col xs={12} sm={12} md={2} lg={2}>
                  <NavBar />
                </Col>
                <Col xs={12} sm={12} md={10} lg={10} className=" p-0">
                  <Route path="/" exact component={Home} />
                  <Route path="/search" component={SearchSong} />
                  <Route path="/albums/:name" component={AlbumsSongs} />
                  <Route path="/songs/:name" component={Songs} />
                </Col>{" "}
              </Row>
              <Footer />
            </Router>
          )}
        <Router>
          <Route path="/singup" exact component={Singup} />
          <Route path="/login" exact component={Login} />
        </Router>
      </>
    );
  }
}
export default withRouter(App);
