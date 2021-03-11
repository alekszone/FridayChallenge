import React, { Component } from "react";
import { Col, Row, Card, Button } from "react-bootstrap";
import Styles from "../style.module.css";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import SingelSong from "./SingelSong";

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch, props) => ({
  allSong: (allsongs) =>
    dispatch({
      type: "allSongs",
      payload: allsongs,
    }),
});
class Songs extends Component {
  state = {
    songs: {},
    artist: {},
  };
  allFetches = async () => {
    const artist = this.props.match.params.name;
    console.log(artist, "ca ka artist");
    const response = await fetch(
      `https://deezerdevs-deezer.p.rapidapi.com/album/${artist}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "a38b207ac3msh1ad9621daeb255ap171938jsnd40f00760e58",
          "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        },
      }
    );
    const data = await response.json();
    this.setState({
      songs: data,
      artist: data.artist,
    });
    this.props.allSong(data.tracks);
  };
  componentDidMount = async () => {
    this.allFetches();
    const artist = this.props.match.params.name;
    console.log(artist, "ca ka artist");
  };
  // componentDidUpdate(prevState) {
  //   // Typical usage (don't forget to compare props):
  //   if (this.state.songs !== prevState.songs) {
  //     this.allFetches();
  //   }
  // }
  render() {
    {
      console.log(this.state.songs && this.state.songs, "ca ka songs");
      console.log(this.state.artist && this.state.artist.name);
    }
    return (
      <Col xs={12} sm={12} md={12} lg={12} className={`${Styles.home}`}>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6}>
            <Col lg={2} md={3} sm={6} xs={6} className="mb-2 mt-5 ml-5">
              <Card style={{ width: "11rem" }} className={Styles.cards}>
                <Card.Img
                  //   onClick={() => {
                  //     this.props.history.push("/songs/" + album.artist.name);
                  //     this.props.allSong(this.state.albums);
                  //   }}
                  variant="top"
                  src={this.state.songs && this.state.songs.cover_big}
                />
                <Card.Body>
                  <Card.Text
                    className={`${Styles.text}`}
                    // onClick={() => {
                    //   this.props.history.push("/songs/" + album.artist.name);
                    //   this.props.allSong(this.state.albums);
                    // }}
                  >
                    {this.state.songs && this.state.songs.title}
                  </Card.Text>
                  {/* <span
                    onClick={() =>
                      props.history.push("/albums/" + artist.artist.name)
                    }
                  >
                    {artist.artist.name}
                  </span> */}
                  <Card.Text>
                    <p style={{ color: "white" }}>
                      {" "}
                      {this.state.artist && this.state.artist.name}
                    </p>
                  </Card.Text>
                </Card.Body>{" "}
              </Card>
              <Button
                className="mt-5 ml-5"
                variant="success"
                style={{ color: "white" }}
              >
                PLAY
              </Button>
            </Col>{" "}
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <SingelSong songs={this.state.songs.tracks} />
          </Col>
        </Row>
      </Col>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Songs));
