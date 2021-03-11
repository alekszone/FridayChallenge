import React, { Component } from "react";
import Styles from "../style.module.css";
import { connect } from "react-redux";
const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch, props) => ({
  singelSong: (playSong) =>
    dispatch({
      type: "playSong",
      payload: playSong,
    }),
});

class SingelSong extends Component {
  convertTime = (time) => {
    return (time - (time %= 60)) / 60 + (9 < time ? ":" : ":0") + time;
  };

  playSong = (e) => {
    const playSong = e;
    this.props.singelSong(playSong);
    console.log(e && e, "ca ka songs");
  };

  render() {
    console.log(this.props.playSong && this.props.playSong, "ca ka songs");
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
                onClick={() => this.playSong(song)}
              >
                <div
                  className="d-flex justify-content-between"
                  style={{ width: "95%" }}
                >
                  <h5 className="ml-2" style={{ color: "white" }}>
                    {song.title.charAt(0).toUpperCase() + song.title.slice(1)}
                  </h5>
                  <h5 style={{ color: "white" }}>
                    {this.convertTime(song.duration)}
                  </h5>
                </div>
                <p className="ml-2" style={{ color: "rgb(214, 212, 209)" }}>
                  {song.artist.name.charAt(0).toUpperCase() +
                    song.artist.name.slice(1)}
                </p>
              </div>
            );
          })}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingelSong);
