import React from "react";
import { Navbar, Col, Row } from "react-bootstrap";
import Styles from "./style.module.css";
import { withRouter } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar expand="md">
      <Navbar.Toggle aria-controls="hello" style={{ marginLeft: "auto" }} />
      <Navbar.Collapse id="hello" className="ml-0">
        <Row className="m-0 p-0">
          <Col xs={12} sm={12} md={12} lg={12}>
            <ul className=" nav flex-column justify-content-center  mb-3  mb-auto">
              <li className="nav-item mt-2  w-100 justify-content-center align-items-center">
                <i className="fa fa-spotify" style={{ fontSize: "35px" }}>
                  Spotify
                </i>
              </li>
              <li className="mt-3  nav-item active">
                <a href="/">
                  <i className="fa fa-home mr-3" />
                  Home
                </a>
              </li>
              <li className="mt-3  nav-item">
                <a href="search">
                  <i class="fa fa-search mr-3"></i>Search
                </a>
              </li>
              <li className="mt-3  nav-item">
                <a href="playlist.html">
                  <i class="fa fa-book  mr-3"></i>Your Library
                </a>
              </li>
            </ul>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={12}
            className={`fixed-bottom ml-3 p-0 ${Styles.nav} mb-5 `}
          >
            <ul className="nav flex-column justify-content-center align-items-center w-100 ">
              <li className="nav-item w-100 mb-3">
                <button type="button" class="btn btn-light  w-100 rounded-pill">
                  SIGN UP
                </button>
              </li>
              <li className="nav-item w-100 mb-2">
                <button
                  type="button"
                  onclick="goToLogin()"
                  className="btn btn-secondary w-100 rounded-pill"
                  style={{
                    backgroundColor: " black",
                    color: "whitesmoke",
                    border: " 1px solid white",
                  }}
                >
                  LOGIN
                </button>
              </li>
              <li className="nav-item mb-5">
                <small className="mr-2">Cookie</small>|
                <small className="ml-2">Privacy Policy</small>
              </li>
            </ul>
          </Col>
        </Row>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavBar;
