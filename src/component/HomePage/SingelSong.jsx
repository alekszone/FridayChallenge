import React, { Component } from "react";
import Styles from "../style.module.css";
import { connect } from "react-redux";
import { Form, Modal, Button } from "react-bootstrap";
import { AiOutlineLike, AiTwotoneLike } from "react-icons/ai";
import { RiPlayList2Fill } from "react-icons/ri";
const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  singelSong: (playSong) =>
    dispatch({
      type: "playSong",
      payload: playSong,
    }),
  image: (image) =>
    dispatch({
      type: "image",
      payload: image,
    }),
  likeSongs: (likeSong) =>
    dispatch({
      type: "likeSong",
      payload: likeSong,
    }),
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

class SingelSong extends Component {
  state = {
    likedSong: false,
    show: false,
    playListName: "",
    playlistSong: [],
  };
  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });
  convertTime = (time) => {
    return (time - (time %= 60)) / 60 + (9 < time ? ":" : ":0") + time;
  };
  addToState = (song) => {
    this.setState({ playlistSong: song });
  };

  playSong = (e) => {
    const playSong = e;
    this.props.singelSong(playSong);
    this.props.image(this.props.artist && this.props.artist.picture);
    console.log(e && e, "ca ka songs");
  };
  addToProps = () => {
    if (this.state.playListName > 0 && this.state.playlistSong > 0)
      this.props.addSongs(this.state.playListName, this.state.playlistSong);
    else alert("Please create a playlist ");
  };
  addName = (name) => {
    if (name.length > 0) this.setState({ playListName: name });
  };

  newSong = (song) => {
    this.props.likeSongs(song);
  };
  render() {
    console.log(
      this.props.playlist && this.props.playlist,
      "a i merr propsi kto"
    );
    console.log(this.state.playlistSong, "fjejrgkekjrgkjhekjr");

    return (
      <div className={`${Styles.songs} mt-5`}>
        {this.props.songs &&
          this.props.songs.data.map((song) => {
            return (
              <div
                tabindex="1"
                className={
                  this.props.playSong && this.props.playSong.id === song.id
                    ? `${Styles.playing} ${Styles.play1}`
                    : `${Styles.play1}`
                }
              >
                <div
                  className="d-flex justify-content-between"
                  style={{ width: "95%" }}
                >
                  <h5
                    className="ml-2"
                    style={{ color: "white" }}
                    onClick={() => this.playSong(song)}
                  >
                    {song.title.charAt(0).toUpperCase() + song.title.slice(1)}
                  </h5>
                  <div
                    // style={{ outline: "2px red solid" }}
                    className="d-flex justify-content-between"
                  >
                    <RiPlayList2Fill
                      style={{
                        color: "white",
                        fontSize: "30px",
                        marginRight: "30px",
                      }}
                      onClick={() => {
                        this.handleShow();
                        this.addToState(song);
                      }}
                    />
                    {this.props.likedSong &&
                    this.props.likedSong.length > 0 &&
                    this.props.likedSong.find((x) => x.id === song.id) ? (
                      <AiTwotoneLike
                        style={{
                          color: "white",
                          fontSize: "30px",
                          marginRight: "30px",
                        }}
                      />
                    ) : (
                      <AiOutlineLike
                        style={{
                          color: "white",
                          fontSize: "30px",
                          marginRight: "30px",
                        }}
                        onClick={() => this.newSong(song)}
                      />
                    )}

                    <h5 style={{ color: "white", height: "15px" }}>
                      {this.convertTime(song.duration)}
                    </h5>
                  </div>
                </div>
                <p
                  className="ml-2"
                  style={{ color: "rgb(214, 212, 209)" }}
                  onClick={() => this.playSong(song)}
                >
                  {song.artist.name.charAt(0).toUpperCase() +
                    song.artist.name.slice(1)}
                </p>
              </div>
            );
          })}
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>Add To PlayList</Modal.Header>
          <Modal.Body>
            {this.props.playlist && this.props.playlist.length > 0 ? (
              this.props.playlist.map((playlist) => {
                return (
                  <>
                    <Button
                      onClick={(e) => this.addName(e.currentTarget.value)}
                    >
                      {playlist.name}
                    </Button>
                  </>
                );
              })
            ) : (
              <h5>You Dont Have Playlist Created </h5>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                this.handleClose();
                this.addToProps();
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

export default connect(mapStateToProps, mapDispatchToProps)(SingelSong);
