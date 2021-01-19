import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import TrendingNav from "./TrendingNav";
import ArtistAlbum from "./ArtistAlbum";
import Styles from "./style.module.css";

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
    this.state.usaArtists.forEach((artist) => {
      fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${artist}`, {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "a38b207ac3msh1ad9621daeb255ap171938jsnd40f00760e58",
          "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        },
      })
        .then((response) => response.json())
        .then(
          (data) => this.state.albums.push(data.data[3]),

          console.log(
            this.state.albums &&
              this.state.albums.album &&
              this.state.albums.album.cover_big,
            "ca ka mrena"
          )
        )
        .catch((err) => {
          console.error(err);
        });
    });
    this.state.ukArtist.forEach((artist) => {
      fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${artist}`, {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "a38b207ac3msh1ad9621daeb255ap171938jsnd40f00760e58",
          "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        },
      })
        .then((response) => response.json())
        .then((data) => this.state.albums2.push(data.data[3]))
        .catch((err) => {
          console.error(err);
        });
    });
    this.state.popArtist.forEach((artist) => {
      fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${artist}`, {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "a38b207ac3msh1ad9621daeb255ap171938jsnd40f00760e58",
          "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        },
      })
        .then((response) => response.json())
        .then((data) => this.state.albums3.push(data.data[3]))
        .catch((err) => {
          console.error(err);
        });
    });
  };
  componentDidMount() {
    this.fetchAll();
  }

  render() {
    return (
      <Col xs={12} sm={12} md={12} lg={12} className={`${Styles.home}`}>
        <TrendingNav />
        <ArtistAlbum artists={this.state.albums} title="UK Artist" />
        <ArtistAlbum artists={this.state.albums2} title="USA Artists" />
        <ArtistAlbum artists={this.state.albums3} title="POP Artists" />
      </Col>
    );
  }
}

export default Trending;
