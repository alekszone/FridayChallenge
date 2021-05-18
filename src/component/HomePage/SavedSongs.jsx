import React, { Component } from "react";
import Styles from "../style.module.css";
import { Row, Col, Card, Button, Modal, Form } from "react-bootstrap";
import { connect } from "react-redux";
const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch, props) => ({
  singelSong: (playSong) =>
    dispatch({
      type: "playSong",
      payload: playSong,
    }),
  createPlaylist: (listName) => {
    dispatch({
      type: "createPlaylist",
      payload: listName,
    });
  },
  addSongs: (playListName, song) => {
    dispatch({
      type: "addSongToPlatList",
      payload: {
        name: playListName,
        songs: song,
      },
    });
  },
});

class SavedSongs extends Component {
  state = {
    show: false,
    playListName: "",
    songList: [],
  };

  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });
  convertTime = (time) => {
    return (time - (time %= 60)) / 60 + (9 < time ? ":" : ":0") + time;
  };

  newPlayList = (e) => {
    const title = e;
    if (title.length > 0) this.setState({ playListName: title });
  };

  addPlayList = () => {
    if (this.state.playListName.length > 0)
      this.props.createPlaylist(this.state.playListName);
    else alert("Cannnot add a empty name");
  };

  render() {
    console.log(this.props.likedSong, "fjejrgkekjrgkjhekjr");

    console.log(this.props.playlist, "fjejrgkekjrgkjhekjr");

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

                <Button variant="primary" onClick={this.handleShow}>
                  Create Playlist
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col className="mt-5">
            {" "}
            <div className={`${Styles.list}`}>
              {this.props.playlist && this.props.playlist.length > 0 ? (
                this.props.playlist.map((list) => {
                  return (
                    <>
                      <Button
                        className="ml-2"
                        style={{
                          backgroundColor: "transparent",
                          color: "wheat",
                        }}
                        // onClick={this.displaySongs(list.songs)}
                      >
                        {list.name}
                      </Button>
                    </>
                  );
                })
              ) : (
                <h5>No Playlist Created</h5>
              )}
            </div>
            {this.state.songList &&
              this.state.songList.map((song) => {
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
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <div>
              <h5>New PlayList</h5>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="PlayList Name"
                    onChange={(e) => this.newPlayList(e.currentTarget.value)}
                  />
                </Form.Group>
              </Form>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                this.handleClose();
                this.addPlayList();
              }}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SavedSongs);
