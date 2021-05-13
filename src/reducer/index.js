export default function (state = {}, action) {
  switch (action.type) {
    case "allSongs":
      return {
        ...state,
        allSongs: action.payload,
      };

    case "playSong":
      return {
        ...state,
        playSong: action.payload,
      };
    case "image":
      return {
        ...state,
        image: action.payload,
      };
    case "likeSong":
      return {
        ...state,
        likedSong: state.likedSong.concat([action.payload]),
      };
    case "dislikeSong":
      return {
        ...state,
        likedSong: state.likedSong.filter(
          (item, index) => index !== action.payload
        ),
      };

    default:
      return state;
  }
}
