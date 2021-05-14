import React, { Component } from "react";
import Styles from "../style.module.css";
import { Row, Col, Card, Button } from "react-bootstrap";
import { connect } from "react-redux";
const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch, props) => ({
  singelSong: (playSong) =>
    dispatch({
      type: "playSong",
      payload: playSong,
    }),
});

class SavedSongs extends Component {
  convertTime = (time) => {
    return (time - (time %= 60)) / 60 + (9 < time ? ":" : ":0") + time;
  };
  render() {
    console.log(this.props.likedSong, "fjejrgkekjrgkjhekjr");
    return (
      <div className={`${Styles.home}`}>
        <Row>
          <Col className="d-flex justify-content-center mt-5">
            <Card
              style={{
                width: "18rem",
                backgroundColor: "transparent",
                height: "auto",
              }}
            >
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
            {this.props.likedSong &&
              this.props.likedSong.map((song) => {
                return (
                  <>
                    <div
                      className="d-flex justify-content-around"
                      style={{ color: "white" }}
                    >
                      <div className="d-flex flex-column">
                        <h6>{song.artist.name}</h6>
                        <h6>{song.title}</h6>
                      </div>
                      <div>
                        <h6>{this.convertTime(song.duration)}</h6>
                      </div>
                    </div>
                  </>
                );
              })}
            <h2 style={{ color: "white " }}></h2>
          </Col>
        </Row>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SavedSongs);
