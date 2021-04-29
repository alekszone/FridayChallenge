import React from "react";
import { Row } from "react-bootstrap";

const Albums = () => {
  return (
    <div className="content" id="bg">
      <div className="container">
        <Row lg={2}>
          <div>
            <div className=" d-flex flex-row bolder justify-content-center">
              <div id="text_alg ">
                <p style="text-align: center; color:ghostwhite">
                  33.000 MONTHLY USERS
                </p>
                <div className="d-flex " style="display:none">
                  {/* <input type="text" className="type" /> */}
                  <button
                    type="button"
                    className="btn  btn-primary  search"
                    onClick={showAlbums()}
                  >
                    Search
                  </button>
                </div>
                <h1 style="text-align: center;">Queen</h1>
                <div className="container d-flex flex-row ">
                  <button type="button" className="btn btn-primary btn1">
                    Play
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary btn2"
                  >
                    Follow
                  </button>
                  <button type="button" className="btn btn-outline-primary">
                    {" "}
                    <i className="fa">&#xf141;</i>{" "}
                  </button>
                </div>
                <div className="container menu bolder">
                  <a href="#">
                    <u>OVERVIEW</u>
                  </a>
                  <a href="#">RELATED ARTISTS</a>
                  <a href="#">ABOUT</a>
                </div>
              </div>
            </div>
          </div>
          <h1 style="color:white; margin-top: 5%;margin-left: 1%;">Albums</h1>
          <div className="container d-flex flex-row">
            <div
              className="row  row-cols-sm-2 row-cols-md-3 row-cols-lg-6 pb-5"
              id="hello"
            ></div>
          </div>
        </Row>
      </div>
    </div>
  );
};
export default Albums;
