import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import Styles from "../style.module.css";
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

      {fetchSearch &&
        fetchSearch.map((song) => {
          return (
            <>
              <p>{song.title}</p>
            </>
          );
        })}
    </div>
  );
}

export default withRouter(SearchSong);
