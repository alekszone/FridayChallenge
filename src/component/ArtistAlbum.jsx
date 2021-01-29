import React, { useEffect, useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import Style from "./style.module.css";
export default function ArtistAlbum(props) {
  useEffect(() => {}, [props.artists]);
  // console.log("asht ktu", props.artists);
  return (
    <div>
      <h3>{props.title}</h3>
      <Row className="row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-6 ">
        {/* {console.log( */}
        {/* "hellooo",
          props.artists.map((x) => <> {console.log("why", x.album)}</>) */}

        {props.artists &&
          props.artists.length > 0 &&
          props.artists.map((artist, key) => (
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
  );
}
