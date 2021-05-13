import React, { Component } from "react";
import Styles from "../style.module.css";
import { connect } from "react-redux";
import { AiOutlineLike, AiTwotoneLike } from "react-icons/ai";
const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch, props) => ({
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
});

class SingelSong extends Component {
  state = {
    likedSong: false,
  };
  convertTime = (time) => {
    return (time - (time %= 60)) / 60 + (9 < time ? ":" : ":0") + time;
  };

  playSong = (e) => {
    const playSong = e;
    this.props.singelSong(playSong);
    this.props.image(this.props.artist && this.props.artist.picture);
    console.log(e && e, "ca ka songs");
  };

  newSong = (song) => {
    this.props.likeSongs(song);
  };
  render() {
    console.log(
      this.props.likedSong && this.props.likedSong,
      "kjo vjen nga like button"
    );

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
                    {this.props.likedSong &&
                    this.props.likedSong.length > 0 &&
                    this.props.likedSong.find((x) => x.id === song.id) ? (
                      <AiTwotoneLike
                        style={{
                          color: "white",
                          fontSize: "45px",
                          marginRight: "30px",
                        }}
                      />
                    ) : (
                      <AiOutlineLike
                        style={{
                          color: "white",
                          fontSize: "45px",
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
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingelSong);
