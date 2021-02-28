import React, { Component } from "react";
import { Col, Row, Card, Button } from "react-bootstrap";
import Styles from "./style.module.css";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state) => state;

class Songs extends Component {
  state = {
    songs: [],
  };
  allFetches = () => {
    if (this.props.allSongs.length > 0) {
      this.setState({ songs: this.props.allSongs });
    } else {
      const artist = this.props.match.params.name;
      console.log(artist, "ca ka artist");
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
          this.setState({
            songs: data.data,
          });

          console.log(data.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };
  componentDidMount = () => {
    this.allFetches();
    const artist = this.props.match.params.name;
    console.log(artist, "ca ka artist");
  };

  render() {
    {
      console.log(this.state.songs);
    }
    return (
      <Col xs={12} sm={12} md={12} lg={12} className={`${Styles.home}`}>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6}>
            <Col lg={2} md={3} sm={6} xs={6} className="mb-2">
              <Card style={{ width: "11rem" }} className={Styles.cards}>
                <Card.Img
                  //   onClick={() => {
                  //     this.props.history.push("/songs/" + album.artist.name);
                  //     this.props.allSong(this.state.albums);
                  //   }}
                  variant="top"
                  src={
                    this.state.songs.length > 0 &&
                    this.state.songs[0] &&
                    this.state.songs[0].artist.picture
                  }
                />
                <Card.Body>
                  <Card.Text
                    className={`${Styles.text}`}
                    // onClick={() => {
                    //   this.props.history.push("/songs/" + album.artist.name);
                    //   this.props.allSong(this.state.albums);
                    // }}
                  >
                    {this.state.songs.length > 0 &&
                      this.state.songs[0] &&
                      this.state.songs[0].artist.name}
                  </Card.Text>
                  {/* <span
                      onClick={() =>
                        props.history.push("/albums/" + artist.artist.name)
                      }
                    >
                      {artist.artist.name}
                    </span> */}
                </Card.Body>
              </Card>
              ;
            </Col>
            <Button variant="success" style={{ color: "white" }}>
              PLAY
            </Button>

            <h1 style={{ color: "white" }}>
              {this.state.songs.length > 0 &&
                this.state.songs[0] &&
                this.state.songs[0].artist.name}
            </h1>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <h1 style={{ color: "white" }}>Hello</h1>
          </Col>
        </Row>
      </Col>
    );
  }
}
export default connect(mapStateToProps)(withRouter(Songs));
