import React, { Component } from "react";
import { Row, Col, Card } from "react-bootstrap";
import Style from "./style.module.css";
export default class ArtistAlbum extends Component {
  componentDidMount() {
    this.props.artists.map((artist) => {
      console.log(artist.album.cover_big + "DFGDFHDTHDFGDFGHDFGH");
    });
  }
  render() {
    return (
      <>
        <div>
          <h3>{this.props.title}</h3>
          <Row className="row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-6 ">
            {this.props.artists &&
              this.props.artists.map((artist, key) => (
                <>
                  <Col key={key} className=" d-flex justify-content-center">
                    <Card style={{ width: "11rem" }} className={Style.cards}>
                      <Card.Img
                        //   onClick={() =>
                        //     props.history.push("/album/" + artist.album.id)
                        //   }
                        variant="top"
                        src={artist.album.cover_big}
                      />
                      <Card.Body>
                        <Card.Text>{artist.album.title}</Card.Text>
                        <span
                        // onClick={() =>
                        //   props.history.push("/artist/" + artist.artist.id)
                        // }
                        >
                          {artist.artist.name}
                        </span>
                      </Card.Body>
                    </Card>
                  </Col>
                  ;
                </>
              ))}
          </Row>
        </div>
      </>
    );
  }
}
