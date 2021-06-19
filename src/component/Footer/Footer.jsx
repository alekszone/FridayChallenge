import React, { Component } from "react";
import { Col, Card, Row } from "react-bootstrap";

import { connect } from "react-redux";

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch, props) => ({
  singelSong: (playSong) =>
    dispatch({
      type: "playSong",
      payload: playSong,
    }),
});
class Footer extends Component {
  state = {
    mute: false,
    currentSongTime: 0.1,
    duration: 0,
    volumState: 1,
    playButton: false,
    color: "",
    shuffleSong: false,
    randomColor: "",
  };
  volume = React.createRef();

  muteVolume = () => {
    if (!this.state.mute) {
      this.volume.current.muted = true;
      this.setState({ mute: true });
    } else {
      this.volume.current.muted = false;
      this.setState({ mute: false });
    }
  };

  changeVolume = (volum) => {
    console.log(volum, "ca ka volum");
    if (this.state.mute === true) {
      this.volume.current.muted = false;
      this.setState({ mute: false });
    }
    this.setState({ volumState: volum });
    this.volume.current.volume = volum;
  };
  toggleMusic = () => {
    if (this.volume.current.paused) {
      this.volume.current.play();
      this.setState({ playButton: true });
    } else {
      this.volume.current.pause();
      this.setState({ playButton: false });
    }
  };
  time = (time) => {
    return (time - (time %= 60)) / 60 + (9 < time ? ":" : ":0") + ~~time;
  };
  songDuration = (sek) => {
    let count = (sek.target.value * this.state.duration) / 100;
    this.setState({ currentSongTime: count });
    this.volume.current.currentTime = count;
  };
  playPrevious = () => {
    if (
      this.props.allSongs &&
      this.props.allSongs.data &&
      this.props.allSongs.data !== 0
    ) {
      const findSong = this.props.allSongs.data.findIndex(
        (x) => x.id === this.props.playSong.id
      );
      if (findSong && findSong.length !== 0) {
        const selectPreviuSong = this.props.allSongs.data.slice(
          findSong - 1,
          findSong
        );
        if (selectPreviuSong) {
          this.props.singelSong(selectPreviuSong[0]);
        }
      } else {
        this.props.singelSong(this.props.allSongs.data[0]);
      }
    }
  };
  playNext = () => {
    if (
      this.props.allSongs &&
      this.props.allSongs.data &&
      this.props.allSongs.data.length > 0
    ) {
      const findSong =
        this.props.allSongs &&
        this.props.allSongs.data.findIndex(
          (x) => x.id === this.props.playSong.id
        );

      if (findSong !== null || findSong !== undefined) {
        const selectPreviuSong = this.props.allSongs.data.slice(
          findSong + 1,
          findSong + 2
        );
        if (selectPreviuSong.length > 0) {
          this.props.singelSong(selectPreviuSong[0]);
        } else {
          this.props.singelSong(
            this.props.allSongs &&
              this.props.allSongs.data &&
              this.props.allSongs.data[0]
          );
        }
      } else {
        this.props.singelSong(
          this.props.allSongs &&
            this.props.allSongs.data &&
            this.props.allSongs.data[0]
        );
      }
    }
  };
  loopSong = () => {
    if (this.volume.current.loop === false) {
      this.volume.current.loop = true;
      this.setState({ color: "blue" });
      this.setState({ shuffleSong: false });
      this.setState({ randomColor: "" });
    } else {
      this.volume.current.loop = false;
      this.setState({ color: "" });
    }
  };
  shuffleSongs = () => {
    if (this.state.currentSongTime === this.state.duration) {
      const randomSong = Math.floor(
        Math.random() * this.props.allSongs.data.length
      );
      this.props.singelSong(this.props.allSongs.data[randomSong]);
    }
  };
  componentDidUpdate(prevState) {
    // Typical usage (don't forget to compare props):
    if (this.state.shuffleSong === true) {
      this.shuffleSongs();
    }
  }

  randomSongs = () => {
    if (this.state.shuffleSong === false) {
      this.setState({ randomColor: "blue" });
      this.setState({ shuffleSong: true });
      this.volume.current.loop = false;
      this.setState({ color: "" });
    } else {
      this.setState({ shuffleSong: false });
      this.setState({ randomColor: "" });
    }
  };
  timeUpdate = (e) => {
    this.setState({ currentSongTime: e.target.currentTime });
  };
  canPlay = (e) => {
    this.setState({ duration: e.target.duration });
  };
  render() {
    return (
      <div className="navbar fixed-bottom navbar-expand-sm w-100 d-flex justify-content-center ">
        <div className="row row-cols-1 row-cols-md-1 row-cols-lg-3 w-100 py-1">
          <Col>
            <div className="d-flex justify-content-around">
              {this.props.playSong && this.props.image ? (
                <>
                  <Card
                    style={{
                      width: "60px",
                      height: "20px",
                      backgroundColor: "transparent",
                      border: "none",
                    }}
                  >
                    <Card.Img variant="top" src={this.props.image} />
                  </Card>

                  <div style={{ height: "30px" }}>
                    <p className="mr-2" style={{ color: "white" }}>
                      {this.props.playSong &&
                        this.props.playSong.title &&
                        this.props.playSong.title.charAt(0).toUpperCase() +
                          this.props.playSong.title.slice(1)}
                    </p>
                    <p style={{ color: "grey", fontSize: "12px" }}>
                      {this.props.playSong &&
                        this.props.playSong.artist &&
                        this.props.playSong.artist.name}
                    </p>
                  </div>
                </>
              ) : (
                <h5 style={{ color: "white" }}>Select a song</h5>
              )}
            </div>
          </Col>
          <Col className=" d-flex flex-column justify-content-center align-items-center">
            <div className="d-flex  justify-content-center align-items-center mb-1">
              <a className="mr-4" onClick={() => this.randomSongs()}>
                <i
                  className="fa fa-random"
                  style={{ color: this.state.randomColor }}
                ></i>
              </a>
              <a className="mr-4" onClick={() => this.playPrevious()}>
                <i className="fa fa-fast-backward"></i>
              </a>
              <a className="mr-4" onClick={() => this.toggleMusic()}>
                {this.volume.current && this.volume.current.paused ? (
                  <i
                    style={{ fontSize: "2rem" }}
                    className="fa fa-play-circle"
                  ></i>
                ) : (
                  <i
                    style={{ fontSize: "2rem" }}
                    className="fa fa-pause-circle"
                  ></i>
                )}
              </a>
              <a className="mr-4" onClick={() => this.playNext()}>
                <i className="fa fa-fast-forward"></i>
              </a>
              <a className="mr-1" onClick={(e) => this.loopSong()}>
                <i
                  className="fa fa-repeat"
                  style={{ color: this.state.color }}
                ></i>
              </a>
            </div>
            <div className="w-100 progressB d-flex align-items-baseline">
              <small className="mr-2" style={{ color: "white" }}>
                {this.time(this.state.currentSongTime)}
              </small>
              <input
                // className="progress-bar w-75"
                style={{ backgroundColor: "#93A0B0", width: "100%" }}
                onChange={this.songDuration}
                type="range"
                name="progressBar"
                id="prgbar2"
                value={
                  this.state.duration
                    ? (this.state.currentSongTime * 100) / this.state.duration
                    : 0
                }
              />

              <small className="ml-2" style={{ color: "white" }}>
                {this.time(this.state.duration)}
              </small>
            </div>
            <audio
              onTimeUpdate={(e) => this.timeUpdate(e)}
              onCanPlay={(e) => this.canPlay(e)}
              ref={this.volume}
              type="audio/mpeg"
              preload="true"
              autoPlay={true}
              src={this.props.playSong && this.props.playSong.preview}
            />
          </Col>
          <Col className="d-flex justify-content-end align-items-center mt-2 ">
            {!this.state.mute ? (
              <a className="pr-3" onClick={() => this.muteVolume()}>
                {" "}
                <i className=" fa fa-volume-up"></i>
              </a>
            ) : (
              <a className="pr-3" onClick={() => this.muteVolume()}>
                <i className=" fa fa-volume-off"></i>
              </a>
            )}

            <input
              style={{ backgroundColor: "#93A0B0;" }}
              type="range"
              name="volBar"
              value={Math.round(this.state.volumState * 100)}
              // aria-valuemin="0"
              // aria-valuemax="100"
              onChange={(e) => this.changeVolume(e.currentTarget.value / 100)}
              id="volBar"
            />
          </Col>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
