import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import Styles from "./style.module.css";
import { withRouter } from "react-router-dom";
class AlbumSongs extends React.Component {
  state = {
    albums: [],
    artist: {},
  };
  componentDidMount = async () => {
    const artist = this.props.match.params.name;

    await fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${artist}`, {
      method: "GET",
      headers: {
        "x-rapidapi-key": "a38b207ac3msh1ad9621daeb255ap171938jsnd40f00760e58",
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          albums: data.data,
          artist: data.data[0].artist,
        });

        console.log(data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  render() {
    console.log(this.state.albums, this.state.artist, "datta");
    return (
      <>
        <Col xs={12} sm={12} md={12} lg={12} className={`${Styles.home}`}>
          <Row className="d-flex justify-content-center mt-2">
            <Card style={{ width: "11rem" }} className={Styles.cards}>
              <Card.Img
                // onClick={() =>
                //  this.props.history.push("/albums/" + artist.artist.name)
                // }
                variant="top"
                src={this.state.artist.picture}
              />
              <Card.Body>
                <Card.Text className={`${Styles.text}`}>
                  {this.state.artist.name}
                </Card.Text>
                {/* <span */}
                {/* //   onClick={() => */}
                {/* //     this.props.history.push("/albums/" + artist.artist.name)
                //   }
                // >
                //   {this.state.artist}
                // </span> */}
              </Card.Body>
            </Card>
            ;
          </Row>
          <Row className="d-flex justify-content-center mt-2">
            <Col
              lg={12}
              md={12}
              sm={12}
              xs={12}
              className="d-flex justify-content-center mt-2"
            >
              <div>
                <p style={{ color: "red", fontSize: "20px" }}>
                  Albums of {this.state.artist.name}
                </p>
              </div>
            </Col>
            {this.state.albums.map((album) => {
              return (
                <>
                  <Col lg={2} md={3} sm={6} xs={6} className="mb-2">
                    <Card style={{ width: "11rem" }} className={Styles.cards}>
                      <Card.Img
                        onClick={() =>
                          this.props.history.push("/songs/" + album.artist.name)
                        }
                        variant="top"
                        src={album.album.cover_big}
                      />
                      <Card.Body>
                        <Card.Text
                          className={`${Styles.text}`}
                          onClick={() =>
                            this.props.history.push(
                              "/songs/" + album.artist.name
                            )
                          }
                        >
                          {album.album.title}
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
                  ;
                </>
              );
            })}
          </Row>
        </Col>
      </>
    );
  }
}

export default withRouter(AlbumSongs);
