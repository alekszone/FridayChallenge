import React, { Component } from "react";
import { Col } from "react-bootstrap";
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
    currentSongTime: 0,
    duration: 0,
    volumState: 1,
    playButton: false,
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
    if (this.props.allSongs.data !== 0) {
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
        console.log(selectPreviuSong, "ca ka mrena");
      } else {
        this.props.singelSong(this.props.allSongs.data[0]);
      }
      console.log(findSong, "ca ka find");
      console.log(this.props.allSongs.data[0], "ca ka id");
    }
  };
  playNext = () => {};

  render() {
    console.log(
      this.props.allSongs && this.props.allSongs.data,
      "ca vlere ka allSongs"
    );
    return (
      <div className="navbar fixed-bottom navbar-expand-sm w-100 d-flex justify-content-center ">
        <div className="row row-cols-1 row-cols-md-1 row-cols-lg-3 w-100 py-1">
          <Col></Col>
          <Col className=" d-flex flex-column justify-content-center align-items-center">
            <div className="d-flex  justify-content-center align-items-center mb-1">
              <a className="mr-4">
                <i className="fa fa-random"></i>
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
              <a className="mr-4">
                <i className="fa fa-fast-forward"></i>
              </a>
              <a className="mr-1">
                <i className="fa fa-repeat"></i>
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
                // aria-valuemin="0"
                // aria-valuemax="100"
              />

              <small className="ml-2" style={{ color: "white" }}>
                {this.time(this.state.duration)}
              </small>
            </div>
            <audio
              onTimeUpdate={(e) =>
                this.setState({ currentSongTime: e.target.currentTime })
              }
              onCanPlay={(e) => this.setState({ duration: e.target.duration })}
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
