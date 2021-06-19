import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import Styles from "../style.module.css";
import { Card, Col, Row } from "react-bootstrap";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";

import { connect } from "react-redux";
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
});
function SearchSong(props) {
  const [fetchSearch, setFetchSearch] = useState([]);
  const [data, setData] = useState({});
  const fetchsongs = async (artist) => {
    const data = await fetch(
      `https://deezerdevs-deezer.p.rapidapi.com/search?q=${artist}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "a38b207ac3msh1ad9621daeb255ap171938jsnd40f00760e58",
          "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        },
      }
    );
    const response = await data.json();
    if (response) {
      setFetchSearch(response.data);
    } else {
      console.log("nothwefjiioe");
    }
  };

  const playSong = (e) => {
    const playSong = e;
    props.singelSong(playSong);
    props.image(e.artist && e.artist.picture);
    console.log(e && e, "ca ka songs");
  };
  console.log(props.playSong.id, "ca ka mrena");
  console.log(fetchSearch, "ca ka mrena222222");
  return (
    <div className={`${Styles.home}`}>
      <div className="d-flex justify-content-center mt-5 mb-5">
        <input
          type="text"
          style={{ maxWidth: "250px" }}
          placeholder="Search artist, song ?"
          onChange={(e) => fetchsongs(e.currentTarget.value)}
        ></input>
      </div>
      <Row className="m-0 p-0 d-flex justify-content-space-around">
        {fetchSearch &&
          fetchSearch.map((song) => {
            return (
              <>
                <Col lg={2} md={3} sm={6} xs={6}>
                  <Card
                    style={{ width: "11rem", height: "20rem" }}
                    className={`${Styles.cards} mb-4 `}
                  >
                    <Card.Img
                      onClick={() =>
                        props.history.push("/albums/" + song.artist.name)
                      }
                      variant="top"
                      src={song.album.cover_big}
                    />
                    <Card.Body>
                      <Card.Text className={`${Styles.text}`}>
                        {song.title}
                      </Card.Text>
                      <span
                        className={`${Styles.textTitle}`}
                        onClick={() =>
                          props.history.push("/albums/" + song.artist.name)
                        }
                      >
                        {song.artist.name}
                      </span>
                    </Card.Body>
                    {props.playSong && props.playSong.id == song.id ? (
                      <AiFillPauseCircle
                        className="mb-2 mr-1"
                        style={{
                          backgroundColor: "transparent",
                          height: "30px",
                          marginLeft: "auto",
                          width: "30px",
                          color: "green",
                        }}
                      />
                    ) : (
                      <AiFillPlayCircle
                        className="mb-2 mr-1"
                        style={{
                          backgroundColor: "transparent",
                          height: "30px",
                          width: "30px",
                          marginLeft: "auto",

                          color: "green",
                        }}
                        onClick={() => playSong(song)}
                      />
                    )}
                  </Card>
                </Col>
              </>
            );
          })}
      </Row>
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SearchSong));
