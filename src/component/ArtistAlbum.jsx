import React, { useEffect, useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import Style from "./style.module.css";
export default function ArtistAlbum(props) {
  const [artist, setArtist] = useState(props.artists);
  useEffect(() => {}, [props.artists]);
  console.log("uigikhlhijhkhlkn");
  return (
    <div>
      <h3>{props.title}</h3>
      <Row className="row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-6 ">
        {console.log(
          "hellooo",
          props.artists.map((x) => <> {console.log("why", x.album)}</>)
        )}
        {/* {artist &&
          artist.map((art, key) => (
            <></>
            // <>
            //   {console.log(artist, "ka arrdh console log ktu")}
            //   <Col key={key} className=" d-flex justify-content-center">
            //     <Card style={{ width: "11rem" }} className={Style.cards}>
            //       <Card.Img
            //         //   onClick={() =>
            //         //     props.history.push("/album/" + artist.album.id)
            //         //   }
            //         variant="top"
            //         src={artist.album.cover_big}
            //       />
            //       <Card.Body>
            //         <Card.Text>{artist.album.title}</Card.Text>
            //         <span
            //         // onClick={() =>
            //         //   props.history.push("/artist/" + artist.artist.id)
            //         // }
            //         >
            //           {artist.artist.name}
            //         </span>
            //       </Card.Body>
            //     </Card>
            //   </Col>
            //   ;
            // </>
          ))} */}
      </Row>
    </div>
  );
}
