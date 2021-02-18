import { findByLabelText } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import Style from "./style.module.css";
function ArtistAlbum(props) {
  useEffect(() => {}, [props.artists]);

  return (
    <>
      <h3 style={{ color: "white" }}>{props.title}</h3>
      <Row className=" d-flex justify-content-space-around mr-2">
        {props.artists &&
          props.artists.length > 0 &&
          props.artists.map((artist, key) => (
            <>
              <Col lg={2} md={3} sm={6} xs={6}>
                <Card style={{ width: "11rem" }} className={Style.cards}>
                  <Card.Img
                    onClick={() =>
                      props.history.push("/albums/" + artist.artist.name)
                    }
                    variant="top"
                    src={artist.album.cover_big}
                  />
                  <Card.Body>
                    <Card.Text className={`${Style.text}`}>
                      {artist.album.title}
                    </Card.Text>
                    <span
                      onClick={() =>
                        props.history.push("/albums/" + artist.artist.name)
                      }
                    >
                      {artist.artist.name}
                    </span>
                  </Card.Body>
                </Card>
                ;
              </Col>
            </>
          ))}
      </Row>
    </>
  );
}

export default withRouter(ArtistAlbum);
