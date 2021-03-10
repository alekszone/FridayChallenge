import React, { Component } from "react";
import { Col } from "react-bootstrap";
import { connect } from "react-redux";

const mapStateToProps = (state) => state;
class Footer extends Component {
  state = {
    mute: false,
    currentSongTime: 0,
    duration: 0,
    volumState: 1,
  };
  volume = React.createRef("audio_tag");

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
    } else {
      this.volume.current.pause();
    }
  };

  render() {
    console.log(this.volume, "ca vlere merr volum");
    return (
      <div className="navbar fixed-bottom navbar-expand-sm w-100 d-flex justify-content-center ">
        <div className="row row-cols-1 row-cols-md-1 row-cols-lg-3 w-100 py-1">
          <Col></Col>
          <Col className=" d-flex flex-column justify-content-center align-items-center">
            <div className="d-flex  justify-content-center align-items-center mb-1">
              <a href="#" className="mr-4">
                <i className="fa fa-random"></i>
              </a>
              <a href="#" className="mr-4">
                <i className="fa fa-fast-backward"></i>
              </a>
              <a className="mr-4" onClick={() => this.toggleMusic()}>
                <i
                  style={{ fontSize: "2rem" }}
                  className="fa fa-play-circle"
                ></i>
              </a>
              <a href="#" className="mr-4">
                <i className="fa fa-fast-forward"></i>
              </a>
              <a href="#" className="mr-4">
                <i className="fa fa-repeat"></i>
              </a>
            </div>
            <div className="w-100 d-flex align-items-baseline">
              <small className="mr-2">0.00</small>
              <div className="progress w-100 mb-2" style={{ height: "0.3rem" }}>
                <div
                  className="progress-bar w-75"
                  style={{ backgroundColor: "#93A0B0" }}
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <small className="ml-2">45.00</small>
            </div>
            <audio
              ref={this.volume}
              type="audio/mpeg"
              preload="true"
              autoPlay={true}
              src={this.props.playSong && this.props.playSong.preview}
            />
            {/* <div className="nav-bottom d-flex justify-content-between w-100 d-lg-none d-md-none border-top border-dark pt-2 mt-2">
                 <a href="albums.html" className="d-flex flex-column text-center"><i className="fa  fa-home " style={{fontSize : "1.5rem"}}></i>Home</a>
                 <a href="#"className="d-flex flex-column text-center"><i className="fa  fa-search " style={{fontSize : "1.5rem"}}></i>Search</a>
                 <a href="#" className="d-flex flex-column text-center"><i className="fa   fa-book  " style={{fontSize : "1.5rem"}}></i>Library</a>
                 <a href="#" className="d-flex flex-column text-center"><i className="fab   fa-spotify" style={{fontSize : "1.5rem"}}></i>Premium</a>
              </div> */}
          </Col>

          <Col className="d-flex justify-content-end align-items-center mt-2 ">
            {!this.state.mute ? (
              <a className="pr-3" onClick={() => this.muteVolume()}>
                {" "}
                <i
                  style={{ color: "white" }}
                  className=" fa fa-volume-mute"
                ></i>
              </a>
            ) : (
              <a className="pr-3" onClick={() => this.muteVolume()}>
                <i className=" fa fa-volume-up"></i>
              </a>
            )}

            {/* <div style={{ height: "0.3rem" }}> */}
            <input
              // className="progress-bar w-100"
              style={{ backgroundColor: "#93A0B0;" }}
              type="range"
              name="volBar"
              aria-valuenow={Math.round(this.state.volumState * 100)}
              aria-valuemin="0"
              aria-valuemax="100"
              onChange={(e) => this.changeVolume(e.currentTarget.value / 100)}
              // value={Math.round(this.state.volumState * 100)}
              // type="range"
              // name="volBar"
              id="volBar"
            />
            {/* </div> */}
            {/* <input
              value={Math.round(this.state.volumState * 100)}
              type="range"
              name="volBar"
              id="volBar"
              // onChange={(e) => this.handleVolume(e.target.value / 100)}
            /> */}
          </Col>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Footer);
