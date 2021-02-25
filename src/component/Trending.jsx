import React, { Component } from "react";
import { Col, Row, Card } from "react-bootstrap";

import TrendingNav from "./TrendingNav";
import ArtistAlbum from "./ArtistAlbum";
import Styles from "./style.module.css";
import { connect } from "react-redux";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch, props) => ({});

class Trending extends Component {
  state = {
    albums: [],
    albums2: [],
    albums3: [],
    ukArtist: [
      "adele",
      "ed sheeran",
      "dua lipa",
      "elton john",
      "jessie j",
      "zayn malik",
    ],
    usaArtists: [
      "ariana grande",
      "dua lipa",
      "bruno mars",
      "drake",
      "jay z",
      "nicki minaj",
    ],
    popArtist: [
      "madonna",
      "beyonce",
      "justin bieber",
      "drake",
      "lady gaga",
      "katy perry",
    ],
  };

  fetchAll = () => {
    const song1 = [];
    const song2 = [];
    const song3 = [];
    const fetch1 = [];
    const fetch2 = [];
    const fetch3 = [];

    this.state.usaArtists.forEach((artist) => {
      fetch1.push(
        fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${artist}`, {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "a38b207ac3msh1ad9621daeb255ap171938jsnd40f00760e58",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
          },
        })
          .then((response) => response.json())
          .then((data) => song1.push(data.data[3]))
          .catch((err) => {
            console.error(err);
          })
      );
    });
    this.state.ukArtist.forEach((artist) => {
      fetch2.push(
        fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${artist}`, {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "a38b207ac3msh1ad9621daeb255ap171938jsnd40f00760e58",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
          },
        })
          .then((response) => response.json())
          .then((data) => song2.push(data.data[3]))
          .catch((err) => {
            console.error(err);
          })
      );
    });
    this.state.popArtist.forEach((artist) => {
      fetch3.push(
        fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${artist}`, {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "a38b207ac3msh1ad9621daeb255ap171938jsnd40f00760e58",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            song3.push(data.data[3]);

            console.log(this.state.albums3, "album 3");
          })
          .catch((err) => {
            console.error(err);
          })
      );
    });
    Promise.all([...fetch1, ...fetch2, ...fetch3]).then(() => {
      this.setState({ albums: song1, albums2: song2, albums3: song3 });
    });
  };
  componentDidMount = async () => {
    this.fetchAll();
  };

  render() {
    console.log(this.props.song1, "props   is here");
    return (
      <Col xs={12} sm={12} md={12} lg={12} className={`${Styles.home}`}>
        <TrendingNav />

        <ArtistAlbum artists={this.state.albums} title="UK Artists" />
        <ArtistAlbum artists={this.state.albums2} title="USA Artists" />
        <ArtistAlbum artists={this.state.albums3} title="POP Artists" />
      </Col>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Trending);
