import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import Styles from "../style.module.css";
import { Card, Col, Row } from "react-bootstrap";
function SearchSong() {
  const [fetchSearch, setFetchSearch] = useState([]);
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
  console.log(fetchSearch, "ca ka mrena");
  return (
    <div className={`${Styles.home}`}>
      <input
        type="text"
        onChange={(e) => fetchsongs(e.currentTarget.value)}
      ></input>
      <Row>
        {fetchSearch &&
          fetchSearch.map((song) => {
            return (
              <>
                <Col lg={2} md={3} sm={6} xs={6}>
                  <Card
                    style={{ width: "11rem" }}
                    className={`${Styles.cards} mr-2 ml-2`}
                  >
                    <Card.Img
                      // onClick={() =>
                      //   props.history.push("/albums/" + artist.artist.name)
                      // }
                      variant="top"
                      src={song.album.cover_big}
                    />
                    <Card.Body>
                      <Card.Text className={`${Styles.text}`}>
                        {song.title}
                      </Card.Text>
                      <span
                      // onClick={() =>
                      //   props.history.push("/albums/" + artist.artist.name)
                      // }
                      >
                        {song.artist.name}
                      </span>
                    </Card.Body>
                  </Card>
                  ;
                </Col>
              </>
            );
          })}
      </Row>
    </div>
  );
}

export default withRouter(SearchSong);
